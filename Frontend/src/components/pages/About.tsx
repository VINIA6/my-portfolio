// src/components/pages/About.tsx
import React from "react";
import DesignIcon from "../../assets/images/icon-design.svg";
import DevIcon from "../../assets/images/icon-dev.svg";
import AppIcon from "../../assets/images/icon-app.svg";
import PhotoIcon from "../../assets/images/icon-photo.svg";
import Logo1 from "../../assets/images/logo-1-color.png";
import Logo2 from "../../assets/images/logo-2-color.png";
import Logo3 from "../../assets/images/logo-3-color.png";
import Logo4 from "../../assets/images/logo-4-color.png";
import Logo5 from "../../assets/images/logo-5-color.png";
import Logo6 from "../../assets/images/logo-6-color.png";

const About: React.FC = () => {
  return (
    <article className="about  active" data-page="about">

      <header>
        <h2 className="h2 article-title">Sobre mim</h2>
      </header>

      <section className="about-text">
        <p>
          Sou um Cientista da Computação apaixonado por resolver problemas complexos por meio da programação e sempre me mantenho atualizado com as últimas tendências e tecnologias. Trabalhar em equipe sempre foi uma grande oportunidade para aprender e compartilhar conhecimentos, exaltando assim a importância do trabalho orientado a equipes. Desenvolvi aplicativos tanto em equipe quanto individualmente, do zero à produção, sempre discutindo e trocando informações sobre pesquisas e novas tecnologias e aplicando-as em desafios do mundo real.
        </p>
        <p>
          Atualmente, estou cursando mestrado em Lógica e Inteligência Artificial, uma área que me entusiasma e motiva pela busca incessante por conhecimento. Acredito que a combinação de habilidades técnicas e soft skills é crucial para a entrega de resultados precisos, otimizando processos, economizando tempo na tomada de decisões, realizando controle industrial e avaliando a qualidade de produtos.
        </p>
        <p>
          A comunicação é, para mim, a habilidade mais importante em uma equipe de sucesso, e estou sempre disposto a combinar minhas experiências técnicas com minhas habilidades interpessoais para entregar resultados excepcionais.
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
                Desenvolvimento de alta qualidade e alta escalabilidade em nível profissional.
              </p>
            </div>

          </li>
          <li className="service-item">

            <div className="service-icon-box">
              <img src={PhotoIcon} alt="camera icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Inteligência Artificial</h4>

              <p className="service-item-text">
                I make high-quality photos of any category at a professional level.
              </p>
            </div>

          </li>
          <li className="service-item">

            <div className="service-icon-box">
              <img src={DesignIcon} alt="design icon" width="40" />
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
                Professional development of applications for iOS and Android.
              </p>
            </div>

          </li>


        </ul>

      </section>

      <section className="clients">

        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">

          <li className="clients-item">
            <a href="#">
              <img src={Logo1} alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src={Logo2} alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src={Logo3} alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src={Logo4} alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src={Logo5} alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src={Logo6} alt="client logo" />
            </a>
          </li>

        </ul>

      </section>

    </article>
  );
};

export default About;
