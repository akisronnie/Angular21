import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable(
)

export class DataBaseService {

  public constructor(
    private dataBase: AngularFireDatabase) {}

  public addNewRoom(newRoom: TRoom): void {
    this.dataBase.list('rooms').update('room' + newRoom.id, newRoom);
  }

  public deleteRoom(id: number): void {
    this.dataBase.list('rooms').remove('room' + id);
  }

  public getRooms$(): Observable<TRoom[]> {
    return this.dataBase.list<TRoom>('rooms').valueChanges();
  }

  public addPlayerToRoom(roomId: number, player: TPlayer): void {
    this.dataBase.object(`/rooms/room${roomId}/players/${player.id}`).update(player);
  }

  public getUsers$ (): Observable<TPlayer[]> {
    return this.dataBase.list<TPlayer>(`/users`).valueChanges();
  }

  public addUsers(newUser: TPlayer ): void {
    this.dataBase.object(`/users/${newUser.id}`).update(newUser);
  }

  public getRoom$(id: number): Observable<TRoom> {
    return this.dataBase.object<TRoom>(`/rooms/room${id}`).valueChanges();
  }

  public setPlayerMaster(roomId: number, userId: number): void {
    this.dataBase.object(`/rooms/room${roomId}/players/${userId}`).update({playerMaster : true, turn : true });
  }

  public playerReady(roomId: number, userId: number, ready: boolean ): void {
    this.dataBase.object(`/rooms/room${roomId}/players/${userId}`).update({isActive : ready});
  }

  public pushDeck(roomId: number, deck: TCard[]): void {
    this.dataBase.object(`/rooms/room${roomId}/deck`).set(deck);
  }

  public pushHandCard(roomID: number, userId: number, hand: TCard[]): void {
    this.dataBase.object(`/rooms/room${roomID}/players/${userId}/hand`).set(hand);
  }

  public savePlayerScore(roomID: number, userId: number, score: number ): void {
    this.dataBase.object(`/rooms/room${roomID}/players/${userId}`).update({ sum: score });
  }

  public gameStarted(roomID: number, status: boolean): void {
    this.dataBase.object(`/rooms/room${roomID}/`).update({ started: status });
  }

  public setEnoughDraw(roomId: number, userId: number, status: boolean): void {
    this.dataBase.object(`/rooms/room${roomId}/players/${userId}`).update({  enough: status });
  }

  public changeTurn(roomId: number, userId: number, status: boolean): void {
    this.dataBase.object(`/rooms/room${roomId}/players/${userId}`).update({ turn: status });
  }

  public removeUserFromRoom(roomId: number, userId: number): void {
    this.dataBase.object(`/rooms/room${roomId}/players/${userId}`).remove();
  }

  public updateScore(roomId: number, userId: number, field: string, amount: number): void {
    this.dataBase.object(`/rooms/room${roomId}/players/${userId}`).update({ [field] : amount });
  }
}