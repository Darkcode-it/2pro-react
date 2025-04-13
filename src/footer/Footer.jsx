import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";
import "./Footer.css";


const footerLinks = [
  {
    title: "Sell a Home",
    links: [
      { label: "Request an offer", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Reviews", href: "#" },
      { label: "Stories", href: "#" },
    ],
  },
  {
    title: "Buy, Rent & Sell",
    links: [
      { label: "Buy and sell properties", href: "#" },
      { label: "Rent home", href: "#" },
      { label: "Builder trade-up", href: "#" },
      { label: "Trust & Safety", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Investors", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Guides", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    icon: <CiFacebook aria-hidden="true" />,
    href: "https://www.facebook.com/DarkCodeit",
    label: "Facebook",
  },
  {
    icon: <FaGithub aria-hidden="true" />,
    href: "https://github.com/Darkcode-it",
    label: "GitHub",
  },
  {
    icon: <FaTelegram aria-hidden="true" />,
    href: "https://t.me/darkcodeit",
    label: "Telegram",
  },

  {
    icon: <CiLinkedin aria-hidden="true" />,
    href: "#",
    label: "LinkedIn",
  },
];

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
          {footerLinks.map((section) => (
            <div key={section.title} className="footer__section">
              <h3 className="footer__heading">{section.title}</h3>
              <ul className="footer__list">
                {section.links.map((link) => (
                  <li key={link.label} className="footer__item">
                    <a href={link.href} className="footer__link">
                      {link.label}
                    </a>
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
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="footer__social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}