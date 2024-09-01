import { Routes } from '@angular/router';

export const routes: Routes = [
    {'path': '', loadComponent: () => import('./components/home-main/home-main.component').then(c => c.HomeMainComponent)},
    {'path': 'колекции', loadComponent: () => import('./components/collections/collections.component').then(c => c.CollectionsComponent)},
    {'path': 'кошничка', loadComponent: () => import('./components/cart/cart.component').then(c => c.CartComponent)},
    {'path': 'за-нас', loadComponent: () => import('./components/about-us/about-us.component').then(c => c.AboutUsComponent)},
    {'path': 'контакт', loadComponent: () => import('./components/contact/contact.component').then(c => c.ContactComponent)},
    {'path': 'team', loadComponent: () => import('./components/team/team.component').then(c => c.TeamComponent)},
    {'path': 'новости', loadComponent: () => import('./components/blogs/blogs.component').then(c => c.BlogsComponent)},
    {'path': 'блог/:id', loadComponent: () => import('./components/blog-detail/blog-detail.component').then(c => c.BlogDetailComponent)},
];
