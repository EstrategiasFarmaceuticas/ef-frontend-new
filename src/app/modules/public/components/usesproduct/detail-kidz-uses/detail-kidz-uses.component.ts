import { Component } from '@angular/core';
import { Location, NgForOf, NgIf } from '@angular/common';
import { RecetasProductoComponent } from '@module/public/components/recetas/recetas-producto/recetas-producto.component';

@Component({
  selector: 'app-detail-kidz-uses',
  imports: [NgForOf, NgIf, RecetasProductoComponent],
  templateUrl: './detail-kidz-uses.component.html',
  styleUrl: './detail-kidz-uses.component.css'
})
export class DetailKidzUsesComponent {

  colors = {
    primary: '#ff7c39',
    secondary: '#F0F7F4',
    accent: '#e4b6a6',
    textDark: '#2A3A3A',
    backgroundSoft: '#F5FAF8'
  };

  // Secciones de usos clínicos basadas en los PDFs
  sections = [
    {
      title: 'Soporte en estrés metabólico y sepsis',
      description: 'Diseñado para niños de 4 a 13 años que enfrentan condiciones críticas como sepsis, traumas o estrés metabólico. Aporta inmunonutrientes que ayudan a modular la respuesta inflamatoria y fortalecer las defensas.',
      bullets: [
        '11g de proteína aislada e hidrolizada de suero lácteo',
        'Energía rápida gracias a MCT',
        'DHA para desarrollo neurocognitivo',
        '2g de L-glutamina para soporte intestinal'
      ],
      callout: 'Cada caloría y proteína cuentan en fase crítica',
      image: 'images/kidz/kidzDetail1.png'
    },
    {
      title: 'Recuperación en quemaduras y heridas',
      description: 'Ayuda en la cicatrización y regeneración de tejidos en pacientes pediátricos con quemaduras, lesiones dermatológicas o heridas quirúrgicas. La combinación de proteína de alto valor y micronutrientes favorece la reparación.',
      bullets: [
        'Acelera la cicatrización de la piel',
        'Reduce el tiempo de recuperación',
        'Aporta zinc y vitamina C para la síntesis de colágeno',
        'Mejora la respuesta metabólica'
      ],
      callout: 'Apoyo integral en quemaduras y heridas complejas',
      image: 'images/kidz/kidzDetail2.png'
    },
    {
      title: 'Apoyo en tratamientos oncológicos pediátricos',
      description: 'Formulado para niños con cáncer que reciben quimioterapia o radioterapia. Ayuda a mantener el estado nutricional, reducir la mucositis y mejorar la tolerancia al tratamiento.',
      bullets: [
        'Disminuye la inflamación de mucosas',
        'Previene la pérdida de peso y masa muscular',
        'Fortalece el sistema inmunológico',
        'Aporta vitaminas y minerales esenciales'
      ],
      callout: 'Nutrición que acompaña durante el tratamiento oncológico',
      image: 'images/kidz/kidzDetail3.png'
    },
    {
      title: 'Manejo del síndrome de mala absorción',
      description: 'Indicado en niños con problemas de absorción intestinal, enfermedades inflamatorias o diarrea crónica. La glutamina y la fibra ayudan a restaurar la mucosa y mejorar la digestión.',
      bullets: [
        '2g de L-glutamina para reparación intestinal',
        '5g de fibra para regular el tránsito',
        'Mejora la absorción de nutrientes',
        'Fortalece la barrera intestinal'
      ],
      callout: 'Recupera la salud intestinal desde adentro',
      image: 'images/kidz/kidzDetail4.png'
    },
    {
      title: 'Refuerzo inmunológico y energético',
      description: 'Ideal para niños con deficiencias nutricionales, infecciones recurrentes o fatiga. La mezcla de vitaminas, minerales y DHA potencia las defensas y apoya el desarrollo cognitivo.',
      bullets: [
        '25 vitaminas y minerales esenciales',
        'DHA para el desarrollo cerebral',
        'Proteína de alto valor biológico',
        'Energía de rápida asimilación con MCT'
      ],
      callout: 'Más defensas, más energía, más sonrisas',
      image: 'images/kidz/kidzDetail5.png'
    }
  ];

  posts = [
    { image: 'images/kidz/kidzPost1.png' },
    { image: 'images/kidz/kidzPost2.png' },
    { image: 'images/kidz/kidzPost3.png' },
    { image: 'images/kidz/kidzPost4.png' },
  ];

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
