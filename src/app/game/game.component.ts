import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataBaseService } from '../services/data-base.service';
import { GameService } from '../services/game.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, Observable, combineLatest } from 'rxjs';
import { takeUntil, map, pluck, switchMap, tap, filter } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import * as faker from 'faker';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit, OnDestroy {

  public message: string = 'Welcome to game';
  public activeRoom: TRoom;
  private _destroy$$: Subject<number> = new Subject();
  public user: TPlayer;
  public youTurn: boolean = false;
  private readonly _CONDITIONS_COMPUTER_DRAW: number = 15;


  public constructor(
    private _gameService: GameService,
    private _dataBaseService: DataBaseService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

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
          if (room) {
            let userInRoom: boolean = false;
            if (room.players) {
              userInRoom = Object.values(room.players).some(
                (player: TPlayer) => (this.user.id === player.id)
              );
            }

            if (!userInRoom && room.players
              && Object.values(room.players).length >= room.maxplayers) {
              alert('This room is full');
              this._router.navigate(['/multiplayer']);

              return false;
            }

            if (!userInRoom && room.started) {
              alert('Sorry, game is started');

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

          } else {
            alert('This room is not correct');
            this._router.navigate(['/multiplayer']);

            return false;
          }
        }),
        takeUntil(this._destroy$$)
      )
      .subscribe((room: TRoom) => {
                this.activeRoom = room;

        if (!this.activeRoom.players) {
          this.activeRoom.players = [];
        }


        this.activeRoom.players = Object.values(room.players);

        if (this.activeRoom.players.length < 2 && this.activeRoom.single) {
          this.addBots();
        }

        this.activeRoom.players.forEach((player: TPlayer) => {
          if (!this.activeRoom.started && player.hand) {
            player.hand.map((card: TCard) => { card.src = `../assets/img/${card.name}${card.suits}.png`; });
          }

          if (player.id === this.user.id) {
            this.user = player;
            this.youTurn = player.turn;
          }

          if (player.id === this.user.id && player.turn) {
            this.user = player;

            if (!this.user.enough) {
              this.youTurn = this.user.turn;
            } else {
              this.youTurn = false;
              this.setNextTurn(this.user.id);
            }
          }

          if (this.user.hand) {
            this.user.hand.map((card: TCard) => { card.src = `../assets/img/${card.name}${card.suits}.png`; });
          }

          if (player.isBot && player.turn && this.user.playerMaster && !player.enough) {
            this._botTurn(player.id);
          }

          if (player.isBot && player.turn && this.user.playerMaster && player.enough) {
            this.setNextTurn(player.id);
          }
        });

        const allActive: boolean = this.activeRoom.players.every((player: TPlayer) => player.isActive);
        if (allActive && !this.activeRoom.started) {
          this.startGame();
        }
        const oneHave21: boolean = this.activeRoom.players.some((player: TPlayer) => player.sum === 21);
        const allFinish: boolean = this.activeRoom.players.every((player: TPlayer) => player.enough);

        if (allFinish && this.activeRoom.started && this.user.isActive || oneHave21 && this.activeRoom.started && this.user.isActive) {
          this._dataBaseService.playerReady(this.activeRoom.id, this.user.id, false);
          this.finish();
        }

      });

  }

  private _botTurn(botId: number): void {
    this._dataBaseService.changeTurn(this.activeRoom.id, botId, false);
    let bot: TPlayer;
    this.activeRoom.players.forEach((player: TPlayer) => { if (player.id === botId) { bot = player; } });
    if (bot.sum < this._CONDITIONS_COMPUTER_DRAW) {
      const oneCard: TCard = this.activeRoom.deck[this.activeRoom.deck.length - 1];
      if (!bot.hand) { bot.hand = []; }
      bot.hand.push(oneCard);
      bot.sum += this.activeRoom.deck[this.activeRoom.deck.length - 1].value;
      this.activeRoom.deck.pop();
      this._dataBaseService.savePlayerScore(this.activeRoom.id, bot.id, bot.sum);
      this._dataBaseService.pushDeck(this.activeRoom.id, this.activeRoom.deck);
      this._dataBaseService.pushHandCard(this.activeRoom.id, bot.id, bot.hand);
      this.setNextTurn(bot.id);

    } else {

      this._dataBaseService.setEnoughDraw(this.activeRoom.id, bot.id, true);
      this.setNextTurn(bot.id);
    }
  }

  public addBots(): void {
    if (this.activeRoom.players.length >= this.activeRoom.maxplayers) {
      alert('room is full');
      return;
    }
    const date: Date = new Date();
    const components: number[] = [
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    ];
    const botId: number = Number(components.join(''));
    const newBot: TPlayer = {
      name: faker.name.findName(),
      pass: '',
      id: botId,
      wins: 0,
      loses: 0,
      isActive: true,
      playerMaster: false,
      sum: 0,
      isBot: true,
      turn: false,
      enough: false
    };
    this._dataBaseService.addPlayerToRoom(this.activeRoom.id, newBot);
  }

  public deleteBots(): void {
    for (let i: number = 0; i < this.activeRoom.players.length; i++) {
      if (this.activeRoom.players[i].isBot) {
        this._dataBaseService.removeUserFromRoom(this.activeRoom.id, this.activeRoom.players[i].id);
        break;
      }
    }
  }

  public enoughGame(): void {
    this._dataBaseService.changeTurn(this.activeRoom.id, this.user.id, false);
    this._dataBaseService.setEnoughDraw(this.activeRoom.id, this.user.id, true);
    this.setNextTurn(this.user.id);
  }


  public userReady(): void {
    this.user.isActive = !this.user.isActive;
    this._dataBaseService.playerReady(this.activeRoom.id, this.user.id, this.user.isActive);
  }


  public startGame(): void {
    this.message = 'New game is started!!!';
    if (this.user.playerMaster) {
      this.activeRoom.players.forEach((player: TPlayer) => {
        if (player.sum === 21) {
          this._dataBaseService.savePlayerScore(this.activeRoom.id, player.id, 0);
        }
      });
      this._dataBaseService.changeTurn(this.activeRoom.id, this.user.id, true);
      this.activeRoom.players.forEach((player: TPlayer) => {
        if (player.isBot) {
          this._dataBaseService.setEnoughDraw(this.activeRoom.id, player.id, false);
        }
      });
      this._dataBaseService.gameStarted(this.activeRoom.id, true);
      this.activeRoom.deck = this._gameService.generateDeck();
      this.activeRoom.deck = this._gameService.deckSort(this.activeRoom.deck);
      this.activeRoom.players.forEach((player: TPlayer) => {
        const oneCard: TCard = this.activeRoom.deck[this.activeRoom.deck.length - 1];
        this._dataBaseService.pushHandCard(this.activeRoom.id, player.id, [oneCard]);
        this._dataBaseService.savePlayerScore(this.activeRoom.id, player.id, oneCard.value);
        this.activeRoom.deck.pop();
      });

      this._dataBaseService.pushDeck(this.activeRoom.id, this.activeRoom.deck);
    } else {
      this._dataBaseService.changeTurn(this.activeRoom.id, this.user.id, false);
    }
  }

  public getYou(): void {
    this._dataBaseService.changeTurn(this.activeRoom.id, this.user.id, false);
    const oneCard: TCard = this.activeRoom.deck[this.activeRoom.deck.length - 1];

    this.user.hand.push(oneCard);
    this.user.sum += this.activeRoom.deck[this.activeRoom.deck.length - 1].value;
    this.activeRoom.deck.pop();
    this._dataBaseService.savePlayerScore(this.activeRoom.id, this.user.id, this.user.sum);
    this._dataBaseService.pushDeck(this.activeRoom.id, this.activeRoom.deck);
    this.user.hand.map((card: TCard) => { card.src = `../assets/img/outside.png`; });
    this._dataBaseService.pushHandCard(this.activeRoom.id, this.user.id, this.user.hand);
    this.user.hand.map((card: TCard) => { card.src = `../assets/img/${card.name}${card.suits}.png`; });

    if (this.user.sum > 21) {
      this.message = 'You have too much';
      this._dataBaseService.setEnoughDraw(this.activeRoom.id, this.user.id, true);
      this.setNextTurn(this.user.id);
      return;
    }

    this.setNextTurn(this.user.id);
  }

  private setNextTurn(playerId: number): void {
    let count: number;
    this.activeRoom.players.forEach((user: TPlayer, index: number) => {
      if (user.id === playerId) {
        count = index; user.turn = false;
        this._dataBaseService.changeTurn(this.activeRoom.id, user.id, false);
      }
    });
    count++;
    if (this.activeRoom.players.length <= count) {
      count = 0;
    }
    this._dataBaseService.changeTurn(this.activeRoom.id, this.activeRoom.players[count].id, true);
  }


  private finish(): void {
    this.user.isActive = false;
    this.message = 'Winner/s: ';
    this.youTurn = false;
    this._dataBaseService.playerReady(this.activeRoom.id, this.user.id, this.user.isActive);
    this._dataBaseService.gameStarted(this.activeRoom.id, false);
    this._dataBaseService.changeTurn(this.activeRoom.id, this.user.id, false);
    this._dataBaseService.setEnoughDraw(this.activeRoom.id, this.user.id, false);

    let maxScore: number = 0;

    this.activeRoom.players.forEach((player: TPlayer) => {

      if (player.sum > maxScore && player.sum <= 21) {
        maxScore = player.sum;
      }
    });

    this.activeRoom.players.forEach((player: TPlayer) => {
      if (player.sum === maxScore) {
        this.message += ` ${player.name} `;
        this._dataBaseService.updateScore(this.activeRoom.id, player.id, 'wins', player.wins + 1);
      } else {
        this._dataBaseService.updateScore(this.activeRoom.id, player.id, 'loses', player.loses + 1);
      }
    });

  }

  public ngOnDestroy(): void {
    this._destroy$$.next();
    let nobody: boolean = true;
    if (this.user.playerMaster && this.activeRoom.players !== undefined) {
      const players: TPlayer[] = this.activeRoom.players;

      for (let index: number = 0; index < players.length; index++) {
        if (!players[index].playerMaster && !players[index].isBot) {
          nobody = false;
          this._dataBaseService.setPlayerMaster(this.activeRoom.id, players[index].id);
          break;
        }
      }
      if (nobody) {
        this._dataBaseService.deleteRoom(this.activeRoom.id);
      }
    }
    if (this.activeRoom) {
    this.user.turn = false;
    this.user.hand = [];
    this.user.isActive = false;
    this.user.playerMaster = false;
    this.user.sum = 0;
    this._userService.setUser(this.user);
    this._dataBaseService.addUsers(this.user);
    this._dataBaseService.removeUserFromRoom(this.activeRoom.id, this.user.id);
  }
}
}