import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { setLengthOfWord, setTryLimit } from '../state/game/game.actions';

@Component({
  selector: 'app-game-config',
  templateUrl: './game-config.component.html',
  styleUrls: ['./game-config.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule, MatInputModule
  ],
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
    })
  }
}
