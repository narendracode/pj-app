import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';



//import { SharedModule } from '@app/shared';
//import { CoreModule } from '@app/core';
//import { SettingsModule } from './settings';
//import { StaticModule } from './static';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { BillComponent } from './bill/bill.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BillsComponent } from './bills/bills.component';

@NgModule({
  declarations: [
    AppComponent,
    BillComponent,
    HeaderComponent,
    FooterComponent,
    BillsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,

    // core & shared
    //CoreModule,
    //SharedModule,

    // features
    //StaticModule,
    //SettingsModule,

    //Routing
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }