import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { GameComponent } from './game.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { gameReducer } from './state/game/game.reducer';

@NgModule({
  declarations: [
    GameComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({game: gameReducer})
  ],
  exports: [GameComponent],
  providers: [],
})
export class GameModule { }
