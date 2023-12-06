import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    //   {
    //     path: 'heroes',
    //     loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    //   },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '404',
        component: Error404PageComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '404'
    }];
