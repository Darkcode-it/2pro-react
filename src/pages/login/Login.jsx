import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    
    if (validateForm()) {
      setIsLoading(true);
      try {
        // اینجا می‌توانید به API خود متصل شوید
        // برای مثال:
        // const response = await fetch('your-api-endpoint/login', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(formData)
        // });
        
        // برای تست، از یک ایمیل و رمز عبور ثابت استفاده می‌کنیم
        if (formData.email === 'admin@example.com' && formData.password === '123456') {
          // ذخیره اطلاعات کاربر در localStorage
          localStorage.setItem('user', JSON.stringify({
            email: formData.email,
            isLoggedIn: true
          }));
          
          // هدایت به پنل کاربری
          navigate('/');
        } else {
          setLoginError('ایمیل یا رمز عبور اشتباه است');
        }
      } catch (error) {
        setLoginError('خطا در ورود به سیستم. لطفا دوباره تلاش کنید.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <h1 className="login-title">ورود به حساب کاربری</h1>

        {loginError && (
          <div className="error-message global-error">
            {loginError}
          </div>
        )}

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
              disabled={isLoading}
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
              disabled={isLoading}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              disabled={isLoading}
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
          disabled={!formData.email || !formData.password || isLoading}
        >
          {isLoading ? 'در حال ورود...' : 'ورود'}
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