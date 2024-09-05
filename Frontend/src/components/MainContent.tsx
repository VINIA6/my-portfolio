import React, { useState } from "react";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost"; 
import AboutSkill from "./pages/AboutSkills";

const MainContent: React.FC = () => {
  const [activePage, setActivePage] = useState<keyof typeof pages | "aboutSkills">("sobre");
  const [selectedBlogPost, setSelectedBlogPost] = useState<any>(null);
  const [skillTitle, setSkillTitle] = useState<string | null>(null);

  // Defina as páginas disponíveis e seus componentes correspondentes
  const pages = {
    sobre: <About onDomainClick={(title: string) => handleDomainClick(title)} />,
    resumo: <Resume />,
    portifólio: <Portfolio />,
    blog: <Blog onBlogPostClick={setSelectedBlogPost} />,
  };

  const handlePageChange = (page: keyof typeof pages) => {
    if (page === "sobre") {
      setSkillTitle(null); // Reseta o estado para voltar para a página principal de Sobre
    }
    setActivePage(page);
    setSelectedBlogPost(null);
  };

  const handleDomainClick = (title: string) => {
    setSkillTitle(title); // Armazena o título da skill selecionada
    setActivePage("aboutSkills"); // Troca para a página de AboutSkill
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

      {/* Renderiza a página AboutSkill quando um domínio for clicado */}
      {activePage === "aboutSkills" && skillTitle ? (
        <AboutSkill title={skillTitle} />
      ) : selectedBlogPost ? (
        <BlogPostPage {...selectedBlogPost} />
      ) : (
        pages[activePage as keyof typeof pages]
      )}
    </div>
  );
};

export default MainContent;
