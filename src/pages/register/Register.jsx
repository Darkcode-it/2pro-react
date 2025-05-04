"use client"

import { useState } from "react"
import "./Register.css"
import { FaEye, FaEyeSlash, FaGoogle, FaGithub, FaApple } from "react-icons/fa"
import { useNavigate } from "react-router-dom"; // Add this import

export default function RegisterForm() {
  const navigate = useNavigate(); // Initialize navigate function
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    nationalId: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })

  // UI state
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [passwordStrength, setPasswordStrength] = useState(0)

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    let newValue = type === "checkbox" ? checked : value

    // Format phone number input
    if (name === "phoneNumber") {
      // Remove non-digit characters
      newValue = value.replace(/\D/g, "")
      // Limit to 11 digits
      newValue = newValue.substring(0, 11)
    }

    // Format national ID input
    if (name === "nationalId") {
      // Remove non-digit characters
      newValue = value.replace(/\D/g, "")
      // Limit to 10 digits
      newValue = newValue.substring(0, 10)
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }

    // Calculate password strength
    if (name === "password") {
      calculatePasswordStrength(newValue)
    }
  }

  // Calculate password strength
  const calculatePasswordStrength = (password) => {
    let strength = 0

    if (password.length >= 8) strength += 1
    if (/[A-Z]/.test(password)) strength += 1
    if (/[a-z]/.test(password)) strength += 1
    if (/[0-9]/.test(password)) strength += 1
    if (/[^A-Za-z0-9]/.test(password)) strength += 1

    setPasswordStrength(strength)
  }

  // Get strength label
  const getStrengthLabel = () => {
    if (passwordStrength === 0) return ""
    if (passwordStrength <= 2) return "Weak"
    if (passwordStrength <= 4) return "Medium"
    return "Strong"
  }

  // Get strength class
  const getStrengthClass = () => {
    if (passwordStrength === 0) return ""
    if (passwordStrength <= 2) return "weak"
    if (passwordStrength <= 4) return "medium"
    return "strong"
  }

  // Validate Iranian National ID
  const validateIranianNationalId = (nationalId) => {
    if (!nationalId) return false
    if (nationalId.length !== 10) return false

    // Check if all digits are the same
    const allDigitsSame = /^(\d)\1{9}$/.test(nationalId)
    if (allDigitsSame) return false

    // Iranian National ID validation algorithm
    const check = Number.parseInt(nationalId.charAt(9))
    let sum = 0
    for (let i = 0; i < 9; i++) {
      sum += Number.parseInt(nationalId.charAt(i)) * (10 - i)
    }
    const remainder = sum % 11
    return (remainder < 2 && check === remainder) || (remainder >= 2 && check === 11 - remainder)
  }

  // Validate Iranian Phone Number
  const validateIranianPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return false
    // Iranian mobile numbers start with 09 and are 11 digits
    return /^09\d{9}$/.test(phoneNumber)
  }

  // Validate form
  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "نام و نام خانوادگی الزامی است"
    }

    if (!formData.email.trim()) {
      newErrors.email = "ایمیل الزامی است"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "فرمت ایمیل نامعتبر است"
    }

    if (!formData.nationalId) {
      newErrors.nationalId = "کد ملی الزامی است"
    } else if (!validateIranianNationalId(formData.nationalId)) {
      newErrors.nationalId = "کد ملی نامعتبر است"
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "شماره موبایل الزامی است"
    } else if (!validateIranianPhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد"
    }

    if (!formData.password) {
      newErrors.password = "رمز عبور الزامی است"
    } else if (formData.password.length < 8) {
      newErrors.password = "رمز عبور باید حداقل ۸ کاراکتر باشد"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "تکرار رمز عبور مطابقت ندارد"
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "پذیرش قوانین و مقررات الزامی است"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form submitted successfully:", formData)
      // Here you would typically call your registration API

      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        nationalId: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
      })

      alert("Registration successful!")
    } catch (error) {
      console.error("Registration failed:", error)
      setErrors({ submit: "Registration failed. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  // Handle social login
  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`)
    // Implement social login logic here
  }

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h1>ایجاد حساب کاربری</h1>
          <p>لطفا اطلاعات زیر را تکمیل کنید</p>
        </div>

        <div className="register-content">
          <div className="social-login-column">
            <h3 className="column-title">ورود با شبکه‌های اجتماعی</h3>
            <div className="social-login">
              <button type="button" className="social-btn google" onClick={() => handleSocialLogin("Google")}>
                <FaGoogle /> ادامه با گوگل
              </button>
              {/* <button type="button" className="social-btn github" onClick={() => handleSocialLogin("GitHub")}>
                <FaGithub /> ادامه با گیت‌هاب
              </button> */}
              <button type="button" className="social-btn apple" onClick={() => handleSocialLogin("Apple")}>
                <FaApple /> ادامه با اپل
              </button>
            </div>
          </div>

          <div className="divider-vertical">
            <span>یا</span>
          </div>

          <div className="email-register-column">
            <h3 className="column-title">ثبت‌نام با ایمیل</h3>
            <form onSubmit={handleSubmit} className="register-form">
              <div className="form-group">
                <label htmlFor="fullName">   </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="نام و نام خانوادگی خود را وارد کنید"
                  className={`input-box ${errors.fullName ? "error" : ""}`}
                  disabled={isLoading}
                  autoComplete="name"
                />
                {errors.fullName && <span className="error-message">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email"> </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ایمیل خود را وارد کنید"
                  className={`input-box ${errors.email ? "error" : ""}`}
                  disabled={isLoading}
                  autoComplete="email"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nationalId"> </label>
                  <input
                    type="text"
                    id="nationalId"
                    name="nationalId"
                    value={formData.nationalId}
                    onChange={handleChange}
                    placeholder="کد ملی ۱۰ رقمی"
                    className={`input-box ${errors.nationalId ? "error" : ""}`}
                    disabled={isLoading}
                    autoComplete="off"
                  />
                  {errors.nationalId && <span className="error-message">{errors.nationalId}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber"> </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹لطفا با کیبورد انگلیسی وارد کنید"
                    className={`input-box ${errors.phoneNumber ? "error" : ""}`}
                    disabled={isLoading}
                    autoComplete="tel"
                  />
                  {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="password"> </label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="رمز عبور خود را وارد کنید"
                    className={`input-box ${errors.password ? "error" : ""}`}
                    disabled={isLoading}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                {formData.password && (
                  <div className="password-strength">
                    <div className="strength-bars">
                      {[1, 2, 3, 4, 5].map((index) => (
                        <div
                          key={index}
                          className={`strength-bar ${index <= passwordStrength ? getStrengthClass() : ""}`}
                        ></div>
                      ))}
                    </div>
                    <span className={`strength-text ${getStrengthClass()}`}>{getStrengthLabel()}</span>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">  </label>
                <div className="password-input-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="رمز عبور خود را مجددا وارد کنید"
                    className={`input-box ${errors.confirmPassword ? "error" : ""}`}
                    disabled={isLoading}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="toggle-password"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
              </div>

              <div className="form-group checkbox-group">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <span className="checkmark"></span>
                  <span>
                    با <a href="/2pro-react/TermsAndConditions">قوانین و مقررات</a> و <a href="/privacy">حریم خصوصی</a> موافقم
                  </span>
                </label>
                {errors.agreeToTerms && <span className="error-message">{errors.agreeToTerms}</span>}
              </div>

              {errors.submit && <div className="submit-error">{errors.submit}</div>}

              <button type="submit" className="register-btn" disabled={isLoading}>
                {isLoading ? <span className="spinner"></span> : "ایجاد حساب کاربری"}
              </button>
            </form>
          </div>
        </div>

        <div className="login-link">
          قبلاً ثبت‌نام کرده‌اید؟ <a href="/2pro-react/login">ورود به حساب کاربری</a>
        </div>
      </div>
    </div>
  )
}
