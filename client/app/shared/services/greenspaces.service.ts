import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';

import { AppStore } from '../../app-store';
import { Greenspace } from '../models';
import { 
    GET_GREENSPACES,
    CREATE_GREENSPACE
 } from '../reducers';

const BASE_URL = 'http://localhost:7777/api/greenspaces'
const HEADER = { headers: new Headers({'Content-Type': 'application/json' }) };

@Injectable()
export class GreenspacesService {
    greenspaces$: Observable<Greenspace[]> = this.store.select('greenspaces');

    constructor(
        private http: Http,
        private store: Store<AppStore>
    ) {}

    loadGreenspaces() {
        return this.http.get(BASE_URL)
            .map(res => res.json())
            .map(payload => ({type: GET_GREENSPACES, payload}))
            .subscribe(action => this.store.dispatch(action));
    }
    
    createGreenspaces(greenspace: Greenspace) {
        return this.http.post(BASE_URL, JSON.stringify(greenspace), HEADER)
            .map(res => res.json())
            .map(payload => ({ type: CREATE_GREENSPACE, payload }))
            .subscribe(action => this.store.dispatch(action));
    }
}