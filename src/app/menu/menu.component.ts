import { Component } from '@angular/core';
import { DataBaseService } from '../services/data-base.service';
import { Router } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public constructor(
    private _dataBaseService: DataBaseService,
    private _router: Router,
    private _gameService: GameService
    ) {}

  public startSingleGame(): void {
    const newRoom: TRoom = {
      id: this._gameService.generateId(),
      maxplayers: 6,
      players: [],
      started: false,
      single: true
    };

    this._dataBaseService.addNewRoom(newRoom);
    this._router.navigate(['/game', newRoom.id]);
  }
}
