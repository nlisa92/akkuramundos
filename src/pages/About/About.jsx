import { Link } from "react-router-dom";

import "./About.css";

function About() {
  return (
    <div className="about">
      {/* =========================================
          HERO
      ========================================= */}

      <section className="about__hero">
        <div className="about__container">
          <p className="about__eyebrow">Akkuramundos</p>

          <h1 className="about__title">About us</h1>

          <p className="about__description">
            Akkuramundos is a non-profit organisation based in Málaga. Our
            work reflects the priorities of Erasmus+ and the European
            community: inclusion, digital transformation, environmental
            sustainability and youth participation.
          </p>
        </div>
      </section>

      {/* =========================================
          WHO WE ARE
      ========================================= */}

      <section className="about__section about__section--main">
        <div className="about__container">
          <div className="about__intro">
            <div className="about__content">
              <p>
                We create opportunities for young people through international
                exchanges, volunteering, training, creative projects and
                research. We pay particular attention to those who face
                barriers, helping them develop their potential and participate
                in society.
              </p>

              <p>
                As a young association, Akkuramundos has not yet completed
                international projects of its own. Our team brings personal
                experience in Erasmus+, volunteering and education. We use
                non-formal learning, intercultural exchange and innovative
                methods to build digital skills, support sustainable
                development and celebrate diversity. We create safe spaces
                for dialogue, creativity and collaboration.
              </p>

              <Link to="/approach" className="about__link">
                Our approach
              </Link>
            </div>

            <div className="about__image-wrapper">
              <img
                className="about__image"
                src="/images/about-team.jpg"
                alt="Akkuramundos team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          TEAM
      ========================================= */}

      <section className="about__team">
        <div className="about__container">
          <div className="about__team-content">
            <p className="about__eyebrow">Akkuramundos</p>

            <h2 className="about__team-title">Our team</h2>

            <p className="about__team-description">
              Maryna Akkuratava is president and project coordinator. Laila
              Ramos Pedrosa is secretary and a youth work specialist. The team
              brings personal experience in Erasmus+, ESC, non-formal
              education and intercultural cooperation.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          QUOTE
      ========================================= */}

      <section className="about__quote">
        <div className="about__quote-container">
          <blockquote className="about__quote-text">
            «We believe change begins with action, and our greatest strength
            comes from acting together.»
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default About;