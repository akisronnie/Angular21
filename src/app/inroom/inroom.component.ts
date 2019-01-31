import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataBaseService } from '../data-base.service';

import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-inroom',
  templateUrl: './inroom.component.html',
  styleUrls: ['./inroom.component.css']
})
export class InroomComponent implements OnInit {

  public id: string;
  public userName:string;
  public roomDetails;
  public actionRoom;

  constructor(private route: ActivatedRoute, public dataBaseService:DataBaseService) {
  }


  ngOnInit() {
    this.route.params
      .pipe(
        pluck('id')
      )
      .subscribe((id: string) => {
        this.id = id;
      });
    this.userName = this.dataBaseService.userName;
    if (this.userName === undefined) {
  //   this.userName = prompt('Enter you name');
    }
    this.roomDetails = this.dataBaseService.getRoomDetails(this.id);

   // this.roomDetails.valueChanges().subscribe((el)=>{this.actionRoom=el; console.log(el)})
    console.log(this.roomDetails);
  }
show(){
  console.log(this.roomDetails);
}
}
