import { Injectable } from "@angular/core";
import { InvestmentStats } from "./investment-stats.model";
import { InvestmentCalculations } from "./investment-calculations.model";


export class InvestmentService
{
    // private investmentData : InvestmentCalculations[] = [];
    

    public calculateInvestmentStats(investmentData : InvestmentCalculations[] , investmentStats : InvestmentStats)
    {
        
        let totalValue = investmentStats.investmentValue;
        for(let i = 0; i < investmentStats.duration; i++)
        {
            totalValue += investmentStats.expectedReturns;
            investmentData.push({
                investedAmount : investmentStats.investmentValue,
                year : i+1,
                maturityAmount : totalValue,
                intrestEarned : totalValue - investmentStats.investmentValue
            });
        }
        return investmentData;
    }
}