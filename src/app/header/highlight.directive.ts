import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  // HostBinding('value') myValue; => [value]="myValue"
  // HostListener('click') myClick(){ } => (click)="myClick()"

  @Input() defaultColor: string = 'transparent';
  @Input() highLightColor: string = 'lightgreen';

  // @HostBinding('style.backgroundColor') bgColor: string = 'transparent';
  @HostBinding('style.backgroundColor') bgColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.bgColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(event: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'text-shadow',
      '1px 1px 1px gray'
    );
    this.renderer.setStyle(
      this.elRef.nativeElement,
      'text-decoration',
      'underline'
    );
    // this.bgColor = 'lightgreen';
    this.bgColor = this.highLightColor;
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'text-shadow', 'none');
    this.renderer.setStyle(this.elRef.nativeElement, 'text-decoration', 'none');
    // this.bgColor = 'transparent';
    this.bgColor = this.defaultColor;
  }
}
