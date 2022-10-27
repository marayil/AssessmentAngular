import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor="blue"; 
   }
   @Input() color='';
   @Input() highlightColor='';

   @HostListener('mouseenter') onMouseEnter(){
    this.highlight("blue","white");
   }
   @HostListener('mouseleave') onMouseLeave(){
    this.highlight('','');
   }
   private highlight(color:string,textColor:string){
    this.el.nativeElement.style.backgroundColor=color;
    this.el.nativeElement.style.color = textColor;
   }

}
