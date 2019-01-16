import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private deck: TCard[] = [];
  private firstGame: boolean = true;
  public isShowResult: boolean = false;
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

  public ngOnInit(): void {
    this.deck = this.generateDeck();
    this.deck = this.deckSort(this.deck);
    this.startNewGame();
  }

  private generateDeck (): TCard[] {
    const suits: string[] = ['♠', '♥', '♣', '♦'];
    const cards: TCard[] = [{ name: 'T', value: 11, suits: null, src: null },
    { name: 'K', value: 4, suits: null, src: null },
    { name: 'D', value: 3, suits: null, src: null },
    { name: 'V', value: 2, suits: null, src: null }];
    const deck: TCard[] = [];

    for (let i: number = 6; i < 11; i++) {
      cards.push({ name: String(i), value: i, suits: null, src: null });
    }

    for (let j: number = 0; j < cards.length; j++) {
      for (let k: number = 0; k < suits.length; k++) {
        cards[j].suits = suits[k];
        cards[j].src = `../assets/img/outside.png`;
        deck.push({ ...cards[j] });
      }
    }
    return deck;
  }

  private deckSort(deck: TCard[]): TCard[] {
    let firstElem: number = 0;
    let secondElem: number = 0;
    let change: TCard;

    for (let i: number = 0; i < 30; i++) {
      firstElem = Math.floor(Math.random() * 36);
      secondElem = Math.floor(Math.random() * 36);
      change = this.deck[firstElem];
      deck[firstElem] = this.deck[secondElem];
      deck[secondElem] = change;
    }
    return deck;
  }

  public startNewGame(): void  {
    if (!this.firstGame) {
      this.finish();
    }
    this.message = 'Welcome to game';
    this.firstGame = false;
    this.player.hand.map((card: TCard) => { card.src = `../assets/img/outside.png`; });
    this.computer.hand.map((card: TCard) => { card.src = `../assets/img/outside.png`; });
    this.isShowResult = false;
    this.deck = this.deck.concat(this.player.hand);
    this.deck = this.deck.concat(this.computer.hand);
    this.player.hand = [];
    this.player.sum = 0;
    this.computer.hand = [];
    this.computer.sum = 0;
    this.deck = this.deckSort(this.deck);
    this.getYou();
  }

  public getComp(): void {
    if (this.computer.sum <= 15) {
      this.computer.hand.push(this.deck[this.deck.length - 1]);
      this.deck.pop();
      this.computer.sum += this.computer.hand[this.computer.hand.length - 1].value;
    }

    if (this.computer.sum > 21) {
      this.finish();
    }
  }

  public getYou(): void  {
    this.player.hand.push(this.deck[this.deck.length - 1]);
    this.deck.pop();
    this.player.hand[this.player.hand.length - 1].src = `../assets/img/${this.player.hand[this.player.hand.length - 1].name}${this.player.hand[this.player.hand.length - 1].suits}.png`;
    this.player.sum += this.player.hand[this.player.hand.length - 1].value;
    if (this.player.sum > 21) {
      this.message = 'You lose! That is enough already! Bust. You score :' + this.player.sum;
      this.isShowResult = true;
      this.computer.hand.map((card: TCard) => { card.src = `../assets/img/${card.name}${card.suits}.png`; });
      return;
    }
    this.getComp();
  }

  public finish(): void  {
    if (this.computer.sum <= 15) {
      this.getComp();
    }
    this.computer.hand.map((card: TCard) => { card.src = `../assets/img/${card.name}${card.suits}.png`; });
    this.isShowResult = true;

    if (this.computer.sum > 21) {
      this.message = 'At the computer bust!';
      this.player.numberWins++;
      this.firstGame = true;
      return;
    }

    if (this.computer.sum === this.player.sum) {
      this.message = 'DRAW!';
      return;
    }

    if (this.computer.sum > this.player.sum || this.player.sum > 21) {
      this.message = 'YOU LOSE!!!!! LOSER!!!';
      this.computer.numberWins++;
    } else {
      this.message = 'YOU WIN!!!!! WINNER!!!';
      this.player.numberWins++;
    }

    this.firstGame = true;
  }
}