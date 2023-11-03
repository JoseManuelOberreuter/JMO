import React, { useState } from 'react';


// PREVIEW DE POST 
export const PreviewRecentPosts = () => {
    return(
      <div class="col-md-8 ">
            
        <h3 class="pb-1 mb-4 border-bottom h4">
          Publicaciones recientes:
        </h3>
  
        {/* PREVIEW DE ARTICULOS*/}
  
        <PreviewPython2 />
  
        <PreviewPython1 />
  
        <PreviewSrcum1 />
  
        <PreviewMj1 />
  
        <PreviewIa1 />
  
  
  
      </div>
    )
  }

export const PreviewPython4 = () => {
    return(
      <div>
          <article className="text-justify border-bottom pb-2 my-2">
            <h2>Listas, tuplas, conjuntos y diccionarios de Python</h2>
            <p class="blog-post-meta">Julio 3</p>
            <p>En el mundo de la programación, las estructuras de datos son fundamentales para organizar y manipular información de manera eficiente. Python, como un lenguaje de programación versátil y popular, proporciona varias estructuras de datos incorporadas que son ampliamente utilizadas en el desarrollo de aplicaciones. En este artículo, exploraremos las listas, tuplas, conjuntos y diccionarios en Python, y discutiremos cómo aprovechar al máximo cada una de ellas en nuestros proyectos. Además, proporcionaremos ejemplos de código prácticos para ilustrar su uso.</p>
            <p>Cada una de estas estructuras tiene sus propias características y se utiliza en diferentes situaciones. Las listas nos permiten almacenar elementos ordenados y modificarlos fácilmente, las tuplas son inmutables y útiles cuando queremos asegurarnos de que los datos no cambien, los conjuntos son ideales para almacenar elementos únicos sin importar el orden, y los diccionarios nos permiten asociar valores con claves para acceder a ellos eficientemente.</p>
            <buttom className='button-link'>Seguir leyendo</buttom>
          </article>
      </div>
    )
  }
  
  
  
  
  export const PreviewPython3 = () => {
    return(
      <div>
          <article className="text-justify border-bottom pb-2 my-2">
            <h2>Estructuras de control de Python: condicionales y bucles</h2>
            <p class="blog-post-meta">Junio 30</p>
  
  
            <p>En el mundo de la programación, las estructuras de control desempeñan un papel fundamental al permitirnos controlar el flujo de ejecución de un programa. Dos de las estructuras de control más utilizadas son las condicionales y los bucles. Estas herramientas nos permiten tomar decisiones y repetir acciones en función de ciertas condiciones, lo que a su vez nos brinda mayor flexibilidad y poder en el desarrollo de software.</p>
            <p>Las estructuras de control condicionales nos permiten ejecutar un bloque de código si se cumple una condición determinada. En Python, esto se logra utilizando la declaración if.</p>
            <p>Los bucles nos permiten repetir un bloque de código varias veces. Esto es especialmente útil cuando queremos realizar una tarea similar varias veces o cuando necesitamos recorrer una colección de elementos, como una lista o un conjunto de datos.</p>
  
            <buttom className='button-link'>Seguir leyendo</buttom>
          </article>
      </div>
    )
  }
  
  
  
  export const PreviewPython2 = () => {
    return(
      <div>
          <article className="text-justify border-bottom pb-2 my-2">
            <h2>Variables, Tipos de Datos y Operaciones Básicas en Python</h2>
            <p class="blog-post-meta">Junio 27</p>
  
  
            <p>Python es un lenguaje de programación ampliamente utilizado y apreciado por su sencillez y legibilidad. Es ideal tanto para principiantes como para programadores experimentados debido a su enfoque intuitivo y su amplia gama de aplicaciones. Una de las bases fundamentales de la programación en Python es comprender las variables, los tipos de datos y las operaciones básicas. En este artículo, exploraremos estos conceptos clave para ayudarte a dar tus primeros pasos en Python.</p>
            <p>En Python, las variables se utilizan para almacenar valores. Puedes pensar en ellas como contenedores que mantienen información que puede cambiar a lo largo del programa. Para crear una variable en Python, solo necesitas asignarle un nombre y un valor utilizando el operador de asignación "=".</p>
  
            <buttom className='button-link'>Seguir leyendo</buttom>
          </article>
      </div>
    )
  }
  
  
  
  export const PreviewPython1 = () => {
    return(
      <div>
          <article className="text-justify border-bottom pb-2 my-2">
            <h2>Introducción a Python y su entorno de desarrollo</h2>
            <p class="blog-post-meta">Junio 26</p>
            <p>Python se ha convertido en uno de los lenguajes de programación más populares y versátiles del mundo. Con su sintaxis simple y legible, es ideal tanto para principiantes como para expertos en programación. Si estás interesado en aprender Python y aprovechar todo su potencial, es importante comprender no solo el lenguaje en sí, sino también el entorno de desarrollo adecuado para trabajar de manera eficiente y productiva.</p>
            <p>En este artículo, te introduciré al fascinante mundo de Python y te mostraré cómo configurar tu entorno de desarrollo para comenzar a programar </p>
            <buttom className='button-link'>Seguir leyendo</buttom>
          </article>
      </div>
    )
  }
  
  
  
  export const PreviewSrcum1 = () => {
    return(
      <div>
          <article className="text-justify border-bottom pb-2 my-2">
            <h2>Scrum: Un marco de trabajo para el desarrollo de software</h2>
            <p class="blog-post-meta">Junio 23</p>
            <p>En un mundo en constante evolución, la tecnología continúa abriendo nuevas puertas y posibilidades en todas las áreas de nuestra vida. Una de esas áreas es la creación de imágenes, y una inteligencia artificial en particular ha estado captando la atención de artistas, diseñadores, creadores de contenido y programadores por igual : <b>Midjourney</b>.</p>
            <p>La IA de Midjourney se basa en algoritmos de aprendizaje profundo, que han sido entrenados con una amplia variedad de datos visuales y estéticos. Esto permite a Midjourney generar imágenes sorprendentes y visualmente impactantes que desafían las convenciones tradicionales y empujan los límites de lo posible. Desde paisajes surrealistas hasta retratos abstractos, <b>Midjourney</b> es capaz de crear obras de arte únicas.</p>
            <p>No debemos olvidar que, Midjourney es solo una inteligencia artificial que <b>analiza, observa y copia imágenes </b> de los artistas de todo el mundo y de todas las épocas. A través de su capacidad de aprendizaje profundo, Midjourney analiza y absorbe las obras maestras creadas por los grandes artistas de la historia, desentrañando sus técnicas y estilos únicos.</p>
            <buttom className='button-link'>Seguir leyendo</buttom>
          </article>
      </div>
    )
  }
  
  
  export const PreviewMj1 = () => {
    return(
      <div>
          <article className="text-justify border-bottom pb-2 my-2">
            <h2>El futuro de la creación de imágenes: Una mirada a Midjourney</h2>
            <p class="blog-post-meta">Junio 15</p>
            <p>En un mundo en constante evolución, la tecnología continúa abriendo nuevas puertas y posibilidades en todas las áreas de nuestra vida. Una de esas áreas es la creación de imágenes, y una inteligencia artificial en particular ha estado captando la atención de artistas, diseñadores, creadores de contenido y programadores por igual : <b>Midjourney</b>.</p>
            <p>La IA de Midjourney se basa en algoritmos de aprendizaje profundo, que han sido entrenados con una amplia variedad de datos visuales y estéticos. Esto permite a Midjourney generar imágenes sorprendentes y visualmente impactantes que desafían las convenciones tradicionales y empujan los límites de lo posible. Desde paisajes surrealistas hasta retratos abstractos, <b>Midjourney</b> es capaz de crear obras de arte únicas.</p>
            <p>No debemos olvidar que, Midjourney es solo una inteligencia artificial que <b>analiza, observa y copia imágenes </b> de los artistas de todo el mundo y de todas las épocas. A través de su capacidad de aprendizaje profundo, Midjourney analiza y absorbe las obras maestras creadas por los grandes artistas de la historia, desentrañando sus técnicas y estilos únicos.</p>
            <buttom className='button-link'>Seguir leyendo</buttom>
          </article>
      </div>
    )
  }
  
  export const PreviewIa1 = () => {
    return(
      <div>
        <article className="text-justify pb-2 my-2">
  
          <h2>La revolución de la inteligencia artificial</h2>
          <p className="blog-post-meta">Mayo 23</p>
          <p>
            La inteligencia artificial (IA) ha emergido como una de las tecnologías más disruptivas de nuestro tiempo, transformando rápidamente la forma en que vivimos y trabajamos. Con avances significativos en áreas como el aprendizaje automático, el procesamiento del lenguaje natural y la visión por computadora, la IA está desencadenando una revolución en diversas industrias, desde la atención médica y la manufactura hasta el transporte y el comercio minorista. En este artículo, exploraremos cómo la inteligencia artificial está redefiniendo nuestro mundo y cómo estas innovaciones están impulsando el futuro.
          </p>
          
          <p>
            La inteligencia artificial está superando los límites de lo que era considerado posible en el pasado. Algoritmos complejos y modelos de IA están permitiendo avances en campos como el reconocimiento de voz y la comprensión del lenguaje natural, lo que ha llevado al desarrollo de asistentes virtuales y chatbots capaces de interactuar con los usuarios de manera más natural y efectiva. Estas tecnologías están revolucionando la forma en que nos comunicamos y accedemos a la información, facilitando tareas cotidianas y mejorando la experiencia del usuario en múltiples plataformas y dispositivos.
          </p>
          
          <p>
            Con cada nueva aplicación y avance en inteligencia artificial, nuestro mundo se vuelve más conectado y sofisticado. La revolución de la IA no solo está impulsando mejoras en la eficiencia y la productividad, sino que también está creando oportunidades para el descubrimiento científico, la innovación tecnológica y el mejoramiento de la calidad de vida. A medida que nos sumergimos en este emocionante futuro impulsado por la inteligencia artificial, es crucial comprender y adaptarnos a los cambios que se avecinan, aprovechando las oportunidades que nos brinda y trabajando en conjunto para desarrollar y aplicar esta tecnología de manera ética y responsable.
          </p>
          <buttom className='button-link'>Seguir leyendo</buttom>
          
        </article>
      </div>
    )
  }