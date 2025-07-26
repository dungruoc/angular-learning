import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-data.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment = 0;
  enteredAnnualInvestment = 0;
  enteredExpectedReturn = 0;
  enteredDuration = 0;

  onSubmit() {
    const data = {
      initialInvestment: this.enteredInitialInvestment,
      annualInvestment: this.enteredAnnualInvestment,
      expectedReturn: this.enteredExpectedReturn,
      duration: this.enteredDuration
    };

    console.log("Form submitted", data);
    this.calculate.emit(data);
  }
}
