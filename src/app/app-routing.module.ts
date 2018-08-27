import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BillsComponent }       from './bills/bills.component';
import { BillDetailComponent }  from './bill-detail/bill-detail.component';
import { BillNewComponent }     from './bill-new/bill-new.component';
import { BillEditComponent }    from './bill-edit/bill-edit.component';

import { ReceiptComponent }    from './receipt/receipt.component';
import { BuyersComponent }    from './buyers/buyers.component';
import { BuyerNewComponent }  from './buyer-new/buyer-new.component';
import { BuyerDetailComponent } from './buyer-detail/buyer-detail.component';

import { BuyerEditComponent }   from './buyer-edit/buyer-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'detail/:id', component: BillDetailComponent },
  { path: 'edit/:id', component: BillEditComponent },
  { path: 'bills', component: BillsComponent },
  { path: 'buyers', component: BuyersComponent },
  { path: 'new', component: BillNewComponent },
  { path: 'receipt/:id', component: ReceiptComponent },
  { path: 'buyer/new', component: BuyerNewComponent },
  { path: 'buyer/:id', component: BuyerDetailComponent },
  { path: 'buyer/edit/:id', component: BuyerEditComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
