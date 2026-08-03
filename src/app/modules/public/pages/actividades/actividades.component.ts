import { Component } from '@angular/core';
import { ScrollRevealDirective } from '@core/directives/scroll-reveal.directive';
import { ActividadCardComponent } from '@module/public/components/actividades/actividad-card/actividad-card.component';
import { ACTIVIDADES, Actividad } from '@model/actividades/actividades.data';

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [ScrollRevealDirective, ActividadCardComponent],
  templateUrl: './actividades.component.html',
})
export class ActividadesComponent {
  readonly actividades: Actividad[] = ACTIVIDADES;
  readonly total: number = ACTIVIDADES.length;
}
