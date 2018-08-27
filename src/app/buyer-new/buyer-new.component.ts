import { Component, OnInit } from '@angular/core';

import { Buyer } from '../buyer';
import { BuyerService } from '../buyer.service';

@Component({
  selector: 'app-buyer-new',
  templateUrl: './buyer-new.component.html',
  styleUrls: ['./buyer-new.component.scss']
})
export class BuyerNewComponent implements OnInit {
  constructor(private buyerService: BuyerService) { }
  model = new Buyer('','','','','','','');

  ngOnInit() {
  
  }

  onSubmit() { 
    this.buyerService.addBuyer(this.model)
      .subscribe(buyer => {
         console.log('new Buyer added... ' + JSON.stringify(buyer));
         this.reset();
      });
  }//onSubmit
  
  reset(){
  	console.log('buyer reset is called...');
  	this.model = new Buyer('','','','','','','');
  }

}
