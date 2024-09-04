// src/components/pages/Portfolio.tsx
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { datInfoPortifolio } from "../../mocks/port";

const Portfolio: React.FC = () => {

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="project-list">
          {
            datInfoPortifolio.map((item, index) => (
              <li className="project-item active" data-filter-item data-category="web development">
                <a href={`${item.link}`}>
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <AiOutlineEye />
                    </div>
                    <img src={item.image} alt="finance" loading="lazy" />
                  </figure>
                  <h3 className="project-title">{item.title}</h3>
                  <p className="project-category">{item.area}</p>
                </a>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
