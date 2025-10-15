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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
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
          <div className="hidden md:flex items-center gap-8">
            <Link to="/products" className="text-foreground/80 hover:text-foreground transition-colors font-normal">
              Products
            </Link>
            <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors font-normal">
              About us
            </Link>
            <Button 
              onClick={onContactClick}
              variant="outline"
              className="rounded-full border-border hover:gradient-primary hover:text-white hover:border-transparent transition-all font-normal hover:shadow-medium"
            >
              Get in touch
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
              <Link to="/products" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 text-foreground/80 hover:text-foreground transition-colors">
                Products
              </Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 text-foreground/80 hover:text-foreground transition-colors">
                About us
              </Link>
              <Button 
                onClick={() => {
                  onContactClick();
                  setIsMenuOpen(false);
                }}
                variant="outline"
                className="rounded-full mx-4 hover:gradient-primary hover:text-white hover:border-transparent transition-all hover:shadow-medium"
              >
                Get in touch
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
