import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { WordService } from "src/app/game/services/word.service";
import { loadSolutionWordSuccess, loadSolutionWord, loadSolutionWordFailure, incrementTryCounter, setGameStatus } from "./game.actions";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { selectLengthOfSolution, selectSolution, selectTryCounter, selectTryLimit } from "./game.selector";
import { from, of } from "rxjs";
import { keyPressed } from "../keyboard/keyboard.actions";
import { selectPressedKeys } from "../keyboard/keyboard.selector";
import { GameStatus } from "./game.reducer";

@Injectable()
export class GameEffects {
    readonly lengthOfWord$ = this.store.select(selectLengthOfSolution)
    readonly tryLimit$ = this.store.select(selectTryLimit)
    readonly solution$ = this.store.select(selectSolution)
    readonly pressedKeys$ = this.store.select(selectPressedKeys)
    readonly tryCounter$ = this.store.select(selectTryCounter)

    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private wordService: WordService
    ) {}


    loadSolutionWord$ = createEffect(() => 
        this.actions$.pipe(
            ofType(loadSolutionWord),
            withLatestFrom(this.lengthOfWord$),
            switchMap(([,wordLength]) => from(this.wordService.getWord(wordLength)).pipe(
                map(solution => loadSolutionWordSuccess({solution})),
                catchError(error => of(loadSolutionWordFailure({error})))
            ))
    ));

    incrementTryCounter$ = createEffect(() => 
        this.actions$.pipe(
            ofType(keyPressed),
            withLatestFrom(this.solution$),
            map(([keyPressed,solution]) => {
                if (solution.includes(keyPressed.currentPressedKey)) {
                    return incrementTryCounter({increment: 0})
                } else {
                    console.log('increase')
                    return incrementTryCounter({increment: 1})
                }
            })
        )
    );

    winGame$ = createEffect(() => 
        this.actions$.pipe(
            ofType(keyPressed),
            withLatestFrom(this.tryLimit$, this.solution$, this.pressedKeys$, this.tryCounter$),
            map(([, tryLimit, solution, pressedKeys, tryCounter]) => {
                console.log({tryLimit, solution, pressedKeys, tryCounter})
                const solutionLetters = solution.split('');
                if (tryCounter <= tryLimit && solutionLetters.every(key => pressedKeys.includes(key))) {
                    console.log('win')
                    return setGameStatus({gameStatus: GameStatus.win})
                } else if (tryCounter > tryLimit) {
                    console.log('lose')
                    return setGameStatus({gameStatus: GameStatus.lose})
                } else {
                    console.log('ongoing')
                    return setGameStatus({gameStatus: GameStatus.ongoing})
                }
            })
        )
    );
}