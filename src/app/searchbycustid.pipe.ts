import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './customer';
import { Account } from './account';

@Pipe({
  name: 'searchbycustid'
})
export class SearchbycustidPipe implements PipeTransform {

  transform(accounts: Account[],searchstrcustid:string): unknown {
    return accounts.filter(accounts=>accounts.customer.customerId.toLowerCase().includes(searchstrcustid.toLowerCase()));
  }

}
