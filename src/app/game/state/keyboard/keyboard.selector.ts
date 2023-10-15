import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { KeyboardState } from "./keyboard.reducer";

export const selectKeyboard = (state: AppState) => state.keyboard;

export const selectPressedKeys = createSelector(
    selectKeyboard,
    (state: KeyboardState) => state.pressedKeys
);

export const selectDisplayedKeys = createSelector(
    selectKeyboard,
    (state: KeyboardState) => state.displayedKeys
)