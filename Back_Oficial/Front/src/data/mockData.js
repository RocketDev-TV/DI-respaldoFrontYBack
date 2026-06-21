//data/mockData.jsx
export const mockFiles = [
  { 
    name: 'Guía de Estudio Unidad 1', 
    type: 'pdf', 
    date: '2023-08-15', 
    size: '2.4 MB', 
    tag: 'Entendimiento' 
  },
  { 
    name: 'Proyecto Final: Analizador Léxico', 
    type: 'folder', 
    date: '2023-09-20', 
    size: '--', 
    tag: 'Creación' 
  },
  { 
    name: 'Didacmáx 2000 v1.2', 
    type: 'exe', 
    date: '2018-02-10', 
    size: '1.1 MB', 
    tag: 'Aplicación' 
  },
  { 
    name: 'Rúbrica de Evaluación P1', 
    type: 'doc', 
    date: '2023-08-10', 
    size: '450 KB', 
    tag: 'Evaluación' 
  },
  { 
    name: 'Apuntes Autómatas', 
    type: 'pdf', 
    date: '2023-07-22', 
    size: '3.2 MB', 
    tag: 'Entendimiento' 
  },
  { 
    name: 'Ejercicios de Análisis Léxico', 
    type: 'code', 
    date: '2023-08-05', 
    size: '125 KB', 
    tag: 'Aplicación' 
  },
  // Nuevos archivos para cumplir con el documento
  {
    name: 'Contrato Didáctico',
    type: 'doc',
    date: '2023-10-01',
    size: '120 KB',
    tag: 'Evaluación'
  },
  {
    name: 'Planeación Didáctica Periodo 1',
    type: 'doc',
    date: '2023-10-01',
    size: '300 KB',
    tag: 'Entendimiento'
  },
  {
    name: 'Guión Didáctico Unidad 1',
    type: 'pdf',
    date: '2023-09-28',
    size: '1.8 MB',
    tag: 'Entendimiento'
  },
  {
    name: 'Prácticas MS-DOS',
    type: 'pdf',
    date: '2023-09-15',
    size: '2.1 MB',
    tag: 'Aplicación'
  },
  {
    name: 'Evaluaciones de Reposición',
    type: 'pdf',
    date: '2023-10-05',
    size: '500 KB',
    tag: 'Evaluación'
  },
  {
    name: 'Proyecto Excelente - Compilador',
    type: 'pdf',
    date: '2022-12-10',
    size: '4.2 MB',
    tag: 'Creación'
  },
  {
    name: 'Tesis Doctoral (borrador)',
    type: 'pdf',
    date: '2023-10-10',
    size: '10 MB',
    tag: 'Análisis'
  }
];

export const courses = [
  { id: 1, name: 'Ambientes de Prog.', icon: 'server' },
  { id: 2, name: 'Compiladores', icon: 'code-2' },
  { id: 3, name: 'Contexto Nacional', icon: 'globe' },
  { id: 4, name: 'Sistemas Operativos', icon: 'cpu' },
  { id: 5, name: 'SO en Red', icon: 'network' },
  { id: 6, name: 'Teoría de la Computación.', icon: 'book-open' },
  { id: 7, name: 'Maestría Educación', icon: 'graduation-cap' }
];

export const announcements = [
  {
    id: 1,
    title: 'Entrega de Proyecto P1',
    date: '2023-10-25',
    color: 'yellow',
    message: 'Vence: 25 Octubre'
  },
  {
    id: 2,
    title: 'Actualización Didacmáx',
    date: '2023-10-15',
    color: 'blue',
    message: 'Versión parche disponible'
  }
];
