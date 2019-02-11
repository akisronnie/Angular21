import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataBaseService } from '../../services/data-base.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent {
  @Input() public activeRoom: TRoom;
  @Input() public user: TRoom;

  @Input() public youTurn: boolean = false;




 public constructor(public dataBaseService: DataBaseService) {

  }
}
