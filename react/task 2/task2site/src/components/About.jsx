import React from "react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Section Heading */}
        <h2 className="about-heading text-center">About</h2>

        {/* Divider */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>

        {/* Content */}
        <div className="row">
          <div className="col-lg-4 ms-auto">
            <p className="about-text">
              Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes
              the complete source files including HTML, CSS, and JavaScript as well as optional SASS
              stylesheets for easy customization.
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="about-text">
              You can create your own custom avatar for the masthead, change the icon in the dividers,
              and add your email address to the contact form to make it fully functional!
            </p>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-4">
          <a href="#download" className="btn-download">
            <i className="fas fa-download"></i> Free Download!
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
