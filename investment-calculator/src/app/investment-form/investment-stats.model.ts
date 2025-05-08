// investment-stats.model.ts
export class InvestmentStats {
    constructor(
      public investmentValue: number,
      public expectedReturns: number,
      public duration: number
    ) {}
  }
  