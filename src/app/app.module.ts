import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { gameReducer } from './state/game/game.reducer';
import { keyboardReducer } from './state/keyboard/keyboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { GameEffects } from './state/game/game.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({game: gameReducer, keyboard: keyboardReducer}),
    EffectsModule.forRoot([GameEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
