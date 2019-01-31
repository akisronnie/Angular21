import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';


@Component({
  selector: 'app-multiplayer-menu',
  templateUrl: './multiplayer-menu.component.html',
  styleUrls: ['./multiplayer-menu.component.css'],
  host: {class: 'multiplayer-menu'}
})
export class MultiplayerMenuComponent implements OnInit {
  public rooms;
  public inputNameRoom
  public userName;

  constructor(public dataBaseService : DataBaseService){ 
    this.rooms = dataBaseService.rooms 
  }
  selectRoom(roomId){
   this.dataBaseService.userName = this.userName;

}
  addroom(){
    this.dataBaseService.addRoom()
  }
  deleteRoom(id){
    this.dataBaseService.deleteRoom(id);
  }

  ngOnInit() {
  }

}
