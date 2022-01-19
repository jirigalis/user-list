import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
    user?: User;
    loading = false;

    constructor(
        private userService: UserService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.loading = true;
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.userService.getById(id).subscribe((user) => {
            this.user = user ? user.data : null;
            this.loading = false;
        });
    }

    goBack(): void {
        this.location.back();
    }
}
