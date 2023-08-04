import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BmtServices } from '../services/bmt.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private router:Router, private service:BmtServices, private http:HttpClient ){

  }
  ngOnChanges(){

  }

  title = 'Ticketing-Site';

  images: any = [
    { img: "assets/Untitled.png" },
    { img: "assets/Untitled1.png" },
    { img: "assets/Untitled2.png" },
    { img: "assets/Untitled3.png" },
    { img: "assets/Untitled4.png" },
    { img: "assets/Untitled5.png" }

  ]

  Email_Address_Value: any = "Email address";

  inpclick(event: MouseEvent) {
    this.Email_Address_Value = "";
  }

  Password_Value: any = "Password";
  pwd_class: any = "inp";


  pwdclick(event: MouseEvent) {
    this.Password_Value = "";
    this.pwd_class = "inp1";

  }

  ticketData:any;
  ticketNo:String="Default Value";

  goToPage() {
 
    this.router.navigateByUrl('/register');
    this.service.getTickets().subscribe(data=>{
      this.ticketData=data;
      this.ticketNo=this.ticketData.ticketNo;
      });
  }

}
