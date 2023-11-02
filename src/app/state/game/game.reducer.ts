import { createReducer, on } from "@ngrx/store";
import { setSolutionWord, setTryLimit } from "./game.actions";

export interface GameState {
    solutionWord: string;
    tryCounter: number;
    tryLimit: number;
    gameStatus: 'win' | 'lose' | 'ongoing';
}

export const initState: GameState = {
    solutionWord: '',
    tryCounter: 0,
    tryLimit: 0,
    gameStatus: 'ongoing'
}

export const gameReducer = createReducer(
    initState,
    on(setSolutionWord, (state, { solution }) => ({
        ...state,
        solutionWord: solution
    })),

    on(setTryLimit, (state, {limit}) => ({
        ...state,
        tryLimit: limit
    }))
)