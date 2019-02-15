import { Component } from '@angular/core';
import { DataBaseService } from '../services/data-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public constructor(
    private _dataBaseService: DataBaseService,
    private _router: Router) { }

  public startSingleGame(): void {
    const date: Date = new Date();
    const components: number[] = [
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()
    ];
    const roomId: number = Number(components.join(''));
    const newRoom: TRoom = {
      id: roomId,
      maxplayers: 6,
      players: [],
      started: false,
      single: true
    };
    this._dataBaseService.addNewRoom(newRoom);
    this._router.navigate(['/game', newRoom.id]);
  }
}
