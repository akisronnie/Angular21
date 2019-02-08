import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataBaseService } from '../services/data-base.service';
import { GameService } from '../services/game.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, Observable, combineLatest } from 'rxjs';
import { takeUntil, map, pluck, switchMap, tap, filter } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit, OnDestroy {

  // public message: string = 'Welcome to game';
   public activeRoom: TRoom; // = { id: 0, players: [], maxplayers: 0, deck: [] };
   private _destroy$$: Subject<number> = new Subject();
   public user: TPlayer;
  // public player: TPlayer = {
  //   hand: [],
  //   sum: 0,
  //   id: 0,
  //   name: '',
  //   isActive: true,
  //   playerMaster: false,
  //   pass : '',
  //   wins : 0,
  //   loses : 0
  // };

  // public fieldResult: TResultField = {
  //   isShowResult: false,
  //   player: this.player,
  // };

  public scoreResult: TResultScore = {
    message: 'Welcome to game, please click Ready!',
    user: null,
    room: null,
    youTurn : false

  };

  // public youTurn: boolean = false;

  // private readonly _CONDITIONS_COMPUTER_DRAW: number = 15;
  // private readonly _CONDITIONS_WIN: number = 21;

  // private enough: boolean = false;
  // private _order: TOrder[];
  // private _deck: TCard[] = [];
  // public finish: Boolean = false;

  public constructor(
    private _gameService: GameService,
    private _dataBaseService: DataBaseService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }


  public ngOnInit(): void {

  //   if (selectedRoom.players === undefined) {
  //     this.user.playerMaster = true;
  //     this._userService.setUser(this.user);
  //   }


  // this._dataBaseService.addPlayerToRoom(roomId, this.user);
  // this._dataBaseService.addPlayerToRoomOrder(roomId, this.user);
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
      takeUntil(this._destroy$$)
    )
    .subscribe((room: TRoom) => {
      this.activeRoom = room;
    });





    this._route.params
      .pipe(
        pluck('id'),
        switchMap((roomId: number) => this._dataBaseService.getRoom$(roomId)),
        filter(Boolean),
        tap((room: TRoom) => {
            this.activeRoom = room;
            this.activeRoom.players = Object.values(this.activeRoom.players);
            this.scoreResult.room = this.activeRoom;
          }),
        switchMap(() =>  this._userService.getUser$() ),
        takeUntil(this._destroy$$)
      )
      .subscribe((user: TPlayer) => {

        console.log(this.activeRoom);
        console.log(user);

        this.user = user;
        this.scoreResult.user = this.user;

      });
  }





}







  //   if (this._dataBaseService.activeRoomId === null || this._dataBaseService.activeUser === null) {
  //     this.router.navigate(['/menu']);
  //     return;
  //   }

  //   this._dataBaseService.setEnoughDraw(false);

  //   if (this._dataBaseService.activeUser && this._dataBaseService.activeUser.playerMaster) {
  //     this._deck = this._gameService.generateDeck();
  //     this._deck = this._gameService.deckSort(this._deck);
  //     this._dataBaseService.pushDeck(this._deck);
  //   }

  //   if (this._dataBaseService.activeUser.playerMaster) {
  //     this._dataBaseService.changeTurn(this._dataBaseService.activeUser.id, true);
  //   }

  //   this._dataBaseService.getRoom$(this._dataBaseService.activeRoomId)
  //     .pipe(
  //       takeUntil(this.destroy$$))
  //     .subscribe((room: TRoom) => {
  //       this._deck = room.deck;
  //       this._order = Object.values(room.order);

  //       this._order.forEach((playerInOrder: TOrder) => {
  //         if (playerInOrder.id === this._dataBaseService.activeUser.id) {
  //           this.youTurn = playerInOrder.turn;

  //         }

  //         this.activeRoom = room;
  //         this.activeRoom.players = Object.values(room.players);
  //         this.activeRoom.players.map((player: TPlayer) => {
  //           if (player.id === this._dataBaseService.activeUser.id || this.finish) {
  //             if (player.hand !== undefined) {
  //               player.hand.map((card: TCard) => { card.src = `../assets/img/${card.name}${card.suits}.png`; });
  //             }
  //           }
  //         });
  //       });

  //       this.finish = this._order.every((order: TOrder) => {
  //         if (order.enough) {
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       });

  //       if (this.finish) {
  //         if (this.youTurn) {
  //           this.finishGame();
  //         }
  //         return;
  //       }

  //       if (this.enough) {
  //         this.setNextTurn();
  //       }
  //     });
  //   }

  //   public getYou(): void {
  //   const oneCard: TCard = this._deck[this._deck.length - 1];
  //   this.player.hand.push(oneCard);
  //   this.player.sum += this._deck[this._deck.length - 1].value;
  //   this._deck.pop();

  //   this._dataBaseService.savePlayerScore(this.player.sum);
  //   this._dataBaseService.pushDeck(this._deck);
  //   this._dataBaseService.pushHandCard(this.player.hand);

  //   if (this.player.sum > 21) {
  //     this.scoreResult.message = 'You have too much';
  //     this.enoughGame();
  //     this.enough = true;
  //    }

  //   this.setNextTurn();
  // }


  // private setNextTurn(): void {
  //   let count: number;
  //   this._order.forEach((user: TOrder, index: number) => {
  //     if (user.id === this._dataBaseService.activeUser.id) {
  //       count = index; user.turn = false;
  //       this._dataBaseService.changeTurn(user.id, false);
  //     }
  //   });
  //   count++;
  //   if (this._order.length <= count) {
  //     count = 0;
  //   }
  //   this._dataBaseService.changeTurn(this._order[count].id, true);
  // }

  // public ngOnDestroy(): void {
  //   this.destroy$$.next();
  //   this._dataBaseService.deleteHandCards();
  //   this._dataBaseService.savePlayerScore(0);
  // }


  // public finishGame(): void {
  //   this.destroy$$.next();
  //   const winners: TPlayer[] = [];
  //   let maxScore: number = 0;

  //   this.activeRoom.players.forEach((player: TPlayer) => {
  //     if (player.sum > maxScore && player.sum <= 21) {
  //       maxScore = player.sum;
  //     }
  //   });

  //   this.activeRoom.players.forEach((player: TPlayer) => {
  //     if (player.sum === maxScore) {
  //       winners.push(player);
  //     }
  //   });

  //   winners.forEach((winner: TPlayer) => { alert('Winner ' + winner.name); });
  //   this.youTurn = false;

  //   this._dataBaseService.playerUnready(this.activeRoom.id);
  // }


  // public enoughGame(): void {
  //   this._dataBaseService.setEnoughDraw(true);
  //   this.setNextTurn();
  //   this.enough = true;
  // }

  
 



  





 




  //   if (!this._firstGame) {
  //     this.finish();
  //   }

  //   this.scoreResult.message = 'Welcome to game';
  //   this._firstGame = false;
  //   this.player.hand.map((card: TCard) => { card.src = `../assets/img/outside.png`; });
  //   this.computer.hand.map((card: TCard) => { card.src = `../assets/img/outside.png`; });
  //   this.fieldResult.isShowResult = false;
  //   this._deck = this._deck.concat(this.player.hand);
  //   this._deck = this._deck.concat(this.computer.hand);
  //   this.player.hand = [];
  //   this.player.sum = 0;
  //   this.computer.hand = [];
  //   this.computer.sum = 0;
  //   this._deck = this._gameService.deckSort(this._deck);
  //   this.getYou();
  // }


  // public finish(): void  {
  //   if (this.computer.sum <= this._CONDITIONS_COMPUTER_DRAW) {
  //     this._getComp();
  //   }

  //   this.computer.hand.map((card: TCard) => { card.src = `../assets/img/${card.name}${card.suits}.png`; });
  //   this.fieldResult.isShowResult = true;

  //    const winner: TPlayer = this._gameService.getWinner(this.computer, this.player);

  //    if (winner === this.player) {
  //     this.scoreResult.message = 'YOU WIN!!!!! WINNER!!!';
  //     this.player.numberWins++;

  //     return;
  //    }

  //    if (winner === this.computer) {
  //     this.scoreResult.message = 'YOU LOSE!!!!! LOSER!!!';
  //     this.computer.numberWins++;

  //     return;
  //    }

  //    this.scoreResult.message = 'DRAW!';
  // }


  // private _getComp(): void {
  //   if (this.computer.sum <= this._CONDITIONS_COMPUTER_DRAW) {
  //     this.computer.hand.push(this._deck[this._deck.length - 1]);
  //     this._deck.pop();
  //     this.computer.sum += this.computer.hand[this.computer.hand.length - 1].value;
  //   }

  //   if (this.computer.sum > this._CONDITIONS_WIN) {
  //     this.finish();
  //   }
  // }

