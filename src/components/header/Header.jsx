import { useState } from 'react';
import { FaSearchLocation, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [activeAction, setActiveAction] = useState('اجاره');
  const [location, setLocation] = useState('پیرانشهر خیابان مولوی غربی ');

  const stats = [
    // { id: 1, value: "۵۰هزار+", label: "اجاره‌کنندگان" },
    // { id: 2, value: "۱۰هزار+", label: "املاک" }
  ];

  const actions = ["اجاره", "خرید", "فروش"];

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          خرید، اجاره یا فروش ملک خود به راحتی
        </h1>

        <p className="header-description">
          یک پلتفرم عالی برای خرید، فروش یا حتی اجاره املاک شما بدون هیچ کمیسیونی
        </p>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              {/* <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p> */}
            </div>
          ))}
        </div>

        <div className="actions">
          {actions.map((action) => (
            <button
              key={action}
              className={`action-btn ${action === activeAction ? "active" : ""}`}
              onClick={() => setActiveAction(action)}
              aria-label={`فیلتر بر اساس ${action}`}
            >
              {action}
            </button>
          ))}
        </div>

        <div className="search-box">
          <div className="search-box__group">
            <div className="search-box__input-wrapper">
          
              <div className="search-box__input-container">
                <label htmlFor="location" className="search-box__floating-label">
             
                </label>
                <input
                  type="text"
                  id="location"
                  className="search-box__input"
                  placeholder="موقعیت را وارد کنید..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button 
            className="search-box__submit"
            aria-label="جستجوی املاک"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
          >
            <FaSearchLocation className="search-box__submit-icon" />
            جستجوی املاک
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;