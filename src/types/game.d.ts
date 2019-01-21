type TPlayer = {
  hand: TCard[],
  sum: number,
  numberWins: number
}
 type TCard = {
  name: string,
  value: number,
  suits: string,
  src: string
}
type TResultToField = {
  isShowResult: boolean,
  player: TPlayer,
  computer: TPlayer
}
type TResultToScore = {
  message: string,
  player: TPlayer,
  computer: TPlayer
}