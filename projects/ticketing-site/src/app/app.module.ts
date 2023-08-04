import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TpHeaderComponent } from './tp-header/tp-header.component';
import { TpFooterComponent } from './tp-footer/tp-footer.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { HomeComponent } from './home/home.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { MainComponent } from './main/main.component';
import { PaymentComponent } from './payment/payment.component';
import {HttpClientModule} from '@angular/common/http';
import { EventCardComponent } from './event-card/event-card.component';
import { SellticketsComponent } from './selltickets/selltickets.component';

@NgModule({
  declarations: [
    AppComponent,
    TpHeaderComponent,
    TpFooterComponent,
    CreateAccountComponent,
    HomeComponent,
    ForgotpasswordComponent,
    MainComponent,
    PaymentComponent,
    EventCardComponent,
    SellticketsComponent
  ],
  imports: [
    BrowserModule,
        RouterModule.forRoot([
      {
        path:'', component: MainComponent},
        {path: 'register', component: CreateAccountComponent},
        {path:'forgotpassword', component:ForgotpasswordComponent},
         {path:'home', component:HomeComponent}
    ]),
HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
