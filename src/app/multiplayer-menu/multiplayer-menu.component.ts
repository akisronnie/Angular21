import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multiplayer-menu',
  templateUrl: './multiplayer-menu.component.html',
  styleUrls: ['./multiplayer-menu.component.css']
})

export class MultiplayerMenuComponent implements OnInit {
  public rooms : TRoom[];
  public newRoom: TRoom = {
    id : 0,
    maxplayers:2,
    players : []
  };

  public userName:string;
  private _newIdForNewRoom: number = 0;
  public isShowAddRoomMenu: boolean = false;

  constructor(
    private dataBaseService : DataBaseService,
    private router: Router
    ){ 
  }

  ngOnInit(): void {
    this.dataBaseService.getRooms().subscribe((rooms:TRoom[])=>{this.rooms = rooms;})
  }

  selectRoom(id): void{
    let userId=-1;
    let oneRoom;
    this.rooms.forEach((room) =>{ if (room.id === id) oneRoom = room});
    console.log(oneRoom);

   
      if (oneRoom.players != undefined) {
        oneRoom.players.forEach((player) => { if (player.id > userId) { userId = player.id } })
        
        if ( oneRoom.maxplayers < oneRoom.players.length) {
          alert('Max players limit!!');
         
          return;
        }
      }
      
      userId++;
      this.dataBaseService.userId = userId;
      this.dataBaseService.userName = this.userName;
      let newPlayer = { id: userId, name: this.userName }
      this.dataBaseService.addPlayerToRoom(newPlayer, id);
      this.router.navigate(['/inroom', id]);
      
  }


  addNewRoom(): void {
    this.rooms.forEach((room) => {
      if (room.id > this._newIdForNewRoom){
        this._newIdForNewRoom = room.id; 
      }
    }); 

    this._newIdForNewRoom++;
    this.newRoom.id = this._newIdForNewRoom;
    this.dataBaseService.addNewRoom(this.newRoom);
    this.isShowAddRoomMenu = !this.isShowAddRoomMenu;
  }

   deleteRoom(id): void{
    this.dataBaseService.deleteRoom(id);
  }

}
