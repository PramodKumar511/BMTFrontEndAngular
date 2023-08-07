import { Component } from '@angular/core';
import { myorder } from '../model/myorder';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent {

  myOrders:any=myorder;

}
