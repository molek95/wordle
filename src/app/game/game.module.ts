import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { GameComponent } from './game.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { SolutionPanelComponent } from './components/solution-panel/solution-panel.component';
import { GameRoutingModule } from './game-routing.module';
import { CommonModule } from '@angular/common';
import { gameReducer } from '../state/game/game.reducer';
import { keyboardReducer } from '../state/keyboard/keyboard.reducer';

@NgModule({
  declarations: [
    GameComponent,
    KeyboardComponent,  
    SolutionPanelComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    StoreModule.forRoot({game: gameReducer, keyboard: keyboardReducer})
  ],
})
export class GameModule { }
