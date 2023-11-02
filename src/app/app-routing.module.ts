import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule)
  },
  {
    path: 'game-config',
    loadChildren  : () => import('./game-config/game-config.routes').then(m => m.GAME_CONFIG_ROUTES)
  },
  {
    path: '',
    redirectTo: '/game-config',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
