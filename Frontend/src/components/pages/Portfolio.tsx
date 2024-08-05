// src/components/pages/Portfolio.tsx
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import ProjectImage1 from "../../assets/images/project-1.jpg";
import ProjectImage2 from "../../assets/images/project-2.png";
import ProjectImage3 from "../../assets/images/project-3.jpg";
import ProjectImage4 from "../../assets/images/project-4.png";
import ProjectImage5 from "../../assets/images/project-5.png";
import ProjectImage6 from "../../assets/images/project-6.png";
import ProjectImage7 from "../../assets/images/project-7.png";
import ProjectImage8 from "../../assets/images/project-8.jpg";
import ProjectImage9 from "../../assets/images/project-9.png";

const Portfolio: React.FC = () => {
  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>
              All
            </button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web design</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Applications</button>
          </li>

          <li className="filter-item">
            <button data-filter-btn>Web development</button>
          </li>
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>
              Select category
            </div>
            <div className="select-icon">
              <AiOutlineEye />
            </div>
          </button>

          <ul className="select-list">
            <li className="select-item">
              <button data-select-item>All</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web design</button>
            </li>

            <li className="select-item">
              <button data-select-item>Applications</button>
            </li>

            <li className="select-item">
              <button data-select-item>Web development</button>
            </li>
          </ul>
        </div>

        <ul className="project-list">
          <li className="project-item active" data-filter-item data-category="web development">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <AiOutlineEye />
                </div>
                <img src={ProjectImage1} alt="finance" loading="lazy" />
              </figure>
              <h3 className="project-title">Finance</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>

          <li className="project-item active" data-filter-item data-category="web development">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <AiOutlineEye />
                </div>
                <img src={ProjectImage2} alt="orizon" loading="lazy" />
              </figure>
              <h3 className="project-title">Orizon</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>

          <li className="project-item active" data-filter-item data-category="web design">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <AiOutlineEye />
                </div>
                <img src={ProjectImage3} alt="fundo" loading="lazy" />
              </figure>
              <h3 className="project-title">Fundo</h3>
              <p className="project-category">Web design</p>
            </a>
          </li>

          <li className="project-item active" data-filter-item data-category="applications">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <AiOutlineEye />
                </div>
                <img src={ProjectImage4} alt="brawlhalla" loading="lazy" />
              </figure>
              <h3 className="project-title">Brawlhalla</h3>
              <p className="project-category">Applications</p>
            </a>
          </li>

          <li className="project-item active" data-filter-item data-category="web design">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <AiOutlineEye />
                </div>
                <img src={ProjectImage5} alt="dsm." loading="lazy" />
              </figure>
              <h3 className="project-title">DSM.</h3>
              <p className="project-category">Web design</p>
            </a>
          </li>

          <li className="project-item active" data-filter-item data-category="web design">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <AiOutlineEye />
                </div>
                <img src={ProjectImage6} alt="metaspark" loading="lazy" />
              </figure>
              <h3 className="project-title">MetaSpark</h3>
              <p className="project-category">Web design</p>
            </a>
          </li>

          <li className="project-item active" data-filter-item data-category="web development">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <AiOutlineEye />
                </div>
                <img src={ProjectImage7} alt="summary" loading="lazy" />
              </figure>
              <h3 className="project-title">Summary</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>

          <li className="project-item active" data-filter-item data-category="applications">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <AiOutlineEye />
                </div>
                <img src={ProjectImage8} alt="task manager" loading="lazy" />
              </figure>
              <h3 className="project-title">Task Manager</h3>
              <p className="project-category">Applications</p>
            </a>
          </li>

          <li className="project-item active" data-filter-item data-category="web development">
            <a href="#">
              <figure className="project-img">
                <div className="project-item-icon-box">
                  <AiOutlineEye />
                </div>
                <img src={ProjectImage9} alt="arrival" loading="lazy" />
              </figure>
              <h3 className="project-title">Arrival</h3>
              <p className="project-category">Web development</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
