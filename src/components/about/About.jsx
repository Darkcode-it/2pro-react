import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import aboutData from './About.json';
import "./About.css";

const AboutUs = () => {
  const { title, subtitle, sections } = aboutData.about;

  const renderSection = (section) => {
    switch (section.type) {
      case 'history':
      case 'mission':
        return (
          <article className="about-card">
            <div className="quote-container">
              <FaQuoteLeft className="quote-icon" />
              <FaQuoteRight className="quote-icon" />
            </div>
            <h3 className="section-title">{section.title}</h3>
            <p className="section-content">{section.content}</p>
          </article>
        );

      case 'team':
        return (
          <article className="about-card team-section">
            <h3 className="section-title">{section.title}</h3>
            <div className="team-grid">
              {section.members.map(member => (
                <div key={member.id} className="team-member">
                  <img 
                    src={member.avatar} 
                    alt={member.name} 
                    className="member-avatar"
                  />
                  <div className="member-info">
                    <h4 className="member-name">{member.name}</h4>
                    <p className="member-position">{member.position}</p>
                    <div className="member-quote">
                      <FaQuoteLeft className="quote-icon small" />
                      <p>{member.quote}</p>
                      <FaQuoteRight className="quote-icon small" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>
        );

      case 'contact':
        return (
          <article className="about-card contact-section">
            <h3 className="section-title">{section.title}</h3>
            <div className="contact-details">
              <p>{section.details.address}</p>
              <p>{section.details.phone}</p>
              <p>{section.details.email}</p>
            </div>
          </article>
        );

      default:
        return null;
    }
  };

  return (
    <section className="about-container">
      <div className="about-header">
        <h1 className="main-title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>

      <div className="about-content">
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            {renderSection(section)}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;