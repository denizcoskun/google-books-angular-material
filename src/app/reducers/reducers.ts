import * as fromSearch from './search-reducer';

export interface State {
    search: fromSearch.State;
}

export const reducer = {
    search: fromSearch.reducer
};