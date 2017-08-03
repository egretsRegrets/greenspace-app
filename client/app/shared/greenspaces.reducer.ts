import {Greenspace} from './greenspace.model';
import { Action, ActionReducer } from '@ngrx/store';

export const GET_GREENSPACES = 'GET_GREENSPACES';

export const greenspaces: ActionReducer<Greenspace[]> = (state: Greenspace[] = [], action: Action) => {
    switch(action.type){
        case GET_GREENSPACES:
            return action.payload;
        default:
            return state;
    }
};