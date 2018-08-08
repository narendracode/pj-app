import { Component, OnInit } from '@angular/core';

import {Bill } from '../bill';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-bill-new',
  templateUrl: './bill-new.component.html',
  styleUrls: ['./bill-new.component.scss']
})
export class BillNewComponent implements OnInit {

  constructor(private billService: BillService) { }

  model = new Bill(	0, '', '', 5, 5, 1);
  submitted = false;
  onSubmit() { 
  	//this.submitted = true; 
  	
    console.log('Bill Details from on Submit '+ this.model.fullName + ' , ' +
                                this.model.desc + ' , ' + 
                                this.model.discount +  '  , ' + 
                                this.model.id +  '  , ' +
                                this.model.tax +  '  , ' +
                                this.model.totalAmount
                );
    
    this.billService.addBill(this.model)
      .subscribe(bill => {
         console.log('new Bill added...');
      });

  }//onSubmit

  newBill(){
    this.model = new Bill(  0, '', '', 5, 5, 1);
  }

  ngOnInit() {

  }

}
