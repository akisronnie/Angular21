import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, Subject } from 'rxjs';
import { UserService } from './user.service';


@Injectable(
)

export class DataBaseService {


  // public activeUser: TPlayer = null;
  // public activeRoomId: number = null;
  // public playerMaster: boolean = false;
  // public userName: string = 'Anonimus';
  // public userId: number = null;
  // public isMultiplayer: boolean = false;


  public constructor(
    private dataBase: AngularFireDatabase,
    private _userService: UserService) {}

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

  public setPlayerMaster(roomId: number, userId: number): void {
    this.dataBase.object(`/rooms/room${roomId}/players/${userId}`).update({playerMaster : true });
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
    this.dataBase.object(`/rooms/room${roomId}/order/${userId}`).update({  enough: status });
  }

  public changeTurn(roomId: number, userId: number, status: boolean): void {
    this.dataBase.object(`/rooms/room${roomId}/order/${userId}`).update({ userId, turn: status });
  }

  public removeUserFromRoom(roomId: number, userId: number): void {
    this.dataBase.object(`/rooms/room${roomId}/players/${userId}`).remove();
    this.dataBase.object(`/rooms/room${roomId}/order/${userId}`).remove();
  }

  public updateScore(roomId: number, userId: number, field: string, amount: number): void {
    this.dataBase.object(`/rooms/room${roomId}/players/${userId}`).update({ [field] : amount });
    this.dataBase.object(`/users/${userId}`).update({ [field] : amount });
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
