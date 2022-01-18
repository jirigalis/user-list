import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    users: User[];

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.userService
            .getAll(1, 5)
            .subscribe((users) => (this.users = users.data));
    }
}
