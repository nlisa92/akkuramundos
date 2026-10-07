import { useState } from "react";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact">
      {/* =========================================
          HERO
      ========================================= */}

      <section className="contact__hero">
        <div className="contact__container">
          <p className="contact__eyebrow">Contact</p>

          <h1 className="contact__title">
            Let’s create something meaningful together.
          </h1>

          <p className="contact__description">
            Have a project, idea, or question? Tell us a little about it and
            we will get back to you.
          </p>
        </div>
      </section>

      {/* =========================================
          CONTACT SECTION
      ========================================= */}

      <section className="contact__section">
        <div className="contact__container">
          <div className="contact__grid">

            {/* =========================================
                CONTACT INFO
            ========================================= */}

            <div className="contact__info">
              <h2 className="contact__heading">Get in touch</h2>

              <p className="contact__text">
                We would love to hear about your project and explore how we
                could work together.
              </p>

              <div className="contact__details">

                {/* ADDRESS */}

                <div className="contact__detail">
                  <span className="contact__label">Address</span>

                  <address className="contact__address">
                    Málaga
                    <br />
                    C/ Cuarteles 39, P01, D2
                    <br />
                    29002 Málaga, España
                  </address>
                </div>

                {/* EMAIL */}

                <div className="contact__detail">
                  <span className="contact__label">Email</span>

                  <a
                    href="mailto:akkuramundos@gmail.com"
                    className="contact__email"
                  >
                    akkuramundos@gmail.com
                  </a>
                </div>

                {/* PHONE */}

                <div className="contact__detail">
                  <span className="contact__label">Phone</span>

                  <a
                    href="tel:+34624946585"
                    className="contact__phone"
                  >
                    +34 624 946 585
                  </a>
                </div>

              </div>
            </div>

            {/* =========================================
                FORM
            ========================================= */}

            <form
              className="contact__form"
              onSubmit={handleSubmit}
            >
              <div className="contact__field">
                <label htmlFor="name">Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="6"
                  required
                />
              </div>

              <button
                type="submit"
                className="contact__button"
              >
                Send message
              </button>
            </form>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;