import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Actividad } from '@model/actividades/actividades.data';

@Component({
  selector: 'app-actividad-card',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './actividad-card.component.html',
})
export class ActividadCardComponent {
  actividad = input.required<Actividad>();

  tagColorClass(color: string): string {
    const map: Record<string, string> = {
      blue: 'bg-sky-100 text-[#0c447c]',
      green: 'bg-emerald-100 text-emerald-700',
      orange: 'bg-orange-100 text-orange-700',
      purple: 'bg-purple-100 text-purple-700',
    };
    return map[color] ?? 'bg-sky-100 text-[#0c447c]';
  }
}
