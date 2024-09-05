import React, { useState } from "react";
import { MdMailOutline, MdPhoneAndroid, MdCalendarToday, MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import AvatarImage from "../assets/images/_MG_9949_3.jpg";


interface SidebarProps {
  // Add prop definitions if needed
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <aside className={`sidebar ${showContacts ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img className="image-avatar" src={AvatarImage} alt="Vinícius de Assis" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Vinícius de Assis">
            Vinícius de Assis
          </h1>
          <p className="title">Software Developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn onClick={() => setShowContacts(!showContacts)}>
          <span>Mostrar Contatos</span>
        </button>
      </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>
          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <MdMailOutline />
              </div>
              <div className="contact-info">
                <p className="contact-title">E-mail</p>
                <a href="mailto:viniciusdeassisazevedo@hotmail.com" className="contact-link">
                  viniciusdeassisazevedo@hotmail.com
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <MdPhoneAndroid />
              </div>
              <div className="contact-info">
                <p className="contact-title">Telefone</p>
                <a href="tel:+5588997970070" className="contact-link">
                  +55 (88) 9 9797-0070
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <MdCalendarToday />
              </div>
              <div className="contact-info">
                <p className="contact-title">Aniversário</p>
                <time dateTime="1997-11-18">Novembro 18, 1997</time>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <MdLocationOn />
              </div>
              <div className="contact-info">
                <p className="contact-title">Localização</p>
                <address>Fortaleza, Ceará, BR</address>
              </div>
            </li>
          </ul>
          <div className="separator"></div>
          <ul className="social-list">
            <li className="social-item">
              <a href="https://www.linkedin.com/in/vinia6/" className="social-link">
                <FaLinkedin/>
              </a>
            </li>
            <li className="social-item">
              <a href="https://github.com/VINIA6" className="social-link">
                <FaGithub/>
              </a>
            </li>
            <li className="social-item">
              <a href="https://www.instagram.com/viniciusdeassisazevedo/" className="social-link">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
    </aside>
  );
};

export default Sidebar;
