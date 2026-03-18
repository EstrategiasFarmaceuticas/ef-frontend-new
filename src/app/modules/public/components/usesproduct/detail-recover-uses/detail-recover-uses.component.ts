import { Component } from '@angular/core';
import {Location, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-detail-recover-uses',
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './detail-recover-uses.component.html',
  styleUrl: './detail-recover-uses.component.css'
})
export class DetailRecoverUsesComponent {

  colors = {
    primary: '#185abd',       // azul principal
    secondary: '#F0F7F4',     // verde agua suave
    accent: '#a6b1e8',        // azul claro
    textDark: '#3c4459',
    backgroundSoft: '#f5f7fa'
  };

  // Secciones de usos clínicos basadas en los PDFs de Recover
  sections = [
    {
      title: 'Experto en remodelación de heridas',
      description: 'Indicado en úlceras por presión (grados II, III y IV), heridas quirúrgicas que no cicatrizan, úlceras del pie diabético y quemaduras de grados II-III. Ayuda a acelerar el cierre de la herida y mejorar la calidad del tejido.',
      bullets: [
        'Estimula la producción de colágeno',
        'Acelera la recuperación postoperatoria',
        'Reduce el tiempo de cicatrización',
        'Mejora la calidad del tejido reparado'
      ],
      callout: 'La cicatrización comienza desde adentro',
      image: 'images/recover/recoverDetail1.png'
    },
    {
      title: 'Fórmula proteica avanzada',
      description: '23g de proteína de alta calidad por ración, distribuidos estratégicamente para maximizar la regeneración tisular y preservar la masa muscular.',
      bullets: [
        '15g de aislado de proteína de suero de leche',
        '5g de péptidos de colágeno hidrolizado',
        '3g de L-arginina para mejorar la oxigenación tisular',
        '1.5g de CaHMB para prevenir el catabolismo muscular'
      ],
      callout: '23g de proteína + colágeno + arginina + HMB',
      image: 'images/recover/recoverDetail2.png'
    },
    {
      title: 'Refuerzo del sistema inmune',
      description: 'Aporte de vitaminas y minerales clave que fortalecen las defensas naturales y optimizan el proceso de curación, reduciendo el riesgo de infecciones.',
      bullets: [
        '250mg de vitamina C (278% VD) - antioxidante y pro-colágeno',
        '9mg de zinc (82% VD) - esencial para la cicatrización',
        'Vitamina A, E, selenio y cobre para soporte antioxidante',
        'Ayuda a prevenir infecciones en heridas abiertas'
      ],
      callout: 'Inmunonutrición para una recuperación segura',
      image: 'images/recover/recoverDetail3.png'
    },
    {
      title: 'Úlceras por presión y pie diabético',
      description: 'Específicamente formulado para pacientes con úlceras crónicas, donde la desnutrición retrasa la cicatrización. Ayuda a revertir el déficit proteico y mejorar el estado de la herida.',
      bullets: [
        'Acelera el cierre de úlceras por presión',
        'Favorece la regeneración en pie diabético',
        'Mejora la oxigenación tisular gracias a la arginina',
        'Previene la pérdida de masa muscular asociada'
      ],
      callout: 'Especialista en heridas complejas',
      image: 'images/recover/recoverDetail4.png'
    },
    {
      title: 'Quemaduras y recuperación quirúrgica',
      description: 'Indicado en quemaduras de segundo y tercer grado, así como en postoperatorios de cirugías mayores donde el requerimiento proteico está muy elevado.',
      bullets: [
        'Apoya la regeneración epitelial',
        'Reduce el riesgo de complicaciones',
        'Aporta energía sin azúcares añadidos',
        'Delicioso sabor a fresa, fácil de administrar'
      ],
      callout: 'Recuperación clínica desde adentro',
      image: 'images/recover/recoverDetail5.png'
    }
  ];

  posts = [
    { image: 'images/recover/recoverPost1.png' },
    { image: 'images/recover/recoverPost2.png' },
    { image: 'images/recover/recoverPost3.png' },
    { image: 'images/recover/recoverPost4.png' },
    { image: 'images/recover/recoverPost5.png' }
  ];

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
