import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { InvestmentService } from './app/investment-form/investment.services';
import { InjectionToken } from '@angular/core';

export const inv_service_token = new InjectionToken<InvestmentService>('inv-service-token');

bootstrapApplication(AppComponent, {
  providers: [{provide: inv_service_token, useClass: InvestmentService}]
})
  .catch((err) => console.error(err));
