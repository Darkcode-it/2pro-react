import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
import footerData from "./Footer.json";

// ایجاد مپینگ برای آیکون‌ها
const iconComponents = {
  CiFacebook: CiFacebook,
  FaGithub: FaGithub,
  FaTelegram: FaTelegram,
  CiLinkedin: CiLinkedin,
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <img 
            src="./img/logo.png" 
            alt="Estatery Logo" 
            className="footer__logo" 
            loading="lazy"
          />
        </div>

        <nav className="footer__grid">
          {footerData.footerLinks.map((section) => (
            <div key={section.title} className="footer__section">
              <h3 className="footer__heading">{section.title}</h3>
              <ul className="footer__list">
                {section.links.map((link) => (
                  <li key={link.label} className="footer__item">
                    {link.href.startsWith("/") ? (
                      <Link to={link.href} className="footer__link">
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} className="footer__link">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="footer__bottom">
          <p className="footer__copyright">
           Developed by Ahmad Rasouli
          </p>
          
          <div className="footer__socials">
            {footerData.socialLinks.map((social) => {
              const IconComponent = iconComponents[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <IconComponent aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}