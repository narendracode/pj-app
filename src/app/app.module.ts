import { NgModule }                       from '@angular/core';
import { BrowserModule }                  from '@angular/platform-browser';
import { FormsModule }                    from '@angular/forms';
import { HttpClientModule }               from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }            from './in-memory-data.service';
import { AppRoutingModule }               from './app-routing.module';
import { AppComponent }                   from './app.component';
import { BillDetailComponent }            from './bill-detail/bill-detail.component';
import { BillsComponent }                 from './bills/bills.component';
import { BillSearchComponent }            from './bill-search/bill-search.component';
import { MessagesComponent }              from './messages/messages.component';
import { BrowserAnimationsModule }        from '@angular/platform-browser/animations';
import { MatToolbarModule }               from '@angular/material/toolbar';
import { MatCardModule }                  from '@angular/material/card';
import { MatSidenavModule }               from '@angular/material/sidenav';
import { MatListModule }                   from '@angular/material/list';
import { MatIconModule }                   from '@angular/material/icon';
import { MatMenuModule }                   from '@angular/material/menu';
import { MatTooltipModule }                from '@angular/material/tooltip';
import { MatButtonModule }                 from '@angular/material/button';
import { FlexLayoutModule }               from '@angular/flex-layout';
import { MatFormFieldModule }             from '@angular/material/form-field';
import { MatInputModule }                 from '@angular/material/input';
import { MatSelectModule }                from '@angular/material/select';
import { MatCheckboxModule }               from '@angular/material/checkbox';
import { MatRadioModule }                  from '@angular/material/radio';
import { MatSliderModule }                 from '@angular/material/slider';
import { MatDatepickerModule }             from '@angular/material/datepicker';
import { MatSlideToggleModule }            from '@angular/material/slide-toggle';
import { MatDividerModule }                from '@angular/material/divider';
import { MatExpansionModule }              from '@angular/material/expansion';
import { MatAutocompleteModule }           from '@angular/material/autocomplete';
import { HeaderComponent }                from './header/header.component';
import { FooterComponent }                from './footer/footer.component';
import { BillNewComponent } from './bill-new/bill-new.component';
import { BillEditComponent } from './bill-edit/bill-edit.component';



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
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSliderModule,
    MatDatepickerModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatExpansionModule,
    MatAutocompleteModule,
    


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
    BillNewComponent,
    BillEditComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
