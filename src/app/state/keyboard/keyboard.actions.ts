import { createAction, props } from "@ngrx/store";

export const keyPressed = createAction(
    '[Game Page] Key pressed',
    props<{ currentPressedKey: string }>()
)

export const resetKeyboard = createAction(
    '[Game Page] Reset keyboard'
)

export const disableKeyboard = createAction(
    '[Game Page] Disable keyboard'
)