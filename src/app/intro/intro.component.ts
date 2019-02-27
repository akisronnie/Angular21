import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../services/user.service';
import { DataBaseService } from '../services/data-base.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})

export class IntroComponent implements OnInit, OnDestroy {
  public userName: string;
  public userPassword: string;
  public users: TPlayer[];

  private destroy$$: Subject<void> = new Subject();

  public constructor(
     private _dataBaseService: DataBaseService,
     private _userService: UserService,
     private _router: Router,
     private _gameService: GameService,
     private _toastr: ToastrService
  ) {}

  public ngOnInit(): void {
    this._dataBaseService.getUsers$().pipe(
      takeUntil(this.destroy$$)
      )
      .subscribe((users: TPlayer[]) => {
        this.users = Object.values(users).sort((user1: TPlayer, user2: TPlayer) => user2.wins - user1.wins);
      });
  }

  public enter(): void {
    if (!this.userName || !this.userPassword ) {
      this._toastr.error('Enter name and password!!');

      return;
    }

    const saveUser: TPlayer = this.users.find((user: TPlayer) => user.name === this.userName);

    if (saveUser) {
      if (saveUser.pass === this.userPassword) {
        this._userService.setUser(saveUser);
        this._router.navigate(['/menu']);

        return;

      } else {
        this._toastr.error('Password incorrect!');
        this.userPassword = '';

        return;
      }
    }

    const newUser: TPlayer = {
      name: this.userName,
      pass: this.userPassword,
      id: this._gameService.generateId() ,
      wins: 0,
      games: 0,
      isActive: false,
      playerMaster: false,
      sum: 0,
      isBot: false,
      turn: false,
      enough: false
    };

    this._dataBaseService.addUsers(newUser);
    this._userService.setUser(newUser);
    this._router.navigate(['/menu']);
  }

  public selectUser(userName: string): void {
    this.userName = userName;
    this.userPassword = prompt(`Enter password for ${this.userName}`);
    this.enter();
  }

  public ngOnDestroy(): void {
    this.destroy$$.next();
    this.destroy$$.complete();
  }
}
