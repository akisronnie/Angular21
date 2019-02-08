import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ScoreComponent } from './game/score/score.component';
import { FieldComponent } from './game/field/field.component';
import { GameComponent } from './game/game.component';
import { MenuComponent } from './menu/menu.component';
import { ErrorComponent } from './error/error.component';

import { GameService } from './services/game.service';
import { DataBaseService } from './services/data-base.service';
import { MultiplayerMenuComponent } from './multiplayer-menu/multiplayer-menu.component';
import { NoUndefPipe } from './no-undef.pipe';
import { IntroComponent } from './intro/intro.component';
import { KeysPipe } from './keys.pipe';
import { UserGuard } from './guards/user.guard'
import { LocalStorageService } from './services/local-storage.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    FieldComponent,
    GameComponent,
    MenuComponent,
    ErrorComponent,
    MultiplayerMenuComponent,
    NoUndefPipe,
    IntroComponent,
    KeysPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

  ],
  providers: [
    GameService,
    DataBaseService,
    LocalStorageService,
    UserGuard,
    UserService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
