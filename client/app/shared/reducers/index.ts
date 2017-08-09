import { combineReducers } from '@ngrx/store';

import * as fromUsers from './users.reducer';
import * as fromGreenspaces from './greenspaces.reducer';

const reducers = {
    users: fromUsers.reducer,
    greenspaces: fromGreenspaces.reducer
}

const productionReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return productionReducer(state, action);
}

export { CREATE_USER } from './users.reducer';
export { GET_GREENSPACES, CREATE_GREENSPACE } from './greenspaces.reducer';