import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subject, combineLatest } from 'rxjs';
import { takeUntil, map, pluck, switchMap, filter } from 'rxjs/operators';
import * as faker from 'faker';
import { ToastrService } from 'ngx-toastr';

import { DataBaseService } from '../services/data-base.service';
import { GameService } from '../services/game.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
})

export class GameComponent implements OnInit, OnDestroy {

  public message: string = 'Welcome to game';
  public room: TRoom;
  public user: TPlayer;
  public isYouTurn: boolean = false;


  private _destroy$$: Subject<void> = new Subject();
  private readonly _TOTAL_LIMIT_FOR_BOT: number = 15;


  public constructor(
    private _gameService: GameService,
    private _dataBaseService: DataBaseService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _toastr: ToastrService
  ) {}

  public ngOnInit(): void {
    combineLatest(
      this._userService.getUser$(),
      this._route.params.pipe(
        pluck('id'),
        map(Number)
      ),
    )
      .pipe(
        switchMap(([user, id]: [TPlayer, number]) => {
          this.user = user;

          return this._dataBaseService.getRoom$(id);
        }),
        filter((room: TRoom) => {
          if (!room) {
            this._toastr.error('This room is not correct');
            this._router.navigate(['/multiplayer']);

            return false;
          }

          let userInRoom: boolean = false;

          if (room.players) {
            room.players = Object.values(room.players);
            userInRoom = room.players.some((player: TPlayer) => this.user.id === player.id);
          }

          if (!userInRoom && room.players && room.players.length >= room.maxplayers) {
            this._toastr.error('This room is full');
            this._router.navigate(['/multiplayer']);

            return false;
          }

          if (!userInRoom && room.started) {
            this._toastr.error('Sorry, game is started');
            this._router.navigate(['/multiplayer']);

            return false;
          }

          if (!room.players) {
            this.user.playerMaster = true;
            this.user.turn = true;
          }

          if (!userInRoom) {
            this._dataBaseService.addPlayerToRoom(room.id, this.user);

            return false;
          }

          return true;
        }),
        takeUntil(this._destroy$$)
      )
      .subscribe((room: TRoom) => {
        this.room = room;
        this.room.players = Object.values(room.players) || [];

        if (this.room.players.length < 2 && this.room.single) {
          this.addBot();
        }

        this.room.players.forEach((player: TPlayer) => {
          if (player.id === this.user.id) {
            this.user = player;
            this.isYouTurn = this.user.turn;

            if (this.user.enough) {
              this.isYouTurn = false;
              this.setNextTurn(this.user.id);
            }
          }

          if (player.isBot && player.turn && this.user.playerMaster && !player.enough) {
            this._botTurn(player.id);
          }

          if (player.isBot && player.turn && this.user.playerMaster && player.enough) {
            this.setNextTurn(player.id);
          }
        });

        const isGameStart: boolean = this.room.players.every((player: TPlayer) => player.isActive);

        if (isGameStart && !this.room.started) {
          this.startGame();
        }

        const haveWinner: boolean = this.room.players.some((player: TPlayer) => player.sum === 21);
        const isFinishGame: boolean = this.room.players.every((player: TPlayer) => player.enough);

        if (this.room.started && this.user.isActive && (isFinishGame || haveWinner)) {
          this._dataBaseService.playerReady(this.room.id, this.user.id, false);
          this.finish();
        }
      });
  }

  private _botTurn(botId: number): void {
    this._dataBaseService.changeTurn(this.room.id, botId, false);
    let bot: TPlayer;

    bot = this.room.players.find((player: TPlayer) => player.id === botId);

    if (bot.sum < this._TOTAL_LIMIT_FOR_BOT) {
      bot.hand.push(this.room.deck.pop());
      bot.sum += bot.hand[bot.hand.length - 1].value;
      this._dataBaseService.pushOneCard(this.room.id, bot.id, bot.sum, bot.hand, this.room.deck);
    } else {
      this._dataBaseService.setEnoughDraw(this.room.id, bot.id, true);
    }

    this.setNextTurn(bot.id);
  }

  public addBot(): void {
    if (this.room.players.length >= this.room.maxplayers) {
      this._toastr.error('room is full');

      return;
    }

    const newBot: TPlayer = {
      name: faker.name.findName(),
      pass: '',
      id: this._gameService.generateId(),
      wins: 0,
      games: 0,
      isActive: true,
      playerMaster: false,
      sum: 0,
      isBot: true,
      turn: false,
      enough: false
    };

    this._dataBaseService.addPlayerToRoom(this.room.id, newBot);
  }

  public deleteBot(): void {
   const bot: TPlayer = this.room.players.find((player: TPlayer) => player.isBot);

   if (bot) {
      this._dataBaseService.removeUserFromRoom(this.room.id, bot.id);
    } else {
      this._toastr.error('There are no bots!');
    }
  }

  public stopTakingCards(): void {
    this._dataBaseService.changeTurn(this.room.id, this.user.id, false);
    this._dataBaseService.setEnoughDraw(this.room.id, this.user.id, true);
    this.setNextTurn(this.user.id);
  }


  public toggleReady(): void {
    this.user.isActive = !this.user.isActive;
    this._dataBaseService.playerReady(this.room.id, this.user.id, this.user.isActive);
  }


  public startGame(): void {
    this.message = 'New game is started!!!';

    if (this.user.playerMaster) {
      this.room.players.forEach((player: TPlayer) => {
        if (player.sum === 21) {
          this._dataBaseService.savePlayerScore(this.room.id, player.id, 0);
        }
      });

      this._dataBaseService.changeTurn(this.room.id, this.user.id, true);
      this.room.players.forEach((player: TPlayer) => {
        if (player.isBot) {
          this._dataBaseService.setEnoughDraw(this.room.id, player.id, false);
        }
      });

      this._dataBaseService.gameStarted(this.room.id, true);
      this.room.deck = this._gameService.generateDeck();
      this.room.deck = this._gameService.deckSort(this.room.deck);

      this.room.players.forEach((player: TPlayer) => {
        const oneCard: TCard = this.room.deck.pop();
        this._dataBaseService.pushHandCard(this.room.id, player.id, [oneCard]);
        this._dataBaseService.savePlayerScore(this.room.id, player.id, oneCard.value);
      });

      this._dataBaseService.pushDeck(this.room.id, this.room.deck);
    } else {
      this._dataBaseService.changeTurn(this.room.id, this.user.id, false);
    }
  }

  public getCard(): void {
    this._dataBaseService.changeTurn(this.room.id, this.user.id, false);
    this.user.hand.push(this.room.deck.pop());
    this.user.sum += this.user.hand[this.user.hand.length - 1].value;
    this._dataBaseService.pushOneCard(this.room.id, this.user.id, this.user.sum, this.user.hand, this.room.deck);

    if (this.user.sum > 21) {
      this.message = 'You have too much';
      this._dataBaseService.setEnoughDraw(this.room.id, this.user.id, true);
    }

    this.setNextTurn(this.user.id);
  }

  private setNextTurn(playerId: number): void {
    let indexCount: number;

    this.room.players.find((player: TPlayer, index: number) => {
      indexCount = index + 1 < this.room.players.length ? index + 1 : 0;
      return player.id === playerId;
    });

    this._dataBaseService.changeTurn(this.room.id, playerId, false);
    this._dataBaseService.changeTurn(this.room.id, this.room.players[indexCount].id, true);
  }


  private finish(): void {
    this.user.isActive = false;
    this.message = 'Winner/s: ';
    this.isYouTurn = false;
    this._dataBaseService.playerReady(this.room.id, this.user.id, this.user.isActive);
    this._dataBaseService.gameStarted(this.room.id, false);
    this._dataBaseService.changeTurn(this.room.id, this.user.id, false);
    this._dataBaseService.setEnoughDraw(this.room.id, this.user.id, false);
    let maxScore: number = 0;

    this.room.players.forEach((player: TPlayer) => {
      if (player.sum > maxScore && player.sum <= 21) {
        maxScore = player.sum;
      }
    });

    this.room.players.forEach((player: TPlayer) => {
      if (player.sum === maxScore) {
        this.message += ` ${player.name} `;
        this._dataBaseService.updateScore(this.room.id, player.id, 'wins', player.wins + 1);
        this._dataBaseService.updateScore(this.room.id, player.id, 'games', player.games + 1);
      } else {
        this._dataBaseService.updateScore(this.room.id, player.id, 'games', player.games + 1);
      }
    });

  }

  public ngOnDestroy(): void {
    if (this.user.playerMaster && this.room.players) {
      const aliveUser: TPlayer = this.room.players.find((player: TPlayer) => !player.playerMaster && !player.isBot );

      if (aliveUser) {
        this._dataBaseService.setPlayerMaster(this.room.id, aliveUser.id);
      } else {
        this._dataBaseService.deleteRoom(this.room.id);
      }
    }

    if (this.room) {
      this.user = ({...this.user, turn: false, hand: [], isActive: false, playerMaster: false, sum: 0, enough: false});
      this._userService.setUser(this.user);
      this._dataBaseService.addUsers(this.user);
      this._dataBaseService.removeUserFromRoom(this.room.id, this.user.id);
    }

    this._destroy$$.next();
    this._destroy$$.complete();
  }
}