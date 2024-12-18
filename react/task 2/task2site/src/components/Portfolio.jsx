import React from 'react';
import cabin from '../assest/img/portfolio/cabin.png';
import cake from '../assest/img/portfolio/cake.png';
import circus from '../assest/img/portfolio/circus.png';
import game from '../assest/img/portfolio/game.png';
import safe from '../assest/img/portfolio/safe.png';
import submarine from '../assest/img/portfolio/submarine.png';

function Portfolio() {
  const projects = [
    { id: 1, image: cabin, title: 'Cabin' },
    { id: 2, image: cake, title: 'Cake' },
    { id: 3, image: circus, title: 'Circus' },
    { id: 4, image: game, title: 'Game' },
    { id: 5, image: safe, title: 'Safe' },
    { id: 6, image: submarine, title: 'Submarine' },
  ];

  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase  mb-0">
          Portfolio
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4 mb-5" key={project.id}>
              <div className="portfolio-item mx-auto">
                <img
                  className="img-fluid"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
