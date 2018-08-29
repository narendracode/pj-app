import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Bill }         from '../bill';
import { BillService }  from '../bill.service';

@Component({
  selector: 'app-bill-detail',
  templateUrl: './bill-detail.component.html',
  styleUrls: [ './bill-detail.component.scss' ]
})
export class BillDetailComponent implements OnInit {
  @Input() bill: Bill;

  constructor(
    private route: ActivatedRoute,
    private billService: BillService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getBill();
  }

  getBill(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Load bill id : '+id);
    this.billService.getBill(id)
      .subscribe(bill => this.bill = bill);
  }

  goBack(): void {
    this.location.back();
  }

  generateReceipt(): void {
    console.log('Generate Receipt is called...');
  }


}
