export const ItemJumbotron = () => {
    return (
      <div className="container py-4">  
        {/* <div className="p-5 mb-4 bg-body-tertiary rounded-3 pb-3 ">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Estudiante de técnico en programación  y análisis de sistema.</h1>
            <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
          </div>
        </div> */}        

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-bg-dark rounded-3">
              <h2>Estudiante de técnico en programación  y análisis de sistema</h2>
              <p className='mt-5'>2022-2023</p>
              <p>Instituto de Ciecias Tecnológicas CIISA</p>
              {/* <button className="btn btn-outline-light" type="button">Example button</button> */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-body-tertiary border rounded-3 text-black">
              <h2>Estudiante de Ingeniería Informática</h2>
              <p className='mt-5'>2022-2025</p>
              <p>Instituto de Ciecias Tecnológicas CIISA</p>
              {/* <button className="btn btn-outline-secondary" type="button">Example button</button> */}
            </div>
          </div>
        </div> 
      </div>
    );
  };