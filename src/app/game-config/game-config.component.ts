import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { loadSolutionWord, setLengthOfWord, setTryLimit } from '../state/game/game.actions';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.scss'],
})
export class GameConfigComponent {
  readonly gameForm = this.fb.group({
    lengthOfWord: ['', Validators.required],
    numberOfTries: ['', Validators.required]
  })

  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppState>) {}

  onSubmit(): void {
    this.router.navigate(['/game']).then(() => {
      this.store.dispatch(setTryLimit({limit: this.gameForm.controls.numberOfTries.value as any}))
      this.store.dispatch(setLengthOfWord({length: this.gameForm.controls.lengthOfWord.value as any}))
      this.store.dispatch(loadSolutionWord());
      // this.store.dispatch(setSolutionWord({solution: 'apple'}))
    })
  }
}
