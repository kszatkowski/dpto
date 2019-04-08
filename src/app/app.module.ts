import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { QuantityCheckerComponent } from './components/table/quantity-checker/quantity-checker.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    QuantityCheckerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
