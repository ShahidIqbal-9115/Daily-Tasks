import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[customdirective]',
  standalone: true
})
export class DirectiveDirective {

  @Input() customdirective: any;
  obj: any;
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.obj = JSON.parse(this.customdirective);
    this.applyStyles();
  }

  private applyStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.obj.fontWeight);
    this.renderer.setStyle(this.el.nativeElement, 'color', this.obj.color);
  }

}
