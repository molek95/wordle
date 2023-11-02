import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameConfigComponent } from './game-config.component';
import { GameConfigRoutingModule } from './game-config-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    GameConfigComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GameConfigRoutingModule,
  ],
})
export class GameConfigModule { }
