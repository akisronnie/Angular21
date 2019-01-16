export type Player = {
  hand: Card[],
  sum: number,
  numberWins: number
}

export type Card = {
  name: string,
  value: number,
  suits: string,
  src: string
}