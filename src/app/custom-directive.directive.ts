import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(e:ElementRef) { 
    e.nativeElement.style.color="orange";
  }

}
