import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent implements OnInit {
  public message: string = 'Welcome to game';
  public activeRoom = {id : 0, players : []};
  public activeRoomPlayers;
  
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


  private readonly _CONDITIONS_COMPUTER_DRAW: number = 15;
  private readonly _CONDITIONS_WIN: number = 21;


  private _deck: TCard[] = [];
  private _firstGame: boolean = true;


  public constructor(
    private _gameService: GameService,
    private _dataBaseService:DataBaseService
    ) {}

  public ngOnInit(): void {

   this._dataBaseService.getDeck().subscribe((deck:TCard[])=>{this._deck = deck})


    this._dataBaseService.getRoom$(this._dataBaseService.ActiveRoomId).subscribe((room: {id: number, players : []})=>{
      this.activeRoom = room;
      this.activeRoomPlayers =  Object.values(room.players);

    
    })
    
    if (this._dataBaseService.playerMaster){
      this._deck = this._gameService.generateDeck();
      this._deck = this._gameService.deckSort(this._deck);
      this._dataBaseService.pushDeck(this._deck);
    }

    this._deck = this._gameService.generateDeck();
    this._deck = this._gameService.deckSort(this._deck);
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
    this._deck = this._gameService.deckSort(this._deck);
    this.getYou();
  }

  public getYou(): void  {
    this.player.hand.push(this._deck[this._deck.length - 1]);
    this._deck.pop();
    this._dataBaseService.pushDeck(this._deck);
    this._dataBaseService.pushHandCard(this.player.hand);
    this.player.hand[this.player.hand.length - 1].src = `../assets/img/${this.player.hand[this.player.hand.length - 1].name}${this.player.hand[this.player.hand.length - 1].suits}.png`;
    this.player.sum += this.player.hand[this.player.hand.length - 1].value;

    // if (this.player.sum >= this._CONDITIONS_WIN) {
    //   this.fieldResult.isShowResult = true;
    //   this.finish();
    //   this.computer.hand.map((card: TCard) => { card.src = `../assets/img/${card.name}${card.suits}.png`; });

    //   return;
    // }

    this._getComp();
  }

  public finish(): void  {
    if (this.computer.sum <= this._CONDITIONS_COMPUTER_DRAW) {
      this._getComp();
    }

    this.computer.hand.map((card: TCard) => { card.src = `../assets/img/${card.name}${card.suits}.png`; });
    this.fieldResult.isShowResult = true;

     const winner: TPlayer = this._gameService.getWinner(this.computer, this.player);

     if (winner === this.player) {
      this.scoreResult.message = 'YOU WIN!!!!! WINNER!!!';
      this.player.numberWins++;

      return;
     }

     if (winner === this.computer) {
      this.scoreResult.message = 'YOU LOSE!!!!! LOSER!!!';
      this.computer.numberWins++;

      return;
     }

     this.scoreResult.message = 'DRAW!';
  }


  private _getComp(): void {
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
