import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InvestmentFormComponent } from "./investment-form/investment-form.component";
import { SummaryTableComponent } from "./summary-table/summary-table.component";
import { InvestmentStats } from './investment-form/investment-stats.model';
import { InvestmentService } from './investment-form/investment.services';
import { InvestmentCalculations } from './investment-form/investment-calculations.model';
import { inv_service_token } from '../main';

@Component({
  selector: 'app-root',
  imports: [ InvestmentFormComponent, SummaryTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'investment-calculator';
  investmentData : InvestmentCalculations[] = [];

  //constructor(private investmentService : InvestmentService){}

  private investmentService = inject(inv_service_token);

  isCalculationsAvailable = false;


  enableCaluclations(val : boolean)
  {
    this.isCalculationsAvailable = val;
  }

  calculate(stats : InvestmentStats)
  {
    this.investmentData = [];
    this.investmentData = this.investmentService.calculateInvestmentStats(this.investmentData, stats);
    // alert("completed");
  }
  
  

  }


