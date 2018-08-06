import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Bill } from './bill';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class BillService {

  private billsUrl = 'api/bills';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET bills from the server */
  getBills (): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.billsUrl)
      .pipe(
        tap(bills => this.log('fetched bills......')),
        catchError(this.handleError('getbills', []))
      );
  }

  /** GET Bill by id. Return `undefined` when id not found */
  getBillNo404<Data>(id: number): Observable<Bill> {
    const url = `${this.billsUrl}/?id=${id}`;
    return this.http.get<Bill[]>(url)
      .pipe(
        map(bills => bills[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} Bill id=${id}`);
        }),
        catchError(this.handleError<Bill>(`getBill id=${id}`))
      );
  }

  /** GET Bill by id. Will 404 if id not found */
  getBill(id: number): Observable<Bill> {
    const url = `${this.billsUrl}/${id}`;
    return this.http.get<Bill>(url).pipe(
      tap(_ => this.log(`fetched Bill id=${id}`)),
      catchError(this.handleError<Bill>(`getBill id=${id}`))
    );
  }

  /* GET bills whose name contains search term */
  searchBills(term: string): Observable<Bill[]> {
    if (!term.trim()) {
      // if not search term, return empty Bill array.
      return of([]);
    }
    return this.http.get<Bill[]>(`${this.billsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found bills matching "${term}"`)),
      catchError(this.handleError<Bill[]>('searchbills', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new Bill to the server */
  addBill (Bill: Bill): Observable<Bill> {
    return this.http.post<Bill>(this.billsUrl, Bill, httpOptions).pipe(
      tap((Bill: Bill) => this.log(`added Bill w/ id=${Bill.id}`)),
      catchError(this.handleError<Bill>('addBill'))
    );
  }

  /** DELETE: delete the Bill from the server */
  deleteBill (Bill: Bill | number): Observable<Bill> {
    const id = typeof Bill === 'number' ? Bill : Bill.id;
    const url = `${this.billsUrl}/${id}`;

    return this.http.delete<Bill>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Bill id=${id}`)),
      catchError(this.handleError<Bill>('deleteBill'))
    );
  }

  /** PUT: update the Bill on the server */
  updateBill (Bill: Bill): Observable<any> {
    return this.http.put(this.billsUrl, Bill, httpOptions).pipe(
      tap(_ => this.log(`updated Bill id=${Bill.id}`)),
      catchError(this.handleError<any>('updateBill'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a BillService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`BillService: ${message}`);
  }
}
