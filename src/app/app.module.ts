import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { FieldComponent } from './field/field.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    FieldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
