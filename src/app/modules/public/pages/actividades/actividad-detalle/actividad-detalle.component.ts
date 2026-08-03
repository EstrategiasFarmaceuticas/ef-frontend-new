import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { ACTIVIDADES, Actividad } from '@model/actividades/actividades.data';
import { ScrollRevealDirective } from '@core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-actividad-detalle',
  standalone: true,
  imports: [RouterLink, DatePipe, ScrollRevealDirective],
  templateUrl: './actividad-detalle.component.html',
})
export class ActividadDetalleComponent implements OnInit {
  actividad?: Actividad;
  private actividadIndex = -1;
  lightboxOpen = false;
  lightboxIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object,
  ) {}

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.actividadIndex = ACTIVIDADES.findIndex(a => a.slug === slug);
    if (this.actividadIndex === -1) {
      this.router.navigate(['/actividades']);
      return;
    }
    this.actividad = ACTIVIDADES[this.actividadIndex];
  }

  get prevActividad(): Actividad | null {
    return this.actividadIndex > 0 ? ACTIVIDADES[this.actividadIndex - 1] : null;
  }

  get nextActividad(): Actividad | null {
    return this.actividadIndex < ACTIVIDADES.length - 1
      ? ACTIVIDADES[this.actividadIndex + 1]
      : null;
  }

  openLightbox(index: number) {
    if (!isPlatformBrowser(this.platformId)) return;
    this.lightboxIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'auto';
    }
    this.lightboxOpen = false;
  }

  prevPhoto() {
    if (!this.actividad) return;
    this.lightboxIndex =
      (this.lightboxIndex - 1 + this.actividad.galeria.length) % this.actividad.galeria.length;
  }

  nextPhoto() {
    if (!this.actividad) return;
    this.lightboxIndex = (this.lightboxIndex + 1) % this.actividad.galeria.length;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (!this.lightboxOpen) return;
    if (e.key === 'Escape') this.closeLightbox();
    if (e.key === 'ArrowLeft') this.prevPhoto();
    if (e.key === 'ArrowRight') this.nextPhoto();
  }

  tagColorClass(color: string): string {
    const map: Record<string, string> = {
      blue: 'bg-sky-100/20 text-white border border-white/30',
      green: 'bg-emerald-100/20 text-white border border-white/30',
      orange: 'bg-orange-100/20 text-white border border-white/30',
      purple: 'bg-purple-100/20 text-white border border-white/30',
    };
    return map[color] ?? 'bg-sky-100/20 text-white border border-white/30';
  }

  descriptionParagraphs(): string[] {
    return this.actividad?.descripcionCompleta.split('\n\n') ?? [];
  }
}
