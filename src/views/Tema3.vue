<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 3
      h1 Elementos de protección personal

    .bg_grad-06
      .row.mb-4
        .col-md-7(data-aos="fade-right")
          p El Análisis de ciclo de vida (ACV) es una metodología aplicada que permite evaluar los impactos ambientales asociados a un producto dentro de todas sus etapas organizacionales. Con este análisis se pretende determinar los consumos de materias primas y de energías que están inmersas en cada proceso de producción, junto con los derivados o desechos de cada uno de ellos.<br><br/> Todas las actividades que se realicen dentro de un proceso productivo tienen impactos ambientales, ya que se consumen energías y recursos, y a su vez se emiten sustancias que generan afectaciones ambientales. 
          .cajon.color-primario(style='background-color: #B1DBEA').p-3 
            p.mb-2 Los análisis de ciclo de vida se realizan para prevenir de manera oportuna las diferentes contaminaciones que se puedan dar dentro de una organización, el ACV de un producto incluye todas las entradas/salidas de los procesos que participan a lo largo de su ciclo de vida. 
        .col-md-5(data-aos="zoom-in-up")
          figure
            img(src='@/assets/curso/tema3/img1.png')

      .row.justify-content-center.mb-4(data-aos="zoom-in-up")
        .col-md-3
          .tarjeta.BG11.p-4
            .row.justify-content-center
              h5.text-center.text-white.end La extracción de materias primas

        .col-md-3
          .tarjeta.BG12.p-4
            .row.justify-content-center
              h5.text-center.text-white.end1 El procesado de los materiales necesarios para la manufactura de componentes.

        .col-md-3
          .tarjeta.BG13.p-4
            .row.justify-content-center
              h5.text-center.text-white.end Uso del producto

        .col-md-3
          .tarjeta.BG14.p-4
            .row.justify-content-center
              h5.text-center.text-white.end Reciclaje y/o la gestión final

        .col-md-3
          .tarjeta.BG15.p-4
            .row.justify-content-center
              h5.text-center.text-white.end El transporte

        .col-md-3
          .tarjeta.BG16.p-4
            .row.justify-content-center
              h5.text-center.text-white.end Almacenaje

        .col-md-3
          .tarjeta.BG17.p-4
            .row.justify-content-center
              h5.text-center.text-white.end2 Distribución y otras actividades intermedias entre las fases del ciclo de vida también se incluyen cuando tienen la relevancia suficiente.

    p.mb-5(data-aos="fade-right") La vida de un producto comienza en el diseño y desarrollo de este y finaliza con las actividades de reutilización y reciclaje, pasando por las etapas que se describen en la siguiente tabla 2: 

    .row.justify-content-center(data-aos="zoom-in-up")
      .col-md-10    
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2
          span  Etapas ciclo de vida.

        .tabla-editada2.mb-5
          table
            caption
              p Nota. SENA, (2022).
            thead
              tr.text-center
                th.text-center.p-4 Etapas
                th.text-center.p-4 <strong>Concepto</strong>
            tbody
              tr
                td.text-center(style='background-color: #F6F6F6') Adquisición de materias primas
                td.p-4(style='background-color: #F6F6F6') En esta etapa se incluyen las diferentes actividades que se adelantan para la obtención de las materias primas, desde la extracción hasta el transporte de las mismas, además se debe tener en cuenta las diferentes fuentes de energía utilizadas para este proceso.
              tr
                td.text-center Proceso y fabricación
                td.p-4 Es en esta etapa donde están inmersas todas las actividades que se realicen para la transformación de la materia prima en el producto final.
              tr
                td.text-center(style='background-color: #F6F6F6') Distribución y transporte
                td.p-4(style='background-color: #F6F6F6') Acá se especifican todos los traslados que tienen que ver con la entrega del producto finalizado.
              tr
                td.text-center Uso, reutilización y mantenimiento
                td.p-4 Es necesario establecer la vida útil del producto junto con sus respectivos empaques.
              tr
                td.text-center(style='background-color: #F6F6F6') Reciclaje
                td(style='background-color: #F6F6F6') Hace referencia al producto una vez está en las manos del cliente y debe establecer la manera de reciclarlo o utilizarlo de ser posible. 
              tr
                td.text-center Gestión de residuos
                td.p-4 Esta etapa abarca desde que el producto ya ha cumplido con su funcionalidad y hace su retorno al medio ambiente en forma de residuo. 

    .row
      .col-md-5(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema3/img9.png')
      .col-md-7(data-aos="fade-left")
        .cajon-b.color-secundario.p-3
          p.mb-0 Se debe agregar que, en el análisis de ciclo de vida, es una metodología de índole internacional, que se proyecta en el marco de la gestión ambiental con el fin de analizar la dinámica de la materia y la energía en los sistemas productivos y la forma de hacerla más eficiente mediante la mejora de procesos en todas las fases de la producción.
          br
          p Es por esto que es de vital importancia la implementación de normas de certificación ambiental como la ISO 14001 donde se estipula la creación de un sistema de gestión ambiental para que la empresa controle y minimice sus afectaciones ambientales. 
      
        .bg--3-claro3.position-relative.p-4.mb-5.col-md-11
          img.position-absolute.d-none.d-lg-block(src='@/assets/curso/tema2/vec14.svg' alt="Adornos flotantes" style="left: -10% ; top: 8%; width: 170px ")
          .row.justify-content-end 
            .col-lg-10
              <h4 style="color: #126783;">Para tener en cuenta… </h4>
              p Inmersa en la norma se encuentra la normatividad ISO 14040 que hace referencia al análisis de ciclo de vida, la cual consta de una revisión y evaluación de los procesos adelantados por la empresa para determinar en qué etapas de su proceso se afecta el medio y sus posibles medidas de mitigación.

    p.mb-4(data-aos="fade-right") Para profundizar en el tema, se invita a consultar las dos normas ISO mencionadas anteriormente, con el fin de reforzar su aprendizaje:

    .row.mb-4(data-aos="fade-right")
      .tx3.col-md-5.col-12
        a.anexo(style='background-color:#F4F9FF')(href="https://informacion.unad.edu.co/images/control_interno/NTC_ISO_14001_2015.pdf" target="_blank")
          .anexo__icono
            img(src="@/assets/template/enlace.svg")
          .anexo__texto
            p <b>Enlace web.</b> SISTEMAS DE GESTIÓN AMBIENTAL REQUISITOS CON ORIENTACIÓN PARA SU USO

      .tx3.col-md-5.col-12
        a.anexo(style='background-color:#F4F9FF')(href="https://sena-primo.hosted.exlibrisgroup.com/permalink/f/156au80/sena_aleph000106729" target="_blank")
          .anexo__icono
            img(src="@/assets/template/enlace.svg")
          .anexo__texto
            p <b>Enlace web</b>  Gestión ambiental : Análisis de ciclo de vida. Principios y marco de referencia NTC - ISO 14040.

    p.mb-4(data-aos="fade-right") Para aclarar algunos elementos claves sobre el tema, se invita a revisar la siguiente video clase sobre el tema análisis del ciclo de vida.

    figure.mb-5(data-aos="flip-up")
      .video
        iframe(width="942" height="530" src="https://www.youtube.com/embed/5vI3zcaDlZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)         
    
</template>

<script>
export default {
  name: 'Tema3',
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
