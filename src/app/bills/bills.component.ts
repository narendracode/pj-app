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
    name = name.trim();
    if (!name) { return; }
    this.billService.addBill({ name } as Bill)
      .subscribe(hero => {
        this.bills.push(hero);
      });
  }

  delete(bill: Bill): void {
    this.bills = this.bills.filter(h => h !== bill);
    this.billService.deleteBill(bill).subscribe();
  }

}
