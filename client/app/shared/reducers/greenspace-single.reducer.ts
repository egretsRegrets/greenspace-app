import { Greenspace } from '../models';
import { Action, ActionReducer } from '@ngrx/store';

/**
 * we expect string 'GET_GREENSPACES' from greenspaces.reducer
 * for semantic reasons we make the action type singular
 */ 
export const GET_GREENSPACE = 'GET_GREENSPACES';
export const CREATE_GREENSPACE = 'CREATE_GREENSPACE';


export function reducer(state: Greenspace, action: Action) {
    switch(action.type){
        case GET_GREENSPACE:
            return state;
        case CREATE_GREENSPACE:
            return action.payload;
        default:
            return state;
    }
};
