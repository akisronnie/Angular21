import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  @Input() public isShowResult: boolean;
  @Input() public player: TPlayer;
  @Input() public computer: TPlayer;

  @Output() public getPlayer: EventEmitter<void> = new EventEmitter;
  @Output() public finishGame: EventEmitter<void> = new EventEmitter;

 public getYou(): void {
  this.getPlayer.emit();
 }

 public finish(): void {
  this.finishGame.emit();
}

}
