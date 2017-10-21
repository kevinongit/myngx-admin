import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

// import { INBOX_LIST } from './mock-inbox'


@Injectable()
export class InboxService {
	private inboxUrl = 'api/inboxes';
	private headers = new Headers({'Content-Type' : 'application/json'});
	inboxList = [];

	constructor(private http: Http) {
	}

	getInboxes(searchData) : Observable<any> {
		console.log('getInboxes');
		return this.http.get(this.inboxUrl)
			.map(resp => {
				this.inboxList = resp.json();
				console.log('getInboxes : this.inboxList.rows = ' + this.inboxList.length);
				return resp.json();
			});
	}

	// getInboxes(searchData) : Observable<any> {
	// 	console.log('getInboxs()');
	// 	let rows;
	// 	var inboxList;

	// 	if (searchData && searchData.msisdn && searchData.msisdn.length > 0) {
	// 		rows = INBOX_LIST.rows.filter(function (item) {
	// 			// for msisdn
	// 			return item[0].startsWith(searchData.msisdn);
	// 		});
	// 	} else {
	// 		rows = INBOX_LIST.rows;
	// 	}

	// 	inboxList = {
	// 		columns: INBOX_LIST.columns,
	// 		rows: rows
	// 	}
		
	// 	// *below approach : app crash
	// 	// inboxList.columns = INBOX_LIST.columns;
	// 	// inboxList.rows = INBOX_LIST.rows.filter(function(item) {
	// 	// 	// for msisdn
	// 	// 	return item[0] === searchData.msisdn;
	// 	// });
	// 	console.log('inboxList.rows.length = ' + inboxList.rows.length);

	// 	return Observable.of(inboxList);
	// }

	getOneInbox(rank:string) : any {
		console.log('getOneInbox : rank = ' + rank);
		
		return Observable.of(this.inboxList["rows"].filter(item => item.msisdn === rank)[0]);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}
