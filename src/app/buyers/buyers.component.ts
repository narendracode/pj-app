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
  	this.getBuyers();
  }

  getBuyers() : void {
  	this.buyerService.getBuyers()
  		.subscribe(buyers => {
  								this.buyers = buyers;
  							});
  }

  delete(buyer: Buyer): void {
    this.buyers = this.buyers.filter(h => h !== buyer);
    this.buyerService.deleteBuyer(buyer.id).subscribe();
  }

}