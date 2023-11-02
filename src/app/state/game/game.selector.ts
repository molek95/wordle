import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { GameState } from "./game.reducer";

export const selectGame = (state: AppState) => state.game;

export const selectSolution = createSelector(
    selectGame,
    (state: GameState) => state.solutionWord
)

export const selectTryLimit = createSelector(
    selectGame,
    (state: GameState) => state.tryLimit
)

export const selectLengthOfSolution = createSelector(
    selectGame,
    (state: GameState) => state.lengthOfSolutionWord
)

export const selectTryCounter = createSelector(
    selectGame,
    (state: GameState) => state.tryCounter
)