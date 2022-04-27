<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5   

    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 1
      h1 Marco normativo: estética

    .row
      .col-md-7.mb-4(data-aos="fade-right")
        .cajon.color-acento-contenido(style='background-color: #B1DBEA').p-4.mb-4 
          p.mb-0 Toda organización, empresa o proyecto tiene ciertos componentes, los cuales en la medida que interactúan entre ellos le dan validez a los objetivos que se plantean inicialmente, ya que son elementos transformadores que procesan recursos o insumos y hacen parte de la cadena de producción para entregar un producto final que se adapte a las necesidades del cliente.  
        p Para dar claridad, en el siguiente recurso de aprendizaje se presentan los componentes de un sistema, por lo que se invita a revisar y a hacer búsquedas en internet en páginas de alta calidad académica sobre el tema para profundizar sobre el desempeño ambiental de una organización, a partir de lo que se presenta a continuación:  
      .col-md-4.mb-4(data-aos="fade-left")  
        img(src='@/assets/curso/tema1/img1.svg', alt='Imagen decorativa')

    .tarjeta.fondo-slyder.mb-5
      SlyderA
        .row
          .col-lg-7.text-white
            h5.aling-1 El medio ambiente:
              p.mt-3 Es el medio que rodea externamente al sistema en donde se evidencian los aspectos sociales, económicos, políticos y culturales. Dado estos siempre deben estar relacionados con el contexto que los rodea y que influyen de manera directa o indirecta sobre el funcionamiento del mismo. 
          .col-lg-5
           figure
              img.p-y-1(src='@/assets/curso/tema1/1.png', alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto

        .row
          .col-lg-7.text-white
            h5.aling-1 Insumos:
              p.mt-3 Son aquellos componentes que ingresan al ciclo productivo que usualmente son las materias primas.
          .col-lg-5
           figure
              img.p-y-1(src='@/assets/curso/tema1/2.png', alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto

        .row
          .col-lg-7.text-white
            h5.aling-1 Entradas:
              p.mt-3 Son los ingresos que tiene un sistema o un proceso, los cuales pueden ser recursos naturales, mano de obra humana, tecnologías o información que permiten la fluidez dentro del sistema. 
          .col-lg-5
           figure
              img.p-y-1(src='@/assets/curso/tema1/3.png', alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto

        .row
          .col-lg-7.text-white
            h5.aling-1 Salidas:
              p.mt-3 Son todos aquellos resultados obtenidos luego de que se procesaran las entradas y sean transformadas en productos, servicios o información para los clientes. Estas son las encargadas de mostrar el funcionamiento óptimo del sistema productivo y  tienen la capacidad de convertirse en las entradas de otro, el cual mediante su procesamiento las convertirá en otra salida generando que el ciclo se repita de manera indeterminada. 
          .col-lg-5
           figure
              img.p-y-1(src='@/assets/curso/tema1/4.png', alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto

        .row
          .col-lg-7.text-white
            h5.aling-1 Los procesos de conversión:
              p.mt-3 Son todos aquellos que comprenden la estructuración organizacional y los procesos asociados al sistema productivo. 
          .col-lg-5
           figure
              img.p-y-1(src='@/assets/curso/tema1/5.png', alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto

    .row.mb-4
      .col-md-1
        figure
          img.p-y-1(src='@/assets/curso/tema1/icon1.svg', alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto
      .col-md-11
        p Existen diferentes herramientas que son utilizadas para analizar la situación actual de una organización con respecto a las condiciones internas y externas que puedan generar afectaciones o por el contrario, oportunidades al sistema; una de estas herramientas es la matriz DOFA, la cual será descrita a continuación:
    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Matriz DOFA

    p.mb-4 La matriz DOFA es una herramienta de gran utilidad para toda organización, ya que permite el entendimiento de los elementos que constituyen una empresa y las relaciones internas y externas que existen.
    p.mb-5 Este análisis es utilizado para observar desde el exterior, es decir, como si fuera un observador neutral y no tuviera participación en la misma. Por lo anterior, se invita a revisar el siguiente recurso de aprendizaje, donde encontrará información clave sobre lo que significa la palabra DOFA y cómo se aplica al desempeño de una organización:

    ImagenInfografica.color-acento-botones
      template(v-slot:imagen)
        figure.col-md-4.mb-5.center
          img(src='@/assets/curso/tema1/6.png', alt='Texto que describa la imagen')
      .tarjeta.bg-amarillo-claro.p-4(x="35.7%" y="30%" numero="+")
        p <b>Fortalezas</b>  Tener claridad de las ventajas o fortalezas que se tiene frente al resto de la competencia permitirá definir los atributos que se deben resaltar para lograr los objetivos propuestos por la organización. 

      .tarjeta.bg-amarillo-claro.p-4(x="64.5%" y="29.8%" numero="+")
        p  <b>Debilidades</b>  Se hace referencia a todos los elementos, recursos energéticos y actitudes que la empresa tiene actualmente y que pueden generar diferentes obstáculos para el correcto funcionamiento de la organización. Es de vital importancia reconocer las debilidades, ya que  permitirá elaborar estrategias que lleven a afrontarlas en el transcurso del tiempo. 

      .tarjeta.bg-amarillo-claro.p-4(x="35.7%" y="71.8%" numero="+")
        p <b>Oportunidades</b>  Son todos aquellos factores positivos que se generan externamente y están relacionados con la competitividad. La correcta identificación de estas oportunidades permite el crecimiento de los beneficios de la organización. Usualmente estas  requieren de una inversión, bien sea monetaria o de capacitación. 

      .tarjeta.bg-amarillo-claro.p-4(x="64.5%" y="71.8%" numero="+")
        p <b>Amenazas</b>  En su mayoría son obstáculos externos que ponen en riesgo el correcto funcionamiento del sistema organizacional. Pueden ser  nuevos competidores, nuevas legislaciones o cambio de proveedores. Una vez son identificadas es necesario que se diseñe una estrategia que permita mitigar o solucionar en un periodo de tiempo determinado. 

    .row
      .col-md-4
        figure
          img(src='@/assets/curso/tema1/img2.svg', alt='AvatarTop')

      .col-md-8
        .cajon.color-acento-contenido(style='background-color: #B1DBEA').p-4.mb-4 
          p.mb-0 La manera más recomendada para hacer este análisis es por proceso, identificando en cada uno de ellos sus debilidades, oportunidades, fortalezas y amenazas, para posteriormente realizar un análisis global de la organización teniendo en cuenta lo obtenido en cada uno de los procesos del sistema productivo.
    

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
