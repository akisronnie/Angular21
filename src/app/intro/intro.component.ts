import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit, OnDestroy {
  public userName: string;
  public userPassword: string;
  public users: TPlayer[];

  private destroy$$: Subject<number> = new Subject();

  public constructor(
     private _dataBaseService: DataBaseService,
     private router: Router) { }

  public ngOnInit(): void {

    const localStorageBlackJack: string = localStorage.getItem('BlackJack');
    const  userFromLocalStorage: TPlayer = localStorageBlackJack ? JSON.parse(localStorageBlackJack) : null;

    if (userFromLocalStorage !== null) {
      const enter: boolean = confirm(`Hello ${userFromLocalStorage.name}, Do you want to enter with another name?`);

      if (enter !== true) {
        this.EnterToMenu();
      }
    }

    this._dataBaseService.getUsers().pipe(
      takeUntil(this.destroy$$))
      .subscribe((users: TPlayer[]) => {this.users = users; });

  }

  public enter(): void {
    if (this.userName === undefined || this.userName === '' || this.userPassword === undefined || this.userPassword === '') {
      alert('Enter name and password!!');
      return;
    }

    let saveUser: TPlayer;
    const existUser: boolean = this.users.some((user: TPlayer) => {if (user.name === this.userName) {saveUser = user; return true; }});

    if (existUser) {
      if (saveUser.pass === this.userPassword) {
        this._dataBaseService.activeUser = saveUser;
        localStorage.setItem('BlackJack', JSON.stringify(saveUser));
        this.EnterToMenu();
        return;

      } else {
        alert('Password incorrect!');

        return;
      }
    }

    const date: Date = new Date();
    const components: number[] = [
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds()
    ];

    const userId: number = Number(components.join(''));

    const newUser: TPlayer = {
      name: this.userName,
      pass: this.userPassword,
       id: userId,
        wins: 0,
        loses: 0,
        isActive: false,
        playerMaster: false,
        sum: 0
      };

    this._dataBaseService.addUsers(newUser);
    this._dataBaseService.activeUser = newUser;
    localStorage.setItem('BlackJack', JSON.stringify(newUser));
    this.EnterToMenu();

  }

  private EnterToMenu(): void {
    this.router.navigate(['/menu']);
  }

  public selectUser(userName: string): void {
    this.userName = userName;

  }

  public ngOnDestroy(): void {
    this.destroy$$.next();
  }
}
