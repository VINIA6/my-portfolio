import React, { useState } from "react";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost"; 
import AboutSkill from "./pages/AboutSkills";

const MainContent: React.FC = () => {
  const [activePage, setActivePage] = useState<keyof typeof pages>("sobre");
  const [selectedBlogPost, setSelectedBlogPost] = useState<any>(null);
  const [skillTitle, setSkillTitle] = useState<string | null>(null);

  const pages = {
    sobre: <About onDomainClick={(title: string) => handleDomainClick(title)} />, // Passa o callback para About
    resumo: <Resume />,
    portifólio: <Portfolio />,
    blog: <Blog onBlogPostClick={setSelectedBlogPost} />,
    aboutSkills: skillTitle ? <AboutSkill title={skillTitle} /> : null, // Renderiza AboutSkill com a prop title
  };

  const handlePageChange = (page: keyof typeof pages) => {
    if (page === "sobre") {
      setSkillTitle(null); // Volta para About
    }
    setActivePage(page);
    setSelectedBlogPost(null);
  };

  const handleDomainClick = (title: string) => {
    setSkillTitle(title); // Atualiza o título da skill ao clicar no domínio
    setActivePage("aboutSkills"); // Alterna para a página de AboutSkill
  };

  return (
    <div className="main-content">
      <nav className="navbar">
        <ul className="navbar-list">
          {Object.keys(pages).map((page) => (
            <li className="navbar-item" key={page}>
              <button
                className={`navbar-link ${activePage === page ? "active" : ""}`}
                onClick={() => handlePageChange(page as keyof typeof pages)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {selectedBlogPost ? (
        <BlogPostPage {...selectedBlogPost} />
      ) : (
        pages[activePage]
      )}
    </div>
  );
};

export default MainContent;
