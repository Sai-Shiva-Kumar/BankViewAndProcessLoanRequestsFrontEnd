import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from '../loan.service';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-adminlogincomponent',
  templateUrl: './adminlogincomponent.component.html',
  styleUrls: ['./adminlogincomponent.component.css']
})
export class AdminlogincomponentComponent implements OnInit {
  userId:string;
  pwd:string;
  msg:string;
  
  
    constructor(private router:Router, private storageservice:StorageService, 
    private loanService:LoanService) { }

  ngOnInit(): void {
  }
  doLogin(){
    this.loanService.doLogin(this.userId , this.pwd).subscribe(data=>{
      this.storageservice.setItem("tokenId", data);
      this.msg=undefined;
      this.router.navigateByUrl("/");
      
      
    },
      error=>{this.msg=JSON.parse(error.error).message});
                
  }

}
