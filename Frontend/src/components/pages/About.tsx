// src/components/pages/About.tsx
import React from "react";
import DesignIcon from "../../assets/images/icon-design.svg";
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
              <img src={Logo2} alt="client logo" title="Cimento Apodi"/>
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src={Logo1} alt="client logo" title="Titan Ciment"/>
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src={Logo6} alt="client logo" title="SENAI" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src={Logo7} alt="client logo" title="CIE Durametal"/>
            </a>
          </li>

        </ul>

      </section>

    </article>
  );
};

export default About;
