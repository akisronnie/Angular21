import { Component, OnInit } from '@angular/core';
import {Player,Card} from '../types/myTypes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public deck: Card[] = [];
  public firstGame: boolean = true;
  public showResult: boolean = false;
  public computer: Player = {
    hand: [],
    sum: 0,
    numberWins: 0,
  };
  public player: Player = {
    hand: [],
    sum: 0,
    numberWins: 0,
  };

  constructor() {
  }

  ngOnInit() {
    this.generateDeck();
    this.deckSort(30);
    this.startNewGame();
  }

  generateDeck() {
    let suits = ['♠', '♥', '♣', '♦'];
    let cards = [{ name: 'T', value: 11, suits: null, src: null }, { name: 'K', value: 4, suits: null, src: null }, { name: 'D', value: 3, suits: null, src: null }, { name: 'V', value: 2, suits: null, src: null }];

    for (let i = 6; i < 11; i++) {
      cards.push({ name: String(i), value: i, suits: null, src: null });
    }
    for (let j = 0; j < cards.length; j++) {
      for (let k = 0; k < suits.length; k++) {
        cards[j].suits = suits[k];
        cards[j].src = `../assets/img/outside.png`;
        this.deck.push({ ...cards[j] });
      }
    }
  }

  deckSort(n) {
    let firstElem = 0;
    let secondElem = 0;
    let change;
    for (let i = 0; i < n; i++) {
      firstElem = Math.floor(Math.random() * 36);
      secondElem = Math.floor(Math.random() * 36);
      change = this.deck[firstElem];
      this.deck[firstElem] = this.deck[secondElem];
      this.deck[secondElem] = change;
    }
  }

  startNewGame() {
    if (!this.firstGame) {
      this.finish();
    }
    this.firstGame = false;
    this.player.hand.map((card) => { card.src = `../assets/img/outside.png` });
    this.computer.hand.map((card) => { card.src = `../assets/img/outside.png` });
    this.showResult = false;
    this.deck = this.deck.concat(this.player.hand);
    this.deck = this.deck.concat(this.computer.hand);
    this.player.hand = [];
    this.player.sum = 0;
    this.computer.hand = [];
    this.computer.sum = 0;
    this.deckSort(30);
    while (this.computer.sum <= 15) {
      this.computer.hand.push(this.deck[this.deck.length - 1]);
      this.deck.pop();
      this.computer.sum += this.computer.hand[this.computer.hand.length - 1].value;
    }
    if (this.computer.sum > 21) {
      this.finish();
    }
  }

  getYou() {
    if (this.player.sum > 21) {
      alert('That is enough already! Bust');

      return
    }
    this.player.hand.push(this.deck[this.deck.length - 1]);
    this.deck.pop();
    this.player.hand[this.player.hand.length - 1].src = `../assets/img/${this.player.hand[this.player.hand.length - 1].name}${this.player.hand[this.player.hand.length - 1].suits}.png`
    this.player.sum += this.player.hand[this.player.hand.length - 1].value;
  }

  finish() {
    this.computer.hand.map((card) => { card.src = `../assets/img/${card.name}${card.suits}.png` });
    this.showResult = true;

    if (this.computer.sum > 21) {
      alert('At the computer bust!');
      this.player.numberWins++;
      this.firstGame = true;
      return
    }
    if (this.computer.sum === this.player.sum) {
      alert('DRAW!');
      return
    }
    if (this.computer.sum > this.player.sum || this.player.sum > 21) {
      alert('YOU LOSE!!!!! LOSER!!!');
      this.computer.numberWins++;
    } else {
      alert('YOU WIN!!!!! WINNER!!!');
      this.player.numberWins++;
    }
    this.firstGame = true;
  }
}