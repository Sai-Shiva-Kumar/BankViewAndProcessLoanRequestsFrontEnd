import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewandprocessloanrequestsComponent } from './viewandprocessloanrequests/viewandprocessloanrequests.component';
import { BankguardGuard } from './bankguard.guard';
import { AdminlogincomponentComponent } from './adminlogincomponent/adminlogincomponent.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ViewacceptedloansComponent } from './viewacceptedloans/viewacceptedloans.component';
import { ViewrejectedloansComponent } from './viewrejectedloans/viewrejectedloans.component';
import { ViewaccountdetailsafteraddingloanComponent } from './viewaccountdetailsafteraddingloan/viewaccountdetailsafteraddingloan.component';
import{ HomepageComponent} from './homepage/homepage.component'
import { LoancomponentComponent } from './loancomponent/loancomponent.component';

const routes: Routes = [
  {path:'viewandprocessloanrequest', component:ViewandprocessloanrequestsComponent,canActivate:[BankguardGuard], data:{role:'admin'}},
  {path:'adminlogin', component:AdminlogincomponentComponent},
  {path:'error',component:ErrorpageComponent},
  {path:'viewapprovedloans', component:ViewacceptedloansComponent,canActivate:[BankguardGuard]},
  {path:'viewrejectedloans',component:ViewrejectedloansComponent,canActivate:[BankguardGuard]},
  {path:'accountlistafteraddingloan',component:ViewaccountdetailsafteraddingloanComponent,canActivate:[BankguardGuard]},
  {path:'Home', component:HomepageComponent},
  {path:'Loan',component:LoancomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
