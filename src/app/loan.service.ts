import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoanService {
  userName:string;
  constructor(private http: HttpClient) { }
  public viewAllPendingLoanRequests():Observable<any>{
    
    let utoken = localStorage.getItem("tokenId");
    if(utoken == null) utoken="";
    const httpHeaders = new HttpHeaders({"tokenId": utoken});
    return this.http.get("http://localhost:8082/banking/viewallloanrequests", {headers:httpHeaders})
  }
  public processLoan(reqID:string):Observable<any>{
    let utoken = localStorage.getItem("tokenId");
    if(utoken == null) utoken="";
    const httpHeaders = new HttpHeaders({"tokenId": utoken});
    return this.http.get("http://localhost:8082/banking/processrequests/"+reqID,  {headers:httpHeaders})
  }
  public viewAcceptedLoans():Observable<any>{
    let utoken = localStorage.getItem("tokenId");
    if(utoken == null) utoken="";
    const httpHeaders = new HttpHeaders({"tokenId": utoken});
    return this.http.get("http://localhost:8082/banking/viewapprovedloanrequests",{ headers:httpHeaders})
  }
  public viewRejectedLoans():Observable<any>{
    let utoken = localStorage.getItem("tokenId");
    if(utoken == null) utoken="";
    const httpHeaders = new HttpHeaders({"tokenId": utoken});
    return this.http.get("http://localhost:8082/banking/viewrejectedloanrequests",{headers:httpHeaders})
  }
  public viewAccounts():Observable<any>{
    let utoken = localStorage.getItem("tokenId");
    if(utoken == null) utoken="";
    const httpHeaders = new HttpHeaders({"tokenId": utoken});
    return this.http.get("http://localhost:8082/banking/viewupdatedaccountlist",{headers:httpHeaders})
  }
  public doLogin(userId:string, pwd:string):Observable<any>{
    let postData = new FormData();
    postData.append('userid' , userId);
    postData.append('password' , pwd);

    return this.http.post("http://localhost:7082/login/login",postData, {responseType:'text'});
  }

  decrypt(token: string):string {
    let str = "";
    for (let i = 0; i < token.length; ++i) {
      if(str.charAt(i)== "/")
         str= str + ' ';
      else
        str = str + String.fromCharCode(token.charCodeAt(i) - 3);
    }
    return str;
}
encrypt(token: string):string {
  let str = "";
  for (let i = 0; i < token.length; ++i) {
      str = str + String.fromCharCode(token.charCodeAt(i) + 3);
  }
  return str;
}
public doLogout(){
  let utoken = localStorage.getItem("token");
  if(utoken == null) utoken="";
  const httpHeaders = new HttpHeaders({"tokenid": utoken});
  return this.http.get("http://localhost:7082/login/logout",
                          {headers:httpHeaders,responseType:'text'});
}


}
