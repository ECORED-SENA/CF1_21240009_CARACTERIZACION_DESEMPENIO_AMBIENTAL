<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 3
      h1 Elementos de protección personal

    .bloque-texto-g.color-acento-botones.mb-4.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right") 
        p.mb-0 Reconocidos los conceptos relacionados con la bioseguridad para los establecimientos que ofertan servicios en cosmética ornamental, facial y corporal, es necesario que usted se aproxime a los elementos de protección que son utilizados como protección y resguardo ante las exposiciones que usted enfrenta cuando realiza el proceso de atención a un cliente.
    <br><br>
    
    .row.align-items-center.p-0.cajon.color-acento-contenido.mb-5
      .col-lg-8(data-aos="fade-right") 
        .row.p-4       
          p Como dato curioso, en el año 1986, la Unión Europea organizó los primeros pilares que se referían a las condiciones mínimas de seguridad y salud para la utilización por los trabajadores en el trabajo de equipos de protección individual (EPI).   
      .col-lg-2.p-0(data-aos="fade-left") 
        img.img02(src='@/assets/curso/tema3/img08.svg')

    p Se definen, para el trabajador, los Elementos de Protección Personal (EPP) requeridos para el desarrollo de las actividades propias de su cargo. El uso de los EPP ayuda a protegerlos de posibles daños derivados de la exposición a los peligros en los lugares de trabajo y que puedan generar daños en su salud o integridad física (Ministerio de Salud y Protección Social, 2021). Algunos elementos de protección propios del contexto pecuario son:
    <br><br>
    .row.justify-content-center.mb-4
      .col-lg-5(data-aos="fade-right") 
        .tarjeta-avatar         
          img(src='@/assets/curso/tema3/img02.svg' alt='AvatarTop')
          .BG08.p-5 
            <br><br>           
            h2 Protección de cabeza
            p Dentro de este grupo, se clasifican los cascos, pasamontañas y cofias.
            .row.py-4
              .col-lg-3
                img(src='@/assets/curso/tema2/img15.png')
      .col-lg-5(data-aos="fade-leftt") 
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img03.svg' alt='AvatarTop')
          .BG08.p-5 
            <br><br>           
            h2 Gafas de seguridad 
            p En estos implementos, están los lentes de seguridad.
            br
            .row.py-4
              .col-3
                img(src='@/assets/curso/tema2/img16.png')
    
    .row.justify-content-center.mb-4
      .col-lg-5(data-aos="fade-right") 
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img04.svg' alt='AvatarTop')
          br
          .BG08.p-5 
            <br><br>           
            h2 Protección respiratoria
            p En este grupo, usted puede encontrar tapabocas desechables y reutilizables, protector respiratorio sin válvula para polvo.
            .row.py-4
              .col-lg-3
                img(src='@/assets/curso/tema2/img15.png')
      .col-lg-5(data-aos="fade-left") 
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img05.svg' alt='AvatarTop')
          br
          .BG08.p-5 
            <br><br>           
            h2 Cuerpo
            p Algunos implementos son overol, chaqueta y pantalón térmico, arnés de seguridad, guantes (vaqueta, nitrilo, térmicos).
            .row.py-4
              .col-lg-3
                img(src='@/assets/curso/tema2/img16.png')
    
    .row.justify-content-center.mb-5
      .col-lg-5(data-aos="fade-right") 
        .tarjeta-avatar
          img(src='@/assets/curso/tema3/img06.svg' alt='AvatarTop')
          br
          .BG08.p-5 
            <br><br>           
            h2 Pies
            p Dentro de estos elementos, se encuentran medias térmicas, punteras de seguridad y botas de seguridad.
            .row
              .col-lg-3
                img(src='@/assets/curso/tema2/img15.png')
      .col-lg-5(data-aos="fade-left") 
        <br><br><br><br>
        .BG12.p-5
          p El Ministerio de Salud de Colombia (2021), en su documento Gestión Integral de los elementos de protección personal (EPP), expone que cualquier equipo destinado a ser llevado o sujetado por el trabajador para que le proteja de uno o varios riesgos que puedan amenazar su seguridad o su salud en el trabajo, así como cualquier complemento o accesorio destinado a tal fin, se define como elemento de protección personal.

    p.mb-5 En el marco de este contexto normativo, es importante entender que los procedimientos y actividades que se realizan en el campo de la estética ornamental, facial y corporal deben realizarse en condiciones de seguridad, para minimizar los riesgos a los que se encuentran expuestos el personal y los usuarios. De acuerdo con las actividades que se realizan en el sector de salud y afines, los elementos de protección personal (EPP) son diseñados bajo estándares que permiten conservar la integridad física de los trabajadores y de los usuarios. Por lo general, las zonas que se encuentran más expuestas son las vías respiratorias y zonas cutáneas, por tanto, se debe contar con elementos especiales para el cuidado de las zonas como la boca, la nariz, los ojos y la piel expuesta. 
    br
    .row.align-items-center  
      .col-lg-6(data-aos="fade-right") 
        span.etiqueta #[strong Se puede decir que las vías más comunes por donde ingresan al cuerpo los agentes químicos y biológicos son las vías respiratorias, la cutánea y por ingestión.]
        span . Es por esta razón que los equipos de protección personal deben ser adaptados a las características del contexto laboral de cada trabajador, siendo considerados como apropiados cuando realmente protegen y cumplen con su función de evitar la contaminación entre los agentes infecciosos hacia las mucosas, como, por ejemplo, la piel, los ojos, la boca y otras membranas. 
        <br><br><br>
        .row
          .col-lg-3
            img(src='@/assets/curso/tema2/img21.svg')
          .col-lg-9
            p Es indispensable que la protección se dé por medio de elementos de barrera (biológicos y químicos) que ayuden a prevenir los riesgos asociados dentro del proceso de atención, en lo que respecta específicamente para este caso, el riesgo biológico. 
      .col-lg-6(data-aos="fade-left") 
        img(src='@/assets/curso/tema3/img07.png')

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
