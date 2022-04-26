<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5   

    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 1
      h1 Marco normativo: estética

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Las normas de bioseguridad que regulan el sector de la estética pretenden asegurar la protección y seguridad del medio ambiente, los clientes y las personas que realizan el proceso de atención. Uno de los beneficios de la normatividad es la creación de ambientes y prácticas técnicas libres de riesgos y enfermedades que afectan la salud del entorno social. Es importante comprender que el riesgo de contaminación no puede eliminarse de manera completa, sin embargo, la finalidad principal está enfocada en la prevención según las funciones y tareas a ser desarrolladas.

    p.mb-5 El campo de la cosmética, en el área ornamental, facial y corporal, debe cumplir con las normas sanitarias dispuestas a nivel gubernamental, porque sus zonas de atención no están libres de tener enfermedades infectocontagiosas. 
      span.etiqueta #[strong Es importante entender que los agentes contaminantes pueden producir diversas enfermedades,] 
      | causadas en su gran mayoría por microorganismos patógenos. #[strong Ellos son]:

    .row.BGIMG01.p-4.justify-content-center.mb-4
      .col-lg-10
        .row.mb-5
          .col-lg-6.p-4
            .tarjeta-avatar(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img03.svg')
              .tarjeta.BG02
                .p-4
                  h2.text-center Bacterias
                  p.mb-4 Es un microorganismo unicelular que puede descomponer materia orgánica o producir enfermedades. 
          .col-lg-6.p-4
            .tarjeta-avatar(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img04.svg')
              .tarjeta.BG02
                .p-4
                  h2.text-center Virus
                  p.mb-4 Organismo de estructura sencilla, compuesto por proteínas y ácidos nucleidos, capaz de reproducirse en el seno de células vivas.
          .col-lg-6.p-4(data-aos="fade-right")
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/img05.svg')
              .tarjeta.BG02
                .p-4
                  h2.text-center Parásitos
                  p.mb-4 Ser vivo que utiliza a otro ser vivo para alimentarse. 
          .col-lg-6.p-4(data-aos="fade-left")
            .tarjeta-avatar
              img(src='@/assets/curso/tema1/img06.svg')
              .tarjeta.BG02
                .p-4
                  h2.text-center Hongos
                  p.mb-4 Ser vivo heterótrofo que se reproduce por esporas y vive sobre materia orgánica descompuesta.

    .row.BGIMG02.p-5.mb-4(data-aos="fade-right")   
      .col-lg-1.col-sm-3.mb-4
        img(src='@/assets/curso/tema1/img08.svg')     
      .col-lg-10.mb-4
        br
        h3.mb-0 Normas 
        h3 de Bioseguridad 
      .col-lg-8
        .row.justify-content-center.BGIMG03.mb-4
          .col-11
            .cajon-b.color-primario.py-5.mb-5 
              p #[strong Las normas de bioseguridad se gestaron en la Organización Mundial de la Salud (OMS)], quienes definieron los principios, tecnologías y prácticas de contención que se implementan para evitar la exposición no intencional a agentes biológicos y toxinas, o su liberación accidental (World Health Organization, 2010, pág. vii). De acuerdo con el planteamiento de la OMS, es indispensable que todos los espacios que manipulan materiales contaminantes tengan normas y orientaciones claras respecto a la bioseguridad que se debe cumplir según cada situación.              
              p #[strong En Colombia, se adoptó la bioseguridad universal], por medio de la cual el Ministerio de Salud promueve la obligatoriedad del uso de elementos de protección personal (EPP), así como la protección medioambiental. A partir de la adopción de este documento, se organizan las demás normas y protocolos, de acuerdo con las necesidades de cada servicio. A continuación, se hará referencia a las principales normas que han regulado el sector de la cosmética ornamental, facial y corporal.
              <br><br>

    .row.p-4.mb-4(data-aos="fade-right") 
      .col-lg-1.col-sm-3
        img(src='@/assets/curso/tema1/img08.svg')     
      .col-lg-10
        br
        h3.mb-0 Normatividad  
        h3 Estetica

    .row.justify-content-center.mb-0(data-aos="fade-right") 
      .col-lg-12  
        .tarjeta.BG07.p-4.mb-0
          LineaTiempoC.color-acento-contenido(text-small)
            .row.justify-content-center.p-4(titulo="Ley 711 de <br>2001")
              .col-md-10.mb-4.mb-md-0
                p Por medio de la cual se reglamenta el ejercicio de la ocupación de la cosmetología y se dictan otras disposiciones en materia de salud estética. 
            .row.justify-content-center.p-4(titulo="Resolución 01164 de <br>2002")
              .col-md-10.mb-4.mb-md-0
                p Mediante la presente resolución, se adopta el Manual de Procedimientos para la Gestión Integral de los Residuos Hospitalarios y similares.
            .row.justify-content-center.p-4(titulo="Resolución 2263  de <br>2004")
              .col-md-10.mb-4.mb-md-0
                p Por la cual se establecen los requisitos para la apertura y funcionamiento de los centros de estética y similares y se dictan otras disposiciones.
            .row.justify-content-center.p-4(titulo="Resolución 3924 de <br>2005")
              .col-md-10.mb-4.mb-md-0
                p Por medio de esta resolución se adopta la Guía de Inspección para la Apertura y Funcionamiento de los Centros de Estética y Similares y se dictan otras disposiciones.
            .row.justify-content-center.p-4(titulo="Resolución 2827 de <br>2006")
              .col-md-10.mb-4.mb-md-0
                p Acoge el manual de bioseguridad para los establecimientos que realicen actividades cosméticas o con fines de embellecimiento facial, capilar, corporal y ornamental.
            .row.justify-content-center.p-4(titulo="Resolución 2117 de <br>2010")
              .col-md-10.mb-4.mb-md-0
                p Por medio de esta resolución, se organizan los requisitos para la apertura y funcionamiento de los establecimientos que ofrecen servicio de estética ornamental, tales como barberías, peluquerías, escuelas de formación de estilistas y manicuristas, salas de belleza y afines. 
            .row.justify-content-center.p-4(titulo="Resolución 0000899 de <br>2020")
              .col-md-10.mb-4.mb-md-0
                p Por medio de la presente resolución, se adopta el protocolo de bioseguridad y control de riesgo de coronavirus COVID – 19 en las actividades económicas. 
            .row.justify-content-center.p-4(titulo="Resolución 1764 de <br>2020")
              .col-md-10.mb-4.mb-md-0
                p Mediante la presente resolución, se adopta el protocolo de bioseguridad para el manejo y control de riesgo del coronavirus COVID – 19 en los centros de estética y cosmetología, institutos de belleza, spa y zonas húmedas.
            .row.justify-content-center.p-4(titulo="Resolución 777 de <br>2021")
              .col-md-10.mb-4.mb-md-0
                p Por medio de la cual, se definen los criterios y condiciones para el desarrollo de las actividades económicas, sociales y del Estado y se adopta el protocolo de bioseguridad para la ejecución de estas.

    .row.justify-content-center.mb-5 
      .col-lg-10
        .row.justify-content-center.BG04.mb-4 
          .col-lg-10.p-5
            p Como se puede visualizar, el Ministerio de Salud ha fortalecido el proceso de vigilancia y supervisión de las personas y establecimientos que ofrecen servicios en el campo de la cosmética (ornamental, facial y corporal), logrando así la oferta de servicios con seguridad. El proceso de sensibilización respecto al tema ha ido creciendo en la medida en que el cumplimiento de la norma ha sido más exigente por medio de los entes que regulan el sector. Es importante resaltar que, aunque las actividades que se ofrecen en dichos establecimientos no son de carácter invasivo, sí pueden presentar, de manera potencial, una exposición a riesgo biológico. Es indispensable que los establecimientos y personas que ofertan estos servicios trabajen en pro de la estandarización de la norma, contribuyendo en la pertinencia y seguridad del proceso de atención. 
            p Como se pudo evidenciar en los contenidos expuestos, en la normatividad relacionada, se expiden lineamientos de los lugares donde se realiza el proceso de atención (estas orientaciones incluyen apertura, funcionamiento, protocolos y manejo de residuos). Pero el conocimiento de la normatividad no se va a limitar solamente a las condiciones de apertura y atención, también es necesario indagar sobre aquellos lineamientos relacionados con la seguridad de los trabajadores que se desempeñan en estas labores, ya que se pueden presentar accidentes laborales que pueden poner en riesgo la salud e integridad de las personas que realizan el proceso de atención. 

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1. Apertura y funcionamiento: cosmética ornamental, facial y corporal 

    p Los establecimientos dispuestos para ofertar servicios en cosmética ornamental facial y corporal deben limitar el alcance de sus funciones a unas actividades y elementos que se hace necesario que usted reconozca. Las actividades en cosmética ornamental, facial y corporal están orientadas a mejorar la imagen corporal de las personas que acuden a sus servicios. Para el área de cosmética facial y corporal existe un objetivo adicional y es el mejorar el estado de salud de los usuarios. Dados los objetivos a los cuales están enfocadas estás actividades de cosmética ornamental, facial y corporal, es necesario que sean realizadas en lugares especiales, tal y como lo decreta el Congreso de Colombia mediante la Ley 711 de 2001. 
    br
    h5.mb-5 A continuación, se describen algunas actividades y premisas que debe considerar usted en el contexto de la cosmética en Colombia:

    .row.justify-content-center.BGIMG06.mb-0(data-aos="fade-right") 
      .col
        .row.justify-content-center 
          .col-lg-8
            .tarjeta.BG07.p-4.mb-5           
              SlyderA(tipo="b")
                .row.align-items-center
                  .col-lg-3.col-sm-3.p-2
                    img(src='@/assets/curso/tema1/img13.svg')
                  .col-lg-9.mb-4.mb-md-0.p-4
                    p Utilización de elementos de trajes de bioseguridad cuando implemente actividades de cosmética. 
                .row.align-items-center
                  .col-lg-3.col-sm-3.p-2
                    img(src='@/assets/curso/tema1/img14.svg')
                  .col-lg-9.mb-4.mb-md-0.p-4
                    p Permisos de funcionamiento establecidos por los entes que regulan la actividad en el contexto de Colombia.
                .row.align-items-center
                  .col-lg-3.col-sm-3.p-2
                    img(src='@/assets/curso/tema1/img15.svg')
                  .col-lg-9.mb-4.mb-md-0.p-4
                    p Los centros de estética, institutos de belleza, consultorios médicos o establecimientos son los autorizados para la prestación de los servicios de cosmetología. La atención deberá contar con elementos de calidad.
                .row.align-items-center
                  .col-lg-3.col-sm-3.p-2
                    img(src='@/assets/curso/tema1/img16.svg')
                  .col-lg-9.mb-4.mb-md-0.p-4
                    p Los elementos para la atención (equipos, instrumentos y demás implementos) deben estar correctamente esterilizados. Los materiales que no puedan ser esterilizados (reutilizables) deberán ser desechados posterior a su uso.
                .row.align-items-center
                  .col-lg-3.col-sm-3.p-2
                    img(src='@/assets/curso/tema1/img17.svg')
                  .col-lg-9.mb-4.mb-md-0.p-4
                    p Previo al proceso de atención, es necesario que el personal se asegure de que el usuario no presenta enfermedades de la piel. En caso de ser necesario, podrá solicitar certificado de profesional en dermatología para evaluar la pertinencia del tratamiento en el centro de estética.
                .row.align-items-center
                  .col-lg-3.col-sm-3.p-2
                    img(src='@/assets/curso/tema1/img18.svg')
                  .col-lg-9.mb-4.mb-md-0.p-4
                    p Sólo se podrán utilizar medios diagnósticos y terapéuticos avalados por los entes reguladores (uno de ellos, el INVIMA), siguiendo los protocolos establecidos. Los productos utilizados en el proceso de atención deben contar con la certificación INVIMA. Solo empleará o utilizará en sus procedimientos productos debidamente autorizados u homologados por el INVIMA.
                .row.align-items-center
                  .col-lg-3.col-sm-3.p-2
                    img(src='@/assets/curso/tema1/img19.svg')
                  .col-lg-9.mb-4.mb-md-0.p-4
                    p Las actividades cosméticas deberán ser realizadas a personas mayores de edad. En caso de que un menor de edad quiera acceder a los servicios, deberá contar con autorización autenticada de sus padres o representantes.
                .row.align-items-center
                  .col-lg-3.col-sm-3.p-2
                    img(src='@/assets/curso/tema1/img20.svg')
                  .col-lg-9.mb-4.mb-md-0.p-4
                    p La publicidad que se realice para promocionar los servicios deberá ser ética y objetiva, en ningún caso podrá inducir al error a los usuarios.
                .row.align-items-center
                  .col-lg-3.col-sm-3.p-2
                    img(src='@/assets/curso/tema1/img21.svg')
                  .col-lg-9.mb-4.mb-md-0.p-4
                    p Está prohibido que, en el ejercicio de la cosmetología, se realicen procedimientos, prácticas o actos que solo deben ser realizados por médicos o profesionales de la salud.

        .row.justify-content-center 
          .col-lg-10.mb-0
            p Comprendidas las anteriores actividades y premisas, se presentan algunos procedimientos que se pueden ejecutar en los establecimientos dispuestos para ofertar servicios en cosmética ornamental facial y corporal.
            h5 Los procedimientos que puede realizar el cosmetólogo(a) son los siguientes:
          .col-lg-11.mb-4
            img(src='@/assets/curso/tema1/img22.png')
          .col-lg-4.p-4.mb-0(data-aos="fade-right") 
            img(src='@/assets/curso/tema1/img23.png')
          .col-lg-4.p-4.mb-0
            img(src='@/assets/curso/tema1/img24.png')
          .col-lg-4.p-4.mb-0(data-aos="fade-left") 
            img(src='@/assets/curso/tema1/img25.png')
          .col-lg-4.p-4.mb-0(data-aos="fade-right") 
            img(src='@/assets/curso/tema1/img26.png')
          .col-lg-4.p-4.mb-0
            img(src='@/assets/curso/tema1/img28.png')
          .col-lg-4.p-4.mb-0(data-aos="fade-left") 
            img(src='@/assets/curso/tema1/img29.png')
          .col-lg-4.p-4.mb-5(data-aos="fade-right") 
            img(src='@/assets/curso/tema1/img27.png')          
    
    .row.justify-content-center.BGIMG07.p-4.mb-4(data-aos="fade-right")   
      .col-lg-3.col-sm-3.p-0
        img(src='@/assets/curso/tema1/img31.png')
      .col-lg-7
        <br><br><br><br><br><br><br><br><br><br><br>  
        .row.justify-content-center.BG04
          .col-lg-10.p-4
            p El personal que desarrolle actividades de cosmética facial y corporal podrá realizar todos aquellos procedimientos faciales o corporales que no requieran de la formulación de medicamentos, intervención quirúrgica, procedimientos invasivos o actos reservados a profesionales de la salud.

    .row.mb-4(data-aos="fade-right")   
      .col-lg-7
        span.etiqueta #[strong La Resolución 2117 de 2021 del Ministerio de Protección Social]
        span define la estética ornamental como todas aquellas actividades que se realizan con el fin de modificar temporalmente la apariencia estética del cuerpo humano, a nivel del cabello, cuero cabelludo y las uñas, utilizando productos y elementos cosméticos que modifican la apariencia de las faneras (entiéndase por faneras los anexos córneos de la piel: el pelo y las uñas). #[strong Para la cosmética ornamental, están incluidos todos los siguientes servicios:]
      .col-lg-2.col-sm-3.p-1
        img(src='@/assets/curso/tema1/img33.svg')

    .row
      .col-lg-2.col-sm-3.p-4(data-aos="fade-right") 
        img.p-1(src='@/assets/curso/tema1/img34.svg')
        h5.text-center Peluquerías 
      .col-lg-2.col-sm-3.p-4
        img.p-1(src='@/assets/curso/tema1/img35.svg')
        h5.text-center Barberías
      .col-lg-2.col-sm-3.p-4
        img.p-1(src='@/assets/curso/tema1/img36.svg')
        h5.text-center Manicure y Pedicure
      .col-lg-2.col-sm-3.p-4
        img.p-1(src='@/assets/curso/tema1/img37.svg')
        h5.text-center Sala de belleza

    p Posterior a la descripción de las actividades que se pueden realizar en los servicios de estética ornamental, facial y corporal, es importante ilustrar los elementos que hacen parte del proceso de apertura y funcionamiento, ¿sabe cuáles son? Dichos elementos están contemplados en las resoluciones 2117 de 2010 y 2263 de 2004, respectivamente. Para que exista una adecuada comprensión de los requisitos de apertura y funcionamiento, #[strong se sugiere que identifique la información del siguiente recurso educativo:] 

    .row.BGIMG08.p-4.mb-4   
      .col-lg-3.col-sm-6.BG03.p-4(data-aos="fade-right")        
        h2.mb-0 Apertura y 
        h2 funcionamiento
      .col-lg-12
        <br><br><br><br><br><br><br><br><br><br><br>
        .row.justify-content-center
          .col-lg-10.p-4
            SlyderA(data-aos="fade-right") 
              .row.justify-content-center.gx-0.mb-5.BG05.p-4
                .col-lg-10           
                  .titulo-sexto.color-acento-contenido.mb-4              
                    h4 Infraestructura física
                  p Se define como espacios y áreas que se adecúan para ejercer una actividad según el objeto social de la organización. #[strong Le sugerimos identificar la información que se presenta en cada imagen.]
                  <br><br>
                  .row.align-items-center.justify-content-center.mb-4
                    .col-lg-2.col-sm-3
                      <h4 align="right"> Estética ornamental </h4>
                    .col-lg-2.col-sm-3
                      a.indicador__container(@click="modal1 = true")
                        img(src='@/assets/curso/tema1/img39.svg')  
                      .indicador--click(v-if="mostrarIndicador")     
                    .col-lg-2.col-sm-3
                      a.indicador__container(@click="modal2 = true")
                        img(src='@/assets/curso/tema1/img40.svg')  
                      .indicador--click(v-if="mostrarIndicador")
                    .col-lg-2.col-sm-3
                      h4 Estética facial y corporal
                  p.text-center #[i Haga clic en cada imagen para más información.]

              .row.justify-content-center.gx-0.mb-5.BG05.p-5
                .col-lg-10           
                  .titulo-sexto.color-acento-contenido.mb-4              
                    h4 Condiciones sanitarias
                  p Los establecimientos que  realizan servicios de estética facial, corporal y ornamental, una vez abiertos al público y durante su operación, deberán cumplir con las condiciones sanitarias descritas por la Ley 9 de 1979. A continuación, explore algunas condiciones a cumplirse. 
                  <br><br>
                  .row.align-items-center.justify-content-center.mb-4
                    .col-lg-4.col-sm-3
                      <h4 align="right">Estética ornamental, fácil y corporal</h4>
                    .col-lg-2.col-sm-3
                      a.indicador__container(@click="modal3 = true")
                        img(src='@/assets/curso/tema1/img41.svg')  
                      .indicador--click(v-if="mostrarIndicador")
                  p.text-center #[i Haga clic en cada imagen para más información.]

              .row.justify-content-center.gx-0.mb-5.BG05.p-5
                .col-lg-10           
                  .titulo-sexto.color-acento-contenido.mb-4              
                    h4 Condiciones de seguridad
                  p Las condiciones de seguridad se caracterizan por ser aquellos contextos materiales que se asocian con los riesgos de las personas en sus entornos de trabajo.<b> Haga clic en la imagen para más información.</b>
                  <br><br>
                  .row.align-items-center.justify-content-center.mb-4                    
                    .col-lg-2.col-sm-3
                      a.indicador__container(@click="modal4 = true")
                        img(src='@/assets/curso/tema1/img42.svg')  
                      .indicador--click(v-if="mostrarIndicador")
                  p.text-center #[i Haga clic en cada imagen para más información.]

              .row.justify-content-center.gx-0.mb-5.BG05.p-5
                .col-lg-10           
                  .titulo-sexto.color-acento-contenido.mb-4              
                    h4 Sistema eléctrico 
                  p Comprende un conjunto de medios y elementos útiles para la generación, el transporte y la distribución de energía eléctrica. Este mecanismo tiene control, seguridad y protección.  <b>Haga clic en la imagen para más información.</b>
                  <br><br>
                  .row.align-items-center.justify-content-center.mb-4                    
                    .col-lg-2.col-sm-3
                      a.indicador__container(@click="modal5 = true")
                        img(src='@/assets/curso/tema1/img43.svg')  
                      .indicador--click(v-if="mostrarIndicador")
                  p.text-center #[i Haga clic en cada imagen para más información.]

              .row.justify-content-center.gx-0.mb-5.BG05.p-5
                .col-lg-10           
                  .titulo-sexto.color-acento-contenido.mb-4              
                    h4 Botiquín de primeros auxilios
                  p El botiquín de primeros auxilios es un recurso para la atención oportuna y adecuada de las víctimas de emergencias. A continuación,  se presentan indicaciones para la estética ornamental, facial y corporal. 
                  <br><br>
                  .row.align-items-center.justify-content-center.mb-4                    
                    .col-lg-2.col-sm-3
                      a.indicador__container(@click="modal6 = true")
                        img(src='@/assets/curso/tema1/img44.svg')  
                      .indicador--click(v-if="mostrarIndicador")
                  p.text-center #[i Haga clic en cada imagen para más información.]

              .row.justify-content-center.gx-0.mb-5.BG05.p-5
                .col-lg-10           
                  .titulo-sexto.color-acento-contenido.mb-4              
                    h4 Desinfección del ambiente 
                  p El objetivo de la desinfección del ambiente es la disminución de virus y bacterias en los entornos donde permanecen los seres humanos. Cuando se hace desinfección del medio ambiente, se recurre a tecnología que asegure el éxito de esta acción. A continuación, se presentan algunas indicaciones para la estética ornamental, facial y corporal: 
                  <br><br>
                  .row.align-items-center.justify-content-center.mb-4                    
                    .col-lg-2.col-sm-3
                      a.indicador__container(@click="modal7 = true")
                        img(src='@/assets/curso/tema1/img45.svg')  
                      .indicador--click(v-if="mostrarIndicador")
                  p.text-center #[i Haga clic en cada imagen para más información.]

              .row.justify-content-center.gx-0.mb-5.BG05.p-5
                .col-lg-10           
                  .titulo-sexto.color-acento-contenido.mb-4              
                    h4 Manejo de residuos  
                  p Se entiende por manejo de los residuos a la intervención humana en el proceso de recolección, transporte, depósito en instalaciones preparadas y, finalmente, al tratamiento para aprovechar el residuo en cuestión o eliminarlo (Responsabilidad Social y Sustentabilidad, s. f.).
                  <br><br>
                  .row.align-items-center.justify-content-center.mb-4                    
                    .col-lg-2.col-sm-3
                      a.indicador__container(@click="modal8 = true")
                        img(src='@/assets/curso/tema1/img46.svg')  
                      .indicador--click(v-if="mostrarIndicador")
                  p.text-center #[i Haga clic en cada imagen para más información.]

              .row.justify-content-center.gx-0.mb-5.BG05.p-5
                .col-lg-10           
                  .titulo-sexto.color-acento-contenido.mb-4              
                    h4 Formación del personal 
                  p Pensar en los procesos de capacitación de las personas que se desempeñan en el campo de la estética asegura la prestación de servicios planeados y ejecutados bajo condiciones técnicas y académicas esperadas. 
                  <br><br>
                  .row.align-items-center.justify-content-center.mb-4
                    .col-lg-2.col-sm-3
                      <h4 align="right"> Estética ornamental </h4>
                    .col-lg-2.col-sm-3
                      a.indicador__container(@click="modal9 = true")
                        img(src='@/assets/curso/tema1/img47.svg')  
                      .indicador--click(v-if="mostrarIndicador")
                    .col-lg-2.col-sm-3
                      a.indicador__container(@click="modal10 = true")
                        img(src='@/assets/curso/tema1/img48.svg')  
                      .indicador--click(v-if="mostrarIndicador")
                    .col-lg-2.col-sm-3
                      h4 Estética facial y corporal
                  p.text-center #[i Haga clic en cada imagen para más información.]
    
    ModalA(:abrir-modal.sync="modal1")
      .row.justify-content-center
        .col-lg-11                      
          p Según la Resolución 2117 de 2010, se debe cumplir con unos requisitos que permitan el ingreso, tránsito y evacuación segura de trabajadores, clientes y visitantes, por ello, debe contar con espacios distribuidos adecuadamente, teniendo en cuenta aspectos ergonómicos y de seguridad. Para más información, haga clic en: <a href="http://autorregulacion.saludcapital.gov.co/leyes/Resolucion_2117_de_2010.pdf" target="_blank">http://autorregulacion.saludcapital.gov.co</a>
    ModalA(:abrir-modal.sync="modal2")
      .row.justify-content-center
        .col-lg-11                        
          p Según la Resolución 2263 de 2004, los establecimientos deben estar adecuados según la actividad a prestar, de manera que no representen riesgos físicos o biológicos.  Para más información, haga clic en: <a href="http://www.saludcapital.gov.co/SectorBelleza/Galeria%20de%20Descargas/Normatividad/Resoluciones/Resoluci%C3%B3n%202263%20de%202004%20-%20Requisitos%20Apertura%20y%20Funcionamiento%20Centros%20de%20Estetica.pdf" target="_blank">http://www.saludcapital.gov.co/SectorBelleza</a>
    ModalA(:abrir-modal.sync="modal3")
      .row.justify-content-center
        .col-lg-11                       
          p Las instalaciones físicas de la estética ornamental, fácil y corporal deben garantizar servicios de agua y alcantarillado para una adecuada bioseguridad. Algunos elementos a tener cuenta  son: unidad sanitaria, áreas de aseo personal, área de asepsia, guarda ropas, toallas y otros, según la actividad.
    ModalA(:abrir-modal.sync="modal4")
      .row.justify-content-center
        .col-lg-11                       
          p En el contexto de la estética ornamental, facial y corporal, se sugiere: 
          p Los elementos de trabajo (herramientas, máquinas y equipos) deberán permanecer en buen estado. Los instrumentos de trabajo se deben utilizar de acuerdo con las recomendaciones del fabricante, con el fin de evitar accidentes. Los productos cosméticos que se utilicen en los lugares que ofertan servicios de cosmética facial y corporal deberán tener registro o notificación sanitaria obligatoria.
    ModalA(:abrir-modal.sync="modal5")
      .row.justify-content-center
        .col-lg-11                        
          p Tanto la resolución 2117 de 2010 como la 2263 de 2004 coinciden en que las instalaciones físicas en el contexto de la estética ornamental, fácil y corporal  deberán contar con una red eléctrica de acuerdo con las necesidades del establecimiento y con conexión a tierra. La dotación de energía de estos lugares permite el uso de tecnologías adquiridas por cada actividad estética.
    ModalA(:abrir-modal.sync="modal6")
      .row.justify-content-center
        .col-lg-11                        
          p Los establecimientos deberán contar en todo momento con un botiquín de primeros auxilios, señalizado y dotado con los elementos básicos: algodón, desinfectante, gasa, cinta adhesiva. Cuando este contenga medicamentos, deben ser avalados por el INVIMA.
    ModalA(:abrir-modal.sync="modal7")
      .row.justify-content-center
        .col-lg-11                        
          p En la estética ornamental, facial y corporal, se debe asegurar la implementación de un programa de desinfección ambiental y control de vectores o plagas que garantice que el establecimiento permanezca libre de artrópodos y roedores. La frecuencia de este programa no será menor de una (1) vez por año para la estética ornamental, fácil y corporal. En la estética facial y corporal, se sugiere una frecuencia no menor de tres (3) veces por año.
    ModalA(:abrir-modal.sync="modal8")
      .row.justify-content-center
        .col-lg-11                        
          p En la estética ornamental, facial y corporal, se debe asegurar la implementación de un programa de desinfección ambiental y control de vectores o plagas que garantice que el establecimiento permanezca libre de artrópodos y roedores. La frecuencia de este programa no será menor de una (1) vez por año para la estética ornamental, facial y corporal. En la estética facial y corporal, se sugiere una frecuencia no menor de tres (3) veces por año.
    ModalA(:abrir-modal.sync="modal9")
      .row.justify-content-center
        .col-lg-11                        
          p Según la Resolución 2117 de 2010, todo trabajador que se desempeñe en el campo de la estética ornamental deberá acreditar su idoneidad mediante certificado otorgado por instituciones de educación para el trabajo y desarrollo humano y/o superior, que cuenten con un programa debidamente registrado ante la Secretaría de Educación.
    ModalA(:abrir-modal.sync="modal10")
      .row.justify-content-center
        .col-lg-11                       
          p Según la Resolución 2263 de 2004, la persona que realiza el proceso de atención debe contar con formación como cosmetólogo(a). Es importante que esta persona cuente con previa preparación, formación y acreditación de un ente especializado y reconocido.
              
    p.mb-4 Identificados algunos elementos para la apertura y funcionamiento de las instalaciones direccionadas para la estética ornamental, facial y corporal, según la normatividad vigente, se debe concluir que usted debe considerar:

    .row.justify-content-center
      .col-lg-5(data-aos="fade-right") 
        .BGIMG09.p-4
          br
          h4.text-center.mb-4.p-4 Estética  ornamental
          p.p-2 Se debe cumplir con 
          ul.lista-ul
            li 
              <i class="fas fa-circle fa-xs" style="color:#F18385!important;"></i>
              |  Infraestructura física.
            li 
              <i class="fas fa-circle fa-xs" style="color:#F18385!important;"></i>
              |  Condiciones sanitarias.
            li 
              <i class="fas fa-circle fa-xs" style="color:#F18385!important;"></i>
              |  Condiciones de seguridad.
            li 
              <i class="fas fa-circle fa-xs" style="color:#F18385!important;"></i>
              |  Señalización y demarcación de áreas.
            li 
              <i class="fas fa-circle fa-xs" style="color:#F18385!important;"></i>
              |  Sistema eléctrico.
            li 
              <i class="fas fa-circle fa-xs" style="color:#F18385!important;"></i>
              |  Manejo de residuos.
      .col-lg-5(data-aos="fade-left") 
        .BGIMG10.p-4
          br
          h4.text-center.mb-4 Estética facial y corporal
          p.p-2 Los establecimientos que ofrezcan servicios en cosmética facial y corporal deberán cumplir con los siguientes requisitos:  
          ul.lista-ul
            li 
              <i class="fas fa-circle fa-xs" style="color:#18BAB9!important;"></i>
              |  Certificado de existencia y representación legal, expedido por la cámara de comercio.
            li 
              <i class="fas fa-circle fa-xs" style="color:#18BAB9!important;"></i>
              |  Viabilidad de uso del suelo, expedido por planeación municipal o la entidad territorial. 
            li 
              <i class="fas fa-circle fa-xs" style="color:#18BAB9!important;"></i>
              |  Planos del establecimiento indicando las áreas. 
            li 
              <i class="fas fa-circle fa-xs" style="color:#18BAB9!important;"></i>
              |  Relación del personal que prestará los servicios en el establecimiento, allegando el certificado que lo acredita en cosmetología, indicando la función o actividad laboral realizada por cada uno. 
            li 
              <i class="fas fa-circle fa-xs" style="color:#18BAB9!important;"></i>
              |  Relación de los servicios a prestar.
            li 
              <i class="fas fa-circle fa-xs" style="color:#18BAB9!important;"></i>
              |  Relación de los equipos con que cuenta el establecimiento para prestar los servicios declarados, indicando el número del concepto técnico favorable otorgado por el INVIMA.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Aseguramiento del personal de la estética 
    p Sumado a los requerimientos de apertura y funcionamiento de las instalaciones físicas de la estética ornamental, facial y corporal, es importante que el personal que realiza el proceso de atención al cliente tenga un aseguramiento a riesgos laborales. 

    span.etiqueta #[strong En Colombia, el sistema de seguridad social se organizó con la Ley 57 de 1915]
    span , dicha ley permitió establecer el primer mecanismo para asegurar el reconocimiento y pago de las prestaciones producto de los accidentes de trabajo (AT). Es importante aclarar que el aseguramiento en salud está directamente relacionado con la inscripción de un empleado a un determinado operador logístico de riesgos laborales y respectiva empresa prestadora de salud. 

    .row.justify-content-center.p-4
      .col-lg-7(data-aos="fade-right") 
        img(src='@/assets/curso/tema1/img51.png')  
      .col-lg-12.BG06(data-aos="fade-right") 
        p.text-white.p-4 Cabe mencionar que el sistema de seguridad social integral presente en Colombia ha sido actualizado por la Ley 100 de 1993. Fue en este momento que se organizaron las entidades, normas y procedimientos para que las personas tuvieran acceso integral, con el fin de garantizar la calidad de vida para toda la población. El sistema fue organizado para que tanto el estado como la sociedad participaran activamente en la garantía de derechos en salud y demás componentes. La seguridad social es un servicio público, de carácter obligatorio, en el cual la dirección, coordinación y control está a cargo del Estado y es prestado por medio de entidades públicas y privadas. De acuerdo con esta ley, el sistema de seguridad social integral en Colombia se compone de pensión, salud, riesgos laborales y de los servicios sociales complementarios.

    .row.p-4.mb-4(data-aos="fade-right")   
      .col-lg-1.col-sm-3
        img(src='@/assets/curso/tema1/img08.svg')
      .col-lg-10
        br
        h3.mb-0 A continuación, se hará un resumen   
        h3 de las normas que amplían lo visto en los diferentes sistemas:

    .row.justify-content-center.mb-4
      .col-lg-12(data-aos="fade-right")   
        .tarjeta.BG07.p-4.mb-0
          LineaTiempoC.color-acento-contenido(text-small)
            .row.justify-content-center.p-4(titulo="Ley 100 de 1993")
              .col-md-10.mb-4.mb-md-0
                p Por medio de esta ley, se crea el sistema de seguridad social integral. 
            .row.justify-content-center.p-4(titulo="Decreto Ley 1295 de 1994")
              .col-md-10.mb-4.mb-md-0
                p Por medio de este decreto ley, se determina la organización y administración del sistema general de riesgos profesionales. 
            .row.justify-content-center.p-4(titulo="Ley 776 de 2002")
              .col-md-10.mb-4.mb-md-0
                p Con esta ley, se establecen normas sobre la organización, administración y prestaciones del sistema general de riesgos profesionales.
            .row.justify-content-center.p-4(titulo="Ley 1122 de 2007")
              .col-md-10.mb-4.mb-md-0
                p Por medio de esta ley, se hacen algunas modificaciones en el sistema general de seguridad social en salud. 
            .row.justify-content-center.p-4(titulo="Decreto 2353 de 2015")
              .col-md-10.mb-4.mb-md-0
                p Mediante el presente decreto, se unifican y actualizan las reglas de afiliación al sistema general de seguridad social en salud, asimismo, se crea el sistema de afiliación transaccional y se organizan los instrumentos para garantizar la continuidad en la afiliación y el goce efectivo del derecho a la salud. 
            .row.justify-content-center.p-4(titulo="Decreto 780 de 2016")
              .col-md-10.mb-4.mb-md-0
                p Decreto único reglamentario del sector salud y protección social, a partir de la fecha de su expedición. Con última actualización en el año 2021, mediante el decreto 811.
            .row.justify-content-center.p-4(titulo="Resolución 0312 de 2019")
              .col-md-10.mb-4.mb-md-0
                p Por medio de esta resolución, se modifican los estándares mínimos del sistema de gestión de la seguridad y salud en el trabajo para empleadores y contratantes. 

    p.mb-4 Como se pudo visualizar en lo descrito anteriormente, para acceder al sistema de riesgos laborales, es indispensable que las personas estén aseguradas de manera integral al sistema de seguridad social en salud. Por ello, revise el siguiente contenido para comprender a qué se hace referencia con respecto a la salud, pensión y riesgos laborales:
    br

    TabsB.color-acento-contenido.mb-5(data-aos="fade-right") 
      .py-4.py-md-5(titulo="Sistema General de Seguridad Social en Salud" :icono="require('@/assets/curso/tema1/img52.svg')")
        .row
          .col.mb-4.mb-md-0.p-4
            p Su objetivo es regular el servicio público básico de salud y organizar condiciones de acceso al servicio a toda la población y en todos los niveles de atención. La operatividad de este sistema está a cargo de las entidades promotoras de salud (EPS) y la prestación del servicio está a cargo de las instituciones prestadoras de servicios de salud (IPS), quienes actúan como los operadores logísticos de las EPS, con el fin de garantizar la pertinencia, accesibilidad, continuidad, oportunidad y seguridad en todo el proceso de atención. 
      .py-4.py-md-5(titulo="Sistema General de Pensiones" :icono="require('@/assets/curso/tema1/img53.svg')")
        .row
          .col.mb-4.mb-md-0.p-4
            p Este garantiza a la población la cobertura contra los eventos derivados de la vejez, la invalidez y la muerte, por medio del reconocimiento de las pensiones y prestaciones. Este sistema de pensiones está compuesto por dos regímenes solidarios excluyentes pero que coexisten. El primero es el régimen solidario de prima media con prestación definida, que es de carácter público y es administrado por colpensiones. El segundo es el régimen de ahorro individual con solidaridad, que es de carácter privado y es operado por las administradoras de fondos de pensiones y cesantías. 
      .py-4.py-md-5(titulo="Sistema General de Riesgos Laborales" :icono="require('@/assets/curso/tema1/img54.svg')")
        .row
          .col.mb-4.mb-md-0.p-4
            p Su propósito es prevenir, proteger y atender a los trabajadores de los efectos de las enfermedades y los accidentes que puedan ocurrirles con ocasión o como consecuencia del trabajo que desempeñan. La financiación de este sistema depende de la cotización obligatoria, la cual es definida por el nivel de ingreso y la clasificación del riesgo de acuerdo con la actividad que desempeña la persona. La entidad que es responsable de la  afiliación, el registro y el recaudo del dinero está a cargo de las administradoras de riesgos profesionales (ARP). 

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
