import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLengthOfSolution, selectSolution, selectTryLimit } from '../state/game/game.selector';
import { AppState } from '../state/app.state';
import { loadSolutionWord, setLengthOfWord, setSolutionWord, setTryLimit } from '../state/game/game.actions';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  readonly solution$ = this.store.select(selectSolution);
  readonly tryLimit$ = this.store.select(selectTryLimit)
  readonly selectLengthOfSolution$ = this.store.select(selectLengthOfSolution)

  constructor(private store: Store<AppState>) {
    
  }
 
  ngOnInit(): void {
    console.log('init')
    this.store.dispatch(loadSolutionWord());
  }

  getSoultion(): void {
    this.solution$.subscribe(s => console.log({s}))
    this.tryLimit$.subscribe(tryLimit => console.log({tryLimit}))
    this.selectLengthOfSolution$.subscribe(selectLengthOfSolution => console.log({selectLengthOfSolution}))
  }
}
