import { Action } from '@ngrx/store';
import { Book } from '../models/book';

export const SEARCH = 'Book Search';
export const SEARCH_DONE = 'Book Search Done';
export const LOAD = 'Book Load';
export const SELECT = 'Book Select';


export class SearchAction implements Action {
    readonly type = SEARCH;

    constructor(public payload: string) { };
}

export class SearchDoneAction implements Action {
    readonly type = SEARCH_DONE;

    constructor(public payload: Book[]) { };
}

export class LoadAction implements Action {
    readonly type = LOAD;

    constructor(public payload: Book) { };
}

export class SelectAction implements Action {
    readonly type = SELECT;

    constructor(public payload: string) { };
}

export type Actions = SearchAction | SearchDoneAction | LoadAction | SelectAction;