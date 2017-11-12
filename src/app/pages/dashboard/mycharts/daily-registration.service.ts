import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { mockData } from './mock-data';

@Injectable()
export class DailyRegistrationService {
    private endpoint = 'api/dailyregi';
    private headers = new Headers({'Content-Type' : 'application/json'});
    records : any;

    constructor(private http: Http) {
    }

    getChartData(condition) {
        return mockData;
    }
}