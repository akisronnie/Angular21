import { Component, OnInit } from '@angular/core';

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
  public fieldResult: TResultField = {
    isShowResult : false,
    player: this.player,
    computer: this.computer
  };
  public scoreResult: TResultScore = {
    message: '',
    player: this.player,
    computer: this.computer
  };


  private readonly _CONDITIONS_WIN: number = 21;
  private readonly _CONDITIONS_COMPUTER_DRAW: number = 15;
  private readonly _NUMBER_OF_SORT: number = 36;

  private _deck: TCard[] = [];
  private _firstGame: boolean = true;


  public ngOnInit(): void {
    this._deck = this._generateDeck();
    this._deck = this._deckSort(this._deck);
    this.startNewGame();
  }

  public startNewGame(): void  {
    if (!this._firstGame) {
      this.finish();
    }

    this.scoreResult.message = 'Welcome to game';
    this._firstGame = false;
    this.player.hand.map((card: TCard) => { card.src = `../assets/img/outside.png`; });
    this.computer.hand.map((card: TCard) => { card.src = `../assets/img/outside.png`; });
    this.fieldResult.isShowResult = false;
    this._deck = this._deck.concat(this.player.hand);
    this._deck = this._deck.concat(this.computer.hand);
    this.player.hand = [];
    this.player.sum = 0;
    this.computer.hand = [];
    this.computer.sum = 0;
    this._deck = this._deckSort(this._deck);
    this.getYou();
  }

  public getYou(): void  {
    this.player.hand.push(this._deck[this._deck.length - 1]);
    this._deck.pop();
    this.player.hand[this.player.hand.length - 1].src = `../assets/img/${this.player.hand[this.player.hand.length - 1].name}${this.player.hand[this.player.hand.length - 1].suits}.png`;
    this.player.sum += this.player.hand[this.player.hand.length - 1].value;

    if (this.player.sum === this._CONDITIONS_WIN) {
      this.finish();
    }

    if (this.player.sum > this._CONDITIONS_WIN) {
      this.scoreResult.message = 'You lose! That is enough already! Bust. You score :' + this.player.sum;
      this.fieldResult.isShowResult = true;
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
    this.fieldResult.isShowResult = true;

    if (this.computer.sum > this._CONDITIONS_WIN) {
      this.scoreResult.message = 'At the computer bust!';
      this.player.numberWins++;
      this._firstGame = true;

      return;
    }

    if (this.computer.sum === this.player.sum) {
      this.scoreResult.message = 'DRAW!';

      return;
    }

    if (this.computer.sum > this.player.sum || this.player.sum > this._CONDITIONS_WIN) {
      this.scoreResult.message = 'YOU LOSE!!!!! LOSER!!!';
      this.computer.numberWins++;

      return;
    }

    this.scoreResult.message = 'YOU WIN!!!!! WINNER!!!';
    this.player.numberWins++;
    this._firstGame = true;
  }


  private _generateDeck (): TCard[] {
    const suits: string[] = ['♠', '♥', '♣', '♦'];
    const cards: TCard[] = [{ name: 'T', value: 11, suits: null, src: null },
    { name: 'K', value: 4, suits: null, src: null },
    { name: 'D', value: 3, suits: null, src: null },
    { name: 'V', value: 2, suits: null, src: null }];
    const deck: TCard[] = [];

    for (let i: number = 6; i < 11; i++) {
      cards.push({ name: String(i), value: i, suits: null, src: null });
    }

    cards.forEach((card: TCard) => {
      suits.forEach((suit: string) => {
        deck.push({name: card.name, value: card.value, suits: suit, src: `../assets/img/outside.png` });
      });
    });

    return deck;
  }

  private _deckSort(deck: TCard[]): TCard[] {
    let firstElem: number = 0;
    let secondElem: number = 0;
    let change: TCard;

    for (let i: number = 0; i < this._NUMBER_OF_SORT; i++) {
      firstElem = Math.floor(Math.random() * deck.length);
      secondElem = Math.floor(Math.random() * deck.length);
      change = deck[firstElem];
      deck[firstElem] = deck[secondElem];
      deck[secondElem] = change;
    }

    return deck;
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
