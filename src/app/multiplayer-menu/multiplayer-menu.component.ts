import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataBaseService } from '../services/data-base.service';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-multiplayer-menu',
  templateUrl: './multiplayer-menu.component.html',
  styleUrls: ['./multiplayer-menu.component.css']
})


export class MultiplayerMenuComponent implements OnInit, OnDestroy {

  public rooms: TRoom[];
  public isShowAddRoomMenu: boolean = false;
  public user: TPlayer;
  public maxPlayers: number = 2;
  private _destroy$$: Subject<number> = new Subject();

  public constructor(
    private _dataBaseService: DataBaseService,
    private _userService: UserService,
    private router: Router
  ) {}


  public ngOnInit(): void {
    this._dataBaseService.getRooms()
      .pipe(
        takeUntil(this._destroy$$))
      .subscribe((rooms: TRoom[]) => {
        this.rooms = rooms;
      });

    this._userService.getUser$()
      .pipe(
        takeUntil(this._destroy$$))
      .subscribe((user: TPlayer) => {
        this.user = user;
      });
  }

  public selectRoom(roomId: number): void {
    let selectedRoom: TRoom;

    this.rooms.forEach((room: TRoom) => {
      if (room.id === roomId) {
        selectedRoom = room;
      }
    });

      if (selectedRoom.players !== undefined && selectedRoom.maxplayers <= Object.keys(selectedRoom.players).length) {
        alert('Max players limit!!');

        return;
      }
    this.router.navigate(['/game', roomId]);
  }

  public addNewRoom(): void {
    let _newIdForNewRoom: number = 0;

    this.rooms.forEach((room: TRoom) => {
      if (room.id > _newIdForNewRoom) {
        _newIdForNewRoom = room.id;
      }
    });

    const newRoom: TRoom = {
      id : ++_newIdForNewRoom,
      maxplayers: this.maxPlayers,
      players: [],
      order : {}
    };
    this._dataBaseService.addNewRoom(newRoom);
    this.isShowAddRoomMenu = !this.isShowAddRoomMenu;
  }

  public deleteRoom(id: number): void {
    let selectedRoom: TRoom;

    this.rooms.forEach((room: TRoom) => {
      if (room.id === id) {
        selectedRoom = room;
      }
    });

    if ( selectedRoom.players !== undefined ) {
      alert('There are players in the room');
    } else {
      this._dataBaseService.deleteRoom(id);
    }
  }

  public ngOnDestroy(): void {
    this._destroy$$.next();
  }
}
