import { Injectable } from "@angular/core";
import { InvestmentStats } from "./investment-stats.model";
import { InvestmentCalculations } from "./investment-calculations.model";

@Injectable({providedIn : 'root'})
export class InvestmentService
{
    private investmentCalculations : InvestmentCalculations[] = [];
    

    public calculateInvestmentStats(investmentStats : InvestmentStats)
    {
        
        let totalValue = investmentStats.investmentValue;
        for(let i = 0; i < investmentStats.duration; i++)
        {
            totalValue += investmentStats.expectedReturns;
            this.investmentCalculations.push({
                investedAmount : investmentStats.investmentValue,
                year : i+1,
                maturityAmount : totalValue,
                intrestEarned : totalValue - investmentStats.investmentValue
            });
        }
        return this.investmentCalculations;
    }
}