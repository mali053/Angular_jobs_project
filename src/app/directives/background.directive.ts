import { Directive, ElementRef, Host, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = '#4287f5';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = '#34c759';
  }

}
