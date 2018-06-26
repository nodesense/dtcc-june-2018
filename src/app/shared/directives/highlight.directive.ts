import { Directive, OnInit, OnDestroy,
         ElementRef, 
         Renderer2,
         Input,

         HostListener

} from '@angular/core';

// must have [] in the selector
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit, OnDestroy {

  constructor(private hostElement:ElementRef, 
              private renderer: Renderer2) {
    console.log("Highlight directive created")
    
   }

  ngOnInit() {
    console.log("highlight onInit")
   // this.setColor("lightgreen")
  }

  setColor(color: string) {
     this.renderer.setStyle(this.hostElement.nativeElement,
                            "background",
                            color)
  }

  @HostListener('mouseenter')
  onEnter() {
      this.setColor('lightgreen')
  }

  @HostListener('mouseleave')
  onLeave() {
    this.renderer.removeStyle(this.hostElement.nativeElement, "background")
  }

  ngOnDestroy() {
    console.log("highling on destroy ")
  }

}
