import { createAction, props } from "@ngrx/store";

export const keyPressed = createAction(
    '[Game Page] Key pressed',
    props<{ currentPressedKey: string }>()
)
