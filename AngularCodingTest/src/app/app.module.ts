import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddloanComponent } from './addloan/addloan.component';
import { RemoveLoanComponent } from './remove-loan/remove-loan.component';
import { ListLoanComponent } from './list-loan/list-loan.component';

@NgModule({
  declarations: [
    AppComponent,
    AddloanComponent,
    RemoveLoanComponent,
    ListLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
