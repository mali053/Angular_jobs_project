import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedColor]'
})
export class RedColorDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color='red'
   }
}
