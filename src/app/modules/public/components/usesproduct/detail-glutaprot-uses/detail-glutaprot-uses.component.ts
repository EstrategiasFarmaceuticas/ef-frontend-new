import { Component } from '@angular/core';
import {Location, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-glutaprot-uses',
  templateUrl: './detail-glutaprot-uses.component.html',
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./detail-glutaprot-uses.component.css']
})
export class DetailGlutaprotUsesComponent {

  colors = {
    primary: '#7B6BA3',
    secondary: '#F5F0E9',
    accent: '#9B8BBF',
    textDark: '#2A2A3A',
    backgroundSoft: '#FAF8F5'
  };


  sections = [
    {
      title: 'Recuperación intestinal y salud digestiva',
      description: 'Indicado en enfermedades intestinales crónicas, alteraciones de la mucosa intestinal, síndrome de intestino corto y disbiosis por tratamientos prolongados. Ayuda a restaurar la integridad de la mucosa, mejorar la absorción de nutrientes y reducir la inflamación.',
      bullets: [
        'Reduce la inflamación y el dolor en mucosas',
        'Mejora la digestión y absorción de nutrientes',
        'Alivia síntomas del síndrome de intestino irritable (SII)',
        'Fortalece la barrera intestinal y la microbiota'
      ],
      callout: 'El 70% del sistema inmune está en el intestino',
      image: 'glutaprotDetails1.png'
    },
    {
      title: 'Apoyo en tratamientos oncológicos',
      description: 'Especialmente formulado para pacientes que reciben quimioterapia o radioterapia. Disminuye los efectos secundarios como mucositis, apoptosis celular acelerada y translocación bacteriana, facilitando la continuidad del tratamiento.',
      bullets: [
        'Disminuye el daño intestinal inducido por quimio/radioterapia',
        'Reduce la translocación bacteriana',
        'Modula la respuesta inflamatoria',
        'Apoya la recuperación celular'
      ],
      callout: 'Facilita la continuidad de tratamientos oncológicos',
      image: 'glutaprotDetails2.png'
    },
    {
      title: 'Refuerzo del sistema inmunológico',
      description: 'Fortalecimiento de las defensas a nivel celular. Indicado en pacientes con infecciones recurrentes, cansancio constante, o durante la recuperación de enfermedades virales como COVID-19, reduciendo la inflamación pulmonar y el riesgo trombótico.',
      bullets: [
        'Potencia la actividad inmunológica',
        'Disminuye la inflamación pulmonar',
        'Reduce el riesgo de trombosis',
        'Ayuda a prevenir la insuficiencia vascular multiorgánica'
      ],
      callout: 'Potente acción inmunomoduladora',
      image: 'glutaprotDetails3.png'
    },
    {
      title: 'Cicatrización y regeneración de tejidos',
      description: 'Recomendado en grandes quemados, úlceras por presión y heridas quirúrgicas. La combinación de L-glutamina, zinc y proteína de alto valor biológico favorece la síntesis de colágeno y la epitelización, acelerando la recuperación de la piel.',
      bullets: [
        'Favorece la cicatrización de la piel',
        'Reduce el tiempo de curación en quemaduras',
        'Apoya el manejo de úlceras por presión',
        'Estimula la regeneración tisular'
      ],
      callout: 'Ideal para grandes quemados y heridas complejas',
      image: 'glutaprotDetails4.jpg'
    },
    {
      title: 'Pacientes críticos y postquirúrgicos',
      description: 'Indicado en politraumatizados, pacientes en UCI y recuperación postquirúrgica. La inmunonutrición avanzada ayuda a disminuir complicaciones, acortar la estancia hospitalaria y mejorar la respuesta metabólica al estrés.',
      bullets: [
        'Reduce infecciones postquirúrgicas',
        'Disminuye días de hospitalización',
        'Apoya la respuesta metabólica al estrés',
        'Preserva la masa magra'
      ],
      callout: 'Inmunonutrición que marca la diferencia',
      image: 'glutaprotDetails5.png'
    }
  ];

  posts = [
    {image: 'post1Gluataprot.png'},
    {image: 'post7Glutaprot.png'},
    {image: 'post8Glutaprot.png'},
    {image: 'post2Glutaprot.png'},
    {image: 'post3Glutaprot.png'},
    {image: 'post4Glutaprot.png'},
    {image: 'post5Glutaprot.png'},
  ];

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
