import { afterNextRender, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true,
})
export class ScrollRevealDirective {
  @Input() revealDelay = 0;
  @Input() revealThreshold = 0.15;

  private observer: IntersectionObserver | null = null;

  constructor(private el: ElementRef<HTMLElement>) {
    const element = this.el.nativeElement;
    element.classList.add('reveal');
    if (this.revealDelay) {
      element.style.transitionDelay = `${this.revealDelay}ms`;
    }

    afterNextRender(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              element.classList.add('visible');
              this.observer?.unobserve(element);
            }
          });
        },
        { threshold: this.revealThreshold }
      );

      this.observer.observe(element);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
