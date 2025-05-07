import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './lib/context/UserContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import About from './components/about/About';
import PropertyRegister from './pages/PropertyRegister/PropertyRegister';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import Blog from './pages/Blog/Blog';
import ForgotPassword from './pages/forgot/ForgotPassword';
import Users from './pages/Analytics/Users';
import Analytics from './pages/Analytics/Analytics';
import Settings from './pages/Analytics/Settings';
import Index from './pages/Analytics/Index';
import PWAInstallPrompt from './components/PWAInstallPrompt';

export default function App() {
  return (
    <UserProvider>
      <Router>
        <PWAInstallPrompt />
        <Routes>
          <Route path="/2pro-react/" element={<Home />} />
          <Route path="/2pro-react/login" element={<Login />} />
          <Route path="/2pro-react/register" element={<Register />} />
          <Route path="/2pro-react/about" element={<About />} />
          <Route path="/2pro-react/property-register" element={<PropertyRegister />} />
          <Route path="/2pro-react/terms" element={<TermsAndConditions />} />
          <Route path="/2pro-react/blog" element={<Blog />} />
          <Route path="/2pro-react/ForgotPassword" element={<ForgotPassword />} />
          
          {/* Protected Routes */}
          <Route path="/" element={
            <ProtectedRoute>
              <Index />
            </ProtectedRoute>
          } />
          <Route path="/users" element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          } />
          <Route path="/analytics" element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          } />
          <Route path="/settings" element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          } />
          <Route path="*" element={"404 Not Found"} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

