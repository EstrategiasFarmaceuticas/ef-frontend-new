import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  template: `
    @if (visible()) {
      <button
        (click)="scrollToTop()"
        class="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#0c447c] text-white shadow-lg hover:bg-[#1f7ec2] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
        aria-label="Volver arriba"
      >
        <svg class="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 15l7-7 7 7"/>
        </svg>
      </button>
    }
  `,
})
export class BackToTopComponent {
  visible = signal(false);
  private scrollThreshold = 400;

  @HostListener('window:scroll')
  onScroll() {
    this.visible.set(window.scrollY > this.scrollThreshold);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
