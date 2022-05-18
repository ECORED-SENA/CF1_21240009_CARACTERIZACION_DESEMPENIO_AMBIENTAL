<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 4
      h1 Normativa

    .row.mb-4
      .col-md-1.col-6
        figure
          img.p-y-1(src='@/assets/curso/tema1/icon1.svg', alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto
      .col-md-11
        p Debido a que Colombia está catalogado como el segundo país más megadiverso por la gran variedad de fauna y flora existe en su ecosistema, es primordial que se asegure su conservación y preservación por medio de normativas ambientales, por lo que a continuación se describe la clasificación de la normatividad ambiental en Colombia en la siguiente tabla 3:

    .row.justify-content-center 
      .col-md-12    
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3
          span  Clasificación Normatividad Ambiental

        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header.color-acento-contenido.center
            tr
              th.text-white <strong>Clasificación</strong> 
              th.text-white <strong>Concepto</strong> 
              td.text-white <strong>Factores</strong> 
          table 
            tr
              td Protección del ambiente.
              td Son todas aquellas normas que tienen como propósito la prevención, reducción y eliminación de contaminaciones o afectaciones al medio ambiente. 
              td Se tienen en cuenta el cambio de procesos para prevenir emisiones atmosféricas y a su vez controles y mediciones en laboratorios especializados.
            tr
              td Gestión de aguas residuales
              td Estas normas están encaminadas en la prevención de la contaminación de aguas superficiales. 
              td Las redes de transporte de aguas y el tratamiento de sus residuos. 
            tr
              td Gestión de residuos
              td Se refiere a las actividades que tienen como objetivo prevenir la generación de residuos y así poder disminuir las afectaciones que tiene al ambiente. 
              td La recolección y transporte de los residuos es clave en este proceso, así mismo, lo es el tratamiento y eliminación de residuos peligrosos. 
            tr
              td Protección y recuperación de suelos, aguas subterráneas y aguas superficiales
              td Son todas aquellas medidas para prevenir las filtraciones de contaminantes en los suelos y cuerpos de agua. 
              td Se usan para limpiar el suelo y cuerpos de agua de contaminantes que puedan traer repercusiones en la salud humana.
            tr
              td Atenuación de ruidos y vibraciones
              td Son las medidas que tienden a controlar los ruidos y vibraciones en su mayoría generadas por procesos industriales.  
              td Se realizan modificaciones preventivas de los procesos en la fuente, como lo son instalaciones de sistemas anti ruido y vibraciones. 
            tr
              td Protección de la biodiversidad y de los paisajes
              td Se refiere a aquellas actividades destinadas a la conservación y rehabilitación de especies de fauna y flora. 
              td Es la protección y rehabilitación de hábitat y especies que han sido intervenidos. 
            tr
              td Protección contra las radiaciones.
              td Son todas aquellas normas que mediante mediciones pretenden reducir las consecuencias negativas que trae consigo las radiaciones. 
              td Se tiene en cuenta el tratamiento y transporte que tienen los residuos radiactivos. 
    
    p.mb-5.text-center <b>En Colombia existen gran cantidad de normas ambientales como las que se describen en la siguiente tabla 4:</b>
    
    .row.justify-content-center 
      .col-md-11
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4
          span  Normas ambientales en Colombia.

        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header.color-acento-contenido.center
            tr
              th.text-white <strong>Normas Generales</strong> 
              th.text-white <strong>Concepto</strong> 
              td.text-white <strong>Enlaces</strong> 
          table 
            tr
              th Constitución Nacional
              td.mb-5 Principios principales que expone la constitución:
                ul.lista-ul.lista-ul.lista-ul--color.mb-5
                  li 
                    i.fas.fa-circle
                    span Derecho a un ambiente sano.
                  li 
                    i.fas.fa-circle
                    span El medio ambiente como patrimonio cultural. 
                  li 
                    i.fas.fa-circle
                    span Desarrollo sostenible.
              td https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4125
            tr
              th Código nacional de los recursos naturales renovables y de protección del medio ambiente - Decreto Ley 2811 de 1974.
              td Es el código mediante el cual se establece el uso de los recursos naturales renovables. 
              td https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1551
            tr
              th Ley sanitaria - Ley 09 de 1979.
              td Su principal objetivo es la conservación de la salud y del bienestar humano.
              td https://www.minsalud.gov.co/Normatividad_Nuevo/LEY%200009%20DE%201979.pdf
            tr
              th Ley 99 de 1993.
              td Se crea el Ministerio de medio ambiente. 
              td https://www.icbf.gov.co/cargues/avance/docs/ley_0099_1993.htm
            tr
              th Código minero - Ley 685 del 2001.
              td Se expide el código de minas. 
              td http://www.secretariasenado.gov.co/senado/basedoc/ley_0685_2001.html
            
    figure.mb-4
      img(src='@/assets/curso/tema4/title.svg' style='width: 400px')
    
    p.mb-4 Son acuerdos entre dos o más países que quedan por escrito, los cuales están regulados por las normas del derecho internacional. Esto se puede estudiar a continuación::

    .row.mx-0.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.fond_2.align-items-center
              figure.p-5
                img.img250.p-2.center(src='@/assets/curso/tema4/icon1.svg', alt='imagen 1-2')
                h3.text-center.text-white Convención para el cambio climático  
                p.text-center.text-white Busca desarrollar temas frente a la educación, formación, sensibilización y cumplimiento de los compromisos adquiridos.  
                a.boton.color-acento-botones.mx-3(href="https://www.minambiente.gov.co/asuntos-internacionales/convenio-sobre-cambio-climatico/" target="_blank")
                  span Minambiente
                  i.fas.fa-link 

            .tarjeta-flip__contenido.fond_3.p-4.p-xl-5
              img.img250.p-2.center(src='@/assets/curso/tema4/icon1.svg', alt='imagen 1-2')
              h3.text-center Convención para el cambio climático 
              p.text-center.mt-2 Busca desarrollar temas frente a la educación, formación, sensibilización y cumplimiento de los compromisos adquiridos. 
              a.boton.color-acento-botones.mx-3(href="https://www.minambiente.gov.co/asuntos-internacionales/convenio-sobre-cambio-climatico/" target="_blank")
                span Minambiente
                i.fas.fa-link 



      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.fond_2.align-items-center
              figure.p-5
                img.img250.p-2.center(src='@/assets/curso/tema4/icon2.svg', alt='imagen 1-2')
                h3.text-center.text-white Convención para la protección de la biodiversidad 
                p.text-center.text-white Se estableció en la conferencia de Río de Janeiro en el año 1991 y tiene como principal objetivo la protección de la biodiversidad.
                a.boton.color-acento-botones.mx-3(href="https://www.cancilleria.gov.co/convenio-sobre-diversidad-biologica-cbd" target="_blank")
                  span cancilleria
                  i.fas.fa-link 

            .tarjeta-flip__contenido.fond_3.p-4.p-xl-5
              img.img250.p-2.center(src='@/assets/curso/tema4/icon2.svg', alt='imagen 1-2')
              h3.text-center Convención para la protección de la biodiversidad 
              p.text-center.mt-3 Se estableció en la conferencia de Río de Janeiro en el año 1991 y tiene como principal objetivo la protección de la biodiversidad.
              a.boton.color-acento-botones.mx-3(href="https://www.cancilleria.gov.co/convenio-sobre-diversidad-biologica-cbd" target="_blank")
                span cancilleria
                i.fas.fa-link 


      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.fond_2.align-items-center
              figure.p-5
                img.img250.p-2.center(src='@/assets/curso/tema4/icon3.svg', alt='imagen 1-2')
                h3.text-center.text-white Convención de Basilea sobre residuos peligrosos (1989). 
                p.text-center.text-white Reducir el volumen de residuos para proteger la salud humana y del medio ambiente. Colombia la ratificó mediante la ley 256 de 1996.
                a.boton.color-acento-botones.mx-3(href="https://ginebra-onu.mision.gov.co/convenio-basilea" target="_blank")
                  span Convenio
                  i.fas.fa-link 

            .tarjeta-flip__contenido.fond_3.p-4.p-xl-5
              img.img250.p-2.center(src='@/assets/curso/tema4/icon3.svg', alt='imagen 1-2')
              h3.text-center Convención de Basilea sobre residuos peligrosos (1989). 
              p.text-center.mt-3 Reducir el volumen de residuos para proteger la salud humana y del medio ambiente. Colombia la ratificó mediante la ley 256 de 1996.
              a.boton.color-acento-botones.mx-3(href="https://ginebra-onu.mision.gov.co/convenio-basilea" target="_blank")
                span Convenio
                i.fas.fa-link 

      .col-sm-6.col-xl-3.mb-5.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.fond_2.align-items-center
              figure.p-5
                img.img250.p-2.center(src='@/assets/curso/tema4/icon4.svg', alt='imagen 1-2')
                h3.text-center.text-white Convenio de Viena para la protección de la capa de ozono y el Protocolo de Montreal. 
                p.text-center.text-white Ratificado por Colombia por medio de la Ley de 1990.
                a.boton.color-acento-botones.mx-3(href="https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/convencion-de-viena-y-protocolo-de-montreal/#:~:text=El%2016%20de%20septiembre%20de,de%20numerosas%20sustancias%20que%20son" target="_blank")
                  span Minambiente
                  i.fas.fa-link 
                 
            .tarjeta-flip__contenido.fond_3.p-4.p-xl-5
              img.img250.p-2.center(src='@/assets/curso/tema4/icon4.svg', alt='imagen 1-2')
              h3.text-center Convenio de Viena para la protección de la capa de ozono y el Protocolo de Montreal. 
              p.text-center.mt-3 Ratificado por Colombia por medio de la Ley de 1990.
              a.boton.color-acento-botones.mx-3(href="https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/convencion-de-viena-y-protocolo-de-montreal/#:~:text=El%2016%20de%20septiembre%20de,de%20numerosas%20sustancias%20que%20son" target="_blank")
                span Minambiente
                i.fas.fa-link 

    .bg_grad-08
      .row.mb-5
        .col-md-8
          figure.mb-4
            img(src='@/assets/curso/tema4/title2.svg' style='width: 340px')
          P Corresponden a los principios y normas que buscan la protección, conservación, recuperación del medio ambiente y preservación de los recursos naturales, en la tabla 6 se pueden observar: 

          .tarjeta.color-secundario--claro.p-4.p-lg-4.mb-4.shadow
            LineaTiempoC.color-primario
              .row.justify-content-center(titulo="Ley 99 de 1993")
                .col-11
                  p Por la cual se crea el Ministerio del Medio Ambiente.
                  a.anexo(style='background-color:#F4F9FF')(href="http://www.humboldt.org.co/images/documentos/pdf/Normativo/1993-12-22-ley-99-crea-el-sina-y-mma.pdf" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/enlace.svg")
                      .anexo__texto
                        p <b>Enlace web.</b> Por la cual se crea el MINISTERIO DEL MEDIO AMBIENTE, se...

              .row.justify-content-center(titulo="Ley 23 de 1973")
                .col-11
                  p En la cual se dictan los principios sobre prevención de los contaminantes del agua, suelo y aire.
                  a.anexo(style='background-color:#F4F9FF')(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9018" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/enlace.svg")
                      .anexo__texto
                        p <b>Enlace web.</b> Reglamentada Parcialmente por el Decreto Nacional 704 de 1986...


              .row.justify-content-center(titulo="Ley 388 de 1997")
                .col-11
                  p Se define el ordenamiento territorial municipal y distrital.
                  a.anexo(style='background-color:#F4F9FF')(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=339" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/enlace.svg")
                      .anexo__texto
                        p <b>Enlace web.</b> Reglamentada por los Decretos Nacionales 150 y 507 de 1999; 932...
                
              .row.justify-content-center(titulo="Ley 491 de 1999")
                .col-11
                  p Se modifica el código penal y se establecen delitos contra los recursos naturales y el medio ambiente.
                  a.anexo(style='background-color:#F4F9FF')(href="http://www.desarrolloeconomico.gov.co/sites/default/files/marco-legal/Ley-491-1999.pdf" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/enlace.svg")
                      .anexo__texto
                        p <b>Enlace web.</b> Diario Oficial No. 43.477, de 15 de enero de 1999 Por la cual se...

              .row.justify-content-center(titulo="Ley 29 de 1992")
                .col-11
                  p Por medio de la cual se adopta el "Protocolo de Montreal relativo a las sustancias agotadoras de la capa de ozono”.
                  a.anexo(style='background-color:#F4F9FF')(href="http://www.ideam.gov.co/documents/24024/26915/C_Users_JGomez_Documents_ley_29_1992.pdf/7258708f-515d-4021-8fff-99e8cba0e0f6" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/enlace.svg")
                      .anexo__texto
                        p <b>Enlace web.</b> Protocolo de Montreal relativo a las sustancias agotadoras de la...             
        .col-md-4(data-aos="zoom-in-up")
          figure
            img(src='@/assets/curso/tema4/img1.png')

      .row
        .col-md-5.py-5.my-5
          figure.mb-4
            img(src='@/assets/curso/tema4/title3.svg' style='width: 360px')
          p Tienen como propósito velar por la recuperación, conservación, protección, manejo, uso y aprovechamiento de los recursos naturales renovables de la nación; en la siguiente tabla 7 se puede apreciarlos con su correspondiente enlace para que se pueda acceder a la información de primera mano:
        
        .col-md-7   
          SlyderF.mb-5(columnas="col-lg-6 col-xl-6 align-self-stretch")
            .tarjeta.color-secundario.fondos.p-4.h-100.justify-content-center.align-items-center
              .row.justify-content-center.mb-3
                .col-md-5.mb-5
                  img(src='@/assets/curso/tema4/icon5.svg')
                .col-0
                  h4.text-center Decreto 1791
                  p.text-center Por medio del cual se establece el régimen de aprovechamiento forestal.
                  span
                  a.boton.color-acento-botones(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1296" target="_blank")
                    span Funcionpublica
                    i.fas.fa-link

            .tarjeta.color-secundario.fondos.p-4.h-100.justify-content-center.align-items-center
              .row.justify-content-center.mb-3
                .col-md-5.mb-5
                  img(src='@/assets/curso/tema4/icon6.svg')
                .col-0
                  h4.text-center Decreto 870 de 2017
                  p.text-center Se establece el pago por servicios ambientales.
                  span
                  a.boton.color-acento-botones(href="http://es.presidencia.gov.co/normativa/normativa/DECRETO%20870%20DEL%2025%20DE%20MAYO%20DE%202017.pdf" target="_blank")
                    span Decreto
                    i.fas.fa-file

            .tarjeta.color-secundario.fondos.p-4.h-100.justify-content-center.align-items-center
              .row.justify-content-center.mb-3
                .col-md-5.mb-5
                  img(src='@/assets/curso/tema4/icon7.svg')
                .col-0
                  h4.text-center Decreto 2820 de 2010
                  p.text-center Se reglamenta el Título VIII de la Ley 99 de 1993 sobre licencias ambientales.
                  span
                  a.boton.color-acento-botones.mx-3(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=45524" target="_blank")
                    span Funcionpublica
                    i.fas.fa-link

            .tarjeta.color-secundario.fondos.p-4.h-100.justify-content-center.align-items-center
              .row.justify-content-center.mb-3
                .col-md-5.mb-5
                  img(src='@/assets/curso/tema4/icon8.svg')
                .col-0
                  h4.text-center Decreto 283
                  p.text-center Hidrocarburos - Por el cual se reglamenta el almacenamiento, manejo, transporte, distribución de combustibles líquidos derivados del petróleo y el transporte por carrotanques de petróleo crudo.
                  br
                  a.boton.color-acento-botones.mx-3(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8807" target="_blank")
                    span Funcionpublica
                    i.fas.fa-link
    
    .bg_grad-07
      figure.mb-4
        img(src='@/assets/curso/tema4/title4.svg' style='width: 440px')

      p.mb-4 Son todos los lineamientos que la autoridad requiere para la elaboración y ejecución de los estudios ambientales que deben ser presentados ante las autoridades, conocerlas son de vital importancia al momento de realizar un proceso laboral en Colombia, ya que aplican en cualquier organización y es por esto que es importante estudiarlas a profundidad, a continuación en la tabla 8:

    
      .row.mb-2
        .col-md-9
          .tarjeta.color-secundario--claro.p-4.p-lg-4.mb-4.shadow
            LineaTiempoC.color-primario
              .row.justify-content-center(titulo="Resolución 1561 de 2019")
                .col-11
                  p Se establecen los términos de referencia para la elaboración de estudios de impacto ambiental. 
                  a.anexo(style='background-color:#F4F9FF')(href="https://medioambiente.uexternado.edu.co/wp-content/uploads/sites/19/2020/03/RESOLUCI%C3%93N-1561-DE-2019.pdf" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/enlace.svg")
                      .anexo__texto
                        p <b>Enlace web.</b> Por la cual se crea el MINISTERIO DEL MEDIO AMBIENTE, se reordena el Sector Público encargado de la gestión y conservación del medio ambiente y los recursos naturales renovables...

              .row.justify-content-center(titulo="Resolución 2210 de 2018")
                .col-11
                  p Se reglamenta el uso del sello minero ambiental colombiano.
                  a.anexo(style='background-color:#F4F9FF')(href="http://www.andi.com.co/Uploads/0b-res%202210%20de%202018.pdf" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/enlace.svg")
                      .anexo__texto
                        p <b>Enlace web.</b> MINISTERIO DE AMBIENTE Y DESARROLLO SOSTENIBLE


              .row.justify-content-center(titulo="Resolución 1447 de 2018")
                .col-11
                  p Se reglamenta el sistema de monitoreo y evaluación de las acciones de mitigación.
                  a.anexo(style='background-color:#F4F9FF')(href="https://www.icbf.gov.co/cargues/avance/docs/resolucion_minambienteds_1447_2018.htm" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/enlace.svg")
                      .anexo__texto
                        p <b>Enlace web.</b> MINISTERIO DE AMBIENTE Y DESARROLLO SOSTENIBLE
                
              .row.justify-content-center(titulo="Resolución 689 de 2016")
                .col-11
                  p Por la cual se adopta el reglamento técnico que establece los límites máximos de fósforo y la biodegradabilidad de los tensioactivos presentes en detergentes y jabones, y se dictan otras disposiciones.
                  a.anexo(style='background-color:#F4F9FF')(href="http://www.andi.com.co/Uploads/Resoluci%C3%B3n%200689.pdf" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/enlace.svg")
                      .anexo__texto
                        p <b>Enlace web.</b> MINISTERIO DE AMBIENTE Y DESARROLLO SOSTENIBLE

              .row.justify-content-center(titulo="Resolución 260 de 2011")
                .col-11
                  p En la cual se fijan las tarifas para el cobro de los servicios de evaluación y seguimiento de licencias ambientales. 
                  a.anexo(style='background-color:#F4F9FF')(href="https://xperta.legis.co/visor/legcol/legcol_b7f597e009720114e0430a0101510114/coleccion-de-legislacion-colombiana/resolucion-260-de-2011" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/enlace.svg")
                      .anexo__texto
                        p <b>Enlace web.</b> MINISTERIO DE AMBIENTE Y DESARROLLO SOSTENIBLE       
              
              .row.justify-content-center(titulo="Resolución 2064 de 2010")
                .col-11
                  p Por la cual se reglamentan las medidas posteriores a la aprehensión preventiva, restitución o decomiso de especímenes de especies silvestres de fauna y flora terrestre y acuática y se dictan otras disposiciones. 
                  a.anexo(style='background-color:#F4F9FF')(href="https://www.icbf.gov.co/cargues/avance/docs/resolucion_minambientevdt_2064_2010.htm" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/enlace.svg")
                      .anexo__texto
                        p <b>Enlace web.</b> MINISTERIO DE AMBIENTE Y DESARROLLO SOSTENIBLE  

              .row.justify-content-center(titulo="Resolución 1023 de 2005")
                .col-11
                  p Se adoptan guías ambientales que serán utilizadas como medidas de autogestión.  
                  a.anexo(style='background-color:#F4F9FF')(href="https://www1.upme.gov.co/siame/Documents/Res1023-28-07-05_guias_ambientales.pdf" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/enlace.svg")
                      .anexo__texto
                        p <b>Enlace web.</b> MINISTERIO DE AMBIENTE Y DESARROLLO SOSTENIBLE  

        .col-md-3
          figure.mb-4
            img(src='@/assets/curso/tema4/img2.png')
    separador

    #t_4_1.titulo-segundo.color-acento-contenido   
      h2 4.1  Matrices de requisitos legales

    .row.mb-5
      .col-md-7
        p La matriz de requisitos legales es la recopilación de todos aquellos requisitos normativos que se le exigen a la organización, de acuerdo con su actividad económica. Estas normas y obligaciones legales están moderadas por diferentes mecanismos que buscan que una empresa garantice mediante la evidencia de actividades el cumplimiento de la normatividad vigente. 
        .cajon.color-primario.mb-3(style='background-color: #B1DBEA').p-3 
          p.mb-2 Por lo tanto, las matrices de requisitos legales se deben actualizar continuamente para que estén en total cumplimiento de las normativas.
      .col-md-5(data-aos="zoom-in-up")
        figure
          img(src='@/assets/curso/tema4/img3.png')

    p.mb-5.text-center <b>Estos son algunos de los principales aspectos que se debe tener en cuenta en la matriz de requisitos legales:</b>   

    figure.col-9.center.mb-4
      img(src='@/assets/curso/tema4/grafica.svg')
    separador

    #t_4_2.titulo-segundo.color-acento-contenido   
      h2 4.2  Técnicas de recolección y conceptos

    p.mb-4 Existen diferentes maneras de recolectar información dentro de una investigación, en la mayoría de casos solo depende de la pregunta de investigación que se formule o la información que se desee obtener. Algunos de estos métodos incluyen:

    .row.justify-content-center.mb-5
      .col-md-3
        .tarjeta.BG18.p-5.mb-3.align-items-center
          .row.justify-content-center
            img.py-3(src='@/assets/curso/tema4/icon9.svg' style='width: 130px')
            h5.text-center Encuestas

      .col-md-3
        .tarjeta.BG18.p-5.mb-3.align-items-center
          .row.justify-content-center
            img.py-3(src='@/assets/curso/tema4/icon10.svg' style='width: 130px')
            h5.text-center Entrevistas

      .col-md-3
        .tarjeta.BG18.p-5.mb-3.align-items-center
          .row.justify-content-center
            img.py-3(src='@/assets/curso/tema4/icon11.svg' style='width: 130px')
            h5.text-center Revisión bibliográfica

      .col-md-3
        .tarjeta.BG18.p-5.mb-3.align-items-center
          .row.justify-content-center
            img.py-3(src='@/assets/curso/tema4/icon12.svg' style='width: 130px')
            h5.text-center Otras observación, registro, análisis

    .row.mb-5
      .col-md-7
        .cajon-b.color-secundario.p-3
          p.mb-0 Para casos concretos de recolección de información relacionada a la normatividad aplicada en una organización, se debe realizar una investigación según la actividad económica y los procesos que allí se adelanten. 
          br
          p Es necesario que el investigador revise las páginas web de las organizaciones y su organigrama para definir los procesos que allí se adelantan, también es primordial indagar si dentro de la empresa adelantan procesos de sistemas de gestión, que bien pueden ser de calidad, de medio ambiente o de salud y seguridad en el trabajo, esto con el fin de entender con claridad cuáles son las exigencias a nivel normativo que tiene la organización. 
      
        .bg--3-claro3.position-relative.p-4.mb-5.col-md-11
          img.position-absolute.d-none.d-lg-block(src='@/assets/curso/tema2/vec14.svg' alt="Adornos flotantes" style="left: -10% ; top: 8%; width: 170px ")
          .row.justify-content-end 
            .col-lg-10
              <h4 style="color: #126783;">Para tener en cuenta… </h4>
              p Para profundizar en el tema se invita a revisar el video “Introducción a la normatividad ambiental en Colombia”, que se encuentra en la sección de material complementario, mediante el cual se podrá conocer algunos elementos claves sobre su aplicación en el país.
      .col-md-5
        img.py-3(src='@/assets/curso/tema4/icon13.svg')
      

</template>

<script>
export default {
  name: 'Tema4',
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
