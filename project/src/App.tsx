import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import ChatButton from './components/ChatButton';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ProjectManagement from './pages/ProjectManagement';
import ProjectPlanning from './pages/ProjectPlanning';
import ExpertWitness from './pages/ExpertWitness';
import ContractAdmin from './pages/ContractAdmin';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'services':
        return <Services onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'blog':
        return <Blog />;
      case 'project-management':
        return <ProjectManagement />;
      case 'project-planning':
        return <ProjectPlanning />;
      case 'expert-witness':
        return <ExpertWitness />;
      case 'contract-admin':
        return <ContractAdmin />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <ChatButton />
      <ScrollToTop />
    </div>
  );
}

export default App;
