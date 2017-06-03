import { Action } from '@ngrx/store';

export const SEARCH = 'Book Search';

export class Search implements Action {
    readonly type = SEARCH;

    constructor(public paylod: string) {}
}

this.store.dispatch(new Search('keyword'));