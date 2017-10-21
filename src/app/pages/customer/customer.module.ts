import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NgaModule } from '../../theme/nga.module';
// import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './customer.routing';
import { CustomerComponent } from './customer';
import { InboxModule } from './components/inbox/inbox.module'
import { CustomerProfileModule } from './components/customer-profile/customer-profile.module';

import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'

import { inboxReducer } from './components/inbox/reducers/inbox.reducer'
import { InboxEffects } from './components/inbox/effects/inbox.effects'
import { customerProfileReducer } from './components/customer-profile/reducers/customer-profile.reducer'
import { CustomerProfileEffects } from './components/customer-profile/effects/customer-profile.effects'

const appEffectsRun = [
  EffectsModule.run(InboxEffects),
  EffectsModule.run(CustomerProfileEffects),
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // NgaModule,
    NgbDropdownModule,
    NgbModalModule,
    InboxModule,
    CustomerProfileModule,
    // SlimLoadingBarModule.forRoot(),
    StoreModule.provideStore({
            inbox: inboxReducer,
            customerProfile: customerProfileReducer,
    }),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    ...appEffectsRun,
    routing,
  ],
  declarations: [
    CustomerComponent,
  ],
  entryComponents: [
    // DefaultModal
  ],
  providers: [
    // IconsService
  ],
})
export class CustomerModule {
}
