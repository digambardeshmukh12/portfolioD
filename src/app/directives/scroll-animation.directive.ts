import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective {
  @HostBinding('class.visible') isVisible = false;

  constructor(private element: ElementRef) { }

  ngOnInit() {
    const options: IntersectionObserverInit = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.isVisible = true;
      }
    }, options);

    observer.observe(this.element.nativeElement);
  }
}