import { Account } from './account';

export class Acctransaction {
    transaccountId:string;
    transType:string;
    transAmount:string;
    transDescription:string;
    transDate:string;
    account:Account = new Account();
}
