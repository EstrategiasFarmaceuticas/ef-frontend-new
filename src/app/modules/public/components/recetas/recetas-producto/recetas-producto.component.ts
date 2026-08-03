import { Component, input, computed, signal, HostListener, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RECETAS, Receta } from '@model/recetas/recetas.data';
import { RecetaCardComponent } from '../receta-card/receta-card.component';
import { ScrollRevealDirective } from '@core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-recetas-producto',
  standalone: true,
  imports: [RecetaCardComponent, ScrollRevealDirective],
  templateUrl: './recetas-producto.component.html',
})
export class RecetasProductoComponent implements OnDestroy {
  productoNombre = input.required<string>();
  recetaSeleccionada = signal<Receta | null>(null);
  modalImgError = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  recetas = computed<Receta[]>(() => {
    const strip = (s: string) =>
      s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const nombre = strip(this.productoNombre());
    return RECETAS.filter(r => r.productos.some(p => strip(p) === nombre));
  });

  abrirModal(receta: Receta) {
    this.modalImgError.set(false);
    this.recetaSeleccionada.set(receta);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  onModalImgError() { this.modalImgError.set(true); }

  cerrarModal() {
    this.recetaSeleccionada.set(null);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.recetaSeleccionada()) this.cerrarModal();
  }

}
