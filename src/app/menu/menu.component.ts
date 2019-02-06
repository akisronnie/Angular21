import { Component, OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public constructor(
    private _dataBaseService: DataBaseService,
    private router: Router) {}

  public ngOnInit(): void {
    if (this._dataBaseService.activeUser === null) {
    const localStorageBlackJack: string = localStorage.getItem('BlackJack');
    const  userFromLocalStorage: TPlayer = localStorageBlackJack ? JSON.parse(localStorageBlackJack) : null;
      if (userFromLocalStorage === null) {
        alert('Please register');
        this.router.navigate(['/intro']);
      } else {
        this._dataBaseService.activeUser = userFromLocalStorage;
      }
  }
  }

}
