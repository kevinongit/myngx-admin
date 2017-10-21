import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
    selector: 'ngx-customer-profile-search',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './customer-profile-search.component.html',
})
export class CustomerProfileSearchComponent implements OnInit {
    searchForm: FormGroup;
    // @Input() data: any;
    @Output() doSearch = new EventEmitter<any>();

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        const today: Date = new Date();
        const yesterday: Date = new Date();

        yesterday.setDate(today.getDate() - 1);
        this.searchForm = this.formBuilder.group({
            msisdn: '',
            target: '',
            tid: '',
            state: '',
            dp: yesterday,
            endDate: today,
        });
    }

    onSearch() {

        if ( !this.searchForm ) {
            return;
        }
        console.log("onSearch()");
        console.log(this.searchForm.value);
        this.doSearch.emit({
            'values': this.searchForm.value,
        });
        // this.searchForm.reset();
    }
}
