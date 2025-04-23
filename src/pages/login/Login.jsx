

import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // منطق ورود اینجا پیاده‌سازی شود
    console.log('داده‌های فرم:', formData);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">ورود به حساب کاربری</h1>
        
        <div className="form-group">
          <label htmlFor="email">ایمیل</label>
          <div className="input-wrapper">
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
              className="custom-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">رمز عبور</label>
          <div className="input-wrapper password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
              className="custom-input"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'پنهان' : 'نمایش'}
            </button>
          </div>
        </div>

        <button type="submit" className="login-button primary-btn">
          ورود
        </button>

        <div className="login-links">
          <a href="#forgot" className="link-text">رمز عبور را فراموش کرده‌اید؟</a>
          <Link to="/2pro-react/Register" className="link-text">حساب کاربری ندارید؟ ثبت نام</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;