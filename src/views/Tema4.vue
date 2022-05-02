<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 4
      h1 Normativa

    .row.mb-4
      .col-md-1
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
              td.text-white <strong>Clasificación</strong> 
              td.text-white <strong>Concepto</strong> 
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
    
    p.mb-5.text-center En Colombia existen gran cantidad de normas ambientales como las que se describen en la siguiente tabla 4:
    
    .row.justify-content-center 
      .col-md-11
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4
          span  Normas ambientales en Colombia.

        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header.color-acento-contenido.center
            tr
              td.text-white <strong>Normas Generales</strong> 
              td.text-white <strong>Concepto</strong> 
              td.text-white <strong>Enlaces</strong> 
          table 
            tr
              td Constitución Nacional
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
              td Código nacional de los recursos naturales renovables y de protección del medio ambiente - Decreto Ley 2811 de 1974.
              td Es el código mediante el cual se establece el uso de los recursos naturales renovables. 
              td https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1551
            tr
              td Ley sanitaria - Ley 09 de 1979.
              td Su principal objetivo es la conservación de la salud y del bienestar humano.
              td https://www.minsalud.gov.co/Normatividad_Nuevo/LEY%200009%20DE%201979.pdf
            tr
              td Ley 99 de 1993.
              td Se crea el Ministerio de medio ambiente. 
              td https://www.icbf.gov.co/cargues/avance/docs/ley_0099_1993.htm
            tr
              td Código minero - Ley 685 del 2001.
              td Se expide el código de minas. 
              td http://www.secretariasenado.gov.co/senado/basedoc/ley_0685_2001.html
            
    figure.mb-4
      img(src='@/assets/curso/tema4/title.svg' style='width: 380px')
    
    p.mb-4 Son acuerdos entre dos o más países que quedan por escrito, los cuales están regulados por las normas del derecho internacional. Esto se puede estudiar en la siguiente tabla 5:

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
                 
            .tarjeta-flip__contenido.fond_3.p-4.p-xl-5
              img.img250.p-2.center(src='@/assets/curso/tema4/icon4.svg', alt='imagen 1-2')
              h3.text-center Convenio de Viena para la protección de la capa de ozono y el Protocolo de Montreal. 
              p.text-center.mt-3 Ratificado por Colombia por medio de la Ley de 1990.
              a.boton.color-acento-botones.mx-3(href="https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/convencion-de-viena-y-protocolo-de-montreal/#:~:text=El%2016%20de%20septiembre%20de,de%20numerosas%20sustancias%20que%20son" target="_blank")
                span Minambiente
                i.fas.fa-link 

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
