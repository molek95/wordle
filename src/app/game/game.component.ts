import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectGameStatus, selectLengthOfSolution, selectSolution, selectTryCounter, selectTryLimit } from '../state/game/game.selector';
import { AppState } from '../state/app.state';
import { loadSolutionWord, resetGame } from '../state/game/game.actions';
import { Router } from '@angular/router';
import { disableKeyboard, resetKeyboard } from '../state/keyboard/keyboard.actions';
import { GameStatus } from '../state/game/game.reducer';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  readonly solution$ = this.store.select(selectSolution);
  
  readonly tryLimit$ = this.store.select(selectTryLimit)
  readonly gameStatus$ = this.store.select(selectGameStatus)
  readonly tryCouter$ = this.store.select(selectTryCounter)

  constructor(private store: Store<AppState>, private router: Router) {
    
  }
 
  ngOnInit(): void {
    this.store.dispatch(loadSolutionWord());
    this.store.dispatch(resetKeyboard());
    this.store.dispatch(resetGame());
    this.gameStatus$.subscribe(status => {
      if(status === GameStatus.win || status === GameStatus.lose) {
        this.store.dispatch(disableKeyboard())
      }
    })
  }

  getSoultion(): void {
    this.solution$.subscribe(s => console.log({s}))
    this.tryLimit$.subscribe(tryLimit => console.log({tryLimit}))
  }

  resetGame(): void {
    this.router.navigate(['/game-config'])
  }
}
