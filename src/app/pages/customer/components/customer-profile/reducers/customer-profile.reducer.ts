import { ActionReducer, Action } from '@ngrx/store'

import { CustomerProfileActions } from '../actions/customer-profile.actions'

export interface CustomerProfileState {
    customerProfile : any,
    selectedCustomerProfile : any;
};

const initialState: CustomerProfileState = {
    customerProfile: null,
    selectedCustomerProfile: null
};

// fix: https://github.com/ngrx/store/issues/190
// from : export const boxofficeReducer: ActionReducer<BoxofficeState> = (state = initialState, action: Action) => {
// to : below
export function customerProfileReducer (state = initialState, action: Action) {
    switch (action.type) {
        case CustomerProfileActions.CUSTOMER_PROFILE_UPDATE_CUSTOMER_PROFILE_SUCCESS: {
            console.log('in reducer success');
            return Object.assign({}, state, { customerProfile: action.payload });
        }
        case CustomerProfileActions.CUSTOMER_PROFILE_SELECT_CUSTOMER_PROFILE_SUCCESS: {
            return Object.assign({}, state, { selectedCustomerProfile: action.payload });
        }
        default : {
            return state;
        }
    }
};
