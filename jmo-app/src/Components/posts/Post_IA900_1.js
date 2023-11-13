import { Sidebar } from '../SideBar';
import {FinalDePost} from '../Posts'

import IA900_1 from '../../Components/img/articles/machine-learn.gif'
import IA900_2 from '../../Components/img/articles/anomaly-detection.gif'
import IA900_3 from '../../Components/img/articles/image-classification.png'
import IA900_4 from '../../Components/img/articles/object-detection.png'
import IA900_5 from '../../Components/img/articles/semantic-segmentation.png'
import IA900_6 from '../../Components/img/articles/image-analysis.png'
import IA900_7 from '../../Components/img/articles/face-analysis.png'
import IA900_8 from '../../Components/img/articles/ocr.png'



export const PostMicrosoftIA900 = () => {
    return (
      <main>
        <div className="row g-5">
          <div className="col-md-8 ">
            <article className="articulo text-justify">
  
              
              <h1 className="my-2 text-center">
                Microsoft Azure AI Fundamentals: Introducción a la inteligencia artificial
              </h1>
  
              <div className="d-flex justify-content-center text-center">
                  <p className="text-primary mx-2">
                      <div className='hashtag'>
                          #Microsoft
                      </div>
                  </p>
                  <p className="text-primary mx-2">
                      <div className='hashtag'>
                          #InteligenciaArtificial
                      </div>
                  </p>
              </div>
  
  
  
              {/* UNIDAD 1 */}
              <h2 className='mt-4'>Introducción a la inteligencia artificial</h2>
  
              <p>
              ¡La IA nos permite crear un software increíble que puede mejorar la atención médica, permitir que las personas superen las desventajas físicas,
              potenciar la infraestructura inteligente, crear experiencias de entretenimiento increíbles e incluso salvar el planeta!
              </p>
  
  
              <p>
                  La IA no es una tecnología del futuro, sino que ya está entre nosotros, y su poder radica en su capacidad de complementar y mejorar la creatividad humana.
                  Jane, quien perdió la vista a una edad temprana pero logra una vida independiente gracias a la IA, que le ayuda a leer y navegar por el mundo. 
                  La IA de Microsoft se utiliza en diversas áreas, desde la agricultura para abordar el cambio climático hasta la conservación de la biodiversidad.
              </p>
  
              <p>
                  Es importante entender que la IA no se trata simplemente de replicar la inteligencia humana, sino de transformar industrias enteras.
                  Esto incluye la atención médica, la ingeniería y las telecomunicaciones, donde la IA de Microsoft desempeña un papel fundamental.
                  la IA de Microsoft no se limita a productos tangibles, sino que empodera a las personas para crear experiencias únicas y aprovechar su potencial al máximo. 
                  Este es solo el comienzo de una nueva era donde la inteligencia artificial nos ofrece un mundo lleno de posibilidades, y el rumbo que tomemos dependerá de nuestras elecciones.
              </p>
  
              <h3 className='text-muted fs-4 my-2'>¿Qué es la IA?</h3>
  
              <p>En pocas palabras, la IA es la creación de software que imita los comportamientos y capacidades humanas. Las cargas de trabajo clave incluyen:</p>
  
              <ul>
                  <li><strong>Aprendizaje automático:</strong> esta es a menudo la base de un sistema de IA, y es la forma en que "enseñamos" un modelo informático para hacer predicciones y sacar conclusiones de los datos.</li>
                  <li><strong>Detección de anomalías:</strong> la capacidad de detectar automáticamente errores o actividad inusual en un sistema.</li>
                  <li><strong>Visión por computadora:</strong> La capacidad del software para interpretar el mundo visualmente a través de cámaras, video e imágenes.</li>
                  <li><strong>Procesamiento del lenguaje natural:</strong> La capacidad de una computadora para interpretar el lenguaje escrito o hablado, y responder de la misma manera.</li>
                  <li><strong>Minería de conocimiento:</strong> la capacidad de extraer información de grandes volúmenes de datos a menudo no estructurados para crear un almacén de conocimiento en el que se pueden realizar búsquedas.</li>
              </ul>



              {/* UNIDAD 2 */}
              <h2 className='mt-4'>Descripción del aprendizaje automático</h2>
  
              <p>
                El aprendizaje automático es la base de la mayoría de soluciones de inteligencia artificial.
                Para empezar, se examinará un ejemplo real de cómo se puede usar el aprendizaje automático para solucionar un problema difícil.
                Las técnicas agrícolas sostenibles son esenciales para maximizar la producción alimentaria y proteger un medioambiente frágil. The Yield, una empresa de tecnología agrícola australiana, usa sensores, datos y aprendizaje automático para ayudar a los agricultores a tomar decisiones fundamentadas relacionadas con las condiciones meteorológicas, del suelo y los cultivos.
              </p>
  
  
              <h3 className='text-muted fs-4 my-2'>Funcionamiento del aprendizaje automático</h3>
  
              <p>Entonces, ¿cómo aprenden las máquinas?</p>
              <p>La respuesta es: a partir de los datos. En el mundo actual, se crean enormes volúmenes de datos en el transcurso de la vida cotidiana. A partir de los mensajes de texto, los correos electrónicos y las publicaciones en redes sociales a las que se envían las fotografías y vídeos que se toman en los teléfonos, se generan cantidades masivas de información. Millones de sensores crean todavía más datos en hogares, automóviles, ciudades, infraestructura de transporte público y fábricas.</p>
              <p>Los científicos de datos pueden usar todos esos datos para entrenar modelos de Machine Learning que pueden realizar predicciones e inferencias en función de las relaciones que encuentran en los datos.</p>
              <p>Por ejemplo, imagine que una organización de conservación del medioambiente busca voluntarios para identificar y catalogar diferentes especies de flores silvestres mediante una aplicación telefónica. En la animación siguiente se muestra cómo se puede usar el aprendizaje automático para habilitar este escenario.</p>
  
              
              <img 
                src={IA900_1}
                alt="Imagen Inteligencia Artificial" 
                className="my-2 mx-auto d-block rounded" 
                width="80%" 
              />
  
              <ol> 
                <li>Un equipo de botánicos y científicos recopila datos sobre muestras de flores silvestres.</li> 
                <li>El equipo etiqueta las muestras con la especie correcta.</li> 
                <li>Los datos etiquetados se procesan con un algoritmo que encuentra relaciones entre las características de las muestras y las especies etiquetadas.</li> 
                <li>Los resultados del algoritmo se encapsulan en un modelo.</li> 
                <li>Cuando los voluntarios encuentran muestras nuevas, el modelo puede identificar la etiqueta de la especie correcta.</li> 
              </ol>
  
              <h3 className='text-muted fs-4 my-2'>Aprendizaje automático en Microsoft Azure</h3>
              <p>Microsoft Azure proporciona el servicio Azure Machine Learning, una plataforma basada en la nube para crear, gestionar y publicar modelos de Machine Learning. Azure Machine Learning proporciona las siguientes características y funcionalidades:</p>
  
  
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th>Característica</th>
                    <th>Funcionalidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ML automatizado</td>
                    <td>Esta característica permite a los no expertos crear con rapidez un modelo de Machine Learning efectivo a partir de datos.</td>
                  </tr>
                  <tr>
                    <td>Diseñador de Azure Machine Learning</td>
                    <td>Una interfaz gráfica que permite el desarrollo sin código de soluciones de aprendizaje automático.</td>
                  </tr>
                  <tr>
                    <td>Administración de datos y procesos</td>
                    <td>Almacenamiento de datos basado en la nube y recursos de cómputo que los científicos de datos profesionales pueden usar para ejecutar código de experimentos de datos a escala.</td>
                  </tr>
                  <tr>
                    <td>Canalizaciones</td>
                    <td>Los científicos de datos, ingenieros de software y profesionales de operaciones de TI pueden definir canalizaciones para organizar las tareas de entrenamiento, implementación y administración de modelos.</td>
                  </tr>
                </tbody>
              </table>
  
  
  
              {/* UNIDAD 3 */}
              <h2 className='mt-4'>Descripción de la detección de anomalías</h2>
              <p>Imagine que va a crear un sistema de software para supervisar las transacciones de tarjetas de crédito y detectar patrones de uso inusuales que podrían indicar fraudes. O bien, una aplicación que realiza el seguimiento de la actividad en una línea de producción automatizada e identifica los errores. O bien, un sistema de telemetría de coches de carreras que usa sensores para advertir de forma proactiva a los ingenieros sobre posibles errores mecánicos antes de que se produzcan.</p>
              <p>Estos tipos de escenarios se pueden solucionar mediante la detección de anomalías, una técnica basada en el aprendizaje automático que analiza los datos en el tiempo e identifica cambios inusuales.</p>
              <p>Ahora se verá cómo la detección de anomalías podría ayudar en el escenario de los coches de carreras.</p>
  
  
              <img 
                src={IA900_2}
                alt="Imagen Inteligencia Artificial" 
                className="my-2 mx-auto d-block rounded" 
                width="80%" 
              />
  
              <ol>
                <li>Los sensores del coche recopilan datos de telemetría, como las revoluciones del motor, la temperatura de los frenos, etc.</li>
                <li>Un modelo de detección de anomalías está entrenado para comprender las fluctuaciones esperadas en las mediciones de telemetría en el tiempo.</li>
                <li>Si se produce una medida fuera del intervalo normal esperado, el modelo notifica una anomalía.</li>
                <li>Esta anomalía se puede utilizar para avisar al ingeniero de carrera.</li>
                <li>El ingeniero de carrera llamará al piloto para que realice una parada y se solucione el problema antes de que tenga que abandonar.</li>
              </ol>
  
  
              <h3 className='text-muted fs-4 my-2'>Detección de anomalías en Microsoft Azure</h3>
  
              <p>En Microsoft Azure, el servicio Anomaly Detector proporciona una interfaz de programación de aplicaciones (API) que los desarrolladores pueden usar para crear soluciones de detección de anomalías.</p>
              <p>Para obtener más información, vea el sitio web del <a href='https://azure.microsoft.com/es-es/products/ai-services/ai-anomaly-detector/'>servicio Anomaly Detector</a>.</p>
  




              {/* UNIDAD 4 */}
              <h2 className='mt-4'>Descripción de la visión informática</h2>
  
              <p>La visión informática es un área de la inteligencia artificial que trata el procesamiento visual. Ahora se explorarán algunas de las posibilidades que ofrece.</p>
              <p>La aplicación Seeing AI es un buen ejemplo del potencial de la visión informática. Diseñada para usuarios invidentes y con visión reducida, la aplicación Seeing AI aprovecha la eficacia de la inteligencia artificial para abrir el mundo visual y describir personas, texto y objetos cercanos.</p>
              <p>Para obtener más información, visite la página web de <a href='https://www.microsoft.com/en-us/ai/seeing-ai?rtc=1'>Seeing AI</a>.</p>
  
              <h3 className='text-muted fs-4 my-2'>Modelos y funciones de Computer Vision</h3>
              <p>La mayoría de las soluciones de visión artificial se basan en modelos de Machine Learning que se pueden aplicar a la entrada visual de cámaras, videos o imágenes. En la tabla siguiente se describen aplicaciones comunes de visión informática.</p>
  
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th>Tarea</th>
                    <th>Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Clasificación de imágenes</td>
                    <td>
                      <img 
                        src={IA900_3}
                        alt="Imagen Inteligencia Artificial" 
                        className="my-2 mx-auto d-block rounded" 
                        width="50%" 
                      />
                      La clasificación de imágenes implica entrenar un modelo de Machine Learning para clasificar imágenes en función de sus contenidos. Por ejemplo, en una solución de control del tráfico, podría usar un modelo de clasificación de imágenes para clasificar las imágenes según el tipo de vehículo que contienen, como taxis, autobuses, ciclistas, etc.
                    </td>
                  </tr>
                  <tr>
                    <td>Detección de objetos</td>
                    <td>
                      <img 
                        src={IA900_4}
                        alt="Imagen Inteligencia Artificial" 
                        className="my-2 mx-auto d-block rounded" 
                        width="50%" 
                      />
                      Los modelos de Machine Learning de detección de objetos están entrenados para clasificar objetos individuales dentro de una imagen, y para identificar su ubicación con un rectángulo delimitador. Por ejemplo, una solución de control del tráfico podría usar la detección de objetos para identificar la ubicación de diferentes clases de vehículos.
                    </td>                
                  </tr>
                  <tr>
                    <td>Segmentación semántica</td>
                    <td>
                      <img 
                        src={IA900_5}
                        alt="Imagen Inteligencia Artificial" 
                        className="my-2 mx-auto d-block rounded" 
                        width="50%" 
                      />
                      La segmentación semántica es una técnica avanzada de aprendizaje automático en la que los píxeles individuales de la imagen se clasifican según el objeto al que pertenecen. Por ejemplo, una solución de control del tráfico podría superponer imágenes de tráfico con capas de "máscara" para resaltar diferentes vehículos mediante colores concretos.
  
                    </td>
                  </tr>
                  <tr>
                    <td>Análisis de imágenes</td>
                    <td>
                      <img 
                        src={IA900_6}
                        alt="Imagen Inteligencia Artificial" 
                        className="my-2 mx-auto d-block rounded" 
                        width="50%" 
                      />
                      Puede crear soluciones que combinen modelos de Machine Learning con técnicas avanzadas de análisis de imágenes para extraer información de las imágenes, incluidas "etiquetas" que podrían ayudar a catalogar la imagen o incluso subtítulos descriptivos que resuman la escena que se muestra en la imagen.
  
                    </td>
                  </tr>
                  <tr>
                    <td>Detección, análisis y reconocimiento de caras	</td>
                    <td>
                      <img 
                        src={IA900_7}
                        alt="Imagen Inteligencia Artificial" 
                        className="my-2 mx-auto d-block rounded" 
                        width="50%" 
                      />
                      La detección de caras es una forma especializada de detección de objetos que busca caras humanas en una imagen. Esto se puede combinar con técnicas de clasificación y análisis de geometría facial para reconocer a los individuos en función de sus rasgos faciales.
  
                    </td>
                  </tr>
                  <tr>
                    <td>Reconocimiento óptico de caracteres (OCR)</td>
                    <td>
                      <img 
                        src={IA900_8}
                        alt="Imagen Inteligencia Artificial" 
                        className="my-2 mx-auto d-block rounded" 
                        width="50%" 
                      />
                    El reconocimiento óptico de caracteres es una técnica que se usa para detectar y leer texto en imágenes. Puede usar OCR para leer texto en fotografías (por ejemplo, señales de tráfico o escaparates de tiendas), o bien para extraer información de documentos escaneados, como cartas, facturas o formularios.
  
                    </td>
                  </tr>
                </tbody>
              </table>
              
  
              <h3 className='text-muted fs-4 my-2'>Servicios de visión artificial en Microsoft Azure</h3>
              <p>Microsoft Azure proporciona los siguientes servicios de Azure AI para ayudarle a crear soluciones de visión artificial:</p>
  
  
              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th>Servicio</th>
                    <th>Funciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Visión de Azure AI</td>
                    <td>
                      Puede usar este servicio para analizar imágenes y vídeo, y extraer descripciones, etiquetas, objetos y texto.
                    </td>
                  </tr>
                  <tr>
                    <td>Azure AI Custom Vision</td>
                    <td>
                      Use este servicio para entrenar modelos de clasificación de imágenes y de detección de objetos personalizados mediante imágenes propias.
                    </td>
                  </tr>
                  <tr>
                    <td>Azure AI Face</td>
                    <td>
                      El servicio Azure AI Face permite crear soluciones de detección de caras y personas.
                    </td>
                  </tr>
                  <tr>
                    <td>Inteligencia de documentos de Azure AI</td>
                    <td>
                      Use este servicio para extraer información de documentos y formularios escaneados.
                    </td>
                  </tr>
                </tbody>
              </table>
  


              {/* UNIDAD 5 */}
              <h2 className='mt-4'>Descripción del procesamiento de lenguaje natural</h2>
              <p>El procesamiento de lenguaje natural (PNL) es el área de la inteligencia artificial que se ocupa de crear software capaz de entender el lenguaje escrito y hablado.</p>
              <p>PNL permite crear software que puede hacer lo siguiente:</p>
              <ol>
                <li>Analizar e interpretar texto en documentos, mensajes de correo electrónico y otros orígenes.</li>
                <li>Interpretar el lenguaje hablado y sintetizar las respuestas del habla.</li>
                <li>Traducir automáticamente frases habladas o escritas entre idiomas.</li>
                <li>Interpretar comandos y determinar las acciones apropiadas.</li>
              </ol>
              <p>Por ejemplo, Starship Commander es un juego de realidad virtual (VR) de Human Interact, que tiene lugar en un mundo de ciencia ficción. En el juego se usa el procesamiento de lenguaje natural para permitir que los jugadores controlen la narración e interactúen con los personajes y los sistemas de naves del juego.</p>
  
              <h3 className='text-muted fs-4 my-2'>Procesamiento de lenguaje natural en Microsoft Azure</h3>
              <p>En Microsoft Azure puede usar los servicios de Azure AI siguientes para crear soluciones de procesamiento de lenguaje natural:</p>
  

              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th>Servicio</th>
                    <th>Funciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lenguaje de Azure AI</td>
                    <td>Use este servicio para acceder a características que le permitan comprender y analizar texto, entrenar modelos de lenguaje que puedan comprender comandos de texto o hablados y compilar aplicaciones inteligentes.</td>
                  </tr>
                  <tr>
                    <td>Traductor de Azure AI</td>
                    <td>Use este servicio para traducir texto en más de 60 idiomas.</td>
                  </tr>
                  <tr>
                    <td>Voz de Azure AI</td>
                    <td>Use este servicio para reconocer y sintetizar mensajes de voz y traducir idiomas hablados.</td>
                  </tr>
                  <tr>
                    <td>Servicio de Bot de Azure AI</td>
                    <td>Este servicio proporciona una plataforma para IA conversacional, la capacidad de un "agente" de software para participar en una conversación. Los desarrolladores pueden usar Bot Framework para crear un bot y administrarlo con Azure Bot Service, a fin de integrar servicios de back-end como Language, y conectarse a canales de chat web, correo electrónico, Microsoft Teams, etc.</td>
                  </tr>
                </tbody>

              </table>


              {/* UNIDAD 6 */}
              <h2 className='mt-4'>Descripción de la minería del conocimiento</h2>
              <p>La minería de conocimiento es el término que se usa para describir soluciones que implican la extracción de información de grandes volúmenes de datos a menudo no estructurados para crear un almacén de conocimiento indexado.</p>
              <h3 className='text-muted fs-4 my-2'>Minería de conocimientos en Microsoft Azure</h3>
              <p>Una de estas soluciones de minería de conocimiento es Azure Cognitive Search, una solución de búsqueda privada y empresarial que incluye herramientas para crear índices. Los índices se pueden usar solo internamente o para habilitar contenido que permita búsquedas en recursos de Internet de acceso público.</p>
              <p>Azure Cognitive Search puede usar las funcionalidades integradas de inteligencia artificial de servicios de Azure AI, como el procesamiento de imágenes, la extracción de contenido y el procesamiento de lenguaje natural, para llevar a cabo la minería de conocimiento de documentos. Gracias a las funcionalidades de inteligencia artificial del producto, se pueden indexar documentos que antes no permitían búsquedas y acceder rápidamente a información de grandes cantidades de datos.</p>

              {/* UNIDAD 7 */}
              <h2 className='mt-4'>Desafíos y riesgos con la inteligencia artificial</h2>
              <p>La Inteligencia artificial es una herramienta poderosa que se puede usar para beneficiar enormemente al mundo. Pero como cualquier herramienta, se debe utilizar de manera responsable.</p>
              <p>En la tabla siguiente se muestran algunos de los posibles desafíos y riesgos a los que se enfrenta un desarrollador de aplicaciones de inteligencia artificial.</p>

              <table className='table table-striped'>
                <thead>
                  <tr>
                    <th>Desafío o riesgo</th>
                    <th>Ejemplo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>El sesgo puede afectar a los resultados.</td>
                    <td>Un modelo de aprobación de préstamos discrimina por sexo debido a un sesgo en los datos con los que se entrenó.</td>
                  </tr>
                  <tr>
                    <td>Los errores pueden causar daños.</td>
                    <td>Un vehículo autónomo experimenta un error del sistema y provoca una colisión.</td>
                  </tr>
                  <tr>
                    <td>Se podrían exponer datos.</td>
                    <td>Un bot de diagnóstico médico se entrena con datos confidenciales de pacientes, que se almacenan de forma insegura.</td>
                  </tr>
                  <tr>
                    <td>Es posible que las soluciones no funcionen para todos los usuarios.</td>
                    <td>Un asistente de automatización del hogar no proporciona ninguna salida de audio para usuarios con discapacidades visuales.</td>
                  </tr>
                  <tr>
                    <td>Los usuarios deben confiar en un sistema complejo.</td>
                    <td>Una herramienta financiera basada en inteligencia artificial realiza recomendaciones de inversión: ¿en qué se basan?</td>
                  </tr>
                  <tr>
                    <td>¿Quién es responsable de las decisiones basadas en la inteligencia artificial?</td>
                    <td>Se condena a una persona inocente de un crimen basándose en las evidencias del reconocimiento facial: ¿quién es responsable?</td>
                  </tr>
                </tbody>
              </table>





              <FinalDePost/>
  
  
  
            </article>
          </div>
          <Sidebar />
        </div>
      </main>
    );
  };
  