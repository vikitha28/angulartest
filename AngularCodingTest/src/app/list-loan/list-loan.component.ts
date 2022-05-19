import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-list-loan',
  templateUrl: './list-loan.component.html',
  styleUrls: ['./list-loan.component.css']
})
export class ListLoanComponent implements OnInit {

  constructor(private l:LoanService) { }
  public Loans=[];

  ngOnInit() {
    this.Loans=this.l.getAllLoans();
  }

}
