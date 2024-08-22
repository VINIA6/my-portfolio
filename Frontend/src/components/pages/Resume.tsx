// src/components/pages/Resume.tsx
import React, { useState } from "react";
import { MdBook } from "react-icons/md";
import "../../assets/css/style.css"
const Resume: React.FC = () => {

  const characterLimit = 100;

  const dataInfoExperience = [
    {
      title: "Desenvolvedor de Software Fullstack Pleno - Upvalue Solutions",
      date: "",
      descripition: "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },
    {
      title: "Desenvolvedor de Software Fullstack Júnior - Upvalue Solutions",
      date: "",
      descripition: "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },
    {
      title: "Desenvolvedor de Software AI - Companhia Industrial Cimento Apodi",
      date: "",
      descripition: "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    },
    {
      title: "Trainee Ciência de Dado - Companhia Industrial Cimento Apodi",
      date: "",
      descripition: "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur."
    }
  ];

  const dataInfoFormação = [
    {
      title: "Mestrado em Lógica e Inteligência Artificial - UFC",
      date: "",
      descripition: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ..."
    },
    {
      title: "Bacharel em Ciência da Computação - UFC",
      date: "",
      descripition: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ..."
    },
    {
      title: "Escola Normal Rural",
      date: "",
      descripition: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx ..."
    }
  ];

  const dataInfoSkills = [
    {
      title: "WebDesign",
      percent: "80%",
      experience: "",
    },
    {
      title: "WebDesign",
      percent: "10%",
      experience: "",
    },
    {
      title: "WebDesign",
      percent: "60%",
      experience: "",
    },
    {
      title: "WebDesign",
      percent: "100%",
      experience: "",
    }
  ];

  const renderDescription = (description: string) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
      setIsExpanded(!isExpanded);
    };

    if (description.length > characterLimit && !isExpanded) {
      return (
        <>
          {description.substring(0, characterLimit)}...
          <span className="expand-text" onClick={handleToggleExpand}>
            Ver +
          </span>
        </>
      );
    }
    return (
      <>
        {description}
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
