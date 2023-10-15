import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { setSolutionWord } from './state/game/game.actions';
import { selectSolution } from './state/game/game.selector';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  readonly solution$ = this.store.select(selectSolution);
  constructor(private store: Store<AppState>) {
    
  }

  ngOnInit(): void {
    this.store.dispatch(setSolutionWord({solution: 'apple'}))
  }

  getSoultion(): void {
    this.solution$.subscribe(s => console.log({s}))
  }
}
