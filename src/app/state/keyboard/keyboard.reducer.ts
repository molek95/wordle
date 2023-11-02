import { createReducer, on } from "@ngrx/store";
import { keyPressed } from "./keyboard.actions";
import { KeyboardCharacter } from "src/app/game/components/keyboard/models/keyboard-character.interface";
import { ALPHABET } from "src/app/game/components/keyboard/models/alphabet.const";

export interface  KeyboardState {
    pressedKeys: string[];
    displayedKeys: KeyboardCharacter[];
}

export const initState: KeyboardState = {
    pressedKeys: [],
    displayedKeys: ALPHABET.map(letter => ({character: letter, isEnabled: true}))
}

export const keyboardReducer = createReducer(
    initState,
    on(keyPressed, (state, { currentPressedKey }) => ({
        ...state,
        pressedKeys: [...state.pressedKeys, currentPressedKey],
        displayedKeys: state.displayedKeys.map(key => {
            const currentKey = {...key}
            if (currentKey.character === currentPressedKey) {
                currentKey.isEnabled = false;
            }
            return currentKey;
        })
    }))
)