import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Injectable(
)

export class DataBaseService {

  public playerMaster: boolean = false;
  public activeRoomId: number = 75;
  public userName: string = 'Anonimus';
  public userId: number = 15;
  public isMultiplayer: boolean = false;

  public constructor(private dataBase: AngularFireDatabase) {
  }

  public addPlayerToRoomOrder(id: number, firstPlayer: boolean): void {
    this.dataBase.object(`/rooms/room${this.activeRoomId}/order/${id}`).update({ id, turn: firstPlayer });
  }

  public savePlayerScore(score: number): void {
    this.dataBase.object(`/rooms/room${this.activeRoomId}/players/${this.userId}`).update({ sum: score });
  }

  public pushHandCard(hand: TCard[]): void {
    this.dataBase.object(`/rooms/room${this.activeRoomId}/players/${this.userId}/hand`).set(hand);
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

  public removeUserFromRoom(roomId: number): void {
    this.dataBase.object(`/rooms/room${roomId}/players/${this.userId}`).remove();
  }

  public addPlayerToRoom(newPlayer: TPlayer, roomId: number): void {
    this.dataBase.object(`/rooms/room${roomId}/players/${newPlayer.id}`).update(newPlayer);
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
