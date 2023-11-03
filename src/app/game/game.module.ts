import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { GameComponent } from './game.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { SolutionPanelComponent } from './components/solution-panel/solution-panel.component';
import { GameRoutingModule } from './game-routing.module';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    GameComponent,
    KeyboardComponent,  
    SolutionPanelComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,

    //Material UI
    MatCardModule,
    MatButtonModule,
  ],
})
export class GameModule { }
