import { Component, OnInit } from '@angular/core';
import { BILL } from '../mock-bills';


@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  bills = BILL;
  constructor() { }

  ngOnInit() {
  }

}
