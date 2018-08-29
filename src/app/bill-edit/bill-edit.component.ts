import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Bill }         from '../bill';
import { Item } from '../item';
import { BillService }  from '../bill.service';



@Component({
  selector: 'app-bill-edit',
  templateUrl: './bill-edit.component.html',
  styleUrls: ['./bill-edit.component.scss']
})
export class BillEditComponent implements OnInit {
    @Input() model: Bill;

    items = new Array<Item>();
    item = new Item('',0,1,24,0);
 
    constructor(
    private route: ActivatedRoute,
    private billService: BillService,
    private location: Location
  ) {}

  ngOnInit() {
  	this.getBill();
  }

  getBill(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.billService.getBill(id)
      .subscribe(bill => {
      						console.log('got the bill with id :'+id);
      						console.log(JSON.stringify(bill.items));
      						this.model = bill;
      						this.items = bill.items;
      					  });
  }

  goBack(): void {
    this.location.back();
  }


  onSubmit() { 
    //this.submitted = true; 
    

    
   this.save();

  }//onSubmit


  save(): void {
    this.model.items = this.items;
    this.billService.updateBill(this.model)
      .subscribe(() => this.goBack());
  }

  addItem(){
    console.log('Add item is called..');
    this.items.push(this.item);
    this.resetItem();
  }


  reset(){
    this.resetModel();
    this.resetItem();
    this.resetItems();
  }

  resetModel(){
    this.model = new Bill( '', '', [], 0, 0, 0);
  }

  resetItem(){
    this.item = new Item('',0,1,24,0);
  }

  resetItems(){
    this.items = new Array<Item>();
  }



  deleteItem(item: Item){
    var index = this.items.indexOf(item,0);
    if(index > -1){
      this.items.splice(index,1);
    }
  }


}
