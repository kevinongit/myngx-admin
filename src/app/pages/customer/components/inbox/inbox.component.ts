import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { State } from '../../state/state.model'
import { InboxService } from './services/inbox.service'
import { InboxState } from './reducers/inbox.reducer'
import { InboxActions } from './actions/inbox.actions'


@Component({
	selector: 'inbox-cmp',
	templateUrl: './inbox.component.html'
})
export class InboxComponent implements OnInit {
	inboxModel$: Observable<InboxState>;

	constructor(
		private inboxService : InboxService,
		private store: Store<State>
		) {
			console.log('InboxComponent');
	}

	ngOnInit(): void {
		this.inboxModel$ = this.store.select<InboxState>('inbox');
		
	}

	onSearch(searchData) {
		console.log('searchData : ' + JSON.stringify(searchData.values));
		this.store.dispatch({ type: InboxActions.INBOX_UPDATE_INBOX, payload: searchData.values});
		console.log('onSearch() after dispatch');
	}

    onSelectTransaction(tid: string) {
		this.store.dispatch({type: InboxActions.INBOX_SELECT_INBOX, payload: tid });
    }
 }