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
        path: 'cursos',
        loadComponent: () => import('./products/pages/layout-page/layout-page.component'),
        children: [
            {
                path: '',
                loadComponent: () => import('./products/pages/cursos/cursos.component'),
            },
            {
                path: ':id',
                loadComponent: () => import('./products/pages/product/product.component'),
            },
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: 'leads',
        loadComponent: () => import('./products/pages/layout-page/layout-page.component'),
        children: [
            {
                path: '',
                loadComponent: () => import('./products/pages/leads/leads.component'),
            },
            {
                path: ':id',
                loadComponent: () => import('./products/pages/product/product.component'),
            },
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full'
            },
        ]
    },
    {
        path: 'mis-productos',
        loadComponent: () => import('./vendor/pages/layout-page/layout-page.component'),
        children: [
            {
                path: 'create',
                loadComponent: () => import('./vendor/pages/create-product/create-product.component'),
            },
            {
                path: 'edit/:id',
                loadComponent: () => import('./vendor/pages/edit-product/edit-product.component'),
            },
            {
                path: 'list',
                loadComponent: () => import('./vendor/pages/list-products/list-products.component'),
            },
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
        ]
    },

    {
        path: 'checkout',
        title: "Checkout",
        loadComponent: () => import('./shared/pages/checkout/checkout.component')
    },
    {
        path: 'success',
        title: "Success",
        loadComponent: () => import('./shared/pages/success/success.component')
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
        path: 'home',
        title: "Tranversal Capacitaciones",
        loadComponent: () => import('./shared/pages/home/home.component')
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
