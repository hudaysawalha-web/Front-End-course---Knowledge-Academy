import React from 'react';

function Contact() {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        {/* Section Heading */}
        <h2 className="page-section-heading text-center text-uppercase  mb-0">Contact Me</h2>

        {/* Divider */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
          </div>
          <div className="divider-custom-line"></div>
        </div>

        {/* Contact Form */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            <form id="contactForm" >
              {/* Full Name */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  required
                />
                <label htmlFor="name">Full Name</label>
              </div>

              {/* Email Address */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  required
                />
                <label htmlFor="email">Email Address</label>
              </div>

              {/* Phone Number */}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  pattern="^[0-9\-+\s()]*$"
                  required
                />
                <label htmlFor="phone">Phone Number</label>
              </div>

              {/* Message */}
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Enter your message here..."
                  style={{ height: '8rem' }}
                  required
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>

              {/* Submit Button */}
              <button className="btn  btn-xl" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
