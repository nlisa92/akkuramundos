import "./Approach.css";

function Approach() {
  const focusAreas = [
    "Inclusion and equality",
    "Digital skills",
    "Sustainability",
    "Youth participation",
  ];

  const developmentAreas = [
    "Digital and professional skills",
    "Environmental responsibility and sustainable lifestyles",
    "Personal growth, social and communication skills",
    "Intercultural dialogue and social inclusion",
    "Employability, entrepreneurship and active citizenship",
  ];

  const activities = [
    "Youth exchanges, training courses and international seminars",
    "Volunteering initiatives and projects with schools and associations",
    "Language clubs, interactive workshops and creative projects",
    "Innovative digital methods and educational research",
  ];

  return (
    <div className="approach">
      {/* =========================================
          HERO
      ========================================= */}

      <section className="approach__hero">
        <div className="approach__container">
          <p className="approach__eyebrow">Akkuramundos</p>

          <h1 className="approach__title">Our approach</h1>

          <p className="approach__description">
            We focus on the priorities of European youth programmes:
            inclusion and equal opportunities, digital transformation,
            sustainability and active participation. Our activities bring
            cultures together and open new perspectives.
          </p>

          <div className="approach__focus">
            {focusAreas.map((area) => (
              <div className="approach__focus-item" key={area}>
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          WHAT WE DO
      ========================================= */}

      <section className="approach__section">
        <div className="approach__container">
          <div className="approach__columns">
            <div className="approach__column">
              <h2 className="approach__heading">What we develop</h2>

              <ul className="approach__list">
                {developmentAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="approach__column">
              <h2 className="approach__heading">What we do</h2>

              <ul className="approach__list">
                {activities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          QUOTE
      ========================================= */}

      <section className="approach__quote">
        <div className="approach__quote-container">
          <blockquote className="approach__quote-text">
            «We want every young person to feel part of a team, gain skills
            for the future and help build a more inclusive, digital and
            sustainable society.»
          </blockquote>
        </div>
      </section>
    </div>
  );
}

export default Approach;