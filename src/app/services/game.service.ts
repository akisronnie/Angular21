import { Injectable } from '@angular/core';

@Injectable()
export class GameService {
  private readonly _NUMBER_OF_SORT: number = 36;

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
    deck.forEach((card: TCard, index: number, deckInFor: TCard[]) => {
      const changeIndex: number = Math.floor(Math.random() * deck.length);
      [deckInFor[index], deckInFor[changeIndex]] = [deckInFor[changeIndex], deckInFor[index]];
    });

    return deck;
  }

  public generateId(): number {
    const date: Date = new Date();
    const idParts: number[] = [
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    ];

    return Number(idParts.join(''));
  }
}
