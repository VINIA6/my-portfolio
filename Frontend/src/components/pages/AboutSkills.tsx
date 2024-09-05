import React from "react";
import { dataInfoSkills } from "../../mocks/resume";

interface Skills {
    title: string;
}

const AboutSkill: React.FC<Skills> = ({ title }) => {
    return (
        <article className="blog-post-page active" data-page="blog-post-page">
            <header style={{ marginTop: '40px' }}>
                <h2 className="h2 article-title" >{title}</h2>

            </header>
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

export default AboutSkill