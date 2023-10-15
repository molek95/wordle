import { Component, OnInit } from '@angular/core';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { selectPressedKeys } from '../../state/keyboard/keyboard.selector';
import { selectSolution } from '../../state/game/game.selector';
import { setSolutionWord } from '../../state/game/game.actions';

@Component({
  selector: 'app-solution-panel',
  templateUrl: './solution-panel.component.html',
  styleUrls: ['./solution-panel.component.scss']
})
export class SolutionPanelComponent implements OnInit {
  readonly pressedKeys$  = this.store.select(selectPressedKeys)
  readonly solution$ = this.store.select(selectSolution)

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.pressedKeys$.subscribe(k => console.log({k}))
  }
}
