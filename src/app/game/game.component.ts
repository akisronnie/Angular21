import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataBaseService } from '../services/data-base.service';
import { GameService } from '../services/game.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, Observable, combineLatest } from 'rxjs';
import { takeUntil, map, pluck, switchMap, tap, filter } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit, OnDestroy {

   public message: string = 'Welcome to game';
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


  public youTurn: boolean = false;

  // private readonly _CONDITIONS_COMPUTER_DRAW: number = 15;
  // private readonly _CONDITIONS_WIN: number = 21;

  private enough: boolean = false;
  private _order: TOrder[];
  private _deck: TCard[] = [];
  // public finish: Boolean = false;

  public constructor(
    private _gameService: GameService,
    private _dataBaseService: DataBaseService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
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
         
          if (!room.players) {
            this.user.playerMaster = true;
            this._dataBaseService.setPlayerMaster(room.id, this.user.id);
          }

          if (!userInRoom) {
            this._dataBaseService.addPlayerToRoom(room.id, this.user);
            this._dataBaseService.addPlayerToRoomOrder(room.id, this.user);
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
      console.log('Hello');
      this.activeRoom  = room;
      this._deck = room.deck;
      if (room.order) {
      this._order = Object.values(room.order);
      Object.values(this.activeRoom.order).forEach((order: TOrder) => {
         if (order.id === this.user.id) {
           this.youTurn = order.turn;
           this.enough = order.enough;
          }
        });
      }

      if (room.players) {
        this.activeRoom .players = Object.values(room.players);

      this.activeRoom.players.forEach((player: TPlayer) => {
        if (!this.activeRoom.started && player.hand) {
          player.hand.map((card: TCard) => {card.src = `../assets/img/${card.name}${card.suits}.png`; });
        }
        if (player.id === this.user.id) {
          this.user = player;
          if (player.hand) {
            player.hand.map((card: TCard) => { card.src = `../assets/img/${card.name}${card.suits}.png`; });
          }
        }
      });
      const allActive: boolean = this.activeRoom.players.every((player: TPlayer) => player.isActive);
      if (allActive && !room.started) {this.startGame(); }
    }
    if (this._order) {

      const allFinish: boolean = this._order.every((order: TOrder) => order.enough );
      if (allFinish) { this.finish(); }

    this._order.forEach((order: TOrder) => {
      if (order.id === this.user.id) {
        if (order.enough === true) {this.setNextTurn(); }
      }});
    }
  });

  }

  public userReady(): void {
    this.user.isActive = !this.user.isActive;
    this._dataBaseService.playerReady(this.activeRoom.id, this.user.id, this.user.isActive);
  }

  public startGame(): void {
    if (this.user.playerMaster) {
      this._dataBaseService.gameStarted(this.activeRoom.id, true);
      this._deck = this._gameService.generateDeck();
      this._deck = this._gameService.deckSort(this._deck);

      this.activeRoom.players.forEach((player: TPlayer) => {
        const oneCard: TCard = this._deck[this._deck.length - 1];
        this._dataBaseService.pushHandCard(this.activeRoom.id, player.id, [oneCard]);
        this._dataBaseService.savePlayerScore(this.activeRoom.id, player.id, oneCard.value);
        this._deck.pop();
      });

      this._dataBaseService.pushDeck(this.activeRoom.id, this._deck);
    }
  }

  public getYou(): void {
    const oneCard: TCard = this._deck[this._deck.length - 1];
    if (!this.user.hand) {this.user.hand = []; }
    this.user.hand.push(oneCard);
    this.user.sum += this._deck[this._deck.length - 1].value;
    this._deck.pop();
    this._dataBaseService.savePlayerScore(this.activeRoom.id, this.user.id, this.user.sum);
    this._dataBaseService.pushDeck(this.activeRoom.id, this._deck);
    this.user.hand.map((card: TCard) => {card.src = `../assets/img/outside.png`; });
    this._dataBaseService.pushHandCard(this.activeRoom.id, this.user.id, this.user.hand);
    this.user.hand.map((card: TCard) => {card.src = `../assets/img/${card.name}${card.suits}.png`; });
  
    if (this.user.sum > 21) {
      this.message = 'You have too much';
      this.enoughGame();
      this.enough = true;
     }

    this.setNextTurn();
  }

  public enoughGame(): void {
    this._dataBaseService.setEnoughDraw(this.activeRoom.id, this.user.id, true);
    this.setNextTurn();
    this.enough = true;

  }

private setNextTurn(): void {
    let count: number;
    this._order.forEach((user: TOrder, index: number) => {
      if (user.id === this.user.id) {
        count = index; user.turn = false;
        this._dataBaseService.changeTurn(this.activeRoom.id, user.id, false);
      }
    });
    count++;
    if (this._order.length <= count) {
      count = 0;
    }
    this._dataBaseService.changeTurn(this.activeRoom.id, this._order[count].id, true);
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
  let turn: boolean;
   

  
    if (this.user.playerMaster && this.activeRoom.players !== undefined) {
      const players: TPlayer[] = this.activeRoom.players;
    
      for (let index: number = 0; index < players.length; index++) {
       if (!players[index].playerMaster) {
         this._dataBaseService.setPlayerMaster(this.activeRoom.id, players[index].id);
         this._order.forEach((order: TOrder) => { if (order.id === this.user.id) { turn = order.turn; }});
         if (!this.activeRoom.started || turn) {
          this._dataBaseService.changeTurn(this.activeRoom.id, players[index].id, true);
         }
         break;
       }
      }
    }
    this.user.hand = [];
    this.user.isActive = false;
    this.user.playerMaster = false;
    this.user.sum = 0;
    
    this._userService.setUser(this.user);

    this._dataBaseService.removeUserFromRoom(this.activeRoom.id, this.user.id);
  }
}





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

