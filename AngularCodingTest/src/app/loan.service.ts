import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor() { }

  public Loans=[];

  addloan(loan){
    this.Loans.push(loan)
    console.log(this.Loans);
  }
  getAllLoans(){
    return this.Loans;
  }

  deleteLoan(loanid){
    for(let i=0;i<this.Loans.length;i++){
      if(this.Loans[i].loanid==loanid){
         this.Loans.splice(i,1);
      }
    }
  return null;
  }

}
