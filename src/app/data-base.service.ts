import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Injectable(
)

export class DataBaseService {


  public activeUser: TPlayer = null;
  public activeRoomId: number = null;


  public playerMaster: boolean = false;
  public userName: string = 'Anonimus';
  public userId: number = null;
  public isMultiplayer: boolean = false;

  public constructor(private dataBase: AngularFireDatabase) {
  }

  public getUsers (): Observable<{}[]> {
    return this.dataBase.list(`/users`).valueChanges();
  }

  public addUsers(newUser: TPlayer ): void {
    this.dataBase.object(`/users/${newUser.id}`).update(newUser);
  }

  public addPlayerToRoom(): void {
    this.dataBase.object(`/rooms/room${this.activeRoomId}/players/${this.activeUser.id}`).update(this.activeUser);
  }

  public addPlayerToRoomOrder(): void {
    this.dataBase.object(`/rooms/room${this.activeRoomId}/order/${this.activeUser.id}`).update({ id : this.activeUser.id, turn: this.activeUser.playerMaster });
  }














  public setEnoughDraw(status: boolean): void {
    this.dataBase.object(`/rooms/room${this.activeRoomId}/order/${this.userId}`).update({  enough: status });
  }

  public changeTurn(id: number, status: boolean): void {
    this.dataBase.object(`/rooms/room${this.activeRoomId}/order/${id}`).update({ id, turn: status });
  }

  public getOrderInRoom(): Observable<{}[]> {
    return this.dataBase.list(`/rooms/room${this.activeRoomId}/order`).valueChanges();
  }

  public savePlayerScore(score: number): void {
    this.dataBase.object(`/rooms/room${this.activeRoomId}/players/${this.userId}`).update({ sum: score });
  }

  public pushHandCard(hand: TCard[]): void {
    this.dataBase.object(`/rooms/room${this.activeRoomId}/players/${this.userId}/hand`).set(hand);
  }

  public deleteHandCards(): void {
    this.dataBase.object(`/rooms/room${this.activeRoomId}/players/${this.userId}/hand`).remove();
  }

  public getDeck(): Observable<{}[]> {
    return this.dataBase.list(`/rooms/room${this.activeRoomId}/deck`).valueChanges();
  }

  public pushDeck(deck: TCard[]): void {
    this.dataBase.object(`/rooms/room${this.activeRoomId}/deck`).set(deck);
  }

  public playerReady(roomId: number, activePlayer: TPlayer): void {
    this.dataBase.object(`/rooms/room${roomId}/players/${this.userId}`).update(activePlayer);
  }
  public playerUnready(roomId: number): void {
    this.dataBase.object(`/rooms/room${roomId}/players/${this.userId}`).update({isActive : false});

  }

  public removeUserFromRoom(roomId: number): void {
    this.dataBase.object(`/rooms/room${roomId}/players/${this.userId}`).remove();
  }

 
  public addNewRoom(newRoom: TRoom): void {
    this.dataBase.list('rooms').update('room' + newRoom.id, newRoom);
  }

  public getRooms(): Observable<{}[]> {
    return this.dataBase.list('rooms').valueChanges();
  }

  public getRoom$(id: number): Observable<{}> {
    return this.dataBase.object(`/rooms/room${id}`).valueChanges();
  }

  public deleteRoom(id: number): void {
    this.dataBase.list('rooms').remove('room' + id);
  }
}
