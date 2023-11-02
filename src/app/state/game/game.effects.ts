import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { AppState } from "../app.state";
import { WordService } from "src/app/game/services/word.service";
import { loadSolutionWordSuccess, loadSolutionWord, loadSolutionWordFailure } from "./game.actions";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { selectLengthOfSolution } from "./game.selector";
import { from, of } from "rxjs";

@Injectable()
export class GameEffects {
    readonly lengthOfWord$ = this.store.select(selectLengthOfSolution)

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
}