<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span.text-white 2
      h1 Componentes Ambientales

    .bg_grad-03
      .row.BG10.justify.content-center.align-items-center.mb-5
        .col-lg-8
          p.col-md-9.p-4.cor Los componentes ambientales son todos los elementos, factores o recursos naturales que presentan interacciones entre sí, lo cual permite que se genere la vida en nuestro planeta. Estos tienen una vital influencia en el medio ambiente y por ende con cada uno de los seres vivos. Los componentes ambientales se pueden dividir en tres grandes grupos que son los factores bióticos, abióticos y socioculturales.
        .col-lg-4.col-6.center
          img.p-2(src='@/assets/curso/tema2/img1.png' alt='AvatarTop')

      .row.mb-4
        .col-md-4
          img.p-2(src='@/assets/curso/tema2/vec1.svg' alt='AvatarTop')
        .col-md-8
          .col-md-4.mb-3
            img.p-2(src='@/assets/curso/tema2/title1.svg' alt='AvatarTop')
          .col-md-12
            p Los factores bióticos son todos aquellos organismos que tienen vida como los animales, las plantas o los microorganismos y que influyen directamente con la forma de algún ecosistema sea de manera positiva o negativa por medio de la interacción entre ellos. Algunas de sus principales características son: 
            ul.lista-ul.lista-ul.lista-ul--color
              li 
                i.fas.fa-book-open
                span La flora y la fauna tiene diversas relaciones intraespecíficas y relaciones interespecíficas. 
              li 
                i.fas.fa-book-open 
                span Todos los seres vivos están en constante competencia por el espacio, por alimento y demás recursos.
              li 
                i.fas.fa-book-open 
                span Los seres vivos pueden obtener la energía que necesitan de diferentes formas del medio físico.
    br
    p.mb-5.text-center <b>Los factores bióticos se pueden clasificar en dos formas principalmente:</b>

    figure.col-md-4.center.mb-4
      img(src='@/assets/curso/tema2/vec2.svg' alt='AvatarTop')

    .bg_grad-04
      .row.justify-content-center.my-5.p-5.correr-izq.correr-der
        .row.justify-content-center
          .col-xxl-3.col-lg-3.col-md-12.col-xl-3
            p.margen-texto En primera instancia se tendrán en cuenta los factores según su organización ecológica, las cuales presentan tres diferentes grupos descritos en el siguiente recurso de aprendizaje:  

          .col-lg-3
            .tarjeta.tarjetas-a.p-5.h-100.mb-4
              .iconos.mb-4
                img(src='@/assets/curso/tema2/vec3.svg' style='width: 120px')
                img(src='@/assets/curso/tema2/vec3.svg' style='width: 120px')
              h5 Individuos:
              p Son organismos unitarios que presentan una estructura independiente, la cual puede ser unicelular o pluricelular y además no tiene la necesidad de otro ser vivo para poder sobrevivir en algún ecosistema. 

          .col-lg-3
            .tarjeta.tarjetas-a.p-5.h-100.mb-4
              .iconos.mb-4
                img(src='@/assets/curso/tema2/vec4.svg' style='width: 120px')
                img(src='@/assets/curso/tema2/vec4.svg' style='width: 120px')
              h5 Población:
              p Esto hace referencia a un grupo de individuos de una misma especie que comparten el mismo espacio y en el mismo tiempo, por lo tanto, presentan diversas relaciones entre ellos, bien sea de alimentación o de reproducción. 
          
          .col-lg-3
            .tarjeta.tarjetas-a.p-5.h-100.mb-4
              .iconos.mb-4
                img(src='@/assets/curso/tema2/vec5.svg' style='width: 120px')
                img(src='@/assets/curso/tema2/vec5.svg' style='width: 120px')
              h5 Comunidad:
              p Se conoce como el conjunto de varias poblaciones que pueden ser a su vez de diferentes especies pero que habitan en un mismo ecosistema o territorio determinado.

    P.mb-5 En segunda instancia, se puede encontrar la clasificación según su posición dentro de la cadena alimenticia, descrita en el siguiente recurso de aprendizaje:
    
    figure.mb-4
      img(src='@/assets/curso/tema2/title3.svg' style='width: 380px')

    p.mb-4 Estos organismos también se conocen como autótrofos dado que tienen la capacidad de generar su propio alimento a partir de materia organiza y alguna fuente de energía. Estos organismos a su vez se pueden clasificar en dos tipos: 

    .row.mb-5
      TabsC.color-acento-contenido(data-aos="slide-left")
        .py-3.py-md-4(titulo="<b>Fotoautótrofos</b>")
          .row.fondo.p-5.justify-content-center.align-items-center
            .col-md-6
              p Son los organismos que generan su alimento por medio del proceso de la fotosíntesis en el cual sintetizan los azucares a partir del dióxido de carbono y agua en conjunto con el aprovechamiento de la luz. Un claro ejemplo de estos son las plantas. 

            .col-5.col-md-4
              figure
                img(src='@/assets/curso/tema2/img11.png')

        .py-3.py-md-4(titulo="<b>Quimioautótrofos</b>")
          .row.fondo.p-5.justify-content-center.align-items-center
            .col-md-6
              p son todos aquellos organismos que captan la energía necesaria para poder fabricar su alimento de diferentes reacciones químicas exotérmicas de derivados compuestos orgánicos. La gran diferencia que se presentan con los fotoautótrofos es que estos no requieren de agua para realizar su proceso y no generan oxígeno. Un ejemplo de este grupo son las bacterias. 
            
            .col-5.col-md-4
              figure
                img(src='@/assets/curso/tema2/img12.png')
 
    figure.mb-4
      img(src='@/assets/curso/tema2/title7.svg' style='width: 380px')

    p.mb-5 Todos los organismos consumidores son aquellos que se alimentan de otros seres vivos de donde obtienen la materia organiza necesaria para mantener su metabolismo. Estos organismos se pueden clasificar de la siguiente manera: 

    .row.justify-content-center.mb-4
      .col-lg-4.mb-3
        .tarjeta.tarjetas-text-1.rounded-0(@mouseover="mostrarIndicador= false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src="@/assets/curso/tema2/img2.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3
            h3 Herbívoros
            p estos organismos se alimentan básicamente de los anteriormente mencionados organismos productores que son en su mayoría plantas, semillas, raíces o demás derivados. En este grupo se pueden encontrar animales de todos los tamaños, desde un roedor hasta una inmensa jirafa. 
      .col-lg-4.mb-3
        .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
          img(src="@/assets/curso/tema2/img3.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3
            h3 Carnívoros
            p para estos organismos su principal fuente de alimento son otros organismos consumidores, es decir que se alimentan de carne. En este diverso grupo se pueden encontrar desde arácnidos hasta grandes mamíferos. 
      .col-lg-4.mb-3
        .tarjeta.tarjetas-text-2.rounded-0(@mouseover="mostrarIndicador= false")
          img(src="@/assets/curso/tema2/img4.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.px-5.pb-5.pt-3
            h3 Detritívoros
            p estos organismos se alimentan de materia orgánica muerta, que pueden ser animales, hojas y hasta excrementos. Acá se encuentran principalmente las lombrices y demás insectos en su mayoría. 

    .row.mb-4
      .col-md-8  
        figure.mb-4
          img(src='@/assets/curso/tema2/title4.svg' style='width: 380px')
        p Estos organismos tienen como principal fuente de alimento la materia orgánica que se encuentra en los cadáveres de otros participantes de la cadena alimenticia. En esta clasificación podemos encontrar en su mayoría hongos. 
 
      .col-md-4
        figure.mb-4
          img(src='@/assets/curso/tema2/img2.png')

    .bg_grad-05.mb-5
      .row.mb-4
        .col-md-5
          figure.mb-4
            img(src='@/assets/curso/tema2/img3.png')
        .col-md-7
          figure.mb-4
            img(src='@/assets/curso/tema2/title5.svg' style='width: 240px')
          p.mb-4 Los factores abióticos son aquellos que no tienen vida, pero de igual manera son de vital importancia para el desarrollo de los ecosistemas y de los seres vivos. Estos factores físicos afectan la capacidad que tienen los seres vivos para poder sobrevivir y reproducirse. 
          p.text-center.mb-4 <b>Los factores abióticos se pueden dividir en dos categorías:</b>
          figure.mb-4
            img.center(src='@/assets/curso/tema2/vec6.svg' style='width: 324px')

      <h4 style="color: #126783;"><u>Factores abióticos físicos</u></h4>

      p.mb-4 En el medio ambiente influyen muchos factores abióticos físicos que impactan directa e indirectamente el contexto donde una organización funciona. Pero ¿Sabes cuáles son? Se invita a revisar el siguiente recurso de aprendizaje donde se podrán diferenciar:
      
      .tarjetas-up.mb-5
        .tarjetas-up__content.p-4.d-flex.align-items-center(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .tarjetas-up__content__image: img(src='@/assets/curso/tema2/img5.jpg')
          .text-center
            figure
              img.center(src='@/assets/curso/tema2/vec7.svg' style='width: 96px')
            p.fw-bold <i>Luz Solar</i>
            p Esta luz es la principal fuente de energía en el planeta Tierra, tanto para las plantas como para los animales, entre ellos el ser humano, ya que las ondas emitidas por el sol infieren en la temperatura de los mares, del aire y de la tierra. 
        
        .tarjetas-up__content.p-4.d-flex.align-items-center
          .tarjetas-up__content__image: img(src='@/assets/curso/tema2/img6.jpg')
          .text-center
            figure
              img.center(src='@/assets/curso/tema2/vec8.svg' style='width: 96px')
            p.fw-bold <i>Temperatura</i>
            p La temperatura sin importar cuál sea su nivel, incide en la generación de vida y en las relaciones entre diferentes organismos.
        
        .tarjetas-up__content.p-4.d-flex.align-items-center
          .tarjetas-up__content__image: img(src='@/assets/curso/tema2/img7.jpg')
          .text-center
            figure
              img.center(src='@/assets/curso/tema2/vec9.svg' style='width: 96px')
            p.fw-bold <i>Presión atmosférica</i>
            p Los diferentes cambios de presión que ejerce la atmósfera sobre la tierra es un factor fundamental para el desarrollo de los elementos que componen algún ecosistema.
        
        .tarjetas-up__content.p-4.d-flex.align-items-center
          .tarjetas-up__content__image: img(src='@/assets/curso/tema2/img8.jpg')
          .text-center
            figure
              img.center(src='@/assets/curso/tema2/vec10.svg' style='width: 96px')
            p.fw-bold <i>Clima</i>
            p Dependiendo de la región climática en donde se encuentre cada ecosistema infiere totalmente en sus características y también en el tipo de organismos que allí habitan. 
    
      <h4 style="color: #126783;"><u>Factores abióticos químicos</u></h4>

      p.mb-4 Por otro lado, se hace necesario mirar otros factores que también influyen el contexto ambiental en el cual están las organizaciones y que debe ser estudiado cuando se busca revisar el desempeño de una empresa, a continuación se pueden conocer:

      .row.justify-content-center.mb-4
        .col-lg-6
          .tarjeta.tarjetas-text-1.rounded-0(@mouseover="mostrarIndicador= false")
            .indicador--hover(v-if="mostrarIndicador")
            img(src="@/assets/curso/tema2/img9.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
            .tarjetas-text__contenido.px-5.pb-5.pt-3
              h3 PH
              p Este factor es determinante para la generación de vida, ya que afecta las propiedades químicas tanto del agua como del suelo, lo cual le otorga características a cada ecosistema en particular.  
        .col-lg-6
          .tarjeta.tarjetas-text.rounded-0(@mouseover="mostrarIndicador= false")
            img(src="@/assets/curso/tema2/img10.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
            .tarjetas-text__contenido.px-5.pb-5.pt-3
              h3 Química del aire y suelo
              p Hace referencia a los diferentes compuestos químicos que están disueltos tanto en el suelo como en el aire y que proporcionan niveles de oxígeno necesario para la sustentabilidad de los ecosistemas.  

    figure.mb-4
      img(src='@/assets/curso/tema2/title6.svg' style='width: 380px')
    
    p.mb-4 Los factores socioculturales son el conjunto tanto de factores internos (las creencias y las habilidades personales), como de factores externos (efecto de la educación dentro de la sociedad).<br><br/>Es necesario entonces entender cada factor por separado, así:
    
    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row
        .col-md-10.mb-4.mb-md-0
          h3 Factores sociales
          p Los factores sociales son aquellos que influyen en las actitudes, los valores y el estilo de vida de cada persona.
        .col-md-2
          figure
            img(src='@/assets/curso/tema2/vec11.svg', style='width: 128px')
      .row
        .col-md-2.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/tema2/vec12.svg', style='width: 128px')
        .col-md-10
          h3 Factores culturales
          p Cuando hablamos de los factores culturales hacemos referencia a las clases sociales, los comportamientos y creencias arraigadas en cada comunidad.
          
      .row
        .col-md-10.mb-4.mb-md-0
          h3 Factores socioculturales
          p Cuando se habla de un factor sociocultural se entiende como la relación que se presenta entre las comunidades y sus entornos teniendo en cuenta aspectos económicos, culturales, sociales, históricos y políticos.
        .col-md-2
          figure
            img(src='@/assets/curso/tema2/vec13.svg', style='width: 128px')
    .row
      .col-md-10.center
        .bg--2-claro2.position-relative.p-3.mb-5
          img.position-absolute.d-none.d-lg-block(src='@/assets/curso/tema2/vec14.svg' alt="Adornos flotantes" style="left: -2% ; top: -27%; width: 170px ")
          .row.justify-content-end 
            .col-lg-10
              p.m-2 Para profundizar en el tema se invita a revisar el video <b>“Componentes ambientales”</b>, que se encuentra en la sección de materiales complementarios, el cual permitirá identificar elementos claves para consolidar sus conocimientos.

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
