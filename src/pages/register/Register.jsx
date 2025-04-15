import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'; // استفاده از همان فایل استایل لاگین

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // منطق ثبت نام اینجا پیاده‌سازی شود
    console.log('داده‌های ثبت نام:', formData);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">ایجاد حساب کاربری</h1>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">نام</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                required
                className="custom-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="lastName">نام خانوادگی</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                required
                className="custom-input"
              />
            </div>
          </div>
        </div>

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
          <label htmlFor="phone">شماره تماس</label>
          <div className="input-wrapper">
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              required
              className="custom-input"
            />
          </div>
        </div>

        <div className="form-row">
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

          <div className="form-group">
            <label htmlFor="confirmPassword">تکرار رمز عبور</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                required
                className="custom-input"
              />
            </div>
          </div>
        </div>

        <div className="form-group terms">
          <label className="terms-label">
            <input type="checkbox" required />
            <span>با <a href="#terms">شرایط استفاده</a> موافقم</span>
          </label>
        </div>

        <button type="submit" className="login-button primary-btn">
          ثبت نام
        </button>

        <div className="login-links">
          <span>قبلا ثبت نام کرده‌اید؟</span>
          <Link to="/2pro-react/login" className="link-text">ورود به حساب</Link>
        </div>
        <div className="login-links">
          <Link to="/2pro-react/property-register" className="link-text">آیا میخواهید بنگاه را ثبت کنید؟</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;