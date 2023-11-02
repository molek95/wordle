import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameConfigComponent } from './game-config.component';
import { GameConfigRoutingModule } from './game-config-routing.module';

@NgModule({
  declarations: [
    GameConfigComponent,
  ],
  imports: [
    CommonModule,
    GameConfigRoutingModule
  ],
})
export class GameConfigModule { }
