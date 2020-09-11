import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ViewandprocessloanrequestsComponent } from './viewandprocessloanrequests/viewandprocessloanrequests.component';
import { AdminlogincomponentComponent } from './adminlogincomponent/adminlogincomponent.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ViewacceptedloansComponent } from './viewacceptedloans/viewacceptedloans.component';
import { ViewrejectedloansComponent } from './viewrejectedloans/viewrejectedloans.component';
import { ViewaccountdetailsafteraddingloanComponent } from './viewaccountdetailsafteraddingloan/viewaccountdetailsafteraddingloan.component';
import { SearchbyPipe } from './searchby.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchbycustidPipe } from './searchbycustid.pipe';
import { LoancomponentComponent } from './loancomponent/loancomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewandprocessloanrequestsComponent,
    AdminlogincomponentComponent,
    ErrorpageComponent,
    ViewacceptedloansComponent,
    ViewrejectedloansComponent,
    ViewaccountdetailsafteraddingloanComponent,
    SearchbyPipe,
    HomepageComponent,
    SearchbycustidPipe,
    LoancomponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
