import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
// import { StoreModule } from '@ngrx/store'
// import { StoreDevtoolsModule } from '@ngrx/store-devtools'
// import { EffectsModule } from '@ngrx/effects'
// import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap'
// import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap'
// import { DatepickerModule } from 'ng2-bootstrap/components/datepicker'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
// import { CalendarModule } from 'primeng/primeng'

// import { customerProfileReducer } from './reducers/customer-profile.reducer'
// import { CustomerProfileEffects } from './effects/customer-profile.effects'
import { CustomerProfileComponent } from './customer-profile.component'
import { CustomerProfileService } from './services/customer-profile.service'
import { CustomerProfileListComponent } from './customer-profile-list.component'
import { CustomerProfileSearchComponent } from './customer-profile-search.component'


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        // DropdownModule,
        // ModalModule,
        // DatepickerModule,
        NgbModule,
        // CalendarModule,
        // StoreModule.provideStore({
        //     customerProfile: customerProfileReducer
        // }),
        // StoreDevtoolsModule.instrumentOnlyWithExtension(),
        // EffectsModule.run(CustomerProfileEffects)
    ],
    declarations: [CustomerProfileComponent, CustomerProfileListComponent, CustomerProfileSearchComponent],
    providers: [CustomerProfileService],
    exports: [CustomerProfileComponent, CustomerProfileListComponent, CustomerProfileSearchComponent]
})

export class CustomerProfileModule { }
