import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-multiplayer-menu',
  templateUrl: './multiplayer-menu.component.html',
  styleUrls: ['./multiplayer-menu.component.css']
})

export class MultiplayerMenuComponent implements OnInit {
  public rooms: TRoom[];
  public newRoom: TRoom = {
    id: 0,
    maxplayers: 2,
    players: []
  };

  public userName: string;
  private _newIdForNewRoom: number = 0;
  public isShowAddRoomMenu: boolean = false;

  public constructor(
    private dataBaseService: DataBaseService,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
    this.dataBaseService.getRooms().subscribe((rooms: TRoom[]) => { this.rooms = rooms; });
  }

  public selectRoom(id: number): void {
    let userId: number = -1;
    let oneRoom: TRoom;
    let playerMaster: boolean = false;

    this.rooms.forEach((room: TRoom) => {
      if (room.id === id) { oneRoom = room; }
    });

    if (oneRoom.players !== undefined) {
      for (const player in oneRoom.players) {
        if (oneRoom.players[player].id > userId) {
          userId = oneRoom.players[player].id;
        }
      }

      if (oneRoom.maxplayers <= Object.keys(oneRoom.players).length) {
        alert('Max players limit!!');

        return;
      }
      
    }

    userId++;

    if (userId === 0) {
      playerMaster = true;
    }

    this.dataBaseService.userId = userId;
    this.dataBaseService.userName = this.userName;
    this.dataBaseService.activeRoomId = id;
    const newPlayer: TPlayer = { id: userId, name: this.userName, isActive: false, playerMaster, sum: 0 };
    this.dataBaseService.addPlayerToRoom(newPlayer, id);
    this.dataBaseService.addPlayerToRoomOrder(userId, playerMaster);
    this.router.navigate(['/inroom', id]);
  }

  public addNewRoom(): void {
    this.rooms.forEach((room: TRoom) => {
      if (room.id > this._newIdForNewRoom) {
        this._newIdForNewRoom = room.id;
      }
    });

    this._newIdForNewRoom++;
    this.newRoom.id = this._newIdForNewRoom;
    this.dataBaseService.addNewRoom(this.newRoom);
    this.isShowAddRoomMenu = !this.isShowAddRoomMenu;
  }

  public deleteRoom(id: number): void {
    this.dataBaseService.deleteRoom(id);
  }

}
