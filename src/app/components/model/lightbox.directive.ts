import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLightbox]'
})
export class LightboxDirective {
  @Input() mouseenterr:string='gray';
  @Input() mouseoutt:string='pink';
  constructor(public elemref:ElementRef) {
    this.elemref.nativeElement.style.border="2px solid red"
   }
   @HostListener('mouseenter') onmouseenter(){
    this.elemref.nativeElement.style.border=`3px solid ${this.mouseenterr} `
   }
@HostListener('mouseout')onmouseout(){
  this.elemref.nativeElement.style.border=`3px solid ${this.mouseoutt}`
}

}
