import { Component, Input } from '@angular/core';

import { DataBaseService } from '../../services/data-base.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})

export class FieldComponent {

  @Input() public room: TRoom;
  @Input() public user: TRoom;
  @Input() public isYouTurn: boolean = false;

  public readonly cardBackView: string = '../../assets/img/outside.png';

  public constructor( public dataBaseService: DataBaseService) {}
}
