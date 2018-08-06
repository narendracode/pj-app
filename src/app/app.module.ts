import { NgModule }                       from '@angular/core';
import { BrowserModule }                  from '@angular/platform-browser';
import { FormsModule }                    from '@angular/forms';
import { HttpClientModule }               from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }            from './in-memory-data.service';
import { AppRoutingModule }               from './app-routing.module';
import { AppComponent }                   from './app.component';
import { BillDetailComponent }            from './bill-detail/bill-detail.component';
import { BillsComponent }                from './bills/bills.component';
import { BillSearchComponent }            from './bill-search/bill-search.component';
import { MessagesComponent }              from './messages/messages.component';
import { BrowserAnimationsModule }        from '@angular/platform-browser/animations';
import { MatToolbarModule }               from '@angular/material/toolbar';
import { MatCardModule }                  from '@angular/material/card';
import { MatSidenavModule }               from '@angular/material/sidenav';
import { MatListModule}                   from '@angular/material/list';
import { MatIconModule}                   from '@angular/material/icon';
import { MatMenuModule}                   from '@angular/material/menu';
import { MatTooltipModule}                from '@angular/material/tooltip';
import { MatButtonModule}                 from '@angular/material/button';
import { FlexLayoutModule }               from '@angular/flex-layout';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,


    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatButtonModule,


    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    BillsComponent,
    BillDetailComponent,
    MessagesComponent,
    BillSearchComponent,


    HeaderComponent,
    FooterComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }