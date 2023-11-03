import { createAction, props } from "@ngrx/store";
import { GameStatus } from "./game.reducer";

export const statusChanged = createAction(
    '[Game Page] Game status changed',
    props<{ status: 'win' | 'lose' | 'ongiong' }>()
)

export const setSolutionWord = createAction(
    '[Game Page] Set solution word',
    props<{solution : string}>()
)

export const setTryLimit = createAction(
    '[Game Config Page] Set try limit',
    props<{limit: number}>()
)

export const setLengthOfWord = createAction(
    '[Game Config Page] Set length of word',
    props<{length: number}>()
)

export const loadSolutionWord = createAction('[Game Page] Load solution word');

export const loadSolutionWordSuccess = createAction(
    '[Game Page] Solution word load success',
    props<{solution: string}>()
)

export const loadSolutionWordFailure = createAction(
    '[Game Page] Solution word load failed',
    props<{error: string}>()
)

export const setGameStatus = createAction(
    '[Game Page] Game is won',
    props<{gameStatus: GameStatus}>()
)

export const  loadGameStatus = createAction('Load game status')


export const incrementTryCounter = createAction(
    '[Game Page] Increment try couter',
    props<{increment: number}>()
)

export const resetGame = createAction(
    '[Game Page] Reset game',
)