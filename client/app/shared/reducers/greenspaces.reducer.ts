import { Greenspace } from '../models';
import { Action, ActionReducer } from '@ngrx/store';

export const GET_GREENSPACES = 'GET_GREENSPACES';
export const CREATE_GREENSPACE = 'CREATE_GREENSPACE';


export function reducer(state: Greenspace[] = [], action: Action) {
    switch(action.type){
        case GET_GREENSPACES:
            return action.payload;
        case CREATE_GREENSPACE:
            return [...state, action.payload];
        default:
            return state;
    }
};

