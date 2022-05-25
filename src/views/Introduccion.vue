<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero.text-white
        span i      
      h1 Introducción
    
    .row.col-12.col-md-12.BG2.justify.content-center.align-items-center.mb-4
      .col-md-4.izq
        img(src='@/assets/curso/img1.png' alt='AvatarTop')
      .col-md-8
        p.p-3.text-white La globalización de la economía a nivel mundial ha producido cambios en todos los sistemas industriales, lo que necesariamente ha llevado a definir estándares de calidad que permitan definir indicadores de calidad a nivel mundial, ofreciendo servicios o productos en igualdad de condiciones por cada una de las empresas. Por lo anterior, cada una de estas ha debido diseñar una estrategia de mejora continua que defina un nivel de desempeño ambiental de alto nivel como organización, con el fin de demostrar que cumple con las pautas de la Norma ISO 14001 del 2015. Por lo anterior, se invita a ver el siguiente video introductorio:

    .row.justify-content-center
      .col-md-11
        figure.mb-5(data-aos="flip-up")
          .video
            iframe(width="942" height="530" src="https://www.youtube.com/embed/8TCMBdrbiEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)         
   
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
