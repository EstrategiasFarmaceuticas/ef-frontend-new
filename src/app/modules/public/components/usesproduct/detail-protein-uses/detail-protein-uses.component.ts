import { Component } from '@angular/core';
import {Location, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-detail-protein-uses',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './detail-protein-uses.component.html',
  styleUrl: './detail-protein-uses.component.css'
})
export class DetailProteinUsesComponent {
  colors = {
    primary: '#9d5828',      // azul oscuro
    secondary: '#e87e4d',     // azul muy claro
    accent: '#e87e4d',        // azul medio
    textDark: '#2C3E50',
    backgroundSoft: '#F5F9FF'
  };

  // Secciones de usos clínicos basadas en los PDFs de Protein
  sections = [
    {
      title: 'Desnutrición proteico-calórica en oncología',
      description: 'Indicado para niños desde 4 años, adultos y adultos mayores con desnutrición proteico-calórica moderada o severa asociada a cáncer en estadios III/IV (leucemias, linfomas, tumores sólidos). Ayuda a mantener la masa muscular y el estado nutricional durante la quimio o radioterapia.',
      bullets: [
        '100% proteína aislada de suero de leche (WPI 90%)',
        '10g de proteína por dosis (niños) / 20g (adultos)',
        'No altera el sabor de bebidas o comidas',
        'Cero azúcar, cero grasa, excelente tolerancia'
      ],
      callout: 'Nutrición que no se nota, pero se siente',
      image: 'images/protein/proteinDetail1.png'
    },
    {
      title: 'Soporte en quemaduras graves y úlceras por presión',
      description: 'Recomendado en pacientes con quemaduras de grado III/IV y úlceras por presión (grados II, III, IV). El alto aporte proteico favorece la regeneración tisular y acelera el cierre de heridas.',
      bullets: [
        'Aporta aminoácidos esenciales para la síntesis de colágeno',
        'Ayuda a equilibrar el balance nitrogenado',
        'Reduce el riesgo de infecciones',
        'Mejora la calidad del tejido cicatricial'
      ],
      callout: 'La proteína que reconstruye tejidos',
      image: 'images/protein/proteinDetail2.png'
    },
    {
      title: 'Fístulas enterocutáneas y recuperación postquirúrgica',
      description: 'Formulado para pacientes con fístulas digestivas o en postoperatorio de cirugías mayores. Aporta proteína de alta biodisponibilidad sin sobrecargar el sistema digestivo.',
      bullets: [
        'Baja osmolaridad (112 mOsm/L) para mejor tolerancia',
        'Sin sabores ni edulcorantes, ideal para administración por sonda',
        'Preserva la masa magra en estados catabólicos',
        'Complementa la nutrición enteral o oral'
      ],
      callout: 'Recuperación quirúrgica acelerada',
      image: 'images/protein/proteinDetail3.png'
    },
    {
      title: 'Apoyo en sepsis y estrés metabólico',
      description: 'En pacientes críticos con sepsis o trauma, el requerimiento proteico se eleva. Qomplett Protein aporta proteína pura de rápida absorción para contrarrestar el hipercatabolismo.',
      bullets: [
        'Fórmula modular que se adapta a cualquier dieta',
        'Ayuda a mantener la función inmune',
        'Previene la pérdida muscular',
        'Fácil de mezclar en sopas, purés o jugos'
      ],
      callout: 'Proteína de calidad en estados críticos',
      image: 'images/protein/proteinDetail4.png'
    },
    {
      title: 'Adherencia garantizada: sin sabor ni olor',
      description: 'Diseñado para pacientes con aversión alimentaria, náuseas o dificultad para tragar. Al no tener sabor, se puede incorporar a cualquier preparación sin alterar su gusto, asegurando la ingesta proteica necesaria.',
      bullets: [
        'Disolución instantánea en frío o caliente',
        'No modifica el sabor de los alimentos',
        'Ideal para pacientes oncológicos con disgeusia',
        'Apto para niños y adultos mayores'
      ],
      callout: '100% adherencia, 0% sabor',
      image: 'images/protein/proteinDetail5.png'
    }
  ];

  // Posts de Instagram (ajusta los nombres según tus archivos)
  posts = [
    { image: 'images/protein/proteinPost1.png' },
    { image: 'images/protein/proteinPost2.png' },
    { image: 'images/protein/proteinPost3.png' },
    { image: 'images/protein/proteinPost4.png' },
    { image: 'images/protein/proteinPost5.png' },
    { image: 'images/protein/proteinPost6.png' },
    { image: 'images/protein/proteinPost7.png' }
  ];

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
