import { User } from '../models/user.model';
import { Action } from '@ngrx/store';

export const CREATE_USER = 'CREATE_USER';


export function reducer (state: User[] = [], action: Action) {
    switch(action.type) {
        case CREATE_USER:
            return [...state, action.payload];
        default:
            return state;
    }
};
