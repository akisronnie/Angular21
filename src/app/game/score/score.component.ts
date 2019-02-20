import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})

export class ScoreComponent  {

  @Input() public activeRoom: TResultScore;
  @Input() public user: TResultScore;
  @Input() public message: TResultScore;
  @Input() public youTurn: boolean = false;
  @Input() public finish: boolean = false;

  @Output() public getPlayer: EventEmitter<void> = new EventEmitter;
  @Output() public finishGame: EventEmitter<void> = new EventEmitter;
  @Output() public enoughGame: EventEmitter<void> = new EventEmitter;
  @Output() public userReady: EventEmitter<void> = new EventEmitter;
  @Output() public addBots: EventEmitter<void> = new EventEmitter;
  @Output() public deleteBots: EventEmitter<void> = new EventEmitter;


 public ready(): void {
  this.userReady.emit();
 }

 public addBot(): void {
  this.addBots.emit();
 }

 public deleteBot(): void {
  this.deleteBots.emit();
 }

}
