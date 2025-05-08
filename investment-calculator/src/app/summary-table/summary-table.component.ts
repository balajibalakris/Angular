import { Component, Input } from '@angular/core';
import { InvestmentStats } from '../investment-form/investment-stats.model';
import { InvestmentCalculations } from '../investment-form/investment-calculations.model';

@Component({
  selector: 'app-summary-table',
  imports: [],
  templateUrl: './summary-table.component.html',
  styleUrl: './summary-table.component.css'
})
export class SummaryTableComponent {

  @Input() investmentData!: InvestmentCalculations[];

  

}
