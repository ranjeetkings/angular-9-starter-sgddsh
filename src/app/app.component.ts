import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  input01: any;
  input02: any;
  input03: any;
  input04: any;
  formInput: any;

  validatePin1() {
    this.formInput = this.input01 + this.input02 + this.input03 + this.input04;
  }
}
