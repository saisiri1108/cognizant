import { Directive, ElementRef, HostListener, Input } from '@angular/core';

// A custom attribute directive - the same category as ngClass/ngStyle, but
// hand-written. Applied via the [appHighlight] attribute on any element.
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor = '#fff3cd';

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.setBackground(this.highlightColor);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.setBackground('');
  }

  private setBackground(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
