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
          ? 'py-3 glass-card-strong'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-olive flex items-center justify-center shadow-glass group-hover:shadow-glow transition-all duration-300">
            <span className="text-primary-foreground font-serif font-bold text-lg">T</span>
          </div>
          <span className="text-xl font-serif font-semibold text-foreground tracking-tight">
            TDSC
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-olive-dark transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-olive group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          <Link
            to="/foresight"
            className="text-sm font-medium text-olive-dark hover:text-olive transition-colors duration-300 relative group"
          >
            Explore Foresight
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-olive group-hover:w-full transition-all duration-300" />
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="hero" size="lg" onClick={() => scrollToSection('#contact')}>
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-card-strong overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-96 py-6' : 'max-h-0 py-0'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-base font-medium text-foreground hover:text-olive-dark transition-colors py-2 text-left"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/foresight"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium text-olive-dark hover:text-olive transition-colors py-2"
          >
            Explore Foresight
          </Link>
          <Button variant="hero" className="mt-4" onClick={() => scrollToSection('#contact')}>
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
