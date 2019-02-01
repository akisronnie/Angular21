import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable(
)

export class DataBaseService {

  // public rooms;
  // public newIdForNewRoom = 0;
     public userName;
     public userId;
  // public mainRooms;

  constructor(private dataBase: AngularFireDatabase ) {

    // this.rooms = dataBase.list('rooms').valueChanges();

   // this.dataBase.object('rooms/room'+29).valueChanges().subscribe((el)=>{debugger})

  //   this.rooms.subscribe((rooms)=>{ 
  //     this.mainRooms = rooms;
  //     rooms.forEach((element) => {

  //     if (element.id > this.newIdForNewRoom){
  //       this.newIdForNewRoom = element.id; 
  //     }
  //   }); 

  //   this.newIdForNewRoom++;
  // });
  
 }

 removeUserFromRoom(RoomId: number): void{

  this.dataBase.object(`/rooms/room${RoomId}/players/${this.userId}`).remove();

 }


 addPlayerToRoom(newPlayer, RoomId){

  this.dataBase.object(`/rooms/room${RoomId}/players/${newPlayer.id}`).update(newPlayer);
 }

  addNewRoom(newRoom): void {
    this.dataBase.list('rooms').update('room'+newRoom.id, newRoom);
  }

  getRooms(): Observable<{}[]> {
    return this.dataBase.list('rooms').valueChanges();
  }

  getRoom$(id: number): Observable<{}>{
    return this.dataBase.object(`/rooms/room${id}`).valueChanges();
  }

 
  deleteRoom(id): void{
    this.dataBase.list('rooms').remove('room'+id);
  }

//  getRoomDetails(id){

//  }

//  addRoom(newRoom){
//   newRoom.id = this.newIdForNewRoom;
//   this.dataBase.list('rooms').update('room'+this.newIdForNewRoom, newRoom);

//  }
//  deleteRoom(id){
//   this.dataBase.list('rooms').remove('room'+id);
//  } 

}
