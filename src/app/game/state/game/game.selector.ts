import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { GameState } from "./game.reducer";

export const selectGame = (state: AppState) => state.game;

export const selectSolution = createSelector(
    selectGame,
    (state: GameState) => state.solutionWord
)