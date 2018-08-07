import { Component, OnInit } from '@angular/core';

import { Bill } from '../bill';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
  bills: Bill[];

  constructor(private billService: BillService) { }

  ngOnInit() {
    this.getBills();
  }

  getBills(): void {
    this.billService.getBills()
    .subscribe(bills => this.bills = bills);
  }

  add(name: string): void {
    const fullName = name.trim();
    const desc = '';
    const id = 0;
    const totalAmount = 0;
    const discount = 0;
    const tax = 0;


    if (!name) { return; }
    this.billService.addBill( new Bill(id,desc,fullName,totalAmount,discount,tax ) as Bill)
      .subscribe(bill => {
        this.bills.push(bill);
      });
  }

  delete(bill: Bill): void {
    this.bills = this.bills.filter(h => h !== bill);
    this.billService.deleteBill(bill).subscribe();
  }

}
