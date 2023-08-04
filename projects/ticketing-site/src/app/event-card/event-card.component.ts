import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {

  constructor(private router:Router){}

  tktevents: {id: number, event_name: string, Price: number}[]=[{
    id: 1,
   event_name: "Rock Concert",
   Price: 200
 },
 {
   id: 2,
  event_name: "Classical Concert",
  Price: 300
},
{
 id: 3,
event_name: "Football Game",
Price: 400
},
{
 id: 4,
event_name: "Basketball Game",
Price: 500
},
{
 id: 5,
event_name: "Baseball Game",
Price: 600
}
]


eventname:string="";
abc:string="";
//temp:string="payment intiated for ";
BuyTicket(event:MouseEvent, eventname:string, abc:string){
 this.eventname=eventname;
 this.abc="Payment intiated for ";
 }

cardno: number=0;
paydetails(carddetails: any)
{
  this.cardno=carddetails[0].mycardno;
  console.log("Payment for");
  console.log(this.cardno);
}

}
