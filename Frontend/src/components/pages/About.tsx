import React from "react";
import DevIcon from "../../assets/images/icon-dev.svg";
import IconAI from "../../assets/images/icons8-artificial-intelligence-72.png";
import IconFront from "../../assets/images/icons8-frontend-64.png";
import AppIcon from "../../assets/images/icon-app.svg";

interface AboutProps {
  onDomainClick: (title: string) => void; // Adiciona a função como prop
}

const About: React.FC<AboutProps> = ({ onDomainClick }) => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">Sobre mim</h2>
      </header>

      <section className="about-text">
        <p>
          Sou um Cientista da Computação movido pela curiosidade e pela paixão
          de transformar ideias em soluções reais. Programação para mim não é
          apenas uma ferramenta, mas um meio de desbravar desafios complexos e
          trazer inovação para o mundo. Mantenho-me sempre à frente das últimas
          tendências tecnológicas, buscando constantemente maneiras de aplicar
          essas inovações em projetos que fazem a diferença.
        </p>
        <p>
          Minha jornada é marcada pela colaboração em equipe, onde vejo cada
          projeto como uma oportunidade de aprender e compartilhar conhecimento.
          Já desenvolvi soluções completas, desde a concepção até a produção,
          em ambientes que incentivam o diálogo e a troca de ideias. Acredito
          que é na convergência dessas experiências que encontramos as respostas
          para os desafios mais intrigantes.
        </p>
        <p>
          O que realmente me impulsiona é a combinação de lógica e criatividade.
          Em meu mestrado em Lógica e Inteligência Artificial, encontro o
          equilíbrio entre teoria e prática, onde cada algoritmo é uma nova
          possibilidade de otimizar processos e inovar em soluções. Para mim, a
          tecnologia é uma arte, e gosto de criar soluções que não apenas
          funcionem, mas que também sejam elegantes e eficazes.
        </p>
        <p>
          Valorizo a comunicação como a base de qualquer equipe bem-sucedida.
          Para mim, é a ponte que conecta ideias a resultados. Estou sempre
          pronto para unir minhas competências técnicas com minha capacidade de
          engajar e colaborar, buscando, acima de tudo, superar expectativas e
          entregar soluções que realmente impactam.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">Domínio</h3>

        <ul className="service-list">
          <li className="service-item" onClick={() => onDomainClick("Backend")}>
            <div className="service-icon-box">
              <img src={DevIcon} alt="Web development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Backend</h4>
              <p className="service-item-text">
                Desenvolvimento de alta qualidade e escalabilidade.
              </p>
            </div>
          </li>

          <li className="service-item" onClick={() => onDomainClick("Inteligência Artificial")}>
            <div className="service-icon-box">
              <img src={IconAI} alt="AI icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Inteligência Artificial</h4>
              <p className="service-item-text">Machine learning e algoritmos.</p>
            </div>
          </li>

          <li className="service-item" onClick={() => onDomainClick("Frontend")}>
            <div className="service-icon-box">
              <img src={IconFront} alt="Frontend icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Frontend</h4>
              <p className="service-item-text">
                Design moderno e de alta qualidade focado nos desafios de UI/UX.
              </p>
            </div>
          </li>

          <li className="service-item" onClick={() => onDomainClick("Mobile Apps")}>
            <div className="service-icon-box">
              <img src={AppIcon} alt="Mobile app icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile Apps</h4>
              <p className="service-item-text">
                Desenvolvimento profissional de aplicativos para iOS e Android.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default About;
