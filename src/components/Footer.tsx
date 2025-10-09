import { Link } from "react-router-dom";
import epidoteLogo from "@/assets/epidote-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex items-center">
            <img src={epidoteLogo} alt="Epidote Healthcare" className="w-[150px] h-auto" />
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Products
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Epidote Healthcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
