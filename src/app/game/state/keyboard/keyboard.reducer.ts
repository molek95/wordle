import { createReducer, on } from "@ngrx/store";
import { ALPHABET } from "../../components/keyboard/models/alphabet.const";
import { KeyboardCharacter } from "../../components/keyboard/models/keyboard-character.interface";
import { keyPressed } from "./keyboard.actions";

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