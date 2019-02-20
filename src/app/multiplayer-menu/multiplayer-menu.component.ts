import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UserService } from '../services/user.service';
import { DataBaseService } from '../services/data-base.service';

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


  private _destroy$$: Subject<void> = new Subject();

  public constructor(
    private _dataBaseService: DataBaseService,
    private _userService: UserService,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    this._dataBaseService.getRooms$()
      .pipe(
        takeUntil(this._destroy$$)
      )
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
    const selectedRoom: TRoom = this.rooms.find((room: TRoom) => room.id === roomId);

      if (selectedRoom.players
        && selectedRoom.maxplayers <= Object.keys(selectedRoom.players).length) {
        alert('Max players limit!!');

        return;
      }

      if (selectedRoom.started) {
        alert('Sorry, game is started');

        return;
      }

    this._router.navigate(['/game', roomId]);
  }

  public addNewRoom(): void {

    let _newIdForNewRoom: number = this.rooms.length !== 0 ?  Math.max(...this.rooms.map((room: TRoom) => room.id)) : 1;

    const newRoom: TRoom = {
      id : ++_newIdForNewRoom,
      maxplayers: this.maxPlayers,
      players: [],
      single : false,
      started: false
    };

    this._dataBaseService.addNewRoom(newRoom);
    this._router.navigate(['/game', newRoom.id]);
  }

  public deleteRoom(id: number): void {
    const selectedRoom: TRoom = this.rooms.find((room: TRoom) => room.id === id);

    if ( selectedRoom.players ) {
      alert('There are players in the room');
    } else {
      this._dataBaseService.deleteRoom(id);
    }
  }

  public ngOnDestroy(): void {
    this._destroy$$.next();
    this._destroy$$.complete();
  }
}