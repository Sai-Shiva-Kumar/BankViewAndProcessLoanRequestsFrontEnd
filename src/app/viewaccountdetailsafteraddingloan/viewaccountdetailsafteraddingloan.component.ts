import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { Account } from '../account';
import { SearchbyPipe } from '../searchby.pipe';

@Component({
  selector: 'app-viewaccountdetailsafteraddingloan',
  templateUrl: './viewaccountdetailsafteraddingloan.component.html',
  styleUrls: ['./viewaccountdetailsafteraddingloan.component.css']
})
export class ViewaccountdetailsafteraddingloanComponent implements OnInit {
  accounts: Account[]=[];
  msg:string;
  userName=this.loanService.userName;
  searchstrcustid:string="";
  constructor(private loanService:LoanService) { }

  ngOnInit(): void {
    this.loanService.viewAccounts().subscribe(data=>{this.accounts=data,this.msg=undefined},
    error=>this.msg=error.error.message);
  }
}

