import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { WORD_COLLECTIONS } from "./words.const";

@Injectable({providedIn:'root'})
export class WordService {

    getWord(length: number): Observable<string> {
        const wordWithGivenLength = WORD_COLLECTIONS.filter(word => word.length === length);
        return of(wordWithGivenLength[Math.floor(Math.random()*wordWithGivenLength.length)])
    }
}