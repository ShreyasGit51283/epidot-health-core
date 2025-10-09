import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-soft transition-transform group-hover:scale-105">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Epidot Health
            </span>
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
            <Link to="/products">
              <Button 
                variant="ghost"
                className={`${isActive('/products') ? 'bg-muted' : ''} hover:bg-muted transition-colors`}
              >
                Products
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
              <Link to="/products" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="ghost"
                  className={`w-full justify-start ${isActive('/products') ? 'bg-muted' : ''}`}
                >
                  Products
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
