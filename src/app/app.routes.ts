import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadComponent: () => import('./auth/pages/auth.layout/auth.layout.component'),
        children: [
            {
                path: 'login',
                title: 'Inicio de sesión',
                loadComponent: () => import('./auth/pages/login/login.component'),
            },
            {
                path: 'register',
                title: 'Registro',
                loadComponent: () => import('./auth/pages/register/register.component'),
            },

        ]
    },
    {
        path: '404',
        title: "404 Página no encontrada",
        loadComponent: () => import('./shared/pages/error404-page/error404-page.component')
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
