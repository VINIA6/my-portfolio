// src/components/MainContent.tsx
import React, { useState } from "react";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const MainContent: React.FC = () => {
  // Defina as páginas disponíveis e seus componentes correspondentes
  const pages = {
    about: <About />,
    resume: <Resume />,
    portfolio: <Portfolio />,
    blog: <Blog />,
    contact: <Contact />,
  };

  // Inicializa o estado activePage com "about"
  const [activePage, setActivePage] = useState<keyof typeof pages>("about");

  // Função para alternar a página ativa
  const handlePageChange = (page: keyof typeof pages) => {
    console.log(`Changing page to: ${page}`);
    setActivePage(page);
  };

  return (
    <div className="main-content">
      {/* Renderiza a barra de navegação */}
      <nav className="navbar">
        <ul className="navbar-list">
          {/* Usa Object.keys para mapear os nomes das páginas e criar links de navegação */}
          {Object.keys(pages).map((page) => (
            <li className="navbar-item" key={page}>
              <button
                className={`navbar-link ${activePage === page ? "active" : ""}`}
                onClick={() => handlePageChange(page as keyof typeof pages)}
              >
                {/* Capitaliza a primeira letra do nome da página para exibição */}
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Renderiza o componente da página ativa */}
      {pages[activePage]}
    </div>
  );
};

export default MainContent;
