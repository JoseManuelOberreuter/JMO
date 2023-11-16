import machineLearningTasks from '../../Components/img/articles/machine-learning-tasks.png'
import dataScienceProcess from '../../Components/img/articles/data-science-process.png'
import notebooksSparkR from '../../Components/img/articles/notebooksSparkR.png'

export const PostMicrosoftIA900 = () => {
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
                    alt="Imagen Inteligencia Artificial" 
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
                    alt="Imagen Inteligencia Artificial" 
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
                    alt="Imagen Inteligencia Artificial" 
                    className="my-2 mx-auto d-block rounded" 
                    width="80%" 
                />

                <p>En el cuaderno, puede explorar los datos mediante la biblioteca que prefiera, o bien con cualquiera de las opciones de visualización integradas. Si es necesario, puede transformar los datos y guardar los datos procesados si los vuelve a escribir en el almacén de lago.</p>

                <h3 className='text-muted'>Preparación de los datos con Data Wrangler</h3>
                <p>Para ayudarle a explorar y transformar los datos más rápidamente, Microsoft Fabric ofrece Data Wrangler, fácil de usar.</p>
                <p>Después de iniciar Data Wrangler, obtendrá una introducción general de los datos con los que trabaja. Puede ver las estadísticas de resumen de los datos para buscar cualquier problema, como valores que faltan.</p>
                <p>Para limpiar los datos, puede elegir cualquiera de las operaciones integradas de limpieza de datos. Al seleccionar una operación, se genera automáticamente una vista previa del resultado y el código asociado. Cuando haya seleccionado todas las operaciones necesarias, puede exportar las transformaciones al código y ejecutarlo en los datos.</p>

                {/* Unidad 4 */}









                <FinalDePost/>
                 
  
            </article>
          </div>
          <Sidebar />
        </div>
      </main>
    );
};