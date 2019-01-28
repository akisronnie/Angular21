import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent  {

 @Input() public scoreResult: TResultScore;

 @Output() public newGame: EventEmitter<void> = new EventEmitter;

 public startNewGame(): void {
   this.newGame.emit();
 }
}
