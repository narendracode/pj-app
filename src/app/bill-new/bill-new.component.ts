import { Component, OnInit } from '@angular/core';

import { Bill } from '../bill';
import { Item } from '../item';
import { BillService } from '../bill.service';
import { BuyerService } from '../buyer.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { FormBuilder, FormGroup , FormControl, Validators} from '@angular/forms';
import { iBuyer } from '../ibuyer';
import { iBuyerGroup } from '../iBuyerGroup';


export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

export const _filterBuyer = (opt: iBuyer[], value: string): iBuyer[] => {
  if(typeof value === 'string'){
    return opt.filter(function(buyer){
      return buyer.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }else{
    return opt.filter(function(buyer){
      return buyer.name === value['name'] && buyer.id === value['id'];
    });
  }
};


@Component({
  selector: 'app-bill-new',
  templateUrl: './bill-new.component.html',
  styleUrls: ['./bill-new.component.scss']
})
export class BillNewComponent implements OnInit {
  buyerForm: FormGroup = this.fb.group({
    buyerGroup: '',
  });

  constructor(private billService: BillService, private buyerService: BuyerService, private fb: FormBuilder) { 

  }

  model = new Bill( '', '', [], 0, 0, 0);
  items = new Array<Item>();
  item = new Item('',0,1,24,0);
  buyerGroups: iBuyerGroup[];

  submitted = false;
  
  onSubmit() { 
  	//this.submitted = true; 
    this.model.items = this.items;
    this.billService.addBill(this.model)
      .subscribe(bill => {
         console.log('new Bill added... with total items ' + bill.items.length + '   , id : '+ bill.id);
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



  onBuyerSelect(buyer: iBuyer){
    console.log('selected Buyer is : '+JSON.stringify(buyer));
    this.model.buyerName = buyer.name;
    this.model.buyerId = buyer.id;
  }


  ngOnInit() {
    this.getBuyerGroups();
    
    this.buyerGroupOptions = this.buyerForm.get('buyerGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterBuyerGroup(value))
      );
  }


  buyerGroupOptions: Observable<iBuyerGroup[]>;

  private _filterBuyerGroup(value: string): iBuyerGroup[] {
    if (value) {
      return this.buyerGroups
        .map(group => ({letter: group.letter, names: _filterBuyer(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.buyerGroups;
  }

  getBuyerGroups(): void {
    this.buyerService.getBuyerGroups()
    .subscribe(buyerGroups => this.buyerGroups = buyerGroups);
  }


}
