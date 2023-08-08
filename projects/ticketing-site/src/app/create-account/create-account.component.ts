import { Component } from '@angular/core';
import { myAccounts } from '../model/myaccounts';
import { BmtServices } from '../services/bmt.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  constructor(private bmtService:BmtServices){

  }

  myAccount: myAccounts={
    firstName:"",
    lastName:"",
    emailAddress:"",
    password:""
  }

  status:any="";


  onCreateAccount(event:MouseEvent, fname:string,lname:string,email:string,pwd:string){

    this.myAccount.firstName=fname;
    //console.log(this.myAccount.firstName);
    this.myAccount.lastName=lname;
    this.myAccount.emailAddress=email;
    this.myAccount.password=pwd;
   //this.bmtService.createAccount(this.myAccount);
   this.bmtService.createAccount(this.myAccount).subscribe(data => {
    this.status = data;
      });
  }

}
