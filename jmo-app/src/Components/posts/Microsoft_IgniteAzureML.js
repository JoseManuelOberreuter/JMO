import { Sidebar } from '../SideBar';
import {FinalDePost} from '../Posts'
import {CopyCode} from '../Posts'

import machineLearningTasks from '../../Components/img/articles/machine-learning-tasks.png'
import dataScienceProcess from '../../Components/img/articles/data-science-process.png'
import notebooksSparkR from '../../Components/img/articles/notebooksSparkR.png'
import experimentML from '../../Components/img/articles/experimentML.png'
import modelsML from '../../Components/img/articles/modelsML.png'
import newWorkspaceFabric from '../../Components/img/articles/newWorkspaceFabric.png'

export const MicrosoftIgniteAzureML = () => {
    return (
      <main>
        <div className="row g-5">
          <div className="col-md-8 ">
            <article className="articulo text-justify">
  
              

                <h1>Microsoft Ignite: Azure Machine Learning</h1>

                <p>Las operaciones de aprendizaje automático (MLOps) aplican principios de DevOps a los proyectos de aprendizaje automático. Obtenga información sobre qué principios de DevOps ayudan a escalar un proyecto de aprendizaje automático de la experimentación a la producción. Obtenga información sobre cómo conectarse a datos desde el área de trabajo de Azure Machine Learning. Se le presentarán los almacenes de datos y los recursos de datos.</p>


                {/* Unidad 1 */}
                <h2>Introducción a la ciencia de datos en Microsoft Fabric</h2>
                <p>En Microsoft Fabric, los científicos de datos pueden administrar datos, cuadernos, experimentos y modelos, a la vez que pueden acceder fácilmente a datos de toda la organización y colaborar con sus compañeros profesionales de datos.</p>
                <p>Objetivos de aprendizaje.En este módulo aprenderá a:</p>
                <ol>
                    <li>Descripción del proceso de ciencia de datos</li>
                    <li>Entrenamiento de modelos con cuadernos en Microsoft Fabric</li>
                    <li>Seguimiento de las métricas de entrenamiento del modelo con MLflow y experimentos</li>
                </ol>
                <p>Es recomendado debe estar familiarizado con los principios básicos del aprendizaje automático.</p>


                <h2>Introducción</h2>
                <p>Imagine que está trabajando para un supermercado y quiere saber cuánto pan necesita tener en stock cada semana para satisfacer las demandas de los clientes y evitar a la vez el desperdicio de alimentos.</p>
                <p>O tal vez quiera analizar a sus clientes para comprender cómo dirigirse mejor a ellos con ofertas personalizadas.</p>
                <p>Siempre que quiera tomar decisiones informadas dentro de una organización, puede usar la ciencia de datos para obtener información de los datos que tiene. La ciencia de datos es una combinación de matemáticas, estadísticas e ingeniería informática.</p>
                <p>Al realizar ciencia de datos, puede analizar los datos e identificar patrones complicados que pueden proporcionarle información significativa para su organización. Puede usar la ciencia de datos para crear modelos de inteligencia artificial (IA) que abarquen los patrones complicados que encuentre en los datos. Un enfoque común consiste en usar la ciencia de datos para entrenar modelos de aprendizaje automático mediante bibliotecas como scikit-learn en Python para lograr inteligencia artificial.</p>
                <p>Adoptar un proyecto de ciencia de datos de principio a fin puede ser todo un desafío. Microsoft Fabric ofrece un área de trabajo para administrar un proyecto de ciencia de datos de un extremo a otro.</p>
                <p>En este post, obtendrá información sobre un proyecto de ciencia de datos típico. Además, explorará qué características de Microsoft Fabric puede usar para cada parte del proceso de ciencia de datos.</p>
               
                {/* Unidad 2 */}
                <h2>Descripción del proceso de ciencia de datos</h2>
                <p>Una manera común de extraer información de los datos es visualizarlos. Siempre que tenga conjuntos de datos complejos, es posible que quiera profundizar y tratar de encontrar patrones intrincados en los datos.</p>
                <p>Como científico de datos, puede entrenar modelos de aprendizaje automático para buscar patrones en los datos. Puede usar esos patrones para generar nueva información o predicciones. Por ejemplo, puede predecir el número esperado de productos que espera vender en la próxima semana.</p>
                <p>Aunque el entrenamiento del modelo es importante, no es la única tarea de un proyecto de ciencia de datos. Antes de explorar un proceso típico de ciencia de datos, vamos a explorar los modelos de aprendizaje automático comunes que puede entrenar.</p>

                <h2>Exploración de modelos comunes de aprendizaje automático</h2>
                <p>El objetivo del aprendizaje automático es entrenar modelos que pueden identificar patrones en grandes cantidades de datos. Luego, puede usar los patrones para realizar predicciones que le proporcionen nuevas conclusiones sobre qué acciones puede realizar.</p>
                <p>Las posibilidades con el aprendizaje automático pueden parecer infinitas, así que comencemos por comprender los tres tipos comunes de modelos de aprendizaje automático:</p>
                <img 
                  src={machineLearningTasks}
                  alt="Machine Learning Tasks" 
                  className="my-2 mx-auto d-block rounded" 
                  width="80%" 
                />
                <ol>
                    <li>Clasificación: predicen un valor de categoría, por ejemplo, el abandono de un cliente.</li>
                    <li>Regresión: predicen un valor numérico como el precio de un producto.</li>
                    <li>Agrupación en clústeres: agrupe puntos de datos similares en clústeres o grupos.</li>
                    <li>Previsión: predicen valores numéricos futuros basados en datos de serie temporal, como las ventas esperadas el próximo mes.</li>
                </ol>
                <p>Para decidir qué tipo de modelo de aprendizaje automático debe entrenar, primero debe comprender el problema empresarial y los datos disponibles.</p>
                
                <h2>Descripción del proceso de ciencia de datos</h2>
                <p>Para entrenar un modelo de aprendizaje automático, el proceso normalmente implica los pasos siguientes:</p>
                <img 
                  src={dataScienceProcess}
                  alt="Data Sciens Process" 
                  className="my-2 mx-auto d-block rounded" 
                  width="80%" 
                />
                <ol>
                    <li>Definir el problema: junto con los usuarios y analistas empresariales, decida qué debe predecir el modelo y cuándo lo hace correctamente.</li>
                    <li>Obtener los datos: busque orígenes de datos y obtenga acceso almacenando los datos en un almacén de lago.</li>
                    <li>Preparar los datos: explore los datos leyéndolos de un almacén de lago en un cuaderno. Limpie y transforme los datos en función de los requisitos del modelo.</li>
                    <li>Entrenar el modelo: elija un algoritmo y valores de hiperparámetros según el método de prueba y error mediante el seguimiento de los experimentos con MLflow.</li>
                    <li>Generación de información: use la puntuación por lotes del modelo para generar las predicciones solicitadas.</li>
                </ol>
                <p>Como científico de datos, la mayor parte del tiempo se dedica a preparar los datos y a entrenar el modelo. La forma de preparar los datos y el algoritmo que elija para entrenar un modelo puede influir en el éxito de este.</p>
                <p>Puede preparar y entrenar un modelo mediante bibliotecas de código abierto disponibles para el lenguaje que prefiera. Por ejemplo, si trabaja con Python, puede preparar los datos con Pandas y Numpy y entrenar el modelo con bibliotecas como <a href='https://scikit-learn.org/stable/'>Scikit-Learn</a>, <a href='https://pytorch.org/'>PyTorch</a> o <a href='https://microsoft.github.io/SynapseML/'>SynapseML</a>.</p>
                <p>Cuando experimente, le conviene tener una visión general de todos los modelos que haya entrenado. Querrá comprender cómo influyen sus elecciones en el éxito del modelo. Mediante el seguimiento de los experimentos con MLflow en Microsoft Fabric, podrá administrar e implementar fácilmente los modelos que ha entrenado.</p>
                
                {/* Unidad 3 */}
                <h2>Exploración y procesamiento de datos con Microsoft Fabric</h2>
                <p>Los datos son la piedra angular de la ciencia de datos, especialmente cuando el objetivo es entrenar un modelo de Machine Learning para lograr la inteligencia artificial. Normalmente, los modelos presentan un rendimiento mejorado a medida que aumenta el tamaño del conjunto de datos de entrenamiento. Además de la cantidad de datos, su calidad es igualmente crucial.</p>
                <p>Para garantizar la calidad y la cantidad de los datos, merece la pena usar los motores sólidos de procesamiento y ingesta de datos de Microsoft Fabric. Tiene la flexibilidad de optar por un enfoque de poco código u orientado al código al establecer las canalizaciones de ingesta, exploración y transformación de datos esenciales.</p>
                
                <h2>Ingesta de los datos en Microsoft Fabric</h2>
                <p>Para trabajar con datos en Microsoft Fabric, primero debe realizar su ingesta. Puede realizar la ingesta de datos desde varios orígenes, tanto locales como en la nube. Por ejemplo, puede ingerir datos desde un archivo CSV almacenado en el equipo local o en una instancia de Azure Data Lake Storage (Gen2).</p>
                <p>Obtenga más información sobre cómo ingerir y organizar datos de varios orígenes con <a href='https://learn.microsoft.com/es-es/training/paths/ingest-data-with-microsoft-fabric/'>Microsoft Fabric</a>.</p>
                <p>Después de conectarse a un origen de datos, puede guardar los datos en un lago de datos de Microsoft Fabric. Puede usar lagos de datos como ubicación central para almacenar cualquier archivo estructurado, semiestructurado y no estructurado. Después, puede conectarse fácilmente al lago de datos siempre que quiera acceder a los datos para su exploración o transformación.</p>

                <h2>Exploración y transformación de los datos</h2>
                <p>Como científico de datos, es posible que esté más familiarizado con la escritura y ejecución de código en cuadernos. Microsoft Fabric ofrece una experiencia de cuaderno conocida, con tecnología de proceso de Spark.</p>
                <p>Apache Spark es un marco de procesamiento paralelo de código abierto para el procesamiento y el análisis de datos a gran escala.</p>
                <p>Los cuadernos se adjuntan automáticamente al proceso de Spark. Al ejecutar una celda en un cuaderno por primera vez, se inicia una nueva sesión de Spark. La sesión persiste al ejecutar celdas posteriores. La sesión de Spark se detendrá automáticamente después de algún tiempo de inactividad para ahorrar costos. También puede detener la sesión manualmente.</p>
                <p>Al trabajar en un cuaderno, puede elegir el lenguaje que quiere usar. En el caso de las cargas de trabajo de ciencia de datos, es probable que trabaje con PySpark (Python) o SparkR (R).</p>
                <img 
                  src={notebooksSparkR}
                  alt="Note Book SparkR" 
                  className="my-2 mx-auto d-block rounded" 
                  width="80%" 
                />

                <p>En el cuaderno, puede explorar los datos mediante la biblioteca que prefiera, o bien con cualquiera de las opciones de visualización integradas. Si es necesario, puede transformar los datos y guardar los datos procesados si los vuelve a escribir en el almacén de lago.</p>

                <h3 className='text-muted'>Preparación de los datos con Data Wrangler</h3>
                <p>Para ayudarle a explorar y transformar los datos más rápidamente, Microsoft Fabric ofrece Data Wrangler, fácil de usar.</p>
                <p>Después de iniciar Data Wrangler, obtendrá una introducción general de los datos con los que trabaja. Puede ver las estadísticas de resumen de los datos para buscar cualquier problema, como valores que faltan.</p>
                <p>Para limpiar los datos, puede elegir cualquiera de las operaciones integradas de limpieza de datos. Al seleccionar una operación, se genera automáticamente una vista previa del resultado y el código asociado. Cuando haya seleccionado todas las operaciones necesarias, puede exportar las transformaciones al código y ejecutarlo en los datos.</p>

                {/* Unidad 4 */}
                <h2>Entrenamiento y puntuación de modelos con Microsoft Fabric</h2>
                <p>Cuando haya ingerido, explorado y preprocesado los datos, puede usarlos para entrenar un modelo. El entrenamiento de un modelo es un proceso iterativo y le interesa poder realizar el seguimiento del trabajo.</p>
                <p>Microsoft Fabric se integra con MLflow para realizar el seguimiento y registrar fácilmente el trabajo, lo que le permite revisarlo en cualquier momento a fin de decidir cuál es el mejor enfoque para entrenar el modelo final. Al realizar el seguimiento del trabajo, los resultados se pueden reproducir fácilmente.</p>
                <p>El seguimiento de los trabajos que quiera se puede realizar en forma de experimentos.</p>

                <h2>Descripción de los experimentos</h2>
                <p>Siempre que entrene un modelo en un cuaderno del que quiera realizar el seguimiento, puede crear un experimento en Microsoft Fabric.</p>
                <p>Un experimento puede constar de varias ejecuciones. Cada ejecución representa una tarea que ha ejecutado en un cuaderno, como entrenar un modelo de Machine Learning.</p>
                <p>Por ejemplo, para entrenar un modelo de Machine Learning para la previsión de ventas, puede probar diferentes conjuntos de datos de entrenamiento con el mismo algoritmo. Cada vez que entrena un modelo con un conjunto de datos diferente, se crea una nueva ejecución del experimento. A continuación, puede comparar las ejecuciones del experimento para determinar el modelo de mejor rendimiento.</p>

                <h3 className="text-muted">Inicio de las métricas de seguimiento</h3>
                <p>Para comparar ejecuciones de experimentos, puede supervisar los parámetros, las métricas y los artefactos de cada ejecución.</p>
                <p>Todos los parámetros, métricas y artefactos que supervise en una ejecución de experimento se muestran en la información general de los experimentos. Puede ver las ejecuciones de experimentos individualmente en la pestaña Detalles de ejecución o comparar entre ejecuciones con la lista de ejecuciones:</p>
                <img 
                  src={experimentML}
                  alt="Experimento Machine Learning" 
                  className="my-2 mx-auto d-block rounded" 
                  width="80%" 
                />

                <p>Al realizar el seguimiento del trabajo con MLflow, puede comparar las iteraciones de entrenamiento del modelo y decidir qué configuración ha generado el mejor modelo para el caso de uso.</p>

                <h2>Descripción de modelos</h2>
                <p>Después de entrenar un modelo, querrá usarlo para puntuar. Con la puntuación, se usa el modelo en nuevos datos para generar predicciones o conclusiones. Al entrenar y realizar el seguimiento de un modelo con MLflow, los artefactos se almacenan dentro de la ejecución del experimento para representar el modelo y sus metadatos. Puede guardar estos artefactos en Microsoft Fabric como un modelo.</p>
                <p>Al guardar los artefactos del modelo como un modelo registrado en Microsoft Fabric, puede administrar fácilmente los modelos. Cada vez que entrena un modelo nuevo y lo guarda con el mismo nombre, se agrega una versión nueva al modelo.</p>
                <img 
                  src={modelsML}
                  alt="Model Machine Learning" 
                  className="my-2 mx-auto d-block rounded" 
                  width="80%" 
                />

                <h3 className="text-muted">Uso de un modelo para generar conclusiones</h3>
                <p>Para usar un modelo a fin de generar predicciones, puede usar la función PREDICT en Microsoft Fabric. La función PREDICT se ha creado para integrarse fácilmente con los modelos de MLflow y permite usar el modelo para generar predicciones por lotes.</p>
                <p>Por ejemplo, cada semana recibe datos de ventas de varias tiendas. En función de los datos históricos, ha entrenado un modelo que puede predecir las ventas de la próxima semana, en función de las ventas de las últimas semanas. Ha realizado el seguimiento del modelo con MLflow y lo ha guardado en Microsoft Fabric. Cada vez que recibe nuevos datos de ventas semanales, usa la función PREDICT para permitir que el modelo genere la previsión para la próxima semana. Los datos de ventas previstos se almacenan como una tabla en un almacén de lago, que se visualiza en un informe de Power BI para que los usuarios empresariales los consuman.</p>

                {/* Unidad 5 */}
                <h2>Ejercicio: Exploración de la ciencia de datos en Microsoft Fabric</h2>
                <p>En este laboratorio, ingerirá datos, explorará los datos en un cuaderno, procesará los datos con Data Wrangler y entrenará dos tipos de modelos. Al realizar todos estos pasos, podrá explorar las características de ciencia de datos de Microsoft Fabric.</p>
                <p>Al completar este laboratorio, obtendrá experiencia práctica en el aprendizaje automático y el seguimiento de modelos, y aprenderá a trabajar con cuadernos, Data Wrangler, experimentos y modelos en Microsoft Fabric.</p>
                <p>Nota: Necesita una cuenta profesional o educativa de Microsoft para completar este ejercicio</p>

                <h3 className="text-muted">Crear un espacio de trabajo</h3>
                <p>Antes de trabajar con datos en Fabric, cree un espacio de trabajo con la versión de prueba de Fabric habilitada.</p>
                <ol>
                  <li>Vaya a la página principal de Microsoft Fabric en https://app.fabric.microsoft.com en un explorador.</li>
                  <li>Seleccione Ciencia de datos de Synapse.</li>
                  <li>En la barra de menú de la izquierda, seleccione Espacios de trabajo (el icono es similar a 🗇 ).</li>
                  <li>Cree un nuevo espacio de trabajo con un nombre de su elección, seleccionando un modo de licencia que incluya la capacidad de Fabric (Trial, Premium o Fabric).</li>
                  <li>Cuando se abra el nuevo espacio de trabajo, debería estar vacío.</li>
                </ol>
                <img 
                  src={newWorkspaceFabric}
                  alt="New Work Space Microsoft Fabric" 
                  className="my-2 mx-auto d-block rounded" 
                  width="80%" 
                />

                <h3 className="text-muted">Crear un bloc de notas</h3>
                <p>Para ejecutar código, puede crear un cuaderno. Los blocs de notas proporcionan un entorno interactivo en el que se puede escribir y ejecutar código (en varios lenguajes).</p>
                <ol>
                  <li>En la página principal de Ciencia de datos de Synapse, cree un nuevo cuaderno. Después de unos segundos, se abrirá un nuevo cuaderno que contiene una sola celda. Los blocs de notas se componen de una o varias celdas que pueden contener código o markdown (texto con formato).</li>
                  <li>Seleccione la primera celda (que actualmente es una celda de código) y, a continuación, en la barra de herramientas dinámica en la parte superior derecha, use el botón M↓ para convertir la celda en una celda de rebajas. Cuando la celda cambia a una celda Markdown, se representa el texto que contiene.</li>
                  <li>Utilice el botón (Editar) para cambiar la celda al modo de edición y, a continuación, elimine el contenido e introduzca el 🖉 siguiente texto:</li>
                </ol>
                {/* BLOQUE DE CODIGO */}
                <div className="code-box">
                  <CopyCode code={  `
# Data science in Microsoft Fabric
                  `} />
                </div>

                <h3 className="text-muted">Obtener los datos</h3>
                <p>Ahora está listo para ejecutar código para obtener datos y entrenar un modelo. Trabajará con el conjunto de datos de diabetes de Azure Open Datasets. Después de cargar los datos, los convertirá en un marco de datos de Pandas: una estructura común para trabajar con datos en filas y columnas.</p>
                <ol>
                  <li>En el bloc de notas, use el icono de código + situado debajo de la salida de celda más reciente para agregar una nueva celda de código al bloc de notas e introduzca el siguiente código en ella:</li>
                  <div className="code-box">
                    <CopyCode code={  `
  # Azure storage access info for open dataset diabetes
  blob_account_name = "azureopendatastorage"
  blob_container_name = "mlsamples"
  blob_relative_path = "diabetes"
  blob_sas_token = r"" # Blank since container is Anonymous access
      
  # Set Spark config to access  blob storage
  wasbs_path = f"wasbs://%s@%s.blob.core.windows.net/%s" % (blob_container_name, blob_account_name, blob_relative_path)
  spark.conf.set("fs.azure.sas.%s.%s.blob.core.windows.net" % (blob_container_name, blob_account_name), blob_sas_token)
  print("Remote blob path: " + wasbs_path)
      
  # Spark read parquet, note that it won't load any data yet by now
  df = spark.read.parquet(wasbs_path)
                    `} />
                  </div>
                  <li>Utilice el botón ▷ Ejecutar celda a la izquierda de la celda para ejecutarla. Alternativamente, puede presionar + en su teclado para ejecutar una celda. [SHIFT] [ENTER]</li>
                  <p>Nota: Dado que es la primera vez que ejecuta código de Spark en esta sesión, se debe iniciar el grupo de Spark. Esto significa que la primera ejecución de la sesión puede tardar aproximadamente un minuto en completarse. Las ejecuciones posteriores serán más rápidas.</p>
                  <li>Use el icono + Código debajo de la salida de la celda para agregar una nueva celda de código al bloc de notas e ingrese el siguiente código en ella:</li>
                  <div className="code-box">
                    <CopyCode code={  `
display(df)display(df)
                    `} />
                  </div>
                  <li>Cuando se haya completado el comando de celda,El resultado muestra las filas y columnas del conjunto de datos de diabetes, revise la salida debajo de la celda, que debería tener un aspecto similar al siguiente:</li>
                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th>EDAD</th>
                        <th>SEXO</th>
                        <th>IMC</th>
                        <th>BP</th>
                        <th>S1</th>
                        <th>S2</th>
                        <th>S3</th>
                        <th>T4</th>
                        <th>S5</th>
                        <th>T6</th>
                        <th>Y</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>59</td>
                        <td>2</td>
                        <td>32.1</td>
                        <td>101.0</td>
                        <td>157</td>
                        <td>93.2</td>
                        <td>38.0</td>
                        <td>4.0</td>
                        <td>4.8598</td>
                        <td>87</td>
                        <td>151</td>
                      </tr>
                      <tr>
                        <td>48</td>
                        <td>1</td>
                        <td>21.6</td>
                        <td>87.0</td>
                        <td>183</td>
                        <td>103.2</td>
                        <td>70.0</td>
                        <td>3.0</td>
                        <td>3.8918</td>
                        <td>69</td>
                        <td>75</td>
                      </tr>
                      <tr>
                        <td>72</td>
                        <td>2</td>
                        <td>30.5</td>
                        <td>93.0</td>
                        <td>156</td>
                        <td>93.6</td>
                        <td>41.0</td>
                        <td>4.0</td>
                        <td>4.6728</td>
                        <td>85</td>
                        <td>141</td>
                      </tr>
                      <tr>
                        <td>24</td>
                        <td>1</td>
                        <td>25.3</td>
                        <td>84.0</td>
                        <td>198</td>
                        <td>131.4</td>
                        <td>40.0</td>
                        <td>5.0</td>
                        <td>4.8903</td>
                        <td>89</td>
                        <td>206</td>
                      </tr>
                      <tr>
                        <td>50</td>
                        <td>1</td>
                        <td>23.0</td>
                        <td>101.0</td>
                        <td>192</td>
                        <td>125.4</td>
                        <td>52.0</td>
                        <td>4.0</td>
                        <td>4.2905</td>
                        <td>80</td>
                        <td>135</td>
                      </tr>
                      <tr>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                        <td>...</td>
                      </tr>
                    </tbody>
                  </table>
                  <li>Hay dos pestañas en la parte superior de la tabla representada: Tabla y Gráfico. Seleccione Gráfico.</li>
                  <li>Seleccione las opciones de vista en la parte superior derecha del gráfico para cambiar la visualización.</li>
                  <li>Cambie el gráfico a la siguiente configuración:</li>
                    <ul>
                      <li>Tipo de gráfico: Box plot</li>
                      <li>Clave: Dejar vacío</li>
                      <li>Valores: Y</li>
                    </ul>
                  <li>Seleccione Aplicar para representar la nueva visualización y explorar el resultado.</li>
                </ol>

                <h3 className="text-muted">Preparar los datos</h3>
                <p>Ahora que ha ingerido y explorado los datos, puede transformarlos. Puede ejecutar código en un bloc de notas o usar Data Wrangler para generar código automáticamente.</p>
                <ol>
                  <li>Los datos se cargan como una trama de datos de Spark. Para iniciar Data Wrangler, debe convertir los datos en un marco de datos de Pandas. Ejecute el siguiente código en el cuaderno:</li>
                  <div className="code-box">
                    <CopyCode code={  `
df = df.toPandas()
df.head()                    `} />
                  </div>
                  <li>Seleccione Datos en la cinta de opciones del bloc de notas y, a continuación, seleccione la lista desplegable Iniciar Data Wrangler.</li>
                  <li>Seleccione el conjunto de datos. Cuando se inicia Data Wrangler, genera una descripción general descriptiva del marco de datos en el panel Resumen.df</li>
                  <p>Actualmente, la columna de etiqueta es , que es una variable continua. Para entrenar un modelo de aprendizaje automático que prediga Y, debe entrenar un modelo de regresión. Los valores (previstos) de Y pueden ser difíciles de interpretar. En su lugar, podríamos explorar el entrenamiento de un modelo de clasificación que prediga si alguien tiene un riesgo bajo o alto de desarrollar diabetes. Para poder entrenar un modelo de clasificación, debe crear una columna de etiqueta binaria basada en los valores de .YY</p>
                  <li>Seleccione la columna en Data Wrangler. Tenga en cuenta que hay una disminución en la frecuencia de la ubicación. El percentil 75 se alinea aproximadamente con la transición de las dos regiones en el histograma. Usemos este valor como umbral para el riesgo bajo y alto.<code>Y 220-240 211.5</code></li>
                  <li>Vaya al panel Operaciones, expanda Fórmulas y, a continuación, seleccione Crear columna a partir de fórmula.</li>
                  <li>Cree una nueva columna con la siguiente configuración:</li>
                  <ul>
                    <li>Nombre de la columna: <code>Risk</code></li>
                    <li>Fórmula de columna: <code>(df['Y'] &gt; 211.5).astype(int)</code></li>
                  </ul>
                  <li>Revise la nueva columna que se agrega a la vista previa. Compruebe que el recuento de filas con valor debe ser aproximadamente el 25 % de todas las filas (ya que es el percentil 75 de ).<code>Risk 1 Y</code></li>
                  <li>Seleccione Aplicar.</li>
                  <li>Seleccione Agregar código al bloc de notas.</li>
                  <li>Ejecute la celda con el código generado por Data Wrangler.</li>
                  <li>Ejecute el siguiente código en una nueva celda para comprobar que la columna tiene la forma esperada: <code>Risk</code> </li>
                </ol>
                
                <h3 className="text-muted">Entrenamiento de modelos de aprendizaje automático</h3>

                {/* CONTINUAR CON MICROSOFT IGNITE CHALLENGE */}





























                <FinalDePost/>
                 
  
            </article>
          </div>
          <Sidebar />
        </div>
      </main>
    );
};