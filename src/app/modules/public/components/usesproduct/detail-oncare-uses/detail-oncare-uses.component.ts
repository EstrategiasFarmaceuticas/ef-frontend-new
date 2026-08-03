import { Component } from '@angular/core';
import { Location, NgForOf, NgIf } from '@angular/common';
import { RecetasProductoComponent } from '@module/public/components/recetas/recetas-producto/recetas-producto.component';

@Component({
  selector: 'app-detail-oncare-uses',
    imports: [NgForOf, NgIf, RecetasProductoComponent],
  templateUrl: './detail-oncare-uses.component.html',
  styleUrl: './detail-oncare-uses.component.css'
})
export class DetailOncareUsesComponent {
  colors = {
    primary: '#74279e',
    secondary: '#9773b1',
    accent: '#e3d7ed',
    textDark: '#2A3A3A',
    backgroundSoft: '#f9f5fa'
  };

  // Secciones de usos clínicos basadas en los PDFs de Oncare
  sections = [
    {
      title: 'Caquexia y desnutrición oncológica',
      description: 'Diseñado para pacientes oncológicos que presentan caquexia y/o desnutrición proteico-calórica moderada o severa. Ayuda a revertir la pérdida de peso y masa muscular.',
      bullets: [
        '21g de proteína aislada de suero de leche por porción',
        '1.5g de CaHMB para preservar masa muscular',
        '30% del valor calórico proveniente de proteínas',
        'Distribución calórica 50% carbohidratos / 50% lípidos'
      ],
      callout: 'Protege la masa muscular incluso en etapas difíciles',
      image: 'images/oncare/oncareDetail1.png'
    },
    {
      title: 'Soporte metabólico con MCT',
      description: 'Los triglicéridos de cadena media (MCT) proporcionan energía de rápida absorción, ideal para pacientes con digestión comprometida o necesidad de energía inmediata.',
      bullets: [
        'MCT como fuente lipídica de rápida asimilación',
        'Ayuda a mantener el estado nutricional',
        'Complementa la ingesta calórica sin sobrecargar el sistema digestivo',
        'Indicado en situaciones de malabsorción'
      ],
      callout: 'Energía rápida cuando más se necesita',
      image: 'images/oncare/oncareDetail2.png'
    },
    {
      title: 'Fórmula hiperproteica de alto valor biológico',
      description: 'Proteína aislada de suero de leche, de rápida absorción y con todos los aminoácidos esenciales para la recuperación muscular y tisular.',
      bullets: [
        'Alta concentración de aminoácidos de cadena ramificada',
        'Favorece la síntesis proteica',
        'Ayuda a contrarrestar el catabolismo inducido por el cáncer',
        'Contribuye a la recuperación post-tratamiento'
      ],
      callout: '21g de proteína de alta calidad por ración',
      image: 'images/oncare/oncareeDetail3.png'
    },
    {
      title: 'Vitaminas y minerales esenciales',
      description: 'Aporte completo de micronutrientes que apoyan el sistema inmune y el metabolismo energético, frecuentemente deficientes en pacientes oncológicos.',
      bullets: [
        '100% VD de vitamina C, D, B12, biotina, selenio y zinc',
        'Refuerza las defensas naturales',
        'Apoya la función antioxidante',
        'Previene deficiencias nutricionales'
      ],
      callout: '25 vitaminas y minerales en cada dosis',
      image: 'images/oncare/oncareDetail4.png'
    },
    {
      title: 'Indicado en radioterapia y quimioterapia',
      description: 'Ayuda a sobrellevar los efectos secundarios de los tratamientos, como la mucositis, la fatiga y la pérdida de apetito, manteniendo un estado nutricional óptimo.',
      bullets: [
        'Reduce el riesgo de desnutrición iatrogénica',
        'Facilita la continuidad del tratamiento oncológico',
        'Mejora la calidad de vida del paciente',
        'Fórmula de fácil preparación y administración'
      ],
      callout: 'Nutrición avanzada para el soporte oncológico',
      image: 'images/oncare/oncareeDetail5png.jpg'
    }
  ];

  // Posts de Instagram (ajusta los nombres según tus archivos)
  posts = [
    { image: 'images/oncare/postOncare1.png' },
    { image: 'images/oncare/postOncare2.png' },
    { image: 'images/oncare/postOncare3.png' },
    { image: 'images/oncare/postOncare4.png' },
    { image: 'images/oncare/postOncare5.png' }
  ];

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
