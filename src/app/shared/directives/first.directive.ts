import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFirst]'
})
export class FirstDirective {

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter')
  publiconMouseEnter() {
    this.element.nativeElement.style.backgroundColor = "green";
  }
  
  @HostListener('mouseleave')
  publiconMouseLeave() {
    this.element.nativeElement.style.backgroundColor = "white";
  }

}
