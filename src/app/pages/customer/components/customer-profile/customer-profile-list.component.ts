import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core'

@Component({
    selector: 'ngx-customer-profile-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './customer-profile-list.component.html',
})
export class CustomerProfileListComponent {
    @Input() data: any;
    // @Output() selectMovie = new EventEmitter<any>();
}
