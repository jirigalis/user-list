import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    users: User[] = [];
    loading = false;
    currentPage = 1;
    itemsPerPage = 5;

    constructor(private userService: UserService) {}

    ngOnInit(): void {
        this.getUsers(1, this.itemsPerPage);
    }

    onScrollDown(ev: any) {
        this.getUsers(this.currentPage++, this.itemsPerPage);
    }

    getUsers(page: number, count: number) {
        this.loading = true;
        this.userService.getAll(page, count).subscribe((users) => {
            this.users.push(...users.data);
            this.loading = false;
        });
    }
}
