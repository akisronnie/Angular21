type Player = {
  hand: Card[],
  sum: number,
  numberWins: number
}

type Card = {
  name: string,
  value: number,
  suits: string,
  src: string
}