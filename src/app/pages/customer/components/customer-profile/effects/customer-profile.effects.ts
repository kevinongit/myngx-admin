import { Injectable } from '@angular/core'
import { Effect, Actions, toPayload } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { CustomerProfileActions } from '../actions/customer-profile.actions'
import { CustomerProfileService } from '../services/customer-profile.service'

@Injectable()
export class CustomerProfileEffects {
    constructor(
        private actions$: Actions,
        private customerProfileService: CustomerProfileService
    ) {}

    @Effect() updateCustomerProfile$ = this.actions$
        .ofType(CustomerProfileActions.CUSTOMER_PROFILE_UPDATE_CUSTOMER_PROFILE)
        .switchMap(action => this.customerProfileService.getCustomerProfiles(action.payload)
            .map(customerProfile => ({type: CustomerProfileActions.CUSTOMER_PROFILE_UPDATE_CUSTOMER_PROFILE_SUCCESS, payload: customerProfile}))
            .catch(error => Observable.of({type: CustomerProfileActions.CUSTOMER_PROFILE_UPDATE_CUSTOMER_PROFILE_FAIL, payload: error }))
        );

    @Effect() selectCustomerProfile$ = this.actions$
        .ofType(CustomerProfileActions.CUSTOMER_PROFILE_SELECT_CUSTOMER_PROFILE)
        .switchMap(action => this.customerProfileService.getOneCustomerProfile(action.payload.rank)
            .map(customerProfile => ({type: CustomerProfileActions.CUSTOMER_PROFILE_SELECT_CUSTOMER_PROFILE_SUCCESS, payload: customerProfile}))
            .catch(error => Observable.of({type: CustomerProfileActions.CUSTOMER_PROFILE_SELECT_CUSTOMER_PROFILE_FAIL, payload: error }))
        );
}
