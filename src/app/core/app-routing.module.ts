import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { UsersComponent } from '../users/users.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path: '', component: UsersComponent, canActivate: [AuthGuard] },
    {
        path: 'users/:id',
        component: UserDetailComponent,
        canActivate: [AuthGuard],
    },
    { path: 'login', component: LoginComponent },

    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
