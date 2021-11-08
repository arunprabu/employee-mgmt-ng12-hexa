import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {

  el: any;
  constructor( private elRef: ElementRef, private renderer: Renderer2 ) {  // Dependency Injection
    console.log('Inside Constructor');

    // Step 1: Find the element in which appColorizer is used
    console.log(this.elRef.nativeElement);

    this.el = this.elRef.nativeElement;
    
    // Step 2: Change the color of the element using JS
    // this.el.style.backgroundColor = "red";
    // this.el.style.color = "#fff";
    // this.el.style.height = "400px";

    // Step 2: Change the color of the element using Angular -- using Renderer2 
    this.renderer.setStyle(this.el, "background-color", "red");
    this.renderer.setStyle(this.el, "color", "#fff");
    this.renderer.setStyle(this.el, "height", '400px');
  }

  @HostListener('mouseover', ['$event'])  handleMouseover(event: any){
    console.log("Mouse over");
    this.renderer.setStyle(event.target, "background-color", "yellow");
  }

  // TODO: playaround with mouseleave 

  @HostListener('click', ['$event'])  handleClick(event: any){
    console.log("Handling Click");
    this.renderer.setStyle(event.target, "background-color", "green");
  }

}
