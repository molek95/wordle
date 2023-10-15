import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { GameComponent } from './game.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { gameReducer } from './state/game/game.reducer';
import { keyboardReducer } from './state/keyboard/keyboard.reducer';
import { SolutionPanelComponent } from './components/solution-panel/solution-panel.component';

@NgModule({
  declarations: [
    GameComponent,
    KeyboardComponent,
    SolutionPanelComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({game: gameReducer, keyboard: keyboardReducer})
  ],
  exports: [GameComponent],
  providers: [],
})
export class GameModule { }
