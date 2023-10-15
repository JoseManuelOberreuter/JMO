import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {



    return (
      <header className="lh-1 py-2 mb-2 border-bottom">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div class="container ">
              <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
  
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
  
                  <li class="nav-item">
                    <Link to="/blog" className="nav-link active px-2 text-black text-strong fs-5">Blog</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/portfolio" className="nav-link px-2 text-secondary fs-5">Portafolio</Link>
                  </li>
                  <li class="nav-item">
                    <Link to="/about" className="nav-link px-2 text-secondary fs-5">Acerca de Mí</Link>
                  </li>
  
                </ul>
  
  
                
  
                <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                  <input type="search" className="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
                </form>
  
            </div>
          </div>
        </div>
      </header>
  
      
    );
  };
  
  