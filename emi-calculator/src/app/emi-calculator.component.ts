import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'emi-calculator-app',
  templateUrl: 'emi-calculator.component.html',
  styleUrls: ['emi-calculator.component.css']
})
export class EmiCalculatorAppComponent {

  title:string = 'EMI Calculator';
  loanAmount: number = 1000000;
  interestRate: number = 10.5;
  loanTenure: number = 120;
  emi: number;

  calculateEmi() {

    if(this.loanAmount && this.interestRate && this.loanTenure) {


      let interestPerMonth = this.interestRate/12/100;

      let numerator = Math.pow((1+interestPerMonth), this.loanTenure);

      let denominator = numerator - 1;

      this.emi = (this.loanAmount * interestPerMonth) * numerator/denominator;

      console.log(this.emi);
    }
  }
}
