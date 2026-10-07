import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="home__hero">
        <div className="home__hero-overlay">
          <div className="home__container">
            <p className="home__location">
              MÁLAGA · COSTA DEL SOL
            </p>

            <h1 className="home__hero-title">
              Stronger together
            </h1>

            <p className="home__hero-text">
              We create opportunities for young people from different
              cultures to learn, take part and build a more inclusive future.
            </p>

            <Link to="/about" className="home__button">
              Get to know us
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="home__about">
        <div className="home__container home__about-container">
          <div className="home__about-content">
            <p className="home__label">
              AKKURAMUNDOS
            </p>

            <h2 className="home__section-title">
              A place to grow
              <br />
              together
            </h2>

            <p className="home__text">
              Akkuramundos is a young non-governmental, non-profit
              organisation based in Málaga on Spain's Costa del Sol. We
              empower young people, support their personal and professional
              development, and contribute to a sustainable and inclusive
              society.
            </p>

            <h3 className="home__subtitle">
              Our mission
            </h3>

            <p className="home__text">
              We help young people recognise their strengths and overcome
              social and cultural barriers.
            </p>
          </div>

          <div className="home__about-image">
            <img
              src="/images/malaga.jpg"
              alt="Málaga and Costa del Sol"
            />
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="home__quote">
        <div className="home__container">
          <blockquote>
            «TOGETHER WE ARE STRONGER»
          </blockquote>
        </div>
      </section>

      {/* COLLABORATORS */}
      <section className="home__collaborators">
        <div className="home__container">
          <p className="home__label">
            AKKURAMUNDOS
          </p>

          <h2 className="home__section-title">
            Our collaborators
          </h2>

          <p className="home__collaborators-text">
            We believe in cooperation between associations, educational
            institutions and communities. Confirmed partners will be listed
            here.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;