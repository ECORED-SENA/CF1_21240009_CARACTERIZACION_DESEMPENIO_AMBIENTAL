<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero.text-white
        span i      
      h1 Introducción

    p.mb-4 Apreciado aprendiz, el SENA le da la bienvenida a esta experiencia de aprendizaje diseñada desde sus lineamientos de enseñanza y aprendizaje. Para iniciar, se sugiere observar el siguiente video para entender el qué, para qué y cómo de este momento de formación. Bienvenido.
    <br><br>
    .row.justify-content-center
      .col-10
        figure.mb-5(data-aos="flip-up")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)         
    br    
    .row.justify-content-center.BG01.mb-5.p-5(data-aos="fade-right")
      .col-11
        p.mb-0 Para la elaboración de este componente, se abordaron varios autores conocidos en #[strong servicios de estética ornamental, cosmética facial y corporal], de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de 
          span.etiqueta #[strong bioseguridad aplicada a la cosmética ornamental, facial y corporal.]

   
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
