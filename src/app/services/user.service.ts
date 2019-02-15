import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable()

export class UserService {

  private _user$$: ReplaySubject<TPlayer> = new ReplaySubject(1);

  public constructor( private _localStorageService: LocalStorageService ) {
      this._user$$.next(this._localStorageService.getItem('BlackJack'));
  }

  public setUser(user: TPlayer): void {
    this._localStorageService.setItem('BlackJack', user);
    this._user$$.next(user);
  }

  public getUser$(): Observable<TPlayer> {
    return this._user$$.asObservable();
  }
}
