import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataBaseService } from '../../data-base.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  @Input() public fieldResult: TResultField;
  // @Input() public activeRoom;
  // @Input() public activeRoomPlayers = [];
  @Input() public youTurn: boolean = false;
  @Input() public activeRoom: TRoom;
  @Output() public getPlayer: EventEmitter<void> = new EventEmitter;
  @Output() public finishGame: EventEmitter<void> = new EventEmitter;
  @Output() public enoughGame: EventEmitter<void> = new EventEmitter;


 public constructor(public dataBaseService: DataBaseService) {

  }
}
