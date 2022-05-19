import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-remove-loan',
  templateUrl: './remove-loan.component.html',
  styleUrls: ['./remove-loan.component.css']
})
export class RemoveLoanComponent implements OnInit {

  constructor(public l:LoanService) { }

  ngOnInit() {
  }

  delete(loanid){
    this.l.deleteLoan(loanid);
  }


}
