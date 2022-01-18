import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';
import { AuthenticationService } from './services/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'user-list';
    currentUser: User;

    constructor(
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
        this.authenticationService.currentUser.subscribe((user) => {
            this.currentUser = user;
        });
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
