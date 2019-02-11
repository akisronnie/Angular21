import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataBaseService } from '../../services/data-base.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})

export class ScoreComponent  {

 @Input() public activeRoom: TResultScore;
 @Input() public user: TResultScore;
 @Input() public message: TResultScore;

  
  //  @Input() public activeRoom: {} = {id : 0};
  @Input() public youTurn: boolean = false;
  @Input() public finish: boolean = false;
  //  @Input() public roomId: number;
  @Output() public getPlayer: EventEmitter<void> = new EventEmitter;
  @Output() public finishGame: EventEmitter<void> = new EventEmitter;
  @Output() public enoughGame: EventEmitter<void> = new EventEmitter;
  @Output() public userReady: EventEmitter<void> = new EventEmitter;
  
 public constructor(private _dataBaseService: DataBaseService, private router: Router) {}
 

 public ready(): void {
  this.userReady.emit();
 }
}
