import { GameState } from "./game/game.reducer";
import { KeyboardState } from "./keyboard/keyboard.reducer";

export interface AppState {
    game: GameState;
    keyboard: KeyboardState;
}