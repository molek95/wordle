import { Component, OnInit } from '@angular/core';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { selectPressedKeys } from '../../state/keyboard/keyboard.selector';
import { selectSolution } from '../../state/game/game.selector';
import { map, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-solution-panel',
  templateUrl: './solution-panel.component.html',
  styleUrls: ['./solution-panel.component.scss']
})
export class SolutionPanelComponent implements OnInit {
  readonly pressedKeys$  = this.store.select(selectPressedKeys)
  readonly solution$ = this.store.select(selectSolution).pipe(map(solution => {
    const letters = solution.split('');
    return letters.map(letter => ({
      letter,
      isCorrect: false
    })) 
  }))

  readonly guessLetter$ = this.pressedKeys$.pipe(
    withLatestFrom(this.solution$),
    map(([pressedKeys, solution]) => {
      console.log({pressedKeys, solution})
      return solution.map(s => {
        if (pressedKeys.includes(s.letter)) {
          s.isCorrect = true
        }
        return s
      })
    }),
  )

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.pressedKeys$.subscribe(k => console.log({k}))
    this.guessLetter$.subscribe(guess => console.log({guess}))
  }
}
