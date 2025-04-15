import { useState, useRef, useEffect } from 'react';
import { LuMenu } from 'react-icons/lu';
import './Menu.css';
import { Link } from 'react-router-dom';
export default function Menu() {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const menuRef = useRef(null);

  const menuItems = [
    {
      title: "ساختمان",
      subItems: ["تکمیل شناژ", "نیمه شناژ", "شناژ قائم آهن"]
    },
    {
      title: "زمین مسکونی",
      subItems: ["محدوده شهری", "محدوده غیر شهری"]
    },
    {
      title: "کشاورزی",
      subItems: ["دیمه", "بارانی"]
    },
    {
      title: "آپارتمان",
      subItems: ["آپارتمان اول", "آپارتمان دوم"]
    }
  ];

  const toggleSubmenu = (title) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setActiveSubmenu(null);
      setIsMobileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="navbar__left">
        <img 
          src="/logo.png" 
          alt="لوگو شرکت" 
          className="navbar__logo" 
        />
      </div>

      <button 
        className={`navbar__toggler ${isMobileOpen ? 'active' : ''}`}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <LuMenu size={28} color="#333" />
      </button>

      <div className={`navbar__content ${isMobileOpen ? 'active' : ''}`}>
        <ul className="navbar__menu">
          {menuItems.map((item) => (
            <li 
              key={item.title}
              className={`nav-item ${activeSubmenu === item.title ? 'active' : ''}`}
            >
              <button
                className="nav-link"
                onClick={() => toggleSubmenu(item.title)}
                onMouseEnter={() => window.innerWidth > 768 && toggleSubmenu(item.title)}
                onMouseLeave={() => window.innerWidth > 768 && toggleSubmenu(null)}
              >
                {item.title}
                {item.subItems && (
                  <span className="dropdown-indicator"></span>
                )}
              </button>

              {item.subItems && (
                <ul className="submenu">
                  {item.subItems.map((subItem) => (
                    <li key={subItem}>
                      <a href="#" className="submenu-link">{subItem}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <Link to="/2pro-react/login" className="btn btn-login">ورود</Link>
          <Link to="/2pro-react/register" className="btn btn-register">ثبت نام</Link>
        </div>
      </div>
    </nav>
  );
}