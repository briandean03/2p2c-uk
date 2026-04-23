import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Main' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
    { id: 'blog', label: 'Blog' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#0A1E4D]/90 backdrop-blur-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-[90px]">
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => onNavigate('home')}>
            <img
              src="/logo-extra_large2-trans.png"
              alt="2p2c Logo"
              className="h-16 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-white leading-tight">2p2c</h1>
              <p className="text-xs text-white leading-tight">Project<br/>Management<br/>Consultants</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-1 py-2 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-[#7C4DFF]'
                    : 'text-white hover:text-[#7FD957]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="flex items-center gap-1 text-white text-sm">
              EN <ChevronDown size={16} />
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#7FD957]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#0A1E4D]/95 backdrop-blur-md border-t border-[#1a3a6d]">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${
                  currentPage === item.id
                    ? 'text-[#7C4DFF] bg-[#1a3a6d]'
                    : 'text-white hover:text-[#7FD957] hover:bg-[#1a3a6d]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
