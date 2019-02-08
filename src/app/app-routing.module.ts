import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { MenuComponent } from './menu/menu.component';
import { MultiplayerMenuComponent } from './multiplayer-menu/multiplayer-menu.component';
import { ErrorComponent } from './error/error.component';
import { InroomComponent } from './inroom/inroom.component';
import { IntroComponent } from './intro/intro.component';
import { UserGuard } from './guards/user.guard';

const routes: Routes = [
  { path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  },
  { path: 'intro',
  component: IntroComponent
},
  { path: 'game/:id',
    component: GameComponent
  },
  { path: 'menu',
    component: MenuComponent,
    canActivate: [UserGuard]
  },
  { path: 'multiplayer',
    component: MultiplayerMenuComponent,
    canActivate: [UserGuard]
  },
  { path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
