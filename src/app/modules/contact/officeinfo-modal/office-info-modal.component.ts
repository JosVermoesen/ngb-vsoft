import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-office-info-modal',
  templateUrl: './office-info-modal.component.html',
})
export class OfficeInfoModalComponent implements OnInit {
  title: string;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {}
}
