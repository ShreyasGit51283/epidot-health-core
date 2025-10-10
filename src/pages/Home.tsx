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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Our Solutions</h2>
        </div>

        <div className="space-y-20">
          {/* Vaccine Integrity Testing */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h4 className="text-2xl font-medium mb-4">Vaccine Integrity Testing</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ensure vaccine quality and potency with our advanced molecular testing platform. 
                Our technology provides rapid, accurate results to maintain the highest standards 
                in vaccine storage and distribution.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <img 
                src={vaccineImage} 
                alt="Vaccine Integrity Testing" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Infection Detection */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h4 className="text-2xl font-medium mb-4">Infection Detection</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Rapid and accurate detection of infections at the point of care. 
                Our diagnostic solutions deliver results in minutes, enabling faster treatment 
                decisions and better patient outcomes.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <img 
                src={infectionImage} 
                alt="Infection Detection" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Pathogen Testing */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h4 className="text-2xl font-medium mb-4">Pathogen Testing</h4>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive pathogen identification with unprecedented speed and accuracy. 
                Our advanced testing platform identifies a wide range of pathogens, helping 
                healthcare providers make informed treatment decisions quickly.
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-soft">
              <img 
                src={pathogenImage} 
                alt="Pathogen Testing" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Transforming Diagnostics</h2>
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
              <h4 className="text-xl font-medium mb-2">Speed</h4>
              <p className="text-muted-foreground">Results in minutes, not hours</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card shadow-soft">
              <Target className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h4 className="text-xl font-medium mb-2">Accuracy</h4>
              <p className="text-muted-foreground">Precision you can trust</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card shadow-soft">
              <DollarSign className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h4 className="text-xl font-medium mb-2">Cost-Effective</h4>
              <p className="text-muted-foreground">Affordable healthcare solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">Ready to Get Started?</h2>
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
