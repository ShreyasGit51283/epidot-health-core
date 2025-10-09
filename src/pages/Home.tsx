import { ArrowRight, Zap, Target, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroPoster from "@/assets/hero-video-poster.jpg";
import vaccineImage from "@/assets/vaccine-testing.jpg";
import infectionImage from "@/assets/infection-detection.jpg";
import pathogenImage from "@/assets/pathogen-testing.jpg";

interface HomeProps {
  onContactClick: () => void;
}

export const Home = ({ onContactClick }: HomeProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroPoster} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-light mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Revolutionary Diagnostic Solutions
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fast, accurate, and cost-effective testing for vaccine integrity, infection detection, and pathogen identification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <Button size="lg" className="gradient-primary text-white shadow-medium hover:shadow-large transition-all">
                  Explore Products
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={onContactClick}
                className="border-2 hover:bg-muted"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section id="products" className="py-20 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Our Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Advanced diagnostic technology designed for the modern healthcare landscape
            </p>
          </div>

          {/* Right Column - Cards */}
          <div className="space-y-6">
            {/* Vaccine Integrity */}
            <Card className="overflow-hidden shadow-soft hover:shadow-medium transition-all group">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img 
                    src={vaccineImage} 
                    alt="Vaccine Integrity Testing" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Vaccine Integrity Testing</h3>
                  <p className="text-muted-foreground mb-4">
                    Ensure vaccine quality and potency with our advanced molecular testing platform.
                  </p>
                  <Link to="/products#vaccine">
                    <Button variant="ghost" className="group/btn">
                      Learn More
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Infection Detection */}
            <Card className="overflow-hidden shadow-soft hover:shadow-medium transition-all group">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img 
                    src={infectionImage} 
                    alt="Infection Detection" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Infection Detection</h3>
                  <p className="text-muted-foreground mb-4">
                    Rapid and accurate detection of infections at the point of care.
                  </p>
                  <Link to="/products#infection">
                    <Button variant="ghost" className="group/btn">
                      Learn More
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Pathogen Testing */}
            <Card className="overflow-hidden shadow-soft hover:shadow-medium transition-all group">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img 
                    src={pathogenImage} 
                    alt="Pathogen Testing" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">Pathogen Testing</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive pathogen identification with unprecedented speed.
                  </p>
                  <Link to="/products#pathogen">
                    <Button variant="ghost" className="group/btn">
                      Learn More
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Transforming Diagnostics</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Founded in 2019, Epidote Healthcare pivoted from initial research to focus on revolutionary diagnostic solutions. 
              Our mission is to make advanced testing accessible, affordable, and rapid.
            </p>
            <Link to="/about">
              <Button size="lg" className="gradient-primary text-white shadow-soft hover:shadow-medium transition-all">
                Our Story
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-2xl bg-card shadow-soft">
              <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-semibold mb-2">Speed</h3>
              <p className="text-muted-foreground">Results in minutes, not hours</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card shadow-soft">
              <Target className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-2xl font-semibold mb-2">Accuracy</h3>
              <p className="text-muted-foreground">Precision you can trust</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card shadow-soft">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-2xl font-semibold mb-2">Cost-Effective</h3>
              <p className="text-muted-foreground">Affordable healthcare solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contact us to learn more about our diagnostic solutions and how we can help transform your healthcare operations.
          </p>
          <Button 
            size="lg" 
            onClick={onContactClick}
            className="gradient-primary text-white shadow-medium hover:shadow-large transition-all"
          >
            Contact Us
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};
