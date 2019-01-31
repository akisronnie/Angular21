import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable(
)

export class DataBaseService {

  public rooms;
  public newIdForNewRoom = 0;
  public userName;
  public mainRooms;

  constructor(public dataBase: AngularFireDatabase ) {
    this.rooms = dataBase.list('rooms').valueChanges();

    this.dataBase.object('rooms/room'+29).valueChanges().subscribe((el)=>{debugger})

    this.rooms.subscribe((rooms)=>{ 
      this.mainRooms = rooms;
      rooms.forEach((element) => {
      if (element.id > this.newIdForNewRoom){
        this.newIdForNewRoom = element.id; 
      }
      

    }); 

    this.newIdForNewRoom++;
  });
  
  //  this.rooms = db.list('rooms').valueChanges().subscribe((rooms)=>{this.room = rooms; console.log(rooms)});
  
      // db.list('rooms').set('room1', { zuza: 1, zuz2:2, zuz3:3 });
      // db.list('rooms').set('room1', { zuza2: 2 });
      // console.log(this.rooms);
      //   }
      
      //  addRoom() {
      //     this.itemValue += 1;
      //     this.db.list('rooms').set('room'+ this.itemValue , { room: this.itemValue });
          
      //   }
      
      //   deleteRoom(event){
      //     let idValue = event.target.attributes['id'].value;
      //     this.db.list('/rooms').remove('room' + idValue);
      //   }
      // }
  
  // this.bb = db;
  // this.objectTest = db.object('list');
  // // db.list('list').
  //     db.list('list').valueChanges().subscribe((lists)=>{this.list=lists; console.log(this.list)});
  //     //this.myData = db.list('list');
    
  //     // db.list('list').valueChanges().subscribe(console.log);
  //    // this.myData.push({name:'hello from Ang'});
  //    // db.list('list').remove('name : qwert');
  //    //  db.list('list').push('name : qwert11');
  //    //  const relative = db.object('item');     
    // }
  
    // public addfunc() {
    //   this.count++;
    //   console.log(this.room);
    //  this.db.list('rooms').set('room1', (this.room.zuza = this.count) );
    //  this.bb.list('list').push({name : this.inputText, value : 0, id : 1235 });
    // this.objectTest.update({name : this.inputText});
    //  this.inputText='';
    // }
  
    // public deletefunc() {
    //   // this.bb.list('list').remove();
    // }
  
    // public deleteOne(el) {
    //   // console.log(this.bb.object('list'));
      // console.log(this.bb.object('list').snapshotChanges());
  
      // this.bb.list('/list').snapshotChanges().map(changes => {
      //   return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      // }).subscribe(customers => {
      //   this.customers = customers;
      //   console.log(this.customers)
      // });
  
    //  this.bb.list('list').remove('-LXUGNpoIxAaBeqVjCSY');
   // }
 }

 getRoomDetails(id){
   let zuza;
   
   this.mainRooms.forEach((el)=>{ if (el.id == id) {zuza = el}})
   // return this.dataBase.object('room'+id);
   return zuza;
 }

 addRoom(){
  this.dataBase.list('rooms').update('room'+this.newIdForNewRoom, { zuza: 'hjhj', zuz2:2, zuz3:3, id: this.newIdForNewRoom });

 }
 deleteRoom(id){


  this.dataBase.list('rooms').remove('room'+id);
}

}
