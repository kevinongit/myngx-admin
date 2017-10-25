import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'inbox-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './inbox-list.component.html'
})
export class InboxListComponent {
	@Input() data: any;
    // @Output() selectMovie = new EventEmitter<any>();
    detail : any;

    // makeDetail(data:any, index:number) {
    //     let majorLength = data.majorColumns.length;
    //     let minorLength = data.minorColumns.length;
    //     let detail = [];

    //     console.log('index = '+ index);
    //     console.log('data.allMR[][]' + JSON.stringify(data.allMajorRows[index]));
    //     for (let i=0; i < majorLength; i++) { 
    //         detail.push({name: data.majorColumns[i], value: (data.allMajorRows[index])[i]})
    //     }
    //     for (let i=0; i < minorLength; i++) {
    //         detail.push({name: data.minorColumns[i], value: (data.allMinorRows[index])[i]});
    //     }
    //     console.log('detail = ' + JSON.stringify(detail));
    //     return detail;
    // }

}