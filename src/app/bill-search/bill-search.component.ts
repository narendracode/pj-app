import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Bill } from '../bill';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-bill-search',
  templateUrl: './bill-search.component.html',
  styleUrls: [ './bill-search.component.scss' ]
})
export class BillSearchComponent implements OnInit {
  bills$: Observable<Bill[]>;
  private searchTerms = new Subject<string>();

  constructor(private billService: BillService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.bills$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.billService.searchBills(term)),
    );
  }
}
