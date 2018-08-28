import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Buyer } from '../buyer';
import { BuyerService }  from '../buyer.service';


@Component({
  selector: 'app-buyer-edit',
  templateUrl: './buyer-edit.component.html',
  styleUrls: ['./buyer-edit.component.scss']
})
export class BuyerEditComponent implements OnInit {
  @Input() model: Buyer;

  constructor(
    private route: ActivatedRoute,
    private buyerService: BuyerService,
    private location: Location
  ) {}

  ngOnInit() {
  	this.getBuyer();
  }


  getBuyer(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('inside buyer edit id : '+id);
    this.buyerService.getBuyer(id)
      .subscribe(buyer => {
      						console.log('got the buyer with id :'+id);
      						this.model = buyer;
      						console.log('buyer : '+JSON.stringify(buyer));
      					  });
  }


  onSubmit() { 
   this.save();
  }

  save(): void {
    this.buyerService.updateBuyer(this.model)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
