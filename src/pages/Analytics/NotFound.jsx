
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50" dir="rtl">
      <div className="text-center max-w-md px-6 py-10 bg-white rounded-lg shadow-md">
        <h1 className="text-7xl font-bold text-admin-accent-purple mb-4">404</h1>
        <p className="text-2xl font-semibold mb-2">صفحه یافت نشد</p>
        <p className="text-gray-600 mb-6">
          صفحه‌ای که دنبال آن هستید وجود ندارد یا منتقل شده است.
        </p>
        <Button 
          asChild
          className="bg-admin-accent-purple hover:bg-admin-light-purple"
        >
          <a href="/">بازگشت به داشبورد</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
