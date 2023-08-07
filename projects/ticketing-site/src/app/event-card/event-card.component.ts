import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { tkteventdetails } from '../model/tkteventdetails';
import { tkeventmodel } from '../model/tkteventmodel';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {

  constructor(private router: Router) { }

  tktevents=tkteventdetails;

  eventdetails: tkeventmodel = {eventid:0,eventname:"",price:0};
  
  BuyTicket(event: MouseEvent, eventID:number,eventName:string,eventPrice:number) {
    
    this.eventdetails.eventid=eventID;
    this.eventdetails.eventname = eventName;
    this.eventdetails.price=eventPrice;
  }

  cardno: number = 0;
  onrecieved(carddetails: any) {
    this.cardno = carddetails[0].mycardno;
 
  }

}
