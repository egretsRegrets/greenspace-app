import { Greenspace } from '../models';
import { Action, ActionReducer } from '@ngrx/store';
import * as fromSingleGreenspace from './greenspace-single.reducer';

export const GET_GREENSPACES = 'GET_GREENSPACES';
export const CREATE_GREENSPACE = 'CREATE_GREENSPACE';

const greenspaceReducer = fromSingleGreenspace.reducer;

export function reducer(state: Greenspace[] = [], action: Action) {
    switch(action.type){
        case GET_GREENSPACES:
            let greenspaces = action.payload.reduce(
                (arr, entity) => {
                    return arr.concat(greenspaceReducer(entity, action));
                },[]
            );
            return greenspaces;
        case CREATE_GREENSPACE:
            return [
                ...state, 
                greenspaceReducer(undefined, action)
            ];
        default:
            return state;
    }
};

