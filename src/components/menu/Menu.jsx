import React, { useState, useEffect, useRef } from 'react';
import { XMarkIcon, Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import menuData from './Menu.json';
import './Menu.css';

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleAction = (type) => (e) => {
    e.preventDefault();
    if (type === 'login') {
      navigate('/2pro-react/login'); // Navigate to the Login component
    } else if (type === 'register') {
      navigate('/2pro-react/register'); // Navigate to the Register component
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="menu-container" ref={menuRef}>
      <div className="menu-inner">
        <div className="menu-brand" onClick={handleAction('home')}>
          خانوو
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          {menuData.map((section) => (
            <div 
              key={section.title}
              className="menu-item"
              onMouseEnter={() => setActiveMenu(section.title)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button className="menu-button">
                {section.title}
                <ChevronDownIcon className="dropdown-icon" />
              </button>

              {activeMenu === section.title && (
                <div className="menu-dropdown">
                  {section.items.map((item) => (
                    <a
                      key={item.link}
                      href={item.link}
                      className="dropdown-item"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="auth-section">
          <button 
            className="auth-button auth-login"
            onClick={handleAction('login')}
          >
            ورود
          </button>
          <button
            className="auth-button auth-register"
            onClick={handleAction('register')}
          >
            ثبت نام
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {menuData.map((section) => (
            <div key={section.title}>
              <button
                className="mobile-menu-item"
                onClick={() => setActiveMenu(
                  activeMenu === section.title ? null : section.title
                )}
              >
                {section.title}
                <ChevronDownIcon className={`dropdown-icon ${
                  activeMenu === section.title ? 'rotate-180' : ''
                }`} />
              </button>

              {activeMenu === section.title && (
                <div className="mobile-dropdown">
                  {section.items.map((item) => (
                    <a
                      key={item.link}
                      href={item.link}
                      className="dropdown-item"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Add Auth Buttons to Mobile Menu */}
          <div className="auth-section mobile">
            <button 
              className="auth-button auth-login" 
              onClick={handleAction('login')}
            >
              ورود
            </button>
            <button 
              className="auth-button auth-register " 
              onClick={handleAction('register')}
            >
              ثبت نام
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menu;