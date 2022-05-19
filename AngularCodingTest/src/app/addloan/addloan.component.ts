import { Component, OnInit } from '@angular/core';
import { Loan } from '../Loan';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-addloan',
  templateUrl: './addloan.component.html',
  styleUrls: ['./addloan.component.css']
})
export class AddloanComponent implements OnInit {

  constructor(public l:LoanService) { }

  ngOnInit() {
  }

  public loan =new Loan(0,"",0,0,0,0);

  add(){
   
    return this.l.addloan(this.loan)
  }

}
