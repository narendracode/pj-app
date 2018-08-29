import { Component, OnInit } from '@angular/core';

import { Bill } from '../bill';
import { Item } from '../item';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-bill-new',
  templateUrl: './bill-new.component.html',
  styleUrls: ['./bill-new.component.scss']
})
export class BillNewComponent implements OnInit {

  constructor(private billService: BillService) { }

  model = new Bill( '', '', [], 0, 0, 0);
  items = new Array<Item>();
  item = new Item('',0,1,24,0);

  submitted = false;
  onSubmit() { 
  	//this.submitted = true; 
    this.model.items = this.items;
    this.billService.addBill(this.model)
      .subscribe(bill => {
         console.log('new Bill added... with total items '+bill.items.length + '   , id : '+bill.id);
         this.reset();
      });
  }//onSubmit


  deleteItem(item: Item){
    var index = this.items.indexOf(item,0);
    if(index > -1){
      this.items.splice(index,1);
    }
  }


  addItem(){
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

  newBill(){
    this.model = new Bill( '', '', [], 0, 0, 0);
  }

  ngOnInit() {

  }

}
