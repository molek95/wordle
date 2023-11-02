import { createReducer, on } from "@ngrx/store";
import { loadSolutionWord, loadSolutionWordFailure, loadSolutionWordSuccess, setLengthOfWord, setSolutionWord, setTryLimit } from "./game.actions";

export enum WordStatus {
    success =  'success',
    error = 'error',
    loading = 'loading',
    pending = 'pending'
}

export interface GameState {
    solutionWord: string;
    lengthOfSolutionWord: number;
    tryCounter: number;
    tryLimit: number;
    gameStatus: 'win' | 'lose' | 'ongoing';
    wordStatus: WordStatus;
}

export const initState: GameState = {
    solutionWord: '',
    lengthOfSolutionWord: 0,
    tryCounter: 0,
    tryLimit: 0,
    gameStatus: 'ongoing',
    wordStatus: WordStatus.pending,
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
    })),
    on(setLengthOfWord, (state, { length }) => ({
        ...state,
        lengthOfSolutionWord: length
    })),
    on(loadSolutionWord, (state) => ({...state, wordStatus: WordStatus.loading})),
    on(loadSolutionWordSuccess, (state, { solution }) => ({
        ...state,
        solutionWord: solution,
        error: null,
        wordStatus: WordStatus.success
    })),
    on(loadSolutionWordFailure, (state, {error}) => ({...state, error, wordStatus: WordStatus.error}))
)