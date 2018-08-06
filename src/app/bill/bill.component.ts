import { Component, OnInit } from '@angular/core';
import { Bill } from '../bill';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  bill: Bill = {
  	id: 1234,
  	desc : 'Bill Description sample'
  }

  billId = 12345;
  constructor() { }

  ngOnInit() {
  }

}
