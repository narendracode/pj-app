import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BillsComponent }      from './bills/bills.component';
import { BillDetailComponent }  from './bill-detail/bill-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'detail/:id', component: BillDetailComponent },
  { path: 'bills', component: BillsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
