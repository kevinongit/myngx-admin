import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class CustomerProfileService {
	private customerProfileUrl = 'api/customerprofiles';
	private headers = new Headers({'Content-Type' : 'application/json'});
	customerProfileList = {};

	constructor(private http: Http) {
	}

	getCustomerProfiles(searchData) : Observable<any> {
		console.log('getCustomerProfiles');
		return this.http.get(this.customerProfileUrl)
			.map(resp => {
				this.customerProfileList = resp.json();
				console.log('getCustomerProfiles : this.customerProfileList = ' + this.customerProfileList);
				return resp.json();
			});
	}

	

	getOneCustomerProfile(rank:string) : any {
		console.log('getOneCustomerProfile : rank = ' + rank);
		
		return Observable.of(this.customerProfileList["rows"].filter(item => item.msisdn === rank)[0]);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}

}
