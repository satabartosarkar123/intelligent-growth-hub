import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Foresight', href: '#foresight' },
    { label: 'Services', href: '#services' },
    { label: 'Publications', href: '#publications' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-2.5 glass-card-strong'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
            <span className="text-primary-foreground font-serif font-semibold text-base">T</span>
          </div>
          <span className="text-lg font-serif font-medium text-foreground tracking-tight">
            TDSC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-xs font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300 relative group uppercase"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <Link
            to="/foresight"
            className="text-xs font-medium tracking-wide text-accent hover:text-primary transition-colors duration-300 relative group uppercase"
          >
            Explore Foresight
            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="hero" size="sm" onClick={() => scrollToSection('#contact')}>
            Contact
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-foreground" />
          ) : (
            <Menu className="w-5 h-5 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-card-strong overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-80 py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-1.5 text-left"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/foresight"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm font-medium text-accent hover:text-primary transition-colors py-1.5"
          >
            Explore Foresight
          </Link>
          <Button variant="hero" size="sm" className="mt-2" onClick={() => scrollToSection('#contact')}>
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;