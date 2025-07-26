import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UserInputModule } from "./user-input/user-input.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@NgModule({
    declarations: [
        HeaderComponent,
        InvestmentResultsComponent,
        AppComponent
    ],
    imports: [ BrowserModule, UserInputModule],
    bootstrap: [ AppComponent ]
})
export class AppModule {}