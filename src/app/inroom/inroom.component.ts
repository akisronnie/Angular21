import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataBaseService } from '../data-base.service';
import { Router } from '@angular/router';
import { map, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-inroom',
  templateUrl: './inroom.component.html',
  styleUrls: ['./inroom.component.css']
})

export class InroomComponent implements OnInit, OnDestroy {


  public activeRoom: TRoom = {
    id: 0,
    maxplayers: 0,
    players: []
  };

  public activePlayer: TPlayer = { isActive: false, name: '', playerMaster: false, sum: 0, id: 0 };

  public userName: string;
  public userId: number;
  public playersInRoom: number;
  public isPlayerReady: boolean;
  public activeRoomPlayers: {}[] = [];
  private goToGame: boolean = false;

  public constructor(private _route: ActivatedRoute,
    private _dataBaseService: DataBaseService,
    private router: Router) {
  }

  public playerReady(): void {
    this.activePlayer.isActive = !this.activePlayer.isActive;
    this._dataBaseService.playerReady(this.activeRoom.id, this.activePlayer);
  }

  public ngOnInit(): void {
    this.userName = this._dataBaseService.userName;
    if (this.userName === undefined) { this.router.navigate(['/multiplayer']); }
    // if (this.userName == undefined) this.userName = 'Anonimus'
    this.userId = this._dataBaseService.userId;
    // if (this.userId == undefined) this.userId = new Date().getMilliseconds();

    this._route.params
      .pipe(
        pluck('id'),
        switchMap((roomId: number) => this._dataBaseService.getRoom$(roomId))
      )
      .subscribe((room: TRoom) => {
        this.activeRoom = room;
        this._dataBaseService.activeRoomId = room.id;
        this.playersInRoom = Object.keys(this.activeRoom.players).length;
        let goToGame: boolean = true;
        for (const player in room.players) {
          if (room.players[player].id === this.userId) {
            this.activePlayer = room.players[player];
          }
          if (room.players[player].isActive === false) {
            goToGame = false;
          }
          this.activeRoomPlayers = Object.values(room.players)
        }
        if (goToGame === true) {
          console.log('ALL ACTIVE');
          this._dataBaseService.isMultiplayer = true;
          this._dataBaseService.playerMaster = this.activePlayer.playerMaster;
          this.goToGame = true;
          this.router.navigate(['/game']);
        }
      });
  }

  public ngOnDestroy(): void {
    if (this.goToGame === false) {
      this._dataBaseService.removeUserFromRoom(this.activeRoom.id);
    }
  }
}
