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

  // public userName: string;
  // public userId: number;
  // public playersInRoom: number;
  // public isPlayerReady: boolean;
  // public activeRoomPlayers: {}[] = [];
  private goToGame: boolean = false;
  private destroy$$: Subject<number> = new Subject();

  public constructor(
    private _route: ActivatedRoute,
    private _dataBaseService: DataBaseService,
    private router: Router) {
      
  }

  // public playerReady(): void {
  //   this.activePlayer.isActive = !this.activePlayer.isActive;
  //   this._dataBaseService.playerReady(this.activeRoom.id, this.activePlayer);
  // }

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
    // this.userName = this._dataBaseService.userName;
    // if (this.userName === undefined) { this.router.navigate(['/multiplayer']); }
    // // if (this.userName == undefined) this.userName = 'Anonimus'
    // this.userId = this._dataBaseService.userId;
    // // if (this.userId == undefined) this.userId = new Date().getMilliseconds();

    this._route.params
      .pipe(
        pluck('id'),
        switchMap((roomId: number) => this._dataBaseService.getRoom$(roomId)),
        takeUntil(this.destroy$$)
      )
      .subscribe((room: TRoom) => {
        if (room === null) {alert('room does not exist'); this.router.navigate(['/multiplayer']); return; }
        this._dataBaseService.activeRoomId = room.id;
        this.activeRoom = room; });


//////////////////////////////////////////


      //   this.playersInRoom = Object.keys(this.activeRoom.players).length;
      //   let goToGame: boolean = true;
      //   for (const player in room.players) {
      //     if (room.players[player].id === this.userId) {
      //       this.activePlayer = room.players[player];
      //     }

      //     if (room.players[player].isActive === false) {
      //       goToGame = false;
      //     }
      //     this.activeRoomPlayers = Object.values(room.players);
      //   }
      //   if (goToGame === true) {
      //     this._dataBaseService.isMultiplayer = true;
      //     this._dataBaseService.playerMaster = this.activePlayer.playerMaster;
      //     this.goToGame = true;
      //     this._dataBaseService.setEnoughDraw(false);
      //     this.router.navigate(['/game']);
      //   }
      // });
  }

  public ngOnDestroy(): void {
     if (this.goToGame === false) {
       this._dataBaseService.removeUserFromRoom(this.activeRoom.id);
     }

    this.destroy$$.next();
  }
}
