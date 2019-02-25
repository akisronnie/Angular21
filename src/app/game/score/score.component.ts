import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})

export class ScoreComponent  {

  @Input() public room: TResultScore;
  @Input() public user: TResultScore;
  @Input() public message: TResultScore;
  @Input() public isYouTurn: boolean = false;

  @Output() public getPlayer: EventEmitter<void> = new EventEmitter;
  @Output() public finishGame: EventEmitter<void> = new EventEmitter;
  @Output() public stopTakingCards: EventEmitter<void> = new EventEmitter;
  @Output() public toggleReady: EventEmitter<void> = new EventEmitter;
  @Output() public addBot: EventEmitter<void> = new EventEmitter;
  @Output() public deleteBot: EventEmitter<void> = new EventEmitter;


 public ready(): void {
  this.toggleReady.emit();
 }

 public addAnyBot(): void {
  this.addBot.emit();
 }

 public deleteAnyBot(): void {
  this.deleteBot.emit();
 }
}