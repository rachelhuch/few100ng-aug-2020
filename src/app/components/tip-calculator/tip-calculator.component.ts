import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent implements OnInit {

  amount = 0;
  tipPercentage = 0.2;
  tipAmount = 0;
  total = 0;
  constructor() { }

  ngOnInit(): void {
  }

  amountChanged(amount: number): void {
    this.amount = amount;
    this.tipAmount = this.tipPercentage * this.amount;
    this.total = this.amount + this.tipAmount;
  }

  changeTipPercentage(percent: number): void {
    this.tipPercentage = percent;
  }
}
