// single-digit-input.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSingleDigitInput]',
})
export class SingleDigitInputDirective {
  private readonly MAX_DIGIT = 1;

  constructor(private elementRef: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const inputElement: HTMLInputElement = this.elementRef.nativeElement;

    if (event.key === 'Backspace' || event.key === 'Delete') {
      // Allow backspace and delete keys
      return;
    }

    if (
      // Limit to digits 0-9
      !/^\d$/.test(event.key) ||
      // Limit the input to one digit
      inputElement.value.length >= this.MAX_DIGIT
    ) {
      event.preventDefault();
    }
  }

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const inputElement: HTMLInputElement = this.elementRef.nativeElement;
    const nextInput: HTMLInputElement =
      inputElement.nextElementSibling as HTMLInputElement;
    const previousInput: HTMLInputElement =
      inputElement.previousElementSibling as HTMLInputElement;

    // Move focus to the next input if the current input is filled
    if (inputElement.value.length === this.MAX_DIGIT && nextInput) {
      nextInput.focus();
    }

    // Move focus to the previous input if the current input is empty and Backspace is pressed
    if (inputElement.value.length === 0 && previousInput) {
      previousInput.focus();
    }
  }
}
