import { CardComponent } from './components/card/card.component';
import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

export const routes: Routes = [
    {
        path: 'home', component: HomeComponent
    },
// Nesting Routes
    {
        path: 'auth', component: AuthComponent,
        children: [
            {
                path: 'login', component: LoginComponent
            },
            {
                path: 'register', component: RegisterComponent
            },
            {
                path:'', redirectTo: '/auth/login', pathMatch: 'full'
            },
        ]
    },
    {
        path: 'card', component: CardComponent
    },
    {
        path: 'users', component: UsersComponent
    },
    {
        path:'', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path:'userDetails/:id', component: UserDetailsComponent
    },
    {
        path: '**', component: PagenotfoundComponent
    }
];
