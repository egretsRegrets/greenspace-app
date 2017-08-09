import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User, UsersService } from '../shared';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateAccountComponent implements OnInit {
  users$: Observable<User[]>;
  
  form: User = {
    _id: undefined,
    name: ""
  };

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    
  }

  saveUser(user: User) {
    this.usersService.createUser(user);
  }

}
