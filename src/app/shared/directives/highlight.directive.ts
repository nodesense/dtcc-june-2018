import { Directive, OnInit, OnDestroy,
         ElementRef, 
         Renderer2,
         Input,

         Output,
         EventEmitter,

         HostListener

} from '@angular/core';


// must have [] in the selector
@Directive({
  selector: '[appHighlight]',
  exportAs: 'appHighlight', // good practice, match directive name
})
export class HighlightDirective implements OnInit, OnDestroy {

  // < appHighlight="purple"

  @Input("appHighlight")
  color:string;

  @Input()
  canHighlight: string = "On"; // On or Off

  @Output()
  hostClick: EventEmitter<any> = new EventEmitter()

  constructor(private hostElement:ElementRef, 
              private renderer: Renderer2) {
    console.log("Highlight directive created")
    
   }

  ngOnInit() {
    console.log("highlight onInit", this.color)
   // this.setColor("lightgreen")

   this.color = this.color || 'lightgreen'


 
  }

  setColor(color: string) {
     this.renderer.setStyle(this.hostElement.nativeElement,
                            "background",
                            color)
  }

  @HostListener('mouseenter')
  onEnter() {
     if (this.canHighlight == "On") {
      this.setColor(this.color)
     }
  }

  @HostListener('mouseleave')
  onLeave() {
    this.renderer.removeStyle(this.hostElement.nativeElement, "background")
  }

  @HostListener("click")
  onClick() {
    this.hostClick.emit("data")
  }


  ngOnDestroy() {
    console.log("highling on destroy ")
  }

}
