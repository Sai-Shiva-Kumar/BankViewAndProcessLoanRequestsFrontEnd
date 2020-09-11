import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { Loanrequest } from '../loanrequest';

@Component({
  selector: 'app-viewacceptedloans',
  templateUrl: './viewacceptedloans.component.html',
  styleUrls: ['./viewacceptedloans.component.css']
})
export class ViewacceptedloansComponent implements OnInit {
  loanrequests: Loanrequest[]=[];
  msg:string;
  userName=this.loanService.userName;
  searchstr:string="";
  constructor(private loanService:LoanService) { }

  ngOnInit(): void {
    this.loanService.viewAcceptedLoans().subscribe(data=>{this.loanrequests=data,this.msg=undefined},
    error=>this.msg=error.error.message);
  }

}
