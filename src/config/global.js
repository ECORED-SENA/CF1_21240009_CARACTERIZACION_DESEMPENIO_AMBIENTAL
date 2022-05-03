export default {
  global: {
    componenteFormativo: 'Contexto organizacional',
    descripcionCurso:
      'En este documento formativo se abordan temas que le permitirán adquirir una concepción clara de los componentes de una organización, las necesidades normativas y el análisis de ciclo de vida del proceso productivo, el cual ayudará a determinar las afectaciones ambientales asociadas y las medidas que se deberán tomar para remediarlas.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Componentes del sistema',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Matriz DOFA',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Estructura organizacional',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Procesos y procedimientos organizacionales',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Componentes Ambientales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Análisis de ciclo de vida',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Normativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Matrices de requisitos legales',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Técnicas de recolección y conceptos',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Alfonso, N. (2014). Principales normas ambientales colombianas. Universidad EAN.',
      link: 'https://core.ac.uk/download/pdf/74477868.pdf',
    },
    {
      referencia:
        'International Recovery Platform Secretariat. (s.f.). Documento de Apoyo: Medio ambiente.',
      link:
        'https://eird.org/pr14/cd/documentos/espanol/Publicacionesrelevantes/Recuperacion/5-Med-Ambiente.pdf',
    },
    {
      referencia:
        'Sánchez, O. (2007). Análisis de ciclo de vida y su aplicación a la producción de bioetanol. Universidad Eafit.',
      link:
        'https://www.ins.gov.co/Normatividad/Decretos/DECRETO%200780%20DE%202016.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Análisis del Ciclo de Vida (ACV)',
      significado:
        'Es un proceso para evaluar, de la forma más objetiva posible, las cargas ambientales asociadas a un producto, proceso o actividad identificando y cuantificando el uso de materia y energía y los vertidos al entorno; para determinar el impacto que ese uso de recursos y esos vertidos producen en el medio ambiente, y para evaluar y llevar a la práctica estrategias de mejora ambiental.',
    },
    {
      termino: 'Componentes ambientales',
      significado:
        'Son todos los elementos, factores o recursos naturales que presentan interacciones entre sí lo cual permite que se genere la vida en nuestro planeta.',
    },
    {
      termino: 'Factores Abióticos ',
      significado:
        'Son aquellos que no tienen vida, pero de igual manera son de vital importancia para el desarrollo de los ecosistemas y de los seres vivos.',
    },
    {
      termino: 'Factores Bióticos ',
      significado:
        'Son todos aquellos organismos que tienen vida como los animales, las plantas o los microorganismos.',
    },
    {
      termino: 'Leyes ambientales',
      significado:
        'Corresponden a los principios y normas que buscan la protección, conservación, recuperación del medio ambiente y preservación de los recursos naturales.',
    },
    {
      termino: 'Resolución Ambiental',
      significado:
        'Son todos los lineamientos que la autoridad requiere para la elaboración y ejecución de los estudios ambientales que deben ser presentados ante las autoridades.',
    },
  ],
  complementario: [
    {
      texto: 'Bejarano, L. (2018). Componentes Ambientales.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_jl2o3uk5P8',
    },
    {
      texto:
        'Gestionar Fácil. (2020). Identificación de procesos organizacionales. ¿Qué proceso implementar en cada fase?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Muivr_Ra7ZM',
    },
    {
      texto:
        'Correa, E. (s.f.). Introducción a la Normatividad Ambiental en Colombia.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XPeC4Fw_T10',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carlos Mauricio Gómes Delgado',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
