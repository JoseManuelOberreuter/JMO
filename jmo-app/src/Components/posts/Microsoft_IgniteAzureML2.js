import { Sidebar } from '../SideBar';
import {FinalDePost} from '../Posts'
import {CopyCode} from '../Posts'


import machineLearnLifecycle from '../../Components/img/articles/machine-learn-lifecycle.png'
import machineLearnOperationsOverview from '../../Components/img/articles/machine-learn-operations-overview.png'


export const MicrosoftIgniteAzureML2 = () => {
    return (
      <main>
        <div className="row g-5">
          <div className="col-md-8 ">
            <article className="articulo text-justify">
  
              <h1>Introducción a los principios de DevOps para el aprendizaje automático</h1>
              <p className='text-muted'>Familiarícese con los principios y las herramientas de DevOps pertinentes para las cargas de trabajo de MLOps.</p>
              <p>Objetivos de aprendizaje</p>

              <ul>
                <li>Por qué DevOps es útil para proyectos de aprendizaje automático.</li>
                <li>Qué principios de DevOps se pueden aplicar a los proyectos de aprendizaje automático.</li>
                <li>Cómo conectar Azure DevOps y GitHub con Azure Machine Learning.</li>
              </ul>

              {/* UNIDAD 1 */}
              <h2>Introducción</h2>
              <p>Los proyectos de aprendizaje automático han aumentado en todas las organizaciones debido a una mayor disponibilidad de datos, la democratización de la potencia de proceso y el avance en los algoritmos usados para entrenar modelos.</p>
              <p>Sin embargo, uno de los principales obstáculos al adoptar y escalar proyectos de aprendizaje automático es la falta de una estrategia clara y de los silos organizativos.</p>

              <h3 className='text-muted'>MLOps</h3>
              <p>Las operaciones de aprendizaje automático o MLOps tienen como objetivo escalar de forma más eficaz una prueba de concepto o un proyecto piloto a una carga de trabajo de aprendizaje automático en producción.</p>
              <p>El propósito de MLOps es hacer que el ciclo de vida de aprendizaje automático sea escalable:</p>
              <ol>
                <li>Entrenamiento de un modelo</li>
                <li>Empaquetado del modelo</li>
                <li>Validación del modelo</li>
                <li>Implementación de un modelo</li>
                <li>Supervisión del modelo</li>
                <li>Reentrenamiento del modelo</li>
              </ol>
              <img 
                src={machineLearnLifecycle}
                alt="Machine Learning Tasks" 
                className="my-2 mx-auto d-block rounded" 
                width="80%" 
              /> 
              <p>MLOps requiere varios roles y varias herramientas. Los científicos de datos suelen centrarse en todas las tareas relacionadas con el entrenamiento del modelo, lo que también se conoce como bucle interno.</p>
              <p>Para empaquetar e implementar el modelo, es posible que los científicos de datos necesiten la ayuda de los ingenieros de aprendizaje automático que aplican prácticas de DevOps para escalar los modelos de aprendizaje automático.</p>
              <p>Adoptar un modelo entrenado e implementarlo en producción suele denominarse bucle externo. En el bucle externo, el modelo se empaqueta, valida, implementa y supervisa. Cuando decida que el modelo debe volver a entrenarse, vuelva al bucle interno para realizar cambios en el modelo.</p>

              <h3 className='text-muted'>DevOps</h3>
              <p>El uso de los principios de DevOps, como el planeamiento ágil puede ayudar a su equipo a organizar el trabajo y a generar resultados más rápidamente. Con el control de código fuente, puede facilitar la colaboración en proyectos. Además, con la automatización, puede acelerar el ciclo de vida de aprendizaje automático.</p>
              <p>En este módulo se presentan estos principios de DevOps y se resaltan dos herramientas de uso habitual: Azure DevOps y GitHub.</p>

              <h2>DevOps para aprendizaje automático</h2>
              <h3 className='text-muted'>DevOps y MLOps</h3>
              <p>DevOps se describe como la unión de personas, procesos y productos para permitir la entrega continua de valor a los usuarios finales, según Donovan Brown en<a href='https://www.donovanbrown.com/post/what-is-devops'>¿Qué es DevOps?</a></p>
              <p>Para comprender cómo se usa al trabajar con modelos de aprendizaje automático, vamos a indagar un poco más en algunos principios esenciales de DevOps.</p>
              <p>DevOps es una combinación de herramientas y prácticas que guían a los desarrolladores en la creación de aplicaciones sólidas y reproducibles. El objetivo de usar los principios de DevOps es aportar valor rápidamente al usuario final.</p>
              <p>Si desea aportar valor con más facilidad mediante la integración de modelos de aprendizaje automático en canalizaciones de transformación de datos o aplicaciones en tiempo real, se beneficiará de la implementación de los principios de DevOps. La información sobre DevOps le ayudará a organizar y automatizar el trabajo.</p>
              <p>La creación, implementación y supervisión de modelos sólidos y reproducibles para aportar valor al usuario final es el objetivo de las operaciones de aprendizaje automático (<b>MLOps</b>)</p>
              <img 
                src={machineLearnOperationsOverview}
                alt="Machine Learning Tasks" 
                className="my-2 mx-auto d-block rounded" 
                width="80%" 
              /> 
              <p>Hay tres procesos que queremos combinar cada vez que hablamos sobre las operaciones de aprendizaje automático (MLOps):</p>
              <ul>
                <li>
                  <p>ML incluye todas las cargas de trabajo de aprendizaje automático de las que un científico de datos es responsable. Un científico de datos hará lo siguiente:</p>
                  <ul>
                    <li>Análisis exploratorio de datos (EDA)</li>
                    <li>Ingeniería de características</li>
                    <li>Entrenamiento y ajuste del modelo</li>
                  </ul>
                </li>
                <li>
                  <p>DEV hace referencia al desarrollo de software, que incluye lo siguiente:</p>
                  <p>1. Planear: defina los requisitos del modelo y las métricas de rendimiento.</p>
                  <p>2. Crear: cree los scripts de entrenamiento y puntuación del modelo.</p>
                  <p>3. Comprobar: compruebe la calidad del código y del modelo.</p>
                  <p>4. Empaquetar: prepárese para la implementación mediante el almacenamiento provisional de la solución.</p>
                </li>
                <li>
                  <p>OPS hace referencia a las operaciones e incluye lo siguiente:</p>
                  <p>5. Lanzar: implemente el modelo en producción.</p>
                  <p>6. Configurar: estandarizar las configuraciones de la infraestructura con la infraestructura como código (IaC).</p>
                  <p>3. Supervisar: realice un seguimiento de las métricas y asegúrese de que el modelo y la infraestructura funcionan según lo previsto.</p>

                </li>
              </ul>
              <p>Vamos a repasar algunos principios de DevOps que son esenciales para MLOps.</p>
              
              <h3 className='text-muted'>Principios de DevOps</h3>
              <p>Uno de los principios básicos de DevOps es la automatización. Mediante la automatización de tareas, aspiramos a implementar nuevos modelos en producción con mayor rapidez. Mediante la automatización, también creará modelos reproducibles que son confiables y coherentes en todos los entornos.</p>
              <p>Especialmente cuando desea mejorar el modelo con regularidad a lo largo del tiempo, la automatización le permite realizar todas las actividades necesarias rápidamente para asegurarse de que el modelo en producción siempre es el modelo con el mejor rendimiento.</p>
              <p>Un concepto clave para lograr la automatización es <b>CI/CD</b>, que significa integración continua y entrega continua.</p>
              <h3 className='text-muted'>Integración continua</h3>
              <p>La integración continua abarca las actividades de creación y comprobación. El objetivo es crear el código y comprobar la calidad del código y el modelo mediante pruebas automatizadas.</p>
              <p>Con MLOps, la integración continua puede incluir lo siguiente:</p>
              <ol>
                <li>Refactorización de código exploratorio en cuadernos de Jupyter Notebook en scripts de Python o R.</li>
                <li>Linting para comprobar si hay errores de programación o estilísticos en los scripts de Python o R. Por ejemplo, compruebe si una línea del script contiene menos de 80 caracteres.</li>
                <li>Pruebas unitarias para comprobar el rendimiento del contenido de los scripts. Por ejemplo, compruebe si el modelo genera predicciones precisas en un conjunto de datos de prueba.</li>
              </ol>
              <p><b>Sugerencia:</b> Aprenda a <a href='https://learn.microsoft.com/es-es/azure/machine-learning/how-to-convert-ml-experiment-to-production?view=azureml-api-1'>convertir experimentos de aprendizaje automático en código de Python de producción.</a></p>
              <p>Para realizar pruebas unitarias y linting, puede usar herramientas de automatización como Azure Pipelines en <b>Azure DevOps</b> o <b>Acciones de GitHub</b>.</p>

              <h3 className='text-muter'>Entrega continua</h3>
              <p>Después de comprobar la calidad del código de los scripts de Python o R usados para entrenar el modelo, querrá llevar el modelo a producción. La entrega continua determina los pasos que debe seguir para implementar un modelo en producción, preferiblemente automatizando tanto como sea posible.</p>
              <p>Para implementar un modelo en producción, primero deberá empaquetarlo e implementarlo en un entorno de preproducción. Al almacenar provisionalmente el modelo en un entorno de preproducción, puede comprobar si todo funciona según lo previsto.</p>
              <p>Una vez que la implementación del modelo en la fase de almacenamiento provisional se realiza correctamente y sin errores, puede aprobar el modelo que se va a implementar en el entorno de producción.</p>
              <p>Para colaborar en los scripts de Python o R para entrenar el modelo y cualquier código necesario para implementar el modelo en cada entorno, usará el control de código fuente.</p>
              
              <h3 className='text-muter'>Control de código fuente</h3>
              <p>El control de código fuente (o control de versiones) se logra normalmente trabajando con un repositorio basado en Git. Un repositorio hace referencia a la ubicación donde se pueden almacenar todos los archivos pertinentes de un proyecto de software.</p>
              <p>Con los proyectos de aprendizaje automático, es probable que tenga un repositorio para cada proyecto existente. El repositorio incluirá, entre otros elementos, cuadernos de Jupyter Notebook, scripts de entrenamiento, scripts de puntuación y definiciones de canalización.</p>
              <p className='bg-secondary white p-2 text-white rounded'><b>Nota:</b> Preferiblemente, no almacene los datos de entrenamiento en el repositorio. En su lugar, los datos de entrenamiento se almacenan en una base de datos o un lago de datos, y Azure Machine Learning recupera los datos directamente del origen de datos mediante almacenes de datos.</p>
              <p>Los repositorios basados en Git están disponibles mediante Azure Repos en <b>Azure DevOps</b> o un <b>repositorio de GitHub</b>.</p>
              <p>Al hospedar todo el código pertinente en un repositorio, puede colaborar fácilmente en el código y realizar un seguimiento de los cambios que realice un miembro del equipo. Cada miembro puede trabajar en su propia versión del código. Podrá ver todos los cambios anteriores y revisar los cambios antes de confirmarlos en el repositorio principal.</p>
              <p>Para decidir quién trabaja en qué parte del proyecto, se recomienda usar el <b>planeamiento ágil</b>.</p>

              <h3 className='text-muter'>Planeamiento ágil</h3>
              <p>Como quiere que un modelo se implemente rápidamente en producción, el planeamiento ágil es ideal para proyectos de aprendizaje automático.</p>
              <p>El planeamiento ágil conlleva aislar el trabajo en <b>sprints</b>. Los sprints son breves períodos de tiempo durante los que desea lograr parte de los objetivos del proyecto.</p>
              <p>El objetivo es planear sprints para mejorar rápidamente cualquier código. Si se usa código para la exploración de datos y modelos o para implementar un modelo en producción.</p>
              <p>El entrenamiento de un modelo de aprendizaje automático puede ser un proceso interminable. Por ejemplo, como científico de datos, es posible que tenga que mejorar el rendimiento del modelo debido al desfase de datos. O bien, deberá ajustar el modelo para que se alinee mejor con los nuevos requisitos empresariales.</p>
              <p>Para evitar dedicar demasiado tiempo al entrenamiento del modelo, el planeamiento ágil puede ayudar a definir el ámbito del proyecto y a alinear a todos los usuarios mediante un consenso sobre los resultados a corto plazo.</p>
              <p>Para planear el trabajo, puede usar una herramienta como Azure Boards en Azure DevOps o incidencias de GitHub.</p>

              <h3 className='text-muted'>Infraestructura como código (IaC)</h3>
              <p>Aplicar los principios de DevOps a proyectos de aprendizaje automático significa que desea crear soluciones reproducibles y sólidas. En otras palabras, debería poder repetir y automatizar todo lo que haga o cree.</p>
              <p>Para repetir y automatizar la infraestructura necesaria para entrenar e implementar el modelo, el equipo usará la infraestructura como código (IaC). Al entrenar e implementar modelos en Azure, IaC sirve para definir todos los recursos de Azure necesarios en el proceso en el código, y el código se almacena en un repositorio.</p>

              {/* UNIDAD 3 */}
              <h2>Herramientas de DevOps</h2>
              <h3 className='text-muted'>¿Qué es Azure DevOps?</h3>
              <p>Azure DevOps es una plataforma creada por Microsoft, que incluye varios servicios para ayudarle con muchas de las actividades de DevOps.</p>
              <p>Algunas herramientas que ofrece la plataforma Azure DevOps hospedada en la nube incluyen:</p>
              <ul>
                <li>Azure Boards: organiza el planeamiento ágil mediante el seguimiento de elementos de trabajo, visualizaciones e informes.</li>
                <li>Azure Repos: almacena el código en repositorios públicos y privados.</li>
                <li>Azure Pipelines: combina la integración continua (CI) y la entrega continua (CD) mediante la creación y prueba automáticas de los proyectos de código.</li>
              </ul>
              <p>Además de estas tres, Azure DevOps ofrece más herramientas para ayudar a las organizaciones con su recorrido de DevOps. Azure DevOps está diseñado como una plataforma, lo que significa que el usuario elige las herramientas que quiere usar. No es necesario usar todo lo que ofrece Azure DevOps.</p>
              <p>Muchas de las herramientas de Azure DevOps funcionan con una gran variedad de lenguajes y son multiplataforma. Durante la exploración de la relevancia de los principios y las herramientas de DevOps para proyectos de aprendizaje automático, nos centraremos en trabajar con Python y Linux, ya que son los más usados.</p>

              <h3 className='text-muted'>¿Qué es GitHub?</h3>
              <p>GitHub es una plataforma de desarrollo de código abierto propiedad de Microsoft, que incluye varias herramientas de DevOps como:</p>
              <ul>
                <li>Incidencias: realiza un seguimiento de los elementos de trabajo, los comentarios y los errores.</li>
                <li>Repos: almacena repositorios de código públicos y privados.</li>
                <li>Acciones: permite la creación de flujos de trabajo de automatización.</li>
              </ul>
              <p>GitHub y Git se suelen usar juntos, pero no son iguales. Git se centra en el control de código fuente y se puede acceder a él desde varias herramientas. GitHub es un proveedor de hospedaje de código específico que ofrece el sistema Git mediante una interfaz gráfica basada en web y combina repositorios de Git con otras herramientas de DevOps.</p>
              
              <h3 className='¿Qué es Git?'>¿Qué es Git?</h3>
              <p>Git es un sistema de control de versiones distribuido. Aunque hay otros sistemas de control de código fuente, Git es el sistema más popular disponible actualmente y se usa ampliamente para marcos de trabajo de código abierto y proyectos de aprendizaje automático.</p>
              <p>La idea esencial que hay detrás de Git es la distribución del control de código fuente, lo que significa que cada miembro del equipo trabaja en su propia copia del repositorio completo.</p>
              <p>Para trabajar en un proyecto de manera simultánea, Git ofrece desarrollo troncal con funcionalidades de bifurcación. Al crear ramas para el proyecto de código, puede editar el código sin tocar la copia principal del proyecto. Una vez completados los cambios en el código, puede combinarlos con la copia principal, por ejemplo, a través de una solicitud de incorporación de cambios.</p>
              
              {/* UNIDAD 4 */}
              
              
              
              
              
              {/* 

               BLOQUE DE CODIGO 
              <div className="code-box">
                <CopyCode code={  `
# Data science in Microsoft Fabric
                `} />
              </div>
              */}

              <p className="text-primary">#Microsoft #Azure #MachineLearning</p>



              <FinalDePost/>
                 
  
            </article>
          </div>
          <Sidebar />
        </div>
      </main>
    );
};