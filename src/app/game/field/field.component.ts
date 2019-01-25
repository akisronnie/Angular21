import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  @Input() public resultField: TResultField;

  @Output() public getPlayer: EventEmitter<void> = new EventEmitter;
  @Output() public finishGame: EventEmitter<void> = new EventEmitter;
}
