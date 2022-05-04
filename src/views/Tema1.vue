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
    
    .bg_grad-01
      .tarjeta.fondo-slyder.mb-5
        SlyderA
          .row
            .col-lg-7.text-white
              h5.aling-1 El medio ambiente:
                p.mt-3 Es el medio que rodea externamente al sistema en donde se evidencian los aspectos sociales, económicos, políticos y culturales. Dado estos siempre deben estar relacionados con el contexto que los rodea y que influyen de manera directa o indirecta sobre el funcionamiento del mismo. 
            .col-lg-5.col-7.center
              figure
                img.p-y-1(src='@/assets/curso/tema1/1.png', alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto

          .row
            .col-lg-7.text-white
              h5.aling-1 Insumos:
                p.mt-3 Son aquellos componentes que ingresan al ciclo productivo que usualmente son las materias primas.
            .col-lg-5.col-7.center
              figure
                img.p-y-1(src='@/assets/curso/tema1/2.png', alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto

          .row
            .col-lg-7.text-white
              h5.aling-1 Entradas:
                p.mt-3 Son los ingresos que tiene un sistema o un proceso, los cuales pueden ser recursos naturales, mano de obra humana, tecnologías o información que permiten la fluidez dentro del sistema. 
            .col-lg-5.col-7.center
              figure
                img.p-y-1(src='@/assets/curso/tema1/3.png', alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto

          .row
            .col-lg-7.text-white
              h5.aling-1 Salidas:
                p.mt-3 Son todos aquellos resultados obtenidos luego de que se procesaran las entradas y sean transformadas en productos, servicios o información para los clientes. Estas son las encargadas de mostrar el funcionamiento óptimo del sistema productivo y  tienen la capacidad de convertirse en las entradas de otro, el cual mediante su procesamiento las convertirá en otra salida generando que el ciclo se repita de manera indeterminada. 
            .col-lg-5.col-7.center
              figure
                img.p-y-1(src='@/assets/curso/tema1/4.png', alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto

          .row
            .col-lg-7.text-white
              h5.aling-1 Los procesos de conversión:
                p.mt-3 Son todos aquellos que comprenden la estructuración organizacional y los procesos asociados al sistema productivo. 
            .col-lg-5.col-7.center
              figure
                img.p-y-1(src='@/assets/curso/tema1/5.png', alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto

      .row.mb-4
        .col-md-1.col-6
          figure
            img.p-y-1(src='@/assets/curso/tema1/icon1.svg', alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto
        .col-md-11
          p Existen diferentes herramientas que son utilizadas para analizar la situación actual de una organización con respecto a las condiciones internas y externas que puedan generar afectaciones o por el contrario, oportunidades al sistema; una de estas herramientas es la matriz DOFA, la cual será descrita a continuación:
      separador

      #t_1_1.titulo-segundo.color-acento-contenido
        h2 1.1 Matriz DOFA

      p.mb-4 La matriz DOFA es una herramienta de gran utilidad para toda organización, ya que permite el entendimiento de los elementos que constituyen una empresa y las relaciones internas y externas que existen.
      p.mb-5 Este análisis es utilizado para observar desde el exterior, es decir, como si fuera un observador neutral y no tuviera participación en la misma. Por lo anterior, se invita a revisar el siguiente recurso de aprendizaje, donde encontrará información clave sobre lo que significa la palabra DOFA y cómo se aplica al desempeño de una organización:

      ImagenInfografica.color-acento-botones.mb-5
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
    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Estructura organizacional

    .row.justify-content-center.mb-5
      .col-lg-7.mb-5
        .row.justify-content-center
          .col-lg-2.col-1
            img.celular(src="@/assets/curso/tema1/icon1.svg")
          .cajon.color-acento-contenido(style='background-color: #B1DBEA').col-lg-10.col-11.mb-3
            p.m-2 Una estructura organizacional que esté bien planificada y constituida servirá efectivamente para reforzar los objetivos y hacer que los diferentes departamentos de la organización crezcan en la misma dirección.
        .row
          .col-md-12
            .bloque-texto-b.color-secundario
              .bloque-texto-b__texto
                p Esta es necesaria para que cada uno de los trabajadores entienda el funcionamiento de la misma, obteniendo una cadena de mandos clara donde los empleados tengan una correcta orientación y seguridad al desarrollar sus actividades.
                <br><br/> Es por esto que cada organización debe contar con un modelo de estructura organizacional en la cual estén totalmente definidos los cargos y las responsabilidades de cada tarea, para de esta manera eliminar las dificultades que puedan aparecer por la falta de comunicación y una planeación estratégica errónea. 
                <br><br/> Teniendo en cuenta lo anterior, se invita a profundizar en el tema, debido a que se pueden encontrar diferentes tipos de estructura organizacional, los cuales serán descritos en la siguiente tabla 1: 
      .col-lg-5
        img(src="@/assets/curso/tema1/img3.svg")

    .row.justify-content-center 
      .col-md-10    
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1
          span  Estructuras organizacionales

        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header.color-acento-contenido
            tr
              th.text-white Estructura organizacional 
              td.text-white <strong>Concepto</strong> 
          table
            caption Nota. SENA, (2022).
            tr
              th Lineal
              td Es una estructura basada principalmente en los niveles de autoridad dentro de la organización manejando un sistema de decisión centralizada. Esta se maneja de forma piramidal donde entre más alta sea la jerarquía disminuirán los puestos, pero aumentarán las responsabilidades dentro de cada cargo.
            tr
              th Horizontal
              td En esta estructura los mandos de autoridad disminuyen, por lo que las personas que están ocupando los niveles más altos deberán estar en contacto directo con los empleados que se desempeñen en la primera línea.
            tr
              th Funcional
              td De esta manera se realiza una división de las tareas de la organización por medio de unidades especializadas, donde cada una de ellas cuenta con un jefe independiente, el cual es el encargado de coordinar su equipo de trabajo y a su vez permite una correcta comunicación con los demás equipos especializados.
            tr
              th Divisional
              td En esta estructura se realiza la división de los grupos de trabajo por el tipo de producto o servicio que se está ofreciendo al mercado, estos serán responsables de la distribución de las tareas dentro de esa área en particular.
            tr
              th Matricial
              td La organización estará estructurada por grupo de trabajo totalmente autónomos por lo que no presentan relaciones entre sí, ya que cada trabajador tendrá asignadas unas tareas específicas que serán reportadas a un coordinador de área, el cual reportará directamente al encargado de dirigir la organización.  
            tr
              th Central
              td Esta estructura se utiliza usualmente en empresas que son muy grandes y trae consigo trabajos mucho más complejos donde cada uno de los trabajadores tiene que dar reporte a diferentes supervisores, quienes se encuentran distribuidos dentro de las diferentes áreas de la organización.
    separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Procesos y procedimientos organizacionales
    
    .bg_grad-02                    
      .row.mb-4
        .col-md-5  
          img(src="@/assets/curso/tema1/7.png")
        .col-md-7
          p Los procesos dentro de una organización son el conjunto de actividades o pasos que se deben seguir por los trabajadores para lograr objetivos y metas pactadas con anterioridad, estos procesos deben ser relevados en la organización con el fin de alcanzar la eficiencia y efectividad económica dentro de la entidad.   
          span Los procesos están directamente relacionados con la misión de la empresa y a su vez con la calidad de sus productos o servicios, los cuales se relacionan secuencialmente. Los elementos que intervienen dentro de cada proceso son los siguientes:
          p 
          ul.lista-ul.lista-ul.lista-ul--color
            li 
              i.fas.fa-book-open
              span Procedimientos.
            li 
              i.fas.fa-book-open 
              span Formas.

            li 
              i.fas.fa-book-open 
              span Informes.

            li 
              i.fas.fa-book-open 
              span Archivo.

            li 
              i.fas.fa-book-open 
              span Equipo.
              
            li 
              i.fas.fa-book-open 
              span Espacio.
            li 
              i.fas.fa-book-open 
              span Personal.
          p Los procesos dentro de una organización deben estar encaminados hacia el mejoramiento de los sistemas de trabajo, es por esto que se debe establecer un inicio y un fin preciso para no intervenir en los procesos que se adelantan en las demás áreas dentro de la organización. 

      p.mb-4 En el siguiente recurso de aprendizaje se presentan los elementos que se deben tener en cuenta en los procesos, por lo que se invita a revisar cada uno de los factores claves que debe validar al realizar tal acción:  

      .row.mx-0.mb-5
        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.bgr_2.align-items-center
                figure
                  img.img250.p-2.center(src='@/assets/curso/tema1/img4.svg', alt='imagen 1-2')
                  h3.text-center.text-white Líder social    
              .tarjeta-flip__contenido.bgr_3.p-4.p-xl-5
                h3.text-center Poder:
                p.text-center.mt-3 Tener la habilidad para influir en un grupo de trabajo, lo cual es esencial para el cumplimiento de los objetivos, tanto individuales como organizacionales. 

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.bgr_2.align-items-center
                figure
                  img.img250.p-2.center(src='@/assets/curso/tema1/img5.svg', alt='imagen 1-2')
                  h3.text-center.text-white Empresario   
              .tarjeta-flip__contenido.bgr_3.p-4.p-xl-5
                h3.text-center Autoridad: 
                p.text-center.mt-3 Tener el derecho de dar órdenes, establecer las responsabilidades dentro de cada proceso.

        .col-sm-6.col-xl-3.mb-4.mb-xl-0
          .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.bgr_2.align-items-center
                figure
                  img.img250.p-2.center(src='@/assets/curso/tema1/img6.svg', alt='imagen 1-2')
                  h3.text-center.text-white Entidad estatal  
              .tarjeta-flip__contenido.bgr_3.p-4.p-xl-5
                h3.text-center Toma de decisiones:  
                p.text-center.mt-3 Es necesario establecer los rangos dentro de la organización y niveles jerárquicos si así se requiere, donde las decisiones sean tomadas únicamente por las personas responsables de cada proceso. 

        .col-sm-6.col-xl-3.mb-5.mb-xl-0
          .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
            .indicador--hover(v-if="indicadorTarjetaFlip")
            .tarjeta-flip__contenedor
              .tarjeta-flip__img.bgr_2.align-items-center
                figure
                  img.img250.p-2.center(src='@/assets/curso/tema1/img7.svg', alt='imagen 1-2')
                  h3.text-center.text-white Crisis sanitaria  
              .tarjeta-flip__contenido.bgr_3.p-4.p-xl-5
                h3.text-center Liderazgo: 
                p.text-center.mt-3 El liderazgo es la interrelación entre la estructura personal del líder, la personalidad de los seguidores, la estructura y función del grupo, y la situación por la cual atraviesa cada proceso. 

      .row.mb-4
        .col-md-7
          p Por otro lado, se hace necesario hablar de los procedimientos que son todas aquellas directrices que se deben tener en cuenta dentro de cada proceso, para poder obtener los objetivos planteados, estos permiten tener claridad acerca de las tareas y responsabilidades, tanto individuales como grupales. 
          span Cuando son ejecutados de manera competente se puede evidenciar en el resultado esperado, porque los trabajadores de cada proceso se integran y se enfocan en cumplir con las metas pactadas.
          .row.BG09.justify.content-center.align-items-center.mb-4
            .col-lg-2.col-6.center
              img.p-2(src='@/assets/curso/tema1/icon2.svg' alt='AvatarTop')
            .col-lg-10.p-4
              p Para profundizar en el tema se invita a ver el video “Identificación de procesos organizacionales, ¿Qué proceso implementar en cada fase?2, que se encuentra ubicado en la sección de materiales complementarios, en el cual se podrá encontrar elementos claves para poder definir los pasos a seguir en el establecimiento de las estrategias.
        .col-md-5
          img.espa(src='@/assets/curso/tema1/8.png' alt='AvatarTop')
          
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
