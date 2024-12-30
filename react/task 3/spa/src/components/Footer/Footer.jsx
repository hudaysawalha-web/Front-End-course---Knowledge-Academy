import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: "#2C3E50" }}>
      <div className="container py-5">
        <div className="row">
          {/* Location Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">Location</h5>
            <p className="mb-0">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">Around the Web</h5>
            <div className="d-flex justify-content-center">
              <a href="#" className="icon-circle mx-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="icon-circle mx-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="icon-circle mx-2">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="icon-circle mx-2">
                <i className="fab fa-dribbble"></i>
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold">About Freelancer</h5>
            <p className="mb-0">
              Freelance is a free to use, MIT licensed Bootstrap theme created by{" "}
              <a
                href="https://startbootstrap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-success text-decoration-none"
              >
                Start Bootstrap
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div
        className="text-center py-3"
        style={{ backgroundColor: "#1A252F", fontSize: "0.9rem" }}
      >
        <p className="mb-0">Copyright &copy; Your Website 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
