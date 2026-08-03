import { Component, input, output, signal } from '@angular/core';
import { Receta } from '@model/recetas/recetas.data';

@Component({
  selector: 'app-receta-card',
  standalone: true,
  imports: [],
  templateUrl: './receta-card.component.html',
})
export class RecetaCardComponent {
  receta = input.required<Receta>();
  verReceta = output<Receta>();
  imgError = signal(false);

  onImgError() { this.imgError.set(true); }

  dificultadColor(): string {
    const map: Record<string, string> = {
      'Fácil': 'bg-emerald-100 text-emerald-700',
      'Media': 'bg-amber-100 text-amber-700',
      'Avanzada': 'bg-red-100 text-red-700',
    };
    return map[this.receta().dificultad] ?? 'bg-sky-100 text-[#0c447c]';
  }
}
