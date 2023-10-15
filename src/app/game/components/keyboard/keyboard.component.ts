import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { selectDisplayedKeys } from '../../state/keyboard/keyboard.selector';
import { keyPressed } from '../../state/keyboard/keyboard.actions';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  displayedCharacters$ = this.store.select(selectDisplayedKeys)

  @HostListener('window:keydown', ['$event'])
  onButtonPressed(e: KeyboardEvent): void {
    const {key} = e;
    this.store.dispatch(keyPressed({ currentPressedKey: key }))
  }

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
  }
}
