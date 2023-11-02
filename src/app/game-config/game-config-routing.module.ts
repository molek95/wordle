import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameConfigComponent } from './game-config.component';

const routes: Routes = [
  {
    path: '',
    component: GameConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameConfigRoutingModule { }