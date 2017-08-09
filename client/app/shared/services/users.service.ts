import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';

import { AppStore } from '../../app-store';
import { User } from '../models/user.model';
import { 
    CREATE_USER
} from '../reducers/users.reducer';

const BASE_URL = 'http://localhost:7777/api/users';
const HEADER = { headers: new Headers({'Content-Type': 'application/json'}) };

@Injectable()
export class UsersService {
    users$: Observable<User[]> = this.store.select('users');

    constructor(
        private http: Http,
        private store: Store<AppStore>
    ) {}

    createUser(user: User) {
        return this.http.post(BASE_URL, JSON.stringify(user), HEADER)
            .map(res => res.json)
            .map(payload => ({type: CREATE_USER, payload}))
            .subscribe(action => this.store.dispatch(action));
    }
}
