import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GuiListModule } from '@generic-ui/ngx-list';
import { SingleDigitInputDirective } from './autoFocus.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, GuiListModule],
  declarations: [AppComponent, SingleDigitInputDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
