import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataBaseService } from '../data-base.service';

import { map, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-inroom',
  templateUrl: './inroom.component.html',
  styleUrls: ['./inroom.component.css']
})
export class InroomComponent implements OnInit, OnDestroy {

  public id: string;
  public activeRoom:TRoom = {
    id:0,
    maxplayers : 0,
    players : []};

  public userName:string;
  // public roomDetails;
  // public actionRoom;

  constructor(private _route: ActivatedRoute, private _dataBaseService:DataBaseService) {
  }

  ngOnInit() {
    this.userName = this._dataBaseService.userName;
    this._route.params
      .pipe(
        pluck('id'),
        switchMap((roomId: number) => this._dataBaseService.getRoom$(roomId))
      )
      .subscribe((room: TRoom) => {
        this.activeRoom = room;
      });

  //   this.userName = this.dataBaseService.userName;
  //   if (this.userName === undefined) {
  // //   this.userName = prompt('Enter you name');
  //   }
  //   this.roomDetails = this.dataBaseService.getRoomDetails(this.id);

  //  // this.roomDetails.valueChanges().subscribe((el)=>{this.actionRoom=el; console.log(el)})
  //   console.log(this.roomDetails);
  }
// show(){
//   console.log(this.roomDetails);
// }
  ngOnDestroy() {
    this._dataBaseService.removeUserFromRoom(this.activeRoom.id);
  }
}
