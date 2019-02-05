import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataBaseService } from '../../data-base.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})

export class ScoreComponent  {

 @Input() public scoreResult: TResultScore;
 @Input() public activeRoom: {} = {id : 0};
 @Input() public youTurn: boolean = false;
 @Input() public finish: boolean = false;
 @Input() public roomId: number;

 @Output() public newGame: EventEmitter<void> = new EventEmitter;
 public constructor(private _dataBaseService: DataBaseService, private router: Router) {}
 

 public startNewGame(): void {
  this.router.navigate([`/inroom/${this._dataBaseService.activeRoomId}`]);

 }
}
