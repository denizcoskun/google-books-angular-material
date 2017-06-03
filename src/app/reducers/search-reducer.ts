import { Book } from '../models/book';
import * as SearchActions from '../actions/search-actions'

export interface State {
    searchTerms: string;
    results: Book[];
}

const initialState: State = {
    searchTerms: '',
    results: []
};

export function reducer(state = initialState, action: SearchActions.Actions): State {
    switch(action.type) {
        case SearchActions.SEARCH: {
            return {
                ...state,
                searchTerms: action.payload
            };
        }

        case SearchActions.SEARCH_DONE: {
            return {
                ...state,
                results: action.payload
            };
        }
        
        default: {
            return state;
        }
    }
}

