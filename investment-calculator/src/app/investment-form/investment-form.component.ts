import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule, NgModel} from "@angular/forms";
import { InvestmentStats } from './investment-stats.model';

@Component({
  selector: 'app-investment-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.css'
})
export class InvestmentFormComponent {

  investmentValue = 0;
  expectedReturns = 1;
  duration = 1;

  @Output() enableCaluclations = new EventEmitter<boolean>();
  @Output() investmentValueChange = new EventEmitter<InvestmentStats>();


  onSubmit()
  {
    this.enableCaluclations.emit(true);
    this.investmentValueChange.emit(
      new InvestmentStats(this.investmentValue, this.expectedReturns, this.duration)
    );

  }

}
