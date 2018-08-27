import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Buyer } from './buyer';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class BuyerService {

  private buyerAPIUrl = 'http://localhost:8080/buyer';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET buyers from the server */
  getBuyers (): Observable<Buyer[]> {
    return this.http.get<Buyer[]>(this.buyerAPIUrl)
      .pipe(
        tap(buyers =>  { 
            this.log('fetched buyers');
          }),
        catchError(this.handleError('getbuyers', []))
      );
  }



  addBuyer (buyer: Buyer): Observable<Buyer> {
      return this.http.post<Buyer>(this.buyerAPIUrl, buyer, httpOptions).pipe(
        tap((buyer: Buyer) => { 
                                this.log(`added Buyer w/ id=${buyer.id},   fullName=${buyer.firstName} `);
                              }
         ),
        catchError(this.handleError<Buyer>('addBuyer'))
    );
  }

  deleteBuyer(id: string): Observable<{}> {
     const url = this.buyerAPIUrl + '/'+id;
     return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteBuyer'))
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

  /** Log a BuyerService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`BuyerService: ${message}`);
  }
}
