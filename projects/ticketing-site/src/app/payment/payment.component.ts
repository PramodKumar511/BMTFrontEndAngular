import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

@Input('tkteventid')  tktevent_id:any;
@Input('abc') details:any;

mycarddetails:{mycardno:number,mycarddate:string}[]=[{mycardno:0, mycarddate:""}]

//details:string="Payment Intiated for " ;

@Output()
buy:EventEmitter<any>=new EventEmitter<any>();

onpay(event:MouseEvent, cardnumber:string, carddate:string)
{
  this.mycarddetails[0].mycardno=parseInt(cardnumber);
  this.mycarddetails[0].mycarddate=carddate;
console.log(this.mycarddetails[0].mycardno);
console.log(this.mycarddetails[0].mycarddate);
this.buy.emit(this.mycarddetails);
if(this.mycarddetails[0].mycardno>0){
this.details="Payment Successfull for";}
else{
    this.details="Ivalid Card details entered for";
}


}




}
