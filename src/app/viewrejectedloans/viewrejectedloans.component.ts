import { Component, OnInit } from '@angular/core';
import { Loanrequest } from '../loanrequest';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-viewrejectedloans',
  templateUrl: './viewrejectedloans.component.html',
  styleUrls: ['./viewrejectedloans.component.css']
})
export class ViewrejectedloansComponent implements OnInit {
  loanrequests: Loanrequest[]=[];
  msg:string;
  userName=this.loanService.userName;
  searchstr:string="";

  constructor(private loanService:LoanService) { }

  ngOnInit(): void {
    this.loanService.viewRejectedLoans().subscribe(data=>{this.loanrequests=data,this.msg=undefined},
    error=>this.msg=error.error.message);
  }

}
