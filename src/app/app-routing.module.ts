import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '',
  redirectTo: '/menu',
  pathMatch: 'full'
  }, {
    path: 'game',
    component: GameComponent
  }, {
    path: 'menu',
    component: MenuComponent
  }, {
    path: '**',
    component: ErrorComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
