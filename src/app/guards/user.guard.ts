import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { map, tap } from 'rxjs/operators';

@Injectable()

export class UserGuard implements CanActivate {

  public constructor(
    private _userService: UserService,
    private _router: Router) {}

  public canActivate(): Observable<boolean> {
    return this._userService.getUser$()
    .pipe(
      tap((user: TPlayer) => {
        if (!user) {
          this._router.navigate(['/intro']);
        }
      }),
      map(Boolean)
      );
  }
}
