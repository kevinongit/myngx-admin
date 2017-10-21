import { Route } from '@angular/router';
// import { HomeRoutes } from './home/home.routes';


import { CustomerProfileComponent } from './customer-profile.component';


export const CustomerProfileRoutes: Route[] = [
    {
        path: 'customerprofile', component: CustomerProfileComponent,
    },
];
