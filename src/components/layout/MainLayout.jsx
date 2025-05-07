import React from 'react';
import { Sidebar } from './Sidebar';
import { Toaster } from '../ui/sonner';

const MainLayout = ({ children }) => {
  return (
    <div dir="rtl" className="flex min-h-screen bg-background">
      <div className="flex-1 md:mr-64 p-4 md:p-8 transition-all duration-300">
        <main className="container mx-auto max-w-7xl animate-fade-in">
          <div className="space-y-6">
            {children}
          </div>
        </main>
      </div>
      <Sidebar />
      <Toaster />
    </div>
  );
};

export default MainLayout;
