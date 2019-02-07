import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataBaseService } from '../data-base.service';
import { Router } from '@angular/router';
import { takeUntil, map, pluck, switchMap } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-inroom',
  templateUrl: './inroom.component.html',
  styleUrls: ['./inroom.component.css']
})

export class InroomComponent implements OnInit, OnDestroy {

  public activeRoom: TRoom = null;
  public activePlayer: TPlayer;
  private goToGame: boolean = false;
  private destroy$$: Subject<number> = new Subject();

  public constructor(
    private _route: ActivatedRoute,
    private _dataBaseService: DataBaseService,
    private router: Router) {

  }

  public playerReady(): void {
    this.activePlayer.isActive = !this.activePlayer.isActive;
    this._dataBaseService.playerReady(this.activeRoom.id, this.activePlayer);
  }

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

    this.activePlayer = this._dataBaseService.activeUser;

    this._route.params
      .pipe(
        pluck('id'),
        switchMap((roomId: number) => this._dataBaseService.getRoom$(roomId)),
        takeUntil(this.destroy$$)
      )
      .subscribe((room: TRoom) => {
        if (room === null) {
          alert('room does not exist');
          this.router.navigate(['/multiplayer']);

          return;
         }

        const userInRoom: boolean = Object.values(room.players).some((player: TPlayer) => {
           if (player.id === this._dataBaseService.activeUser.id) {return true; }
          });

        if (!userInRoom && room.maxplayers <= Object.values(room.players).length ) {
          alert('Sorry, room is full');
          this.router.navigate(['/multiplayer']);
        }

        if (userInRoom !== true) {
          this._dataBaseService.activeRoomId = room.id;
          this._dataBaseService.addPlayerToRoom();
          this._dataBaseService.addPlayerToRoomOrder();
        }

        this._dataBaseService.activeRoomId = room.id;
        this.activeRoom = room;
        this._checkPlayerMaster(room);

        Object.values(room.players).forEach((player: TPlayer) => {
          if (player.id === this._dataBaseService.activeUser.id) {
            this._dataBaseService.activeUser === player;
            this.activePlayer = player;
          }
        });

       this.goToGame = Object.values(room.players).every((onePlayer: TPlayer) => {
          if (onePlayer.isActive) {
            return true;
          } else {
            return false;
          }
        });
        if (this.goToGame) {this.router.navigate(['/game']); }
      });
  }

  private _checkPlayerMaster(room: TRoom): void {
    if (Object.values(room.players).length === 1) {
      this._dataBaseService.setPlayerMaster(this.activePlayer.id);
      this._dataBaseService.activeUser.playerMaster = true;
    }
  }

  public ngOnDestroy(): void {
     if (this.goToGame === false) {
       this._dataBaseService.removeUserFromRoom(this.activeRoom.id);
       this._dataBaseService.removeUserFromOrder();
       this._dataBaseService.activeRoomId = null;

       if (this.activePlayer.playerMaster && this.activeRoom.players !== undefined) {
         const players: TPlayer[] = Object.values(this.activeRoom.players);

         for (let index: number = 0; index < players.length; index++) {
          if (!players[index].playerMaster) {
            this._dataBaseService.setPlayerMaster(players[index].id);
            break;
          }
         }
       }
     }


    this.destroy$$.next();
  }
}
