import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { GameService } from '../game.service';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit, OnDestroy {
  public message: string = 'Welcome to game';
  public activeRoom: TRoom = { id: 0, players: [], maxplayers: 0, deck: [] };
  private destroy$$: Subject<number> = new Subject();
  public player//: TPlayer
   = {
    hand: [],
    sum: 0,
    id: 0,
    name: '',
    isActive: true,
    playerMaster: false
  };

  public fieldResult: TResultField = {
    isShowResult: false,
    player: this.player,
  };

  public scoreResult: TResultScore = {
    message: '',
    player: this.player,
  };

  public youTurn: boolean = false;

  // private readonly _CONDITIONS_COMPUTER_DRAW: number = 15;
  // private readonly _CONDITIONS_WIN: number = 21;

  private enough = false;
  private _order;
  private _deck: TCard[] = [];
  public finish = false;

  public constructor(
    private _gameService: GameService,
    private _dataBaseService: DataBaseService,
    private router: Router
  ) { }

  public ngOnInit(): void {
    if (this._dataBaseService.userId === null) {
      this.router.navigate(['/menu']);
    }

    if (this._dataBaseService.playerMaster) {
      this._deck = this._gameService.generateDeck();
      this._deck = this._gameService.deckSort(this._deck);
      this._dataBaseService.pushDeck(this._deck);
    }

    this._dataBaseService.getDeck().pipe(takeUntil(this.destroy$$)).subscribe((deck: TCard[]) => {
      this._deck = deck;
    });

    this._dataBaseService.getRoom$(this._dataBaseService.activeRoomId).pipe(takeUntil(this.destroy$$)).subscribe((room: TRoom) => {
      this.activeRoom = room;
      this.activeRoom.players = Object.values(room.players);
      this.activeRoom.players.map((player: TPlayer) => {
        if (player.id === this._dataBaseService.userId || this.finish) {
          if (player.hand !== undefined) {
            player.hand.map((card: TCard) => { card.src = `../assets/img/${card.name}${card.suits}.png`; });
          }
        }
      });
    });


    this._dataBaseService.getOrderInRoom().pipe(takeUntil(this.destroy$$)).subscribe((order) => {
      this._order = Object.values(order);

      this._order.forEach((playerInOrder) => {
        if (playerInOrder.id === this._dataBaseService.userId) {
          this.youTurn = playerInOrder.turn;
        }
      });



      this.finish = this._order.every((order) => {
        if (order.enough) {
          return true;
        } else {
          return false;
        }
      });

      if (this.finish) {
        if (this.youTurn) {
          this.finishGame();
        }
        return;
      }

      if (this.enough) {
        this.setNextTurn();
      }
    });
  }



  public finishGame() {
    let winners = [];
    let maxScore = 0;

    this.activeRoom.players.forEach((player) => {
      if (player.sum > maxScore && player.sum <= 21) {
        maxScore = player.sum;
      }
    });

    this.activeRoom.players.forEach((player) => {
      if (player.sum === maxScore) {
        winners.push(player);
      }
    });

    winners.forEach((winner) => { alert('Winner ' + winner.name) });
    this.youTurn = false;

    this._dataBaseService.playerUnready(this.activeRoom.id);
  }


  public enoughGame() {
    this._dataBaseService.setEnoughDraw(true);
    this.setNextTurn();
    this.enough = true;
  }


  private setNextTurn() {
    let count;
    this._order.forEach((user, index) => {
      if (user.id === this._dataBaseService.userId) {
        count = index; user.turn = false;
        this._dataBaseService.changeTurn(user.id, false);
      }
    });
    count++;
    if (this._order.length <= count) {
      count = 0;
    }
    this._dataBaseService.changeTurn(this._order[count].id, true);
  }


  public getYou(): void {
    const oneCard: TCard = this._deck[this._deck.length - 1];
    this.player.hand.push(oneCard);
    this.player.sum += this._deck[this._deck.length - 1].value;
    this._deck.pop();

    this._dataBaseService.savePlayerScore(this.player.sum);
    this._dataBaseService.pushDeck(this._deck);
    this._dataBaseService.pushHandCard(this.player.hand);

    this.setNextTurn();
  }

  public ngOnDestroy(): void {
    this.destroy$$.next();
    this._dataBaseService.deleteHandCards();
    this._dataBaseService.savePlayerScore(0);
  }




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
}
