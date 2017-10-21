import { ActionReducer, Action } from '@ngrx/store'

import { InboxActions } from '../actions/inbox.actions'

export interface InboxState {
    inbox : any,
    selectedInbox : any;
};

const initialState: InboxState = {
    inbox: null,
    selectedInbox: null
};

// fix: https://github.com/ngrx/store/issues/190
// from : export const boxofficeReducer: ActionReducer<BoxofficeState> = (state = initialState, action: Action) => {
// to : below
export function inboxReducer (state = initialState, action: Action) {
    switch (action.type) {
        case InboxActions.INBOX_UPDATE_INBOX_SUCCESS: {
            console.log('in reducer success');
            return Object.assign({}, state, { inbox: action.payload });
        }
        case InboxActions.INBOX_SELECT_INBOX_SUCCESS: {
            return Object.assign({}, state, { selectedInbox: action.payload });
        }
        default : {
            return state;
        }
    }
};
