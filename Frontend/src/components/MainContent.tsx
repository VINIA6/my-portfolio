import React, { useState } from "react";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost"; // Corrigido o nome do import
import Contact from "./pages/Contact";

// Defina os dados do blog fora do componente para reutilização
const dataBlog = [
  //... dados do blog que você já possui
];

const MainContent: React.FC = () => {
  // Defina as páginas disponíveis e seus componentes correspondentes
  const [activePage, setActivePage] = useState<keyof typeof pages>("sobre");
  const [selectedBlogPost, setSelectedBlogPost] = useState<any>(null);

  const pages = {
    sobre: <About />,
    resumo: <Resume />,
    portifólio: <Portfolio />,
    blog: <Blog onBlogPostClick={setSelectedBlogPost} />,
    // contato: <Contact />,
  };

  const handlePageChange = (page: keyof typeof pages) => {
    setActivePage(page);
    setSelectedBlogPost(null);
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
