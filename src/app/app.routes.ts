import { Routes } from '@angular/router';

export const routes: Routes = [
    {'path': '', loadComponent: () => import('./components/home-main/home-main.component').then(c => c.HomeMainComponent)},
    {'path': 'колекции', loadComponent: () => import('./components/collections/collections.component').then(c => c.CollectionsComponent)},
    {'path': 'cart', loadComponent: () => import('./components/cart/cart.component').then(c => c.CartComponent)},
    {'path': 'about-us', loadComponent: () => import('./components/about-us/about-us.component').then(c => c.AboutUsComponent)},
    {'path': 'contact', loadComponent: () => import('./components/contact/contact.component').then(c => c.ContactComponent)},
    {'path': 'team', loadComponent: () => import('./components/team/team.component').then(c => c.TeamComponent)},
    {'path': 'blogs', loadComponent: () => import('./components/blogs/blogs.component').then(c => c.BlogsComponent)},
    {'path': 'blog/:id', loadComponent: () => import('./components/blog-detail/blog-detail.component').then(c => c.BlogDetailComponent)},
];
