import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'inbox-item-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './inbox-item-modal.html',
  styleUrls: ['./inbox-item-modal.css'],
  // encapsulation: ViewEncapsulation.None
})
export class InboxItemModal {
  @Input() detail;

  closeResult: string;
  private JSObject: Object = Object;

  constructor(private modalService: NgbModal) {}

  open(content) {
      console.log('aItem.length : ' + SVGAnimatedEnumeration.length);
    this.modalService.open(content, {size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}