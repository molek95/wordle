import { createReducer, on } from "@ngrx/store";
import { keyPressed } from "./game.actions";
import { ALPHABET } from "../../components/keyboard/models/alphabet.const";
import { KeyboardCharacter } from "../../components/keyboard/models/keyboard-character.interface";

export interface GameState {
    pressedKeys: string[];
    solutionWord: string;
    tryCounter: number;
    gameStatus: 'win' | 'lose' | 'ongoing';
}

export const initState: GameState = {
    pressedKeys: [],
    solutionWord: '',
    tryCounter: 0,
    gameStatus: 'ongoing'
}

export const gameReducer = createReducer(
    initState,
    on(keyPressed, (state, { currentPressedKey }) => ({
        ...state,
        pressedKeys: [...state.pressedKeys, currentPressedKey]
    }))
)