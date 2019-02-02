type TRoom = {
  id : number,
  maxplayers : number
  players : TPlayer1[]
}

type TPlayer1 = {
  id: number,
  name:string
  isActive:boolean
  playerMaster:boolean
}



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
type TResultField = {
  isShowResult: boolean,
  player: TPlayer,
  computer: TPlayer
}
type TResultScore = {
  message: string,
  player: TPlayer,
  computer: TPlayer
}
