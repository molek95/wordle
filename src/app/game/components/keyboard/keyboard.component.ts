import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { keyPressed } from '../../state/game/game.actions';
import { selectPressedKeys } from '../../state/game/game.selector';
import { AppState } from '../../state/app.state';
import { map } from 'rxjs/operators';
import { ALPHABET } from './models/alphabet.const';
import { KeyboardCharacter } from './models/keyboard-character.interface';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  displayedCharacters$ = this.store.select(selectPressedKeys).pipe(map(pressedKeys => {
    const keyBoard = this.initKeyboardCharacters();
    keyBoard.forEach(key => {
      if (pressedKeys.includes(key.character)) {
        key.isEnabled = false;
      }
    })
    return keyBoard
  }))

  @HostListener('window:keydown', ['$event'])
  onButtonPressed(e: KeyboardEvent): void {
    const {key} = e;
    this.store.dispatch(keyPressed({ currentPressedKey: key }))
  }

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  }
  
  private initKeyboardCharacters(): KeyboardCharacter[] {
    return ALPHABET.map(letter => ({
      character: letter,
      isEnabled: true
    }))
  }
}
