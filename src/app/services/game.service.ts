import { Injectable } from '@angular/core';

@Injectable()

export class GameService {

  private readonly _NUMBER_OF_SORT: number = 36;
  private readonly _CONDITIONS_WIN: number = 21;


  public generateDeck (): TCard[] {
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

  public deckSort(deck: TCard[]): TCard[] {
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

  public getWinner(computer: TPlayer, player: TPlayer): TPlayer {
    if (computer.sum > this._CONDITIONS_WIN) {
       return player;
    }

    if (computer.sum === player.sum) {
      return;
    }

    if (computer.sum > player.sum || player.sum > this._CONDITIONS_WIN) {
      return computer;
    }

      return player;
  }
}
