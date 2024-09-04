
import React, { useState } from "react";
import { MdBook } from "react-icons/md";
import "../../assets/css/style.css"
import { dataInfoExperience, dataInfoFormação, dataInfoSkills } from "../../mocks/resume";
const Resume: React.FC = () => {

  const characterLimit = 100;


  const renderDescription = (description: string) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleToggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
    if (description.length > characterLimit && !isExpanded) {
      return (
        <>
          <div
            dangerouslySetInnerHTML={{
              __html: description.substring(0, characterLimit),
            }}
          />
          ...
          <span className="expand-text" onClick={handleToggleExpand}>
            Ver +
          </span>
        </>
      );
    }
    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        {description.length > characterLimit && (
          <span className="expand-text" onClick={handleToggleExpand}>
            Ver -
          </span>
        )}
      </>
    );
  };

  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resumo</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <MdBook />
          </div>
          <h3 className="h3">Experiência</h3>
        </div>
        <ol className="timeline-list">
          {dataInfoExperience.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{item.title} </h4>
              <span>{item.date}</span>
              <p className="timeline-text">{renderDescription(item.descripition)}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <MdBook />
          </div>
          <h3 className="h3">Formação</h3>
        </div>

        <ol className="timeline-list">
          {dataInfoFormação.map((item, index) => (
            <li className="timeline-item" key={index}>
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.date}</span>
              <p className="timeline-text">{renderDescription(item.descripition)}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {dataInfoSkills.map((item, index) => (
            <li className="skills-item" key={index}>
              <div className="title-wrapper">
                <h5 className="h5">{item.title}</h5>
                <data value="80">{item.percent}</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: item.percent }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;
