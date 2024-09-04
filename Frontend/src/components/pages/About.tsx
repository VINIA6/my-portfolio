import React from "react";
import DevIcon from "../../assets/images/icon-dev.svg";
import AppIcon from "../../assets/images/icon-app.svg";
import Logo1 from "../../assets/images/titan.png";
import Logo2 from "../../assets/images/apodi.png";
import Logo3 from "../../assets/images/makro.svg";
import Logo4 from "../../assets/images/oficial_UPvalue.png";
import Logo5 from "../../assets/images/LogoSVGBranco.svg";
import Logo6 from "../../assets/images/senai.png";
import Logo7 from "../../assets/images/LOGO CIE DURAMETAL.webp";
import IconAI from "../../assets/images/icons8-artificial-intelligence-72.png";
import IconFront from "../../assets/images/icons8-frontend-64.png";

const About: React.FC = () => {
  return (
    <article className="about  active" data-page="about">

      <header>
        <h2 className="h2 article-title">Sobre mim</h2>
      </header>

      <section className="about-text">
        <p>
          Sou um Cientista da Computação movido pela curiosidade e pela paixão de transformar ideias em soluções reais. Programação para mim não é apenas uma ferramenta, mas um meio de desbravar desafios complexos e trazer inovação para o mundo. Mantenho-me sempre à frente das últimas tendências tecnológicas, buscando constantemente maneiras de aplicar essas inovações em projetos que fazem a diferença.
        </p>
        <p>
          Minha jornada é marcada pela colaboração em equipe, onde vejo cada projeto como uma oportunidade de aprender e compartilhar conhecimento. Já desenvolvi soluções completas, desde a concepção até a produção, em ambientes que incentivam o diálogo e a troca de ideias. Acredito que é na convergência dessas experiências que encontramos as respostas para os desafios mais intrigantes.
        </p>
        <p>
          O que realmente me impulsiona é a combinação de lógica e criatividade. Em meu mestrado em Lógica e Inteligência Artificial, encontro o equilíbrio entre teoria e prática, onde cada algoritmo é uma nova possibilidade de otimizar processos e inovar em soluções. Para mim, a tecnologia é uma arte, e gosto de criar soluções que não apenas funcionem, mas que também sejam elegantes e eficazes.
        </p>
        <p>
          Valorizo a comunicação como a base de qualquer equipe bem-sucedida. Para mim, é a ponte que conecta ideias a resultados. Estou sempre pronto para unir minhas competências técnicas com minha capacidade de engajar e colaborar, buscando, acima de tudo, superar expectativas e entregar soluções que realmente impactam.
        </p>

      </section>

      <section className="service">

        <h3 className="h3 service-title">Domínio</h3>

        <ul className="service-list">


          <li className="service-item">

            <div className="service-icon-box">
              <img src={DevIcon} alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Backend</h4>

              <p className="service-item-text">
                Desenvolvimento de alta qualidade e escalabilidade em nível profissional.
              </p>
            </div>

          </li>
          <li className="service-item">

            <div className="service-icon-box">
              <img src={IconAI} alt="camera icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Inteligência Artificial</h4>

              <p className="service-item-text">
                Um grande entusiasta na área de machine learning e algoritmos.
              </p>
            </div>

          </li>
          <li className="service-item">

            <div className="service-icon-box">
              <img src={IconFront} alt="design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Frontend</h4>

              <p className="service-item-text">
                Design moderno e de alta qualidade focado nos desafios de UI/UX.
              </p>
            </div>

          </li>

          <li className="service-item">

            <div className="service-icon-box">
              <img src={AppIcon} alt="mobile app icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile apps</h4>

              <p className="service-item-text">
                Desenvolvimento profissional de aplicativos para iOS e Android.
              </p>
            </div>

          </li>


        </ul>

      </section>

      <section className="clients">

        <h3 className="h3 clients-title">Clientes</h3>

        <ul className="clients-list has-scrollbar">

          <li className="clients-item">
            <a href="#">
              <img src={Logo5} alt="client logo" title="Realize Software" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src={Logo4} alt="client logo" title="UpValue Solutions" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src={Logo3} alt="client logo" title="Makro Engenharia" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src={Logo2} alt="client logo" title="Cimento Apodi" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src={Logo1} alt="client logo" title="Titan Ciment" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src={Logo6} alt="client logo" title="SENAI" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src={Logo7} alt="client logo" title="CIE Durametal" />
            </a>
          </li>

        </ul>

      </section>

    </article>
  );
};

export default About;
