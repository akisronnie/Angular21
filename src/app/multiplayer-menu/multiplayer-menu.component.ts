import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-multiplayer-menu',
  templateUrl: './multiplayer-menu.component.html',
  styleUrls: ['./multiplayer-menu.component.css']
})


export class MultiplayerMenuComponent implements OnInit, OnDestroy {

  public rooms: TRoom[];
  public maxPlayers: number = 2;
  private destroy$$: Subject<number> = new Subject();
  private newRoom: TRoom = {
    id: 0,
    maxplayers: 2,
    players: [],
    order : {}
  };

  public isShowAddRoomMenu: boolean = false;

  public constructor(
    private _dataBaseService: DataBaseService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    if (this._dataBaseService.activeUser === null) {
      const localStorageBlackJack: string = localStorage.getItem('BlackJack');
      const  userFromLocalStorage: TPlayer = localStorageBlackJack ? JSON.parse(localStorageBlackJack) : null;
        if (userFromLocalStorage === null) {
          alert('Please register');
          this.router.navigate(['/intro']);
        } else {
          this._dataBaseService.activeUser = userFromLocalStorage;
        }
    }

    this._dataBaseService.getRooms().pipe(takeUntil(this.destroy$$)).subscribe((rooms: TRoom[]) => { this.rooms = rooms; });
  }


  public selectRoom(id: number): void {
    let selectedRoom: TRoom;

    this.rooms.forEach((room: TRoom) => {
      if (room.id === id) { selectedRoom = room; }
    });

      if (selectedRoom.players !== undefined && selectedRoom.maxplayers <= Object.keys(selectedRoom.players).length) {
        alert('Max players limit!!');

        return;
      }

      this._dataBaseService.activeRoomId = id; //// delete

      if (selectedRoom.players === undefined) {
       this._dataBaseService.setPlayerMaster(this._dataBaseService.activeUser.id);
      }

    this._dataBaseService.addPlayerToRoom();
    this._dataBaseService.addPlayerToRoomOrder();
    this.router.navigate(['/inroom', id]);
  }

  public addNewRoom(): void {
    let _newIdForNewRoom: number = 0;

    this.rooms.forEach((room: TRoom) => {
      if (room.id > _newIdForNewRoom) {
        _newIdForNewRoom = room.id;
      }
    });
    _newIdForNewRoom++;
    this.newRoom.id = _newIdForNewRoom;
    this._dataBaseService.addNewRoom(this.newRoom);
    this.isShowAddRoomMenu = !this.isShowAddRoomMenu;
  }

  public deleteRoom(id: number): void {
    let selectRoom: TRoom;
    this.rooms.forEach((room: TRoom) => {
      if (room.id === id) {
        selectRoom = room;
      }
    });

    if ( selectRoom.players !== undefined && Object.keys(selectRoom.players).length > 0 ) {
      alert('There are players in the room');
    } else {
      this._dataBaseService.deleteRoom(id);
    }
  }

  public ngOnDestroy(): void {
    this.destroy$$.next();
  }

}
