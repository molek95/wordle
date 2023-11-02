import { createReducer, on } from "@ngrx/store";
import { incrementTryCounter, loadSolutionWord, loadSolutionWordFailure, loadSolutionWordSuccess, setGameStatus, setLengthOfWord, setSolutionWord, setTryLimit } from "./game.actions";

export enum WordStatus {
    success =  'success',
    error = 'error',
    loading = 'loading',
    pending = 'pending'
}

export enum GameStatus {
    win = 'win',
    lose = 'lose',
    ongoing = 'ongoing'
}

export interface GameState {
    solutionWord: string;
    lengthOfSolutionWord: number;
    tryCounter: number;
    tryLimit: number;
    gameStatus: GameStatus;
    wordStatus: WordStatus;
}

export const initState: GameState = {
    solutionWord: '',
    lengthOfSolutionWord: 0,
    tryCounter: 0,
    tryLimit: 0,
    gameStatus: GameStatus.ongoing,
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
    on(loadSolutionWordFailure, (state, {error}) => ({...state, error, wordStatus: WordStatus.error})),
    on(setGameStatus, (state, {gameStatus}) => ({...state, gameStatus})),
    on(incrementTryCounter, (state, {increment}) => ({...state, tryCounter: state.tryCounter + increment}))
)