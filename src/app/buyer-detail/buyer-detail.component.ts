import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Buyer } from '../buyer';
import { BuyerService }  from '../buyer.service';

@Component({
  selector: 'app-buyer-detail',
  templateUrl: './buyer-detail.component.html',
  styleUrls: ['./buyer-detail.component.scss']
})
export class BuyerDetailComponent implements OnInit {
  @Input() model: Buyer;
  
  constructor(
  	private route: ActivatedRoute,
    private buyerService: BuyerService,
    private location: Location) { }

  ngOnInit() {
  	this.getBuyer();
  }


  getBuyer(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.buyerService.getBuyer(id)
      .subscribe(buyer => {
      						console.log('got the buyer with id :'+id);
      						this.model = buyer;
      						console.log('buyer : '+JSON.stringify(buyer));
      					  });
  }

  goBack(): void {
    this.location.back();
  }

}
