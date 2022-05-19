export class Loan {
    constructor(
        public loanid:number,
        public loanCustemerName:string,
        public loanAmount:number,
        public dateOfLoan:Date,
        public tenure:number,
        public RateOfInterest:number
    ){

    }
    computeInterestAmount(){
        return this.loanAmount*this.RateOfInterest;
    }

    computeEMI(){
        return this.loanAmount/this.tenure;
    }
}