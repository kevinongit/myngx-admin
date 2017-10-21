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

// import { inboxReducer } from './reducers/inbox.reducer'
// import { InboxEffects } from './effects/inbox.effects'
import { InboxComponent } from './inbox.component'
import { InboxService } from './services/inbox.service'
import { InboxListComponent } from './inbox-list.component'
import { InboxSearchComponent } from './inbox-search.component'
import { InboxItemModal } from './inbox-item-modal'


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
        //     inbox: inboxReducer
        // }),
        // StoreDevtoolsModule.instrumentOnlyWithExtension(),
        // EffectsModule.run(InboxEffects)
    ],
    declarations: [ InboxComponent, InboxListComponent, InboxSearchComponent, InboxItemModal ],
    providers: [ InboxService ],
    exports: [ InboxComponent, InboxListComponent, InboxSearchComponent ]
})

export class InboxModule { }
