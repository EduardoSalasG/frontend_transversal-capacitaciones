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
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },


        ]
    },
    {
        path: '404',
        title: "404 Página no encontrada",
        loadComponent: () => import('./shared/pages/error404-page/error404-page.component')
    },
    {
        path: 'quienes-somos',
        title: "Quienes somos",
        loadComponent: () => import('./shared/pages/quienes-somos/quienes-somos.component')
    },
    {
        path: 'resenas',
        title: "Reseñas",
        loadComponent: () => import('./shared/pages/resenas/resenas.component')
    },
    {
        path: 'contacto',
        title: "Contacto",
        loadComponent: () => import('./shared/pages/contacto/contacto.component')
    },
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '404'
    }];
