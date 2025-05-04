
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = 'ایمیل الزامی است';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'فرمت ایمیل نامعتبر است';
    }

    if (!formData.password) {
      newErrors.password = 'رمز عبور الزامی است';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // منطق ورود اینجا پیاده‌سازی شود
      console.log('داده‌های فرم:', formData);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <h1 className="login-title">ورود به حساب کاربری</h1>

        <div className="form-group">
          <label htmlFor="email">ایمیل</label>
          <div className={`input-wrapper ${errors.email ? 'input-error' : ''}`}>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="custom-input"
              autoComplete="email"
            />
          </div>
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">رمز عبور</label>
          <div className={`input-wrapper password-input ${errors.password ? 'input-error' : ''}`}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="custom-input"
              autoComplete="current-password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <FaEyeSlash className="eye-icon" />
              ) : (
                <FaEye className="eye-icon" />
              )}
            </button>
          </div>
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>

        <button
          type="submit"
          className="login-button primary-btn"
          disabled={!formData.email || !formData.password}
        >
          ورود
        </button>

        <div className="login-links">
          <Link to="/2pro-react/ForgotPassword" className="link-text">
            رمز عبور را فراموش کرده‌اید؟
          </Link>
          <Link to="/2pro-react/Register" className="link-text">
            حساب کاربری ندارید؟ ثبت نام
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;