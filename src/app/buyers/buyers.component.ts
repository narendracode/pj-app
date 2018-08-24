import { Component, OnInit } from '@angular/core';

import { Buyer } from '../buyer';
import { BuyerService } from '../buyer.service';


@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.scss']
})
export class BuyersComponent implements OnInit {
  
  buyers: Buyer[];
  
  constructor(private buyerService: BuyerService) { }

  ngOnInit() {
    console.log('before calling get buyers');
  	this.getBuyers();
    console.log('after calling get buyers');
  }

  getBuyers() : void {
  	this.buyerService.getBuyers()
  		.subscribe(buyers => {
  								this.buyers = buyers;
  								console.log('got the buyers : '+ JSON.stringify(buyers));
  							});
  }

}