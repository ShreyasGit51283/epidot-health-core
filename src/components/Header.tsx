import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import epidoteLogo from "@/assets/epidote-logo.png";

interface HeaderProps {
  onContactClick: () => void;
}

export const Header = ({ onContactClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={epidoteLogo} 
              alt="Epidote Healthcare" 
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button 
                variant="ghost" 
                className={`${isActive('/') ? 'bg-muted' : ''} hover:bg-muted transition-colors`}
              >
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant="ghost"
                className={`${isActive('/about') ? 'bg-muted' : ''} hover:bg-muted transition-colors`}
              >
                About
              </Button>
            </Link>
            <Button 
              onClick={onContactClick}
              className="ml-4 gradient-primary text-white shadow-soft hover:shadow-medium transition-all"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-2">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="ghost" 
                  className={`w-full justify-start ${isActive('/') ? 'bg-muted' : ''}`}
                >
                  Home
                </Button>
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="ghost"
                  className={`w-full justify-start ${isActive('/about') ? 'bg-muted' : ''}`}
                >
                  About
                </Button>
              </Link>
              <Button 
                onClick={() => {
                  onContactClick();
                  setIsMenuOpen(false);
                }}
                className="gradient-primary text-white"
              >
                Contact
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
