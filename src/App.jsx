import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import About from './components/about/About';
import PropertyRegister from './pages/PropertyRegister/PropertyRegister';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';
import Blog from './pages/Blog/Blog';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/2pro-react/" element={<Home />} />
        <Route path="/2pro-react/login" element={<Login />} />
        <Route path="/2pro-react/register" element={<Register />} />
        <Route path="/2pro-react/about" element={<About />} />
        <Route path="/2pro-react/property-register" element={<PropertyRegister />} />
        <Route path="/2pro-react/terms" element={<TermsAndConditions />} />
        <Route path="/2pro-react/blog" element={<Blog />} />
        <Route path="*" element={"404 Not Found"} />
      </Routes>
    </Router>
  );
}

