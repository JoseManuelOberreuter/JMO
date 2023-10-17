import React from 'react';

export const MainPortafolios = () => {
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Bienvenidos a mi portafolio</h1>
            <p className="lead text-body-secondary">
              Bienvenidos a mi portafolio de tecnología e informática, donde podrán conocer más acerca de mis habilidades, experiencia y pasiones en el mundo del desarrollo web y la tecnología.
            </p>
            <p>
              <a href="newsletter1" className="btn btn-primary my-2 mx-2">Contactarme</a>
              <a href="#" className="btn btn-secondary my-2 mx-2">Acerca de mí</a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 mb-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">


          <CardPortafolios1 />
          <CardPortafolios1 />
          <CardPortafolios1 />

          <CardPortafolios1 />
          <CardPortafolios1 />
          <CardPortafolios1 />
          </div>
        </div>
      </div>

    </main>
  );
};

const CardPortafolios1 = () => {
  return ( // Agrega un return aquí
          <div className="col">
            <div className="card shadow-sm">
              <svg
                className="bd-placeholder-img card-img-top"
                width="100%"
                height="225"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                  </div>
                  <small className="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>


  );
};
