type TUser = {
  id: number,
  name: string,
  pass: string,
  wins: number,
  loses: number
}


type TPlayer = {
  id: number,
  name:string,
  pass: string,
  wins: number,
  loses: number
  isActive:boolean,
  playerMaster:boolean,
  sum: number
  hand?: TCard[]
}

type TRoom = {
  deck?: TCard[],
  id:number,
  maxplayers:number,
  players?:TPlayer[]
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
  
}
type TResultScore = {
  message: string,
  player: TPlayer,
 
}
