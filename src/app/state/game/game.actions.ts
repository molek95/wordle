import { createAction, props } from "@ngrx/store";

export const statusChanged = createAction(
    '[Game Page] Game status changed',
    props<{ status: 'win' | 'lose' | 'ongiong' }>()
)

export const setSolutionWord = createAction(
    '[Game Page] Set solution word',
    props<{solution : string}>()
)

export const setTryLimit = createAction(
    '[Game Page] Set try limit',
    props<{limit: number}>()
)
