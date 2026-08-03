import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ACTIVIDADES, Actividad } from '@model/actividades/actividades.data';
import { ScrollRevealDirective } from '@core/directives/scroll-reveal.directive';
import { ActividadCardComponent } from '../actividad-card/actividad-card.component';

@Component({
  selector: 'app-actividades-recientes',
  standalone: true,
  imports: [RouterLink, ScrollRevealDirective, ActividadCardComponent],
  templateUrl: './actividades-recientes.component.html',
})
export class ActividadesRecientesComponent {
  readonly actividades: Actividad[] = ACTIVIDADES.filter(a => a.destacada).slice(0, 3);
  currentIndex = signal(0);

  prev() {
    this.currentIndex.update(i => (i - 1 + this.actividades.length) % this.actividades.length);
  }

  next() {
    this.currentIndex.update(i => (i + 1) % this.actividades.length);
  }

  goTo(index: number) {
    this.currentIndex.set(index);
  }
}
