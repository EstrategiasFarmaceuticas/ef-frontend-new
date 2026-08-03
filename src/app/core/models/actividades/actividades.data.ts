export interface ActividadTag {
  label: string;
  color: 'blue' | 'green' | 'orange' | 'purple';
}

export interface Actividad {
  slug: string;
  titulo: string;
  descripcionCorta: string;
  descripcionCompleta: string;
  fecha: string;
  lugar: string;
  imagenPrincipal: string;
  galeria: string[];
  tags: ActividadTag[];
  destacada: boolean;
}

export const ACTIVIDADES: Actividad[] = [
  {
    slug: 'capacitacion-medicos-el-salvador-2026',
    titulo: 'Jornada de Capacitación Médica — El Salvador',
    descripcionCorta:
      'El Grupo Benpharma de El Salvador realizó una jornada de capacitación y entrenamiento sobre el manejo de Glutaprot-Bio y la microbiota intestinal, dirigida a un gran equipo de médicos salvadoreños.',
    descripcionCompleta:
      'El Grupo Benpharma de El Salvador realizó una jornada de capacitación y entrenamiento sobre el manejo de Glutaprot-Bio y la microbiota intestinal, dirigida a un gran equipo de médicos salvadoreños que tratan enfermedades como el síndrome de colon irritable, la mucositis en los pacientes oncológicos, infecciones no controladas, infecciones agudas, fístulas y enterocolitis por diferentes bacterias agresivas de la microbiota intestinal, fortaleciendo así su sistema inmunológico.\n\nUna gran ventaja de Glutaprot-Bio es esta oportunidad ante el manejo de los pacientes, brindando a los profesionales de la salud las herramientas clínicas necesarias para ofrecer soluciones terapéuticas de alta eficacia y respaldo científico.',
    fecha: '2026-07-10',
    lugar: 'El Salvador',
    imagenPrincipal: 'actividades/stand-glutaprot-bio.jpeg',
    galeria: [
      'actividades/stand-glutaprot-bio.jpeg',
      'actividades/stand-glutaprot-bio-2.jpeg',
      'actividades/stand-glutaprot-bio-3.jpeg',
    ],
    tags: [
      { label: 'Glutaprot-Bio', color: 'blue' },
      { label: 'Capacitación', color: 'green' },
    ],
    destacada: true,
  },
];
