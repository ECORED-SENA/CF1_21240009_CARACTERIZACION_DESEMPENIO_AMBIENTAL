<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 2
      h1 Riesgos laborales y biológicos

    .bloque-texto-g.color-acento-botones.mb-4.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right") 
        p.mb-0 Antes del siglo XX, todos aquellos conceptos sujetos a la protección del trabajador eran desconocidos; solo en el año 1904, se realiza un primer acercamiento hacia el tema de seguridad en el trabajo, y en el año 1915, se crea la primera ley (Ley 57) sobre accidentalidad y enfermedades laborales. Existió un retraso en la aparición de una ley que permitiera regular las actividades de los trabajadores; algunos afirman que esto se debió al modelo de producción existente en Colombia, donde la mayoría de las actividades laborales estaban basadas en la explotación de la mano de obra no formalizada.

    p.mb-4 Al pasar los años, el tema de la salud ocupacional en Colombia fue tomando fuerza de manera paralela al desarrollo y evolución de los sistemas industriales a nivel mundial. La normatividad colombiana se ha ido ajustando en función de modelos de protección al trabajador manejados en Europa, específicamente, en países como Alemania y Reino Unido. Dichos modelos han ido tomando fuerza en el campo del riesgo ocupacional y todos aquellos elementos de prevención y control de enfermedades y accidentes laborales. Los riesgos laborales y biológicos hacen parte del sistema de riesgos laborales. Para más información sobre el contexto histórico de la salud laboral, se le sugiere leer el texto “Breve historia de la salud ocupacional en Colombia” (s. f.). 

    .row
      .col-lg-8
        .tarjeta.BG07.p-3.mb-5(data-aos="fade-right") 
          .row.justify-content-around.align-items-center        
            .col-lg-11
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  <h3 style="color:#483C8C !important; font-weight: bold;"> Breve historia de la salud ocupacional en colombia</h3>
                .col-sm-auto
                  a.boton.BG06.texto-blanco(href="https://oiss.org/wp-content/uploads/2018/11/2-Breve_historia_sobre_la_salud_ocupacional_en_Colombia1.pdf" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.cajon.color-acento-contenido.p-0.align-items-center.mb-4 
      .col-lg-8.p-4 
          p.mb-0 El presente sistema de riesgos laborales está regulado por el Decreto Ley 1295 de 1994 y la Ley 776 de 2002. Como todo sistema, tiene unos objetivos esenciales para su existencia y funcionamiento.
          p #[strong A continuación, se describen los objetivos más relevantes a tener en cuenta:]
      .col-lg-4
        .row.justify-content-center(data-aos="fade-right") 
          .col-lg-6
            img.img01(src='@/assets/curso/tema2/img02.png')


    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .row.mb-4
          .col-lg-6(data-aos="fade-right") 
            .tarjeta.BG06.p-4.mb-5             
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-1.BG13.p-2.mb-4
                    h1.text-white.text-center.mb-1 1
                  .col-lg-12
                    p.text-white Organizar las actividades de promoción y prevención que ayuden a mejorar las condiciones de trabajo y salud de la población trabajadora, con énfasis en la protección contra los riesgos originados por la organización del trabajo que pueden afectar la salud individual o colectiva en los lugares de trabajo, incluyendo los riesgos físicos, químicos, biológicos, ergonómicos, psicosociales, de saneamiento y de seguridad.
                .row.justify-content-center.align-items-center
                  .col-lg-1.BG13.p-2.mb-4
                    h1.text-white.text-center.mb-1 2
                  .col-lg-12
                    p.text-white Definir las prestaciones de atención de la salud de los trabajadores y las prestaciones económicas por la incapacidad temporal a que tenga lugar frente a los eventos de accidente de trabajo y de enfermedad laboral. 
                .row.justify-content-center.align-items-center
                  .col-lg-1.BG13.p-2.mb-4
                    h1.text-white.text-center.mb-1 3
                  .col-lg-12
                    p.text-white Identificar y pagar a los afiliados las prestaciones económicas por incapacidad permanente parcial o invalidez, que sean ocasionadas por los eventos de accidente de trabajo, enfermedad laboral y muerte de origen laboral.
                .row.justify-content-center.align-items-center
                  .col-lg-1.BG13.p-2.mb-4
                    h1.text-white.text-center.mb-1 4
                  .col-lg-12
                    p.text-white Fortalecer las actividades que ayuden a conocer el origen de los accidentes de trabajo y las enfermedades laborales y el control de los agentes de riesgos ocupacionales (Art. 2 - Decreto Ley 1295/94 y 1° de la Ley 776 de 2002).
          .col-lg-6.col-sm-6(data-aos="fade-left") 
            img(src='@/assets/curso/tema2/img03.png')

    .row.justify-content-center.BGIMG11.mb-5
      .col-lg-12(data-aos="fade-right") 
        p Existen trabajos que, por sus condiciones, exponen al trabajador a un peligro que puede generar una enfermedad o lesión. Algunos riesgos existentes son: 
      .col-lg-10.p-4(data-aos="fade-right") 
        SlyderA
          .row.justify-content-center.gx-0.mb-5.p-4
            .col-lg-6 
              h3 Riesgos  físicos
              p Es la posibilidad que existe de sufrir un daño corporal en diferentes grados de intensidad; entre los principales riesgos físicos, se encuentra la exposición a diferentes temperaturas extremas (calor o frío), exposición a fuertes ruidos por tiempos prolongados, tipos de movimientos que generen vibraciones donde se ven afectadas las articulaciones y la presión arterial, el sometimiento a iluminaciones (oscuridad y deslumbramiento, radiación ionizante y no ionizante) y manipulación de maquinaria pesada.
            .col-lg-4.p-4
               img(src='@/assets/curso/tema2/img05.png') 
          .row.justify-content-center.gx-0.mb-5.p-4
            .col-lg-6 
              h3 Riesgos biológicos
              p Son todos los que, por presencia de microorganismos (bacterias, hongos, virus o parásitos) y microorganismos, se puede ver afectada la salud en un entorno laboral. Pueden causar enfermedad temporal, permanente o la muerte. Existen trabajos que, por sus condiciones, se consideran de alto riesgo biológico; estos son los profesionales de la salud, agropecuarios y biológicos. 
            .col-lg-4.p-4
               img(src='@/assets/curso/tema2/img06.png')
          .row.justify-content-center.gx-0.mb-5.p-4
            .col-lg-6 
              h3 Riesgos químicos
              p Aquellas condiciones que pueden afectar la salud de un trabajador por contacto no controlado con agentes químicos; pueden ser por inhalación, ingestión o absorción de sustancias nocivas para la salud. 
            .col-lg-4.p-4
               img(src='@/assets/curso/tema2/img07.png')
          .row.justify-content-center.gx-0.mb-5.p-4
            .col-lg-6 
              h3 Riesgos ergonómicos
              p En su mayoría, el riesgo ergonómico se da por posturas incorrectas en trabajos de oficina que son sedentarios o trabajos que son repetitivos en sus movimientos y que con el tiempo pueden causar un gran daño y lesiones a nivel musculoesquelético y generar dolores por diferentes lesiones; también se encuentra el levantamiento excesivo de peso con o sin una técnica adecuada. 
            .col-lg-4.p-4
               img(src='@/assets/curso/tema2/img08.png')
          .row.justify-content-center.gx-0.mb-5.p-4
            .col-lg-6 
              h3 Riesgos psicosociales
              p Afectan de manera notable la salud de los trabajadores y se derivan de las deficiencias en el planteamiento, la organización y la gestión del trabajo, así como de un nulo entorno social en el lugar de trabajo. Todo esto puede generar resultados psicológicos, físicos y sociales negativos, como el estrés laboral, el agotamiento o la depresión en la persona. Para prevenir esto, es importante las pausas activas en el trabajo y respetar los horarios laborales.
            .col-lg-4.p-4
               img(src='@/assets/curso/tema2/img09.png')
          .row.justify-content-center.gx-0.mb-5.p-4
            .col-lg-6 
              h3 Riesgos ambientales
              p Son todos aquellos que no se pueden controlar, la probabilidad de que ocurra una catástrofe o un evento propio de la naturaleza o por acción del hombre. Existen riesgos naturales (todos aquellos riesgos geológicos) y riesgos antrópicos (aquellas circunstancias causadas por las acciones del ser humano).
            .col-lg-4.p-4
               img(src='@/assets/curso/tema2/img10.png')
          .row.justify-content-center.gx-0.mb-5.p-4
            .col-lg-6 
              h3 Riesgos mecánicos
              p Conjunto de eventos que pueden causar daño a un trabajador, como quemaduras, cortes, golpes, entre otros; en su mayoría, se presentan por la manipulación de herramientas y vehículos. 
            .col-lg-4.p-4
               img(src='@/assets/curso/tema2/img10.png')

    span.etiqueta #[strong De los riesgos mencionados, cabe destacar el riesgo biológico]
    span , el cual suele ocurrir con mayor frecuencia en el ámbito de las instituciones de salud. Este genera alto volumen de accidentes y, por ende, secuelas de las enfermedades generadas por los microorganismos a los cuales se estuvo expuesto. Si bien los profesionales más expuestos son el personal sanitario, médicos, enfermeras, personal de apoyo (auxiliares de enfermería), personal de laboratorio, centros veterinarios y aseo (servicios generales); el personal que oferta servicios de cosmética ornamental, facial y corporal no está exento de presentar un evento de salud relacionado con riesgo biológico, producto del proceso de atención. Se le sugiere identificar las características de los siguientes tipos de riesgos biológicos propuestos por la Organización Mundial de la Salud:
    <br><br>

    .row.mb-4
      .col-lg-7
        h4 Se le sugiere identificar las características de los siguientes tipos de riesgos biológicos propuestos por la Organización Mundial de la Salud:
           
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Tabla 1.
      span Grupos de riesgos 

    .row.justify-content-center.mb-4
      .col-lg-5(data-aos="fade-right") 
        .row.justify-content-center.align-items-center
          .col-lg-12.p-1
            .BG09.p-2
              h5.text-white.text-center Grupo de riesgo 1
          .col-lg-12.p-1
            .BG15.p-4
              p Microorganismos con escaso riesgo individual y comunitario que presentan pocas probabilidades de generar enfermedades en humanos o en animales.
      .col-lg-5(data-aos="fade-left") 
        .row.justify-content-center
          .col-lg-12.p-1
            .BG09.p-2
              h5.text-white.text-center Grupo de riesgo 2
          .col-lg-12.p-1
            .BG15.p-4
              p Microorganismos con riesgo individual moderado y riesgo comunitario bajo, que pueden generar enfermedades en humanos o en animales, pero con poca probabilidad de ocasionar un riesgo grave en el personal expuesto. La exposición en el laboratorio puede producir infección grave, pero se cuenta con medidas eficaces y el riesgo de propagación es limitado.
      .col-lg-5(data-aos="fade-right") 
        .row.justify-content-center
          .col-lg-12.p-1
            .BG09.p-2
              h5.text-white.text-center Grupo de riesgo 3
          .col-lg-12.p-1
            .BG15.p-4
              p Microorganismos con riesgo individual elevado y riesgo comunitario bajo, que suelen generar enfermedades graves en humanos o en animales, pero que generalmente no se propagan de un individuo infectado a otro. Se dispone de medidas eficaces y de prevención. 
      .col-lg-5(data-aos="fade-left") 
        .row.justify-content-center
          .col-lg-12.p-1
            .BG09.p-2
              h5.text-white.text-center Grupo de riesgo 4
          .col-lg-12.p-1
            .BG15.p-4
              p Microorganismos con elevado riesgo individual y comunitario, que suelen provocar enfermedades graves en las personas o en los animales y pueden propagarse fácilmente de un individuo a otro, directa o indirectamente. Por lo general, no se dispone de medidas eficaces de tratamiento y de prevención. 

    .row.justify-content-center.mb-4
      .col-lg-10
        .tarjeta.BG07(data-aos="fade-right") 
          .row.justify-content-center.align-items-center.p-2
            .col-lg-9.mb-sm-0.p-4
              <h3 style="color:#483C8C !important; font-weight: bold;"> “Guía para trabajadores expuestos a riesgos biológicos” (2018)</h3>
              br
              p Apreciado aprendiz, el Ministerio de Trabajo de Colombia ha desarrollado una “Guía para trabajadores expuestos a riesgos biológicos” (2018). Se invita a identificar las herramientas y recomendaciones sugeridas en los entornos laborales que presentan alta exposición a riesgo biológico. Haga clic en el presente ícono para ir al texto.               
            .col-3.col-sm-auto
              a.boton.BG06.texto-blanco(href="https://www.mintrabajo.gov.co/documents/20147/59676/GUIA+RIESGO+BIOL%C3%93GICO+PARA+TRABAJADORES.pdf" target="_blank")
                span Descargar
                i.fas.fa-file-download

    .row.mb-0(data-aos="fade-right") 
      .col-lg-12
        img(src='@/assets/curso/tema2/img12.png')     
      .col-lg-6
        .bloque-texto-d__texto.p-4          
          p Es importante tener presente que, dentro del día a día laboral, se pueden presentar diversos acontecimientos relacionados con accidentes de trabajo; <b>para evitarlos, se deberá contar con elementos de protección personal, tales como gafas, guantes resistentes a pinchazos de aguja, cortes por vidrios u otros materiales cortopunzantes, y ropa única y exclusivamente para esta actividad (delantal desechable o lavable y botas de goma)</b>. Todo esto ayudará a minimizar el posible riesgo de contagio por exposición a residuos peligrosos.
    .row.mb-4
      .col-lg-8
        p <b>Algunas de las enfermedades que el personal puede sufrir a causa del contacto y posible contaminación con los agentes infecciosos o químicos en los residuos peligrosos son:</b>

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-5(data-aos="fade-right") 
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
          <br>
          .BG08.p-5 
            <br><br>           
            h2 Agentes infecciosos:
            p hepatitis, rubéola, tuberculosis, SIDA, entre otros.
            .row
              .col-lg-3
                 img(src='@/assets/curso/tema2/img15.png')
      .col-lg-5(data-aos="fade-left") 
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img14.svg' alt='AvatarTop')
          <br>
          .BG08.p-5 
            <br><br>           
            h2 Agentes químicos: 
            p cáncer, lesiones en la piel, infertilidad, entre otros.
            .row
              .col-lg-3
                img(src='@/assets/curso/tema2/img16.png')

    .row.mb-4  
      .col-lg-12
        .cajon.color-primario.p-4.mb-4          
          p Si llegase a ocurrir un accidente laboral, suceso repentino que sobrevenga por una causa o con ocasión del trabajo y que produzca en el trabajador una lesión orgánica, una perturbación funcional o psiquiátrica, una invalidez o la muerte (Ley 1562 de 2012), deberá ser reportado inmediatamente ante la ARL, siguiendo la ruta establecida por cada entidad aseguradora. Las generalidades de este paso a paso son:

    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right") 
        .BGIMG09.p-2
          .row.justify-content-center
            .col-lg-9.mb-4
              br
              h4.text-center.mb-4 Reporte del empleador
              p Comunicarse con las líneas de atención de la ARL, quienes le proveerán la información necesaria para direccionar al trabajador accidentado a la IPS más cercana, de acuerdo con el lugar de la ocurrencia del accidente y, posteriormente, el presunto accidente de trabajo.          
            .col-lg-4.mb-4
              img(src='@/assets/curso/tema2/img17.svg')
      .col-lg-5(data-aos="fade-left") 
        .BGIMG12.p-2
          .row.justify-content-center
            .col-lg-9.mb-4
              br
              h4.text-center.mb-4 Reporte como empleado 
              p Se tendrá que comunicar inmediatamente el suceso a su empleador, para que este active la ruta y usted pueda recibir la atención que necesita. Si este accidente genera una afectación de la condición de salud que no da espera, podrá visitar una sala de urgencias.  
            .col-lg-4.mb-4
              img(src='@/assets/curso/tema2/img18.svg')

    p Comprendido lo que debe hacer en caso de un accidente laboral, se hará una aproximación al concepto de enfermedad laboral. Según la Ley 1562 de 2012, “es enfermedad laboral la contraída como resultado de la exposición a factores de riesgo inherentes a la actividad laboral o del medio en el que el trabajador se ha visto obligado a trabajar”. 
    p.mb-4 #[strong Observe lo relacionado con esta información:]

    figure.mb-5(data-aos="fade-right") 
      img(src='@/assets/curso/tema2/img19.svg')

    .cajon.color-acento-contenido.p-4.mb-0(data-aos="fade-right") 
      span De acuerdo con las situaciones a las cuales se puede ver expuesto el personal que tiene contacto con macro o microorganismos, 
      span.etiqueta es necesario identificar un sistema de medidas preventivas que garantice la adecuada ejecución de las actividades,
      span sin poner en riesgo la integridad de los trabajadores. Es por esta razón que, dentro del sistema de riesgo laboral, existen unas recomendaciones generales a tener en cuenta:
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .row.mb-4
          .col-lg-6.p-0
            .BG12.p-4(data-aos="fade-right")            
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center
                  .col-lg-1.BG14.p-2.mb-4
                    h1.text-white.text-center.mb-1 1
                  .col-lg-12
                    p Se debe dar instrucción completa y correcta al trabajador, en el marco de las normas internacionales de prevención, cuando se tiene contacto con pacientes o con líquidos de alto riesgo. Esta actividad de instrucción debe ser organizada por medio de talleres y realizando validación de las diversas actividades, teniendo en cuenta todos los elementos de prevención expuestos en las instrucciones dadas.
                .row.justify-content-center.align-items-center
                  .col-lg-1.BG14.p-2.mb-4
                    h1.text-white.text-center.mb-1 2
                  .col-lg-12
                    p Implementar protocolos de seguridad en los procesos realizados por la empresa.
                .row.justify-content-center.align-items-center
                  .col-lg-1.BG14.p-2.mb-4
                    h1.text-white.text-center.mb-1 3
                  .col-lg-12
                    p Contar con el esquema de vacunación completo y actualizado contra las enfermedades inmunoprevenibles que se presentan con mayor frecuencia, como, por ejemplo, hepatitis B, tétanos, etc.
                .row.justify-content-center.align-items-center
                  .col-lg-1.BG14.p-2.mb-4
                    h1.text-white.text-center.mb-1 4
                  .col-lg-12
                    p Evitar el contacto de la piel o mucosas con la sangre y otros líquidos de precaución universal. 
                .row.justify-content-center.align-items-center
                  .col-lg-1.BG14.p-2.mb-4
                    h1.text-white.text-center.mb-1 5
                  .col-lg-12
                    p Utilizar guantes para todos los procedimientos que impliquen contacto con: 1. sangre u otros fluidos corporales y 2. piel no intacta, membranas mucosas o superficies contaminadas con sangre.
                .row.justify-content-center.align-items-center
                  .col-lg-1.BG14.p-2.mb-4
                    h1.text-white.text-center.mb-1 6
                  .col-lg-12
                    p Contar con mascarilla y gafas (o careta facial) para los procedimientos que generen gotas de sangre o líquidos corporales. 
                .row.justify-content-center.align-items-center
                  .col-lg-1.BG14.p-2.mb-4
                    h1.text-white.text-center.mb-1 7
                  .col-lg-12
                    p Usar delantales protectores plásticos o impermeables cuando exista posibilidad de generar salida explosiva o a presión de sangre o líquidos corporales: drenaje de abscesos, atención de heridos, partos, punción de cavidades, etc.
                .row.justify-content-center.align-items-center
                  .col-lg-1.BG14.p-2.mb-4
                    h1.text-white.text-center.mb-1 8
                  .col-lg-12
                    p Lavar las manos de manera inmediata antes y después de realizar cualquier procedimiento o de tener contacto con sangre o líquidos corporales o atender cualquier paciente. Los guantes nunca son un sustituto del lavado de manos, dado que la calidad de los guantes es variable y no previene los pinchazos.
                .row.justify-content-center.align-items-center
                  .col-lg-1.BG14.p-2.mb-4
                    h1.text-white.text-center.mb-1 9
                  .col-lg-12
                    p Evitar accidentes con agujas, bisturís y cualquier elemento corto punzante; para esto, se recomienda, además del cuidado, no realizar procedimiento de reempaque de agujas, ruptura de láminas de bisturí o agujas o cualquier tipo de manipulación diferente al uso indicado. Todos los elementos utilizados deben desecharse, en lo posible, inmediatamente se usen, y ser depositados en recipientes de pared dura dispuestos en cada servicio para este fin.
                .row.justify-content-center.align-items-center
                  .col-lg-1.BG14.p-2.mb-4
                    h1.text-white.text-center.mb-1 10
                  .col-lg-12
                    p Organizar las políticas sobre el manejo de los desechos contaminados con fluidos de riesgo, desde el punto donde se producen hasta la disposición en el área de lavado para el material desechable o el basurero de la institución. 
          .col-lg-6.p-0
            img(src='@/assets/curso/tema2/img20.png')

    p Como ha sido expuesto, es importante conocer las precauciones universales, así como las enfermedades infecciosas que se pueden presentar a los profesionales del área sanitaria. Dentro de este grupo de enfermedades, sobresalen la hepatitis B, hepatitis C, hepatitis Delta y el SIDA, sin dejar por fuera los otros virus y enfermedades producidas por otros microorganismos como tétanos, TBC, legionelosis, fiebre Q, rubéola.
    p La exposición al riesgo biológico se puede generar de manera indirecta o directa. La exposición directa sucede cuando el personal del área de laboratorio manipula directamente los microorganismos por medio de las técnicas o procedimientos establecidos; resultado de esta acción, se libera en el medio ambiente del laboratorio y de la comunidad cierta cantidad de estos, ya sea por la ejecución de tales procedimientos o por la ocurrencia de algún accidente para el caso del laboratorio. También es posible que este hecho ocurra cuando se realiza la evacuación de desechos contaminados tratados de manera inadecuada, para el caso de la comunidad. Con respecto a la exposición indirecta, se puede decir que la mayoría del personal de salud tiene una exposición de este tipo, la cual se deriva de la atención de la fuente contaminante, que puede ser un ser vivo o muerto, o por las secreciones generadas por ellos; además, puede darse por un elemento que fue utilizado para el proceso de atención o manipulación. 
    br
    p #[strong La Organización Mundial de la Salud (OMS) ha generado la clasificación de peligrosidad en el marco de los cuatro (4) grupos de riesgo mencionados anteriormente. Obsérvelos a continuación:]
    br
    TabsB.color-acento-contenido.mb-5(data-aos="fade-right") 
      .py-4.py-md-5(titulo="La patogenicidad" :icono="require('@/assets/curso/tema2/img21.svg')")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-8.mb-4.mb-md-0
            p Es la capacidad de un microorganismo para producir una enfermedad.
          .col-lg-2
            img(src='@/assets/curso/tema2/img22.svg')
      .py-4.py-md-5(titulo="La transmisibilidad" :icono="require('@/assets/curso/tema2/img21.svg')")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-8.mb-4.mb-md-0
            p Es la acción de movimiento del microorganismo hasta la vía de infección de una persona (contacto directo, indirecto, o por transmisión por gotas al toser, estornudar, hablar; se puede dar por vía aérea, por un vehículo común o por un vector).
          .col-lg-2
            img(src='@/assets/curso/tema2/img23.svg')
      .py-4.py-md-5(titulo="La infectividad" :icono="require('@/assets/curso/tema2/img21.svg')")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-8.mb-4.mb-md-0
            p Es la capacidad para penetrar las barreras defensivas naturales o inducidas del individuo. Esta depende de muchos factores, destacándose el sistema inmune de cada individuo.
          .col-lg-2
            img(src='@/assets/curso/tema2/img24.svg')
      .py-4.py-md-5(titulo="La virulencia" :icono="require('@/assets/curso/tema2/img21.svg')")
        .row.justify-content-center.align-items-center.p-4
          .col-lg-8.mb-4.mb-md-0
            p Es la capacidad para ocasionar enfermedad, por lo tanto, a mayor virulencia, más grave será la enfermedad.
          .col-lg-2
            img(src='@/assets/curso/tema2/img25.svg')

    .cajon.color-primario.p-4.mb-4(data-aos="fade-right")           
      p Como información adicional, es importante tener presente que un incremento en la concentración o el volumen del material infeccioso provocará un efecto directo sobre la probabilidad de que ocurra un evento no deseado y, por tanto, el riesgo se incrementa. En Colombia, el Decreto 1543 de junio 12 de 1997 del Ministerio de Salud pone en manifiesto la obligación de las empresas del sector salud, o que realicen proceso de atención sanitaria, a trabajar en bioseguridad como un concepto especial para el tipo de riesgo que se maneja.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
