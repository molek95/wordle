import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, withLatestFrom } from 'rxjs/operators';
import { AppState } from 'src/app/state/app.state';
import { selectSolution } from 'src/app/state/game/game.selector';
import { selectPressedKeys } from 'src/app/state/keyboard/keyboard.selector';

@Component({
  selector: 'app-solution-panel',
  templateUrl: './solution-panel.component.html',
  styleUrls: ['./solution-panel.component.scss']
})
export class SolutionPanelComponent implements OnInit {
  readonly pressedKeys$  = this.store.select(selectPressedKeys);

  readonly solution$ = this.store.select(selectSolution).pipe(map(solution => {
    const letters = solution.split('');
    return letters.map(letter => ({
      letter,
      isCorrect: false
    })) 
  }));

  readonly guessLetter$ = this.pressedKeys$.pipe(
    withLatestFrom(this.solution$),
    map(([pressedKeys, solution]) => {
      console.log({pressedKeys})
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
  }
}
