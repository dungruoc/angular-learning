import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { InvestmentResultsService } from '../investment-results.service';
import { AnnualInvestmentResult, InvestmentInput } from './investment-data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent
  ]
})
export class AppComponent {

  private investmentResultsService = inject(InvestmentResultsService);
  resultsData = signal<Array<AnnualInvestmentResult> | undefined>(undefined);

  onCalculateInvestmentResults(data: InvestmentInput) {
    this.resultsData.set(this.investmentResultsService.calculateInvestmentResults(data));
  }
}
