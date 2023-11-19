import { Sidebar } from '../SideBar';
import {FinalDePost} from '../Posts'
import {CopyCode} from '../Posts'


import machineLearnLifecycle from '../../Components/img/articles/machine-learn-lifecycle.png'


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

              <h2>MLOps</h2>
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

              <h2>DevOps</h2>
              <p>El uso de los principios de DevOps, como el planeamiento ágil puede ayudar a su equipo a organizar el trabajo y a generar resultados más rápidamente. Con el control de código fuente, puede facilitar la colaboración en proyectos. Además, con la automatización, puede acelerar el ciclo de vida de aprendizaje automático.</p>
              <p>En este módulo se presentan estos principios de DevOps y se resaltan dos herramientas de uso habitual: Azure DevOps y GitHub.</p>


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