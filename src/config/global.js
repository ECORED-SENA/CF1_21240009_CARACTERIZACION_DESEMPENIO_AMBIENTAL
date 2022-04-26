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
        titulo: 'Marco normativo: estética',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Apertura y funcionamiento: cosmética ornamental, facial y corporal',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Aseguramiento del personal de la estética',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Riesgos laborales y biológicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Elementos de protección personal',
        desarrolloContenidos: true,
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
        'Decreto Ley 1295 de 1994. [Ministerio de Gobierno]. Por medio de este Decreto Ley se determina la organización y administración del Sistema General de Riesgos Profesionales. Junio 22 de 1994.  DO. Nº 41.405.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=2629',
    },
    {
      referencia:
        'Decreto 2353 de 2015. Por el cual se unifican y actualizan las reglas de afiliación al Sistema General de Seguridad Social en Salud, se crea el Sistema de Afiliación Transaccional y se definen los instrumentos para garantizar la continuidad en la afiliación y el goce efectivo del derecho a la salud. Diciembre 3 de 2015.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Decreto%202353%20de%202015.pdf',
    },
    {
      referencia:
        'Decreto 780 de 2016. [Ministerio de Salud y Protección Social]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. Mayo 6 de 2016.',
      link:
        'https://www.ins.gov.co/Normatividad/Decretos/DECRETO%200780%20DE%202016.pdf',
    },
    {
      referencia:
        'Díaz, G. (2018). Guía para trabajadores expuestos a riesgos biológicos. Ministerio del Trabajo.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59676/GUIA+RIESGO+BIOL%C3%93GICO+PARA+TRABAJADORES.pdf',
    },
    {
      referencia:
        'Ley 100 de 1993. Por medio de esta Ley se crea el sistema de seguridad social integral. Diciembre 23 de 1993. DO. Nº 41.148.',
      link:
        'https://funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5248',
    },
    {
      referencia:
        'Ley 711 de 2001. Por la cual se reglamenta el ejercicio de la ocupación de la cosmetología y se dictan otras disposiciones en materia de salud estética. Noviembre 30 de 2001. DO. Nº 44.635.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=14756',
    },
    {
      referencia:
        'Ley 776 de 2002. Por la cual se dictan normas sobre la organización, administración y prestaciones del Sistema General de Riesgos Profesionales. Diciembre 17 de 2002. DO. Nº 45.037.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=16752',
    },
    {
      referencia:
        'Ley 1122 de 2007. Por medio de esta Ley se hacen algunas modificaciones en el Sistema General de Seguridad Social en Salud. Enero 9 de 2007.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/LEY%201122%20DE%202007.pdf',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de salud ocupacional. Julio 11 de 2012.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf',
    },
    {
      referencia:
        'Lizarazo, C., Fajardo, J., Berrio, S. y Quintana, L. (2018). Breve historia de la salud ocupacional en Colombia. Organización Iberoamericana de Seguridad Social [OISS].',
      link:
        'https://oiss.org/wp-content/uploads/2018/11/2-Breve_historia_sobre_la_salud_ocupacional_en_Colombia1.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social [Minsalud]. (2021). Gestión Integral de los Elementos de Protección Personal (EPP).',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf',
    },
    {
      referencia:
        'Responsabilidad Social Empresarial y Sustentabilidad [rss]. (2018). Residuos: qué son, definición, clasificación, manejo y ejemplos.',
      link:
        'https://www.responsabilidadsocial.net/residuos-que-son-definicion-clasificacion-manejo-y-ejemplos/',
    },
    {
      referencia:
        'Resolución 01164 de 2002. [Ministerio del Medio Ambiente]. Por la cual se adopta el Manual de Procedimientos para la Gestión Integral de los residuos hospitalarios y similares. Noviembre 25 de 2002. DO. Nº 45.009.',
      link:
        'https://www.ins.gov.co/BibliotecaDigital/Resolucion-1164-de-2002.pdf',
    },
    {
      referencia:
        'Resolución 2263 de 2004. [Ministerio de la Protección Social]. Por la cual se establecen los requisitos para la apertura y funcionamiento de los centros de estética y similares y se dictan otras disposiciones. Julio 14 de 2004. DO. Nº. 45.618.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/RESOLUCI%C3%93N%202263%20DE%202004.pdf',
    },
    {
      referencia:
        'Resolución 3924 de 2005. [Ministerio de la Protección Social]. Por la cual se adopta la Guía de Inspección para la Apertura y Funcionamiento de los Centros de Estética y Similares y se dictan otras disposiciones. Noviembre 10 de 2005.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/RESOLUCI%C3%93N%203924%20DE%202005.pdf',
    },
    {
      referencia:
        'Resolución 2827 de 2006. [Ministerio de la Protección Social]. Por la cual se adopta el Manual de bioseguridad para establecimientos que desarrollen actividades cosméticas o con fines de embellecimiento facial, capilar, corporal y ornamental. Agosto 16 de 2006. DO. Nº. 46.362.',
      link:
        'http://autorregulacion.saludcapital.gov.co/leyes/Resolucion_2827_de_2006.pdf',
    },
    {
      referencia:
        'Resolución 2117 de 2010. [Ministerio de la Protección Social]. Por la cual se establecen los requisitos para la apertura y funcionamiento de los establecimientos que ofrecen servicio de estética ornamental tales como, barberías, peluquerías, escuelas de formación de estilistas y manicuristas, salas de belleza y afines y se dictan otras disposiciones. Junio 15 de 2010. DO. Nº. 47.741.',
      link:
        'http://autorregulacion.saludcapital.gov.co/leyes/Resolucion_2117_de_2010.pdf',
    },
    {
      referencia:
        'Resolución 0312 de 2019. [Ministerio del Trabajo]. Por la cual se definen los Estándares Mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo SG-SST. Febrero 13 de 2019.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+0312-2019-+Estandares+minimos+del+Sistema+de+la+Seguridad+y+Salud.pdf',
    },
    {
      referencia:
        'Resolución 0000899 de 2020. [Ministerio de Salud y Protección Social]. Por medio de la cual se adopta el protocolo de bioseguridad y control de riesgo coronavirus COVID – 19 en las actividades económicas. Junio 10 de 2020.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%20899%20de%202020.pdf',
    },
    {
      referencia:
        'Resolución 00001764 de 2020. [Ministerio de Salud y Protección Social]. Por medio de la cual se adopta el protocolo de bioseguridad para el manejo y control de riesgo del Coronavirus COVID – 19 en los centros de estética y cosmetología, institutos de belleza, spa y zonas húmedas. Octubre 5 de 2020.',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%20No.%201764%20de%202020.pdf',
    },
    {
      referencia:
        'Resolución 777 de 2021. [Ministerio de Salud y Protección Social]. Por medio de la cual se definen los criterios y condiciones para el desarrollo de las actividades económicas, sociales y del Estado y se adopta el protocolo de bioseguridad para la ejecución de estas. Junio 2 de 2021.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=163987',
    },
    {
      referencia:
        'World Health Organization [WHO]. (2010). Responsible life sciences research for global health security.',
      link:
        'https://apps.who.int/iris/bitstream/handle/10665/70507/WHO_HSE_GAR_BDP_2010.2_eng.pdf;jsessionid=CC7D075FCD09A34E7A8DB6C367B4E1ED?sequence=1',
    },
  ],
  glosario: [
    {
      termino: 'Agente biológico',
      significado:
        'Son todos aquellos organismos vivos y sustancias derivadas de los mismos que se encuentran en el puesto de trabajo, que pueden ser susceptibles de provocar efectos negativos en la salud de los trabajadores y de los usuarios (efectos tóxicos o alérgicos).',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de medidas preventivas que tiene como finalidad eliminar o minimizar el factor de riesgo biológico, para no afectar la salud, el medio ambiente o la vida de las personas. El producto final de dichos procedimientos no debe atentar contra la salud o la seguridad de las personas que se ocupan de la cosmetología ornamental, facial y corporal.',
    },
    {
      termino: 'Centro de estética y cosmetología',
      significado:
        'Es aquel establecimiento que presta servicios o tratamientos cosméticos, con espacios privados, para uso individual, destinados exclusivamente a la prestación de servicios de estética personal, incluyendo técnicas de aparatología y procedimientos no invasivos.',
    },
    {
      termino: 'Elementos de protección personal',
      significado:
        'Elementos diseñados para la protección, evitando accidentes y enfermedades profesionales.',
    },
    {
      termino: 'Escuelas de capacitación y formación',
      significado:
        'Lugares dedicados a la capacitación y formación, de carácter formal y no formal, en actividades de cosmetología.',
    },
    {
      termino: 'Estética ornamental',
      significado:
        'Son actividades que se realizan con el fin de modificar temporalmente la apariencia estética del cuerpo humano sobre la piel, el cabello y las uñas, por medio de la aplicación de productos cosméticos.',
    },
    {
      termino: 'Microorganismos',
      significado:
        'Organismos con una organización biológica elemental, en su mayoría unicelulares; entre ellos, se encuentran virus, bacterias, algas, hongos o protozoos.',
    },
    {
      termino: 'Prevención',
      significado:
        'Conjunto de acciones y medidas adoptadas para prevenir o bajar índices de accidentes de trabajo y enfermedades profesionales, proporcionando una mejor calidad de vida a los trabajadores.',
    },
    {
      termino: 'Procedimiento invasivo',
      significado:
        'Es aquel procedimiento ejecutado por un profesional de la medicina, en el cual el cuerpo es agredido química y/o mecánicamente o mediante inyecciones intradérmicas y/o subcutáneas, o se introduce un tubo o un dispositivo médico.',
    },
    {
      termino: 'Residuos infecciosos o de riesgo biológico',
      significado:
        'Son aquellos que contienen microorganismos patógenos, tales como bacterias, parásitos, virus, hongos, virus que puedan producir una enfermedad infecciosa en las personas o huéspedes susceptibles.',
    },
  ],
  complementario: [
    {
      texto:
        'Álvarez, F., Faizal, E. y Valderrama, F. (2010). Riesgos biológicos y Bioseguridad. Ecoe Ediciones.',
      tipo: 'Libro digital',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/69149',
    },
    {
      texto: 'Moscoso, J. (2020). Manual de Bioseguridad. El Cid Editor.',
      tipo: 'Libro digital',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/171334',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social [Minsalud]. (2021). Gestión Integral de los Elementos de Protección Personal (EPP).',
      tipo: 'Texto Digital.',
      link:
        'https://www.minsalud.gov.co/Ministerio/Institucional/Procesos%20y%20procedimientos/GTHS02.pdf',
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
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
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
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
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
