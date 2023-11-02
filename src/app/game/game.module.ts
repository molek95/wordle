import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { GameComponent } from './game.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { SolutionPanelComponent } from './components/solution-panel/solution-panel.component';
import { GameRoutingModule } from './game-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    GameComponent,
    KeyboardComponent,  
    SolutionPanelComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
  ],
})
export class GameModule { }
