import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, Subject } from 'rxjs';


@Injectable(
)

export class DataBaseService {


  // public activeUser: TPlayer = null;
  // public activeRoomId: number = null;
  // public playerMaster: boolean = false;
  // public userName: string = 'Anonimus';
  // public userId: number = null;
  // public isMultiplayer: boolean = false;


  public constructor(private dataBase: AngularFireDatabase) {}

  public addNewRoom(newRoom: TRoom): void {
    this.dataBase.list('rooms').update('room' + newRoom.id, newRoom);
  }

  public deleteRoom(id: number): void {
    this.dataBase.list('rooms').remove('room' + id);
  }

  public getRooms(): Observable<{}[]> {
    return this.dataBase.list('rooms').valueChanges();
  }

  public addPlayerToRoom(roomId: number, player: TPlayer): void {
    this.dataBase.object(`/rooms/room${roomId}/players/${player.id}`).update(player);
  }

  public addPlayerToRoomOrder(roomId: number, player: TPlayer): void {
    this.dataBase.object(`/rooms/room${roomId}/order/${player.id}`).update({ id : player.id, turn: player.playerMaster });
  }

  public getUsers (): Observable<{}[]> {
    return this.dataBase.list(`/users`).valueChanges();
  }

  public addUsers(newUser: TPlayer ): void {
    this.dataBase.object(`/users/${newUser.id}`).update(newUser);
  }

  public getRoom$(id: number): Observable<{}> {
    return this.dataBase.object(`/rooms/room${id}`).valueChanges();
  }






 




  // public removeUserFromRoom(roomId: number): void {
  //   this.dataBase.object(`/rooms/room${roomId}/players/${this.activeUser.id}`).remove();
  // }

  // public removeUserFromOrder(): void {
  //   this.dataBase.object(`/rooms/room${this.activeRoomId}/order/${this.activeUser.id}`).remove();
  // }

  // public setPlayerMaster(id: number): void {
  //   this.dataBase.object(`/rooms/room${this.activeRoomId}/players/${id}`).update({playerMaster : true });
  // }

  // public playerReady(roomId: number, activePlayer: TPlayer): void {
  //   this.dataBase.object(`/rooms/room${roomId}/players/${activePlayer.id}`).update(activePlayer);
  // }

  // public savePlayerScore(score: number): void {
  //   this.dataBase.object(`/rooms/room${this.activeRoomId}/players/${this.activeUser.id}`).update({ sum: score });
  // }

  // public pushDeck(deck: TCard[]): void {
  //   this.dataBase.object(`/rooms/room${this.activeRoomId}/deck`).set(deck);
  // }

  // public pushHandCard(hand: TCard[]): void {
  //   this.dataBase.object(`/rooms/room${this.activeRoomId}/players/${this.activeUser.id}/hand`).set(hand);
  // }

  // public changeTurn(id: number, status: boolean): void {
  //   this.dataBase.object(`/rooms/room${this.activeRoomId}/order/${id}`).update({ id, turn: status });
  // }

  // public setEnoughDraw(status: boolean): void {
  //   this.dataBase.object(`/rooms/room${this.activeRoomId}/order/${this.activeUser.id}`).update({  enough: status });
  // }

  // public playerUnready(roomId: number): void {
  //   this.dataBase.object(`/rooms/room${roomId}/players/${this.activeUser.id}`).update({isActive : false});

  // }


  // public getOrderInRoom(): Observable<{}[]> {
  //   return this.dataBase.list(`/rooms/room${this.activeRoomId}/order`).valueChanges();
  // }

  // public deleteHandCards(): void {
  //   this.dataBase.object(`/rooms/room${this.activeRoomId}/players/${this.userId}/hand`).remove();
  // }

  // public getDeck(): Observable<{}[]> {
  //   return this.dataBase.list(`/rooms/room${this.activeRoomId}/deck`).valueChanges();
  // }




}
