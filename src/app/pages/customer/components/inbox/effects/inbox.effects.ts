import { Injectable } from '@angular/core'
import { Effect, Actions, toPayload } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { InboxActions } from '../actions/inbox.actions'
import { InboxService } from '../services/inbox.service'

@Injectable()
export class InboxEffects {
    constructor(
        private actions$: Actions,
        private inboxService: InboxService
    ) {}

    @Effect() updateInbox$ = this.actions$
        .ofType(InboxActions.INBOX_UPDATE_INBOX)
        .switchMap(action => this.inboxService.getInboxes(action.payload)
            .map(inboxs => ({type: InboxActions.INBOX_UPDATE_INBOX_SUCCESS, payload: inboxs}))
            .catch(error => Observable.of({type: InboxActions.INBOX_UPDATE_INBOX_FAIL, payload: error }))
        );

    @Effect() selectInbox$ = this.actions$
        .ofType(InboxActions.INBOX_SELECT_INBOX)
        .switchMap(action => this.inboxService.getOneInbox(action.payload.rank)
            .map(inbox => ({type: InboxActions.INBOX_SELECT_INBOX_SUCCESS, payload: inbox}))
            .catch(error => Observable.of({type: InboxActions.INBOX_SELECT_INBOX_FAIL, payload: error }))
        );
}
