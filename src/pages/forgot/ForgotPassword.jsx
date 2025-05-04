import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!email) {
      setError('لطفا آدرس ایمیل خود را وارد کنید');
      return;
    }

    // اعتبارسنجی ساده ایمیل
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('لطفا یک آدرس ایمیل معتبر وارد کنید');
      return;
    }

    try {
      setIsLoading(true);
      // شبیه‌سازی درخواست API
      await new Promise(resolve => setTimeout(resolve, 2000));

      // در صورت موفقیت
      setSuccessMessage('لینک بازنشانی رمز عبور به ایمیل شما ارسال شد!');
      setEmail('');
    } catch (err) {
      setError('ارسال لینک ناموفق بود. لطفا مجددا تلاش کنید.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            فراموشی رمز عبور
          </h1>
          <p className="text-gray-600">
            ایمیل خود را وارد کنید تا لینک بازنشانی رمز عبور ارسال شود
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              ایمیل
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="ایمیل خود را وارد کنید"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          {successMessage && (
            <p className="text-green-500 text-sm">{successMessage}</p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-300"
          >
            {isLoading ? 'در حال پردازش...' : 'ارسال لینک بازنشانی'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            رمز عبور را به خاطر دارید؟{' '}
            <Link
              to="/2pro-react/login"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              ورود به سیستم
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;