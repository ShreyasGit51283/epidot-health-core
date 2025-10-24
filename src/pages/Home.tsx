import {
  ArrowRight,
  Zap,
  Target,
  Gauge,
  IndianRupee,
  CheckCircle2,
  Rocket,
  TrendingUp,
  Crosshair,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroPoster from "@/assets/hero-video-poster.jpg";
import precisionDetection from "@/assets/precision-detection.jpg";
import realtimeResults from "@/assets/realtime-results.jpg";
import earlyIntervention from "@/assets/early-intervention.jpg";
import serumLogo from "@/assets/serum-institute-logo.png";
import whoLogo from "@/assets/who-logo.png";
import cdcLogo from "@/assets/cdc-logo.png";

interface HomeProps {
  onContactClick: () => void;
}

export const Home = ({ onContactClick }: HomeProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="py-24 lg:py-32 container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-h1 mb-6 text-foreground">
            Cutting edge Genomics for{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              saving lives
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto font-normal leading-relaxed">
            Epidote Tech combines genomics and machine learning to tackle the challenges of antibiotic resistance
          </p>

          {/* Hero Image in Curved Container */}
          <div className="relative max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-large border border-border/50 rounded-3xl aspect-video">
              <img src={heroPoster} alt="Epidote Healthcare Laboratory" className="w-full h-full object-cover" />
            </Card>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="gradient-primary text-white shadow-medium hover:shadow-large transition-all rounded-full px-8 font-medium"
            >
              Learn More
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Decorative Element */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <svg
          className="w-full max-w-md mx-auto opacity-20"
          viewBox="0 0 200 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="100"
            cy="50"
            r="30"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="4 4"
            className="text-primary"
          />
          <circle cx="100" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
          <circle cx="100" cy="50" r="4" fill="currentColor" className="text-accent" />
          <line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <line x1="130" y1="50" x2="170" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <circle cx="30" cy="50" r="3" fill="currentColor" className="text-secondary" />
          <circle cx="170" cy="50" r="3" fill="currentColor" className="text-secondary" />
        </svg>
      </div>

      {/* Product Highlights */}
      <section id="product" className="py-24 container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-h2 mb-6">AntiPath-ML, a self learning antibiotic resistance screening platform</h2>
          <p className="text-lg text-muted-foreground font-normal max-w-3xl mx-auto mb-12">
            AntiPath-ML achieves high accuracy across all major AMR pathogens. It learns continuously, improving with
            every dataset. Reports are generated instantly. Costs are reduced significantly. Our goal is simple: better
            data, faster decisions. Our systems enable large-scale screening and vaccine integrity testing, optimized
            for use across low- and middle-income, high-burden regions, where diagnostic access is most critical.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20 shadow-soft hover:shadow-medium transition-all">
              <span className="text-secondary font-medium flex items-center gap-2">
                <Rocket className="w-4 h-4" strokeWidth={2} />
                Rapid
              </span>
            </div>
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20 shadow-soft hover:shadow-medium transition-all">
              <span className="text-secondary font-medium flex items-center gap-2">
                <TrendingUp className="w-4 h-4" strokeWidth={2} />
                Scalable
              </span>
            </div>
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20 shadow-soft hover:shadow-medium transition-all">
              <span className="text-secondary font-medium flex items-center gap-2">
                <Crosshair className="w-4 h-4" strokeWidth={2} />
                Accurate
              </span>
            </div>
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20 shadow-soft hover:shadow-medium transition-all">
              <span className="text-secondary font-medium flex items-center gap-2">
                <Package className="w-4 h-4" strokeWidth={2} />
                Portable
              </span>
            </div>
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-secondary/5 border border-secondary/20 shadow-soft hover:shadow-medium transition-all">
              <span className="text-secondary font-medium flex items-center gap-2">
                <IndianRupee className="w-4 h-4" strokeWidth={2} />
                Affordable
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto space-y-32">
          {/* Precision Detection */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-6">
                <Target className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-h3 mb-4">Precision Detection</h3>
              <p className="text-lg text-muted-foreground font-normal leading-relaxed">
                Our platform utilizes genomic data and adaptive machine learning to detect antimicrobial resistance.
              </p>
            </div>
            <div className="relative">
              <Card className="overflow-hidden shadow-soft border border-border/50 rounded-3xl aspect-[4/3]">
                <img
                  src={precisionDetection}
                  alt="Precision Detection Platform"
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="flex justify-center py-8">
            <svg className="w-32 h-32 opacity-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
              <circle
                cx="50"
                cy="50"
                r="25"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="3 3"
                className="text-primary"
              />
              <line x1="50" y1="15" x2="50" y2="35" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              <line x1="50" y1="65" x2="50" y2="85" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              <circle cx="50" cy="50" r="5" fill="currentColor" className="text-primary" />
            </svg>
          </div>

          {/* Real-Time Results */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-6">
                <Zap className="w-6 h-6 text-secondary" strokeWidth={1.5} />
              </div>
              <h3 className="text-h3 mb-4">Real-Time Results</h3>
              <p className="text-lg text-muted-foreground font-normal leading-relaxed">
                Get faster, more scalable, and more affordable results in real time, surpassing conventional methods.
              </p>
            </div>
            <div className="relative">
              <Card className="overflow-hidden shadow-soft border border-border/50 rounded-3xl aspect-[4/3]">
                <img src={realtimeResults} alt="Real-Time Analytics" className="w-full h-full object-cover" />
              </Card>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="flex justify-center py-8">
            <svg className="w-32 h-32 opacity-20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="50" r="8" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
              <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <circle cx="70" cy="50" r="8" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
              <line x1="38" y1="50" x2="42" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <line x1="58" y1="50" x2="62" y2="50" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
              <circle cx="30" cy="50" r="2" fill="currentColor" className="text-accent" />
              <circle cx="50" cy="50" r="2" fill="currentColor" className="text-primary" />
              <circle cx="70" cy="50" r="2" fill="currentColor" className="text-secondary" />
            </svg>
          </div>

          {/* Early Intervention */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-6">
                <IndianRupee className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-h3 mb-4">Early Intervention</h3>
              <p className="text-lg text-muted-foreground font-normal leading-relaxed">
                Timely and accurate detection enables crucial early intervention, improving patient outcomes.
              </p>
            </div>
            <div className="relative">
              <Card className="overflow-hidden shadow-soft border border-border/50 rounded-3xl aspect-[4/3]">
                <img src={earlyIntervention} alt="Early Detection System" className="w-full h-full object-cover" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section id="customers" className="py-24" style={{ backgroundColor: "#F8F8F8" }}>
        <div className="max-w-5xl mx-auto text-center px-4 lg:px-8">
          <h3 className="text-4xl md:text-5xl font-normal mb-16 tracking-tight">Trusted by Leading Organizations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
            <div className="flex items-center justify-center h-24">
              <img
                src={serumLogo}
                alt="Serum Institute of India"
                className="max-h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center h-24">
              <img
                src={whoLogo}
                alt="World Health Organization"
                className="max-h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex items-center justify-center h-24">
              <img
                src={cdcLogo}
                alt="Centers for Disease Control and Prevention"
                className="max-h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h3 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight">Get in Touch</h3>
            <p className="text-lg text-muted-foreground font-normal max-w-2xl mx-auto">
              Ready to revolutionize your approach to antimicrobial resistance detection? Let's discuss how AntiPath-ML
              can transform your diagnostic capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 shadow-soft border border-border/50 hover:shadow-medium transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-h3 mb-2">Schedule a Demo</h3>
              <p className="text-sm text-muted-foreground">See AntiPath-ML in action</p>
            </Card>

            <Card className="p-8 shadow-soft border border-border/50 hover:shadow-medium transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-4">
                <Target className="w-6 h-6 text-secondary" strokeWidth={1.5} />
              </div>
              <h3 className="text-h3 mb-2">Partner With Us</h3>
              <p className="text-sm text-muted-foreground">Collaborate on research</p>
            </Card>

            <Card className="p-8 shadow-soft border border-border/50 hover:shadow-medium transition-all">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                <Gauge className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-h3 mb-2">Request Access</h3>
              <p className="text-sm text-muted-foreground">Join early adopters</p>
            </Card>
          </div>

          <Button
            size="lg"
            className="gradient-primary text-white shadow-medium hover:shadow-large transition-all rounded-full px-8 font-medium"
            onClick={onContactClick}
          >
            Get in Touch
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};
