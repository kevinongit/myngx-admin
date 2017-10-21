import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer';
import { InboxComponent } from './components/inbox/inbox.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: 'inbox', component: InboxComponent },
      { path: 'customerprofile', component: CustomerProfileComponent },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
