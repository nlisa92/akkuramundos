import { useState } from "react";
import { Pagination } from "antd";
import { Link } from "react-router-dom";

import "./Stories.css";

function Stories() {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 6;

  const stories = [
    {
      id: 1,
      country: "Türkiye",
      title: "Intercultural dialogue",
      image: "/images/stories/intercultural-dialogue.jpg",
    },
    {
      id: 2,
      country: "Türkiye",
      title: "Digital skills",
      image: "/images/stories/digital-skills.jpg",
    },
    {
      id: 3,
      country: "Germany",
      title: "Online learning",
      image: "/images/stories/online-learning.jpg",
    },
    {
      id: 4,
      country: "Spain",
      title: "European values",
      image: "/images/stories/european-values.jpg",
    },
    {
      id: 5,
      country: "Türkiye",
      title: "Media literacy",
      image: "/images/stories/media-literacy.jpg",
    },
    {
      id: 6,
      country: "Türkiye",
      title: "Volunteering",
      image: "/images/stories/volunteering.jpg",
    },
    {
      id: 7,
      country: "Türkiye",
      title: "Youth participation",
      image: "/images/stories/youth-participation.jpg",
    },
    {
      id: 8,
      country: "Germany",
      title: "Sustainable communities",
      image: "/images/stories/sustainable-communities.jpg",
    },
    {
      id: 9,
      country: "Spain",
      title: "Social inclusion",
      image: "/images/stories/social-inclusion.jpg",
    },
    {
      id: 10,
      country: "Türkiye",
      title: "Creative learning",
      image: "/images/stories/creative-learning.jpg",
    },
    {
      id: 11,
      country: "Germany",
      title: "European cooperation",
      image: "/images/stories/european-cooperation.jpg",
    },
    {
      id: 12,
      country: "Türkiye",
      title: "International exchange",
      image: "/images/stories/international-exchange.jpg",
    },
  ];

  const startIndex = (currentPage - 1) * pageSize;

  const currentStories = stories.slice(
    startIndex,
    startIndex + pageSize
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="stories">
      {/* =========================================
          HERO
      ========================================= */}

      <section className="stories__hero">
        <div className="stories__container">
          <p className="stories__eyebrow">Akkuramundos</p>

          <h1 className="stories__title">
            Stories and experiences
          </h1>

          <p className="stories__description">
            Experiences of our team and themes that inspire our work.
            Akkuramundos has not yet completed international projects of
            its own. These are real photographs shared by our team.
          </p>
        </div>
      </section>

      {/* =========================================
          STORIES
      ========================================= */}

      <section className="stories__section">
        <div className="stories__container">
          <div className="stories__grid">
            {currentStories.map((story) => (
              <article className="stories__card" key={story.id}>
                <Link
                  to={`/stories/${story.id}`}
                  className="stories__image-link"
                >
                  <img
                    className="stories__image"
                    src={story.image}
                    alt={story.title}
                  />
                </Link>

                <div className="stories__card-content">
                  <span className="stories__category">
                    {story.country}
                  </span>

                  <h2 className="stories__card-title">
                    {story.title}
                  </h2>

                  <Link
                    to={`/stories/${story.id}`}
                    className="stories__link"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* =========================================
              PAGINATION
          ========================================= */}

          <div className="stories__pagination">
            <Pagination
              current={currentPage}
              total={stories.length}
              pageSize={pageSize}
              onChange={handlePageChange}
              showSizeChanger={false}
              showQuickJumper={false}
              showLessItems={false}
              responsive
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Stories;