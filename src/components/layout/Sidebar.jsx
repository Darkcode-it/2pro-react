import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import {
  LayoutDashboard,
  Users,
  BarChart,
  Settings,
  Menu,
  X,
  Home
} from 'lucide-react';
import { Button } from '../ui/button';

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const navItems = [
    {
      title: 'داشبورد',
      icon: LayoutDashboard,
      href: '/',
    },
    {
      title: 'کاربران',
      icon: Users,
      href: '/users',
    },
    {
      title: 'آمار',
      icon: BarChart,
      href: '/analytics',
    },
    {
      title: 'تنظیمات',
      icon: Settings,
      href: '/settings',
    },
  ];
  
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {/* Mobile Menu Toggle */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          className="bg-white shadow-md hover:bg-gray-100"
          onClick={toggleSidebar}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isMobile && expanded && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setExpanded(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-40 h-screen bg-admin-dark-blue text-white transition-all duration-300 ease-in-out",
          expanded ? "w-64" : "w-0 md:w-20",
          isMobile ? (expanded ? "translate-x-0" : "translate-x-full") : "translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white/70 hover:text-white hover:bg-white/10"
              onClick={toggleSidebar}
            >
              {expanded ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <div className="flex items-center gap-3">
              {expanded && <h1 className="text-lg font-semibold">پنل مدیریت</h1>}
              <div className="bg-admin-accent-purple p-2 rounded-md">
                <Home className="h-5 w-5 text-white" />
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <li key={item.title}>
                    <Link
                      to={item.href}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-md transition-all hover:bg-white/10",
                        isActive && "bg-admin-accent-purple bg-opacity-20 text-admin-accent-purple"
                      )}
                      onClick={() => isMobile && setExpanded(false)}
                    >
                      <item.icon className={cn("h-5 w-5 flex-shrink-0", isActive && "text-admin-accent-purple")} />
                      {expanded && <span className="truncate">{item.title}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User Profile */}
          {expanded && (
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">کاربر ادمین</p>
                  <p className="text-xs text-gray-400 truncate">admin@example.com</p>
                </div>
                <div className="bg-admin-light-purple rounded-full p-2 flex-shrink-0">
                  <Users className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
