import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { State } from '../../state/state.model'
import { CustomerProfileService } from './services/customer-profile.service'
import { CustomerProfileState } from './reducers/customer-profile.reducer'
import { CustomerProfileActions } from './actions/customer-profile.actions'


@Component({
    selector: 'ngx-customer-profile-cmp',
    templateUrl: './customer-profile.component.html'
})
export class CustomerProfileComponent implements OnInit {
    customerProfileModel$: Observable<CustomerProfileState>;

    constructor(
        private customerProfileService: CustomerProfileService,
        private store: Store<State>,
    ) {
        console.log('CustomerProfileComponent');
    }

    ngOnInit(): void {
        this.customerProfileModel$ = this.store.select<CustomerProfileState>('customerProfile');

    }

    onSearch(searchData) {
        console.log('searchData : ' + JSON.stringify(searchData.values));
        this.store.dispatch({
            type: CustomerProfileActions.CUSTOMER_PROFILE_UPDATE_CUSTOMER_PROFILE,
            payload: searchData.values });
        console.log('onSearch() after dispatch');
    }

    onSelectTransaction(tid: string) {
        this.store.dispatch({ type: CustomerProfileActions.CUSTOMER_PROFILE_SELECT_CUSTOMER_PROFILE, payload: tid });
    }
}
