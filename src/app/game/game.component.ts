import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  public message: string = 'Welcome to game';
  public computer: TPlayer = {
    hand: [],
    sum: 0,
    numberWins: 0,
  };
  public player: TPlayer = {
    hand: [],
    sum: 0,
    numberWins: 0,
  };
  public resultField: TResultField = {
    isShowResult : false,
    player: this.player,
    computer: this.computer
  };
  public resultScore: TResultScore = {
    message: '',
    player: this.player,
    computer: this.computer
  };


  private _deck: TCard[] = [];
  private _firstGame: boolean = true;


  private readonly _CONDITIONS_COMPUTER_DRAW: number = 15;
  private readonly _CONDITIONS_WIN: number = 21;

  public constructor(public gameService: GameService) {}

  public ngOnInit(): void {
    this._deck = this.gameService.generateDeck();
    this._deck = this.gameService.deckSort(this._deck);
    this.startNewGame();
  }

  public startNewGame(): void  {
    if (!this._firstGame) {
      this.finish();
    }

    this.resultScore.message = 'Welcome to game';
    this._firstGame = false;
    this.player.hand.map((card: TCard) => { card.src = `../assets/img/outside.png`; });
    this.computer.hand.map((card: TCard) => { card.src = `../assets/img/outside.png`; });
    this.resultField.isShowResult = false;
    this._deck = this._deck.concat(this.player.hand);
    this._deck = this._deck.concat(this.computer.hand);
    this.player.hand = [];
    this.player.sum = 0;
    this.computer.hand = [];
    this.computer.sum = 0;
    this._deck = this.gameService.deckSort(this._deck);
    this.getYou();
  }

  public getYou(): void  {
    this.player.hand.push(this._deck[this._deck.length - 1]);
    this._deck.pop();
    this.player.hand[this.player.hand.length - 1].src = `../assets/img/${this.player.hand[this.player.hand.length - 1].name}${this.player.hand[this.player.hand.length - 1].suits}.png`;
    this.player.sum += this.player.hand[this.player.hand.length - 1].value;

    if (this.player.sum >= this._CONDITIONS_WIN) {
      this.resultField.isShowResult = true;
      this.finish();
      this.computer.hand.map((card: TCard) => { card.src = `../assets/img/${card.name}${card.suits}.png`; });

      return;
    }

    this.getComp();
  }

  public finish(): void  {
    if (this.computer.sum <= this._CONDITIONS_COMPUTER_DRAW) {
      this.getComp();
    }

    this.computer.hand.map((card: TCard) => { card.src = `../assets/img/${card.name}${card.suits}.png`; });
    this.resultField.isShowResult = true;

     const winner: TPlayer = this.gameService.getWinner(this.computer, this.player);

     if (winner === this.player) {
      this.resultScore.message = 'YOU WIN!!!!! WINNER!!!';
      this.player.numberWins++;

      return;
     }

     if (winner === this.computer) {
      this.resultScore.message = 'YOU LOSE!!!!! LOSER!!!';
      this.computer.numberWins++;

      return;
     }

     this.resultScore.message = 'DRAW!';
  }


  private getComp(): void {
    if (this.computer.sum <= this._CONDITIONS_COMPUTER_DRAW) {
      this.computer.hand.push(this._deck[this._deck.length - 1]);
      this._deck.pop();
      this.computer.sum += this.computer.hand[this.computer.hand.length - 1].value;
    }

    if (this.computer.sum > this._CONDITIONS_WIN) {
      this.finish();
    }
  }

}
