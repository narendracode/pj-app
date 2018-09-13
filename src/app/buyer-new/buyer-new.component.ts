import { Component, OnInit } from '@angular/core';

import { Buyer } from '../buyer';
import { BuyerService } from '../buyer.service';
import { FormBuilder, FormGroup , FormControl, Validators,NgForm,FormsModule} from '@angular/forms';
import { patternValidator } from '../pattern-validator';

@Component({
  selector: 'app-buyer-new',
  templateUrl: './buyer-new.component.html',
  styleUrls: ['./buyer-new.component.scss']
})
export class BuyerNewComponent implements OnInit {
  constructor(private buyerService: BuyerService, private fb: FormBuilder) {
    // To initialize FormGroup  
    this.newBuyerRegisterForm = this.fb.group({   
      'firstName':new FormControl('', Validators.compose([
         Validators.required
      ])) 
    }); 

  }
  model = new Buyer('','','','','','','');
  newBuyerRegisterForm: FormGroup;

  validation_messages = {
    firstName : [
      { type: 'required', message: 'First name is required' }
    ]
  };

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
