<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5
      .col-md-5
        figure
          img(src="@/assets/curso/temas/img1.png",)
      .col-md-7
        p En este componente formativo se trabajan temáticas que permiten la identificación de los componentes tanto organizacionales como ambientales, la correcta estructuración que se debe seguir dentro de una empresa junto con sus diferentes debilidades, oportunidades, fortalezas y amenazas, lo cual permitirá establecer los diferentes procesos que cada una de ella adelanta dentro de su producción, esto con la finalidad de poder identificar por medio del análisis de ciclo de vida los diferentes impactos ambientales asociados a cada uno de estos procesos al igual que el cumplimiento de los normativas que rigen a la organización. 
        .cajon.color-secundario.mb-4(style='background-color:#D3F9EE').p-3 
          p.mb-2 En primera medida para el desarrollo de todo proyecto, obra o labor dentro de una determinada organización, se deben identificar los componentes que en ella interactúan, los cuales son el medio ambiente, los insumos, las entradas y salidas junto con los procesos de conversión; haciendo énfasis en los componentes ambientales se pueden clasificar en bióticos, abióticos y socioculturales, lo cual nos permitirá saber el contexto de la organización para que de esta manera se determinen los componentes que hacen referencia exclusivamente a la organización y a su estructura.
        p Una vez sean determinados los componentes  es necesario realizar un análisis DOFA en el cual se establecerán las diferentes debilidades, oportunidades, fortalezas y amenazas que presenta cada uno de los procesos que allí se adelantan, posteriormente se realizará un análisis de ciclo de vida para tener claridad de cuáles son las afectaciones ambientales que competen a cada uno de estos procesos organizacionales y que deben estar regidos por una normatividad que está previamente establecida y que se deberá diligenciar dentro de una matriz de aspectos legales. 
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
     

</template>

<script>
export default {
  name: 'Sintesis',
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
