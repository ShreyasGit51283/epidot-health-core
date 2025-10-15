import { ArrowRight, Zap, Target, Gauge, IndianRupee, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroPoster from "@/assets/hero-video-poster.jpg";
import precisionDetection from "@/assets/precision-detection.jpg";
import realtimeResults from "@/assets/realtime-results.jpg";
import earlyIntervention from "@/assets/early-intervention.jpg";

interface HomeProps {
  onContactClick: () => void;
}

export const Home = ({ onContactClick }: HomeProps) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={heroPoster} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-normal mb-6 tracking-tight text-foreground">
              Precision Genomics for a <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Healthier Future</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-normal">
              Epidote Tech combines genomics and machine learning to address antibiotic resistance — challenges of modern medicine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white shadow-medium hover:shadow-large transition-all rounded-full px-8 font-medium">
                Explore AntiPath-ML
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section id="product" className="py-24 container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight">Your Genomic Intelligence Platform</h2>
          <p className="text-2xl font-light mb-8">AntiPath-ML: Fast, Precise, Predictive.</p>
          <p className="text-lg text-muted-foreground font-normal max-w-3xl mx-auto mb-10">
            An AMR screening platform, A real-time genomics-based, ML empowered, designed for India and other LMICs.
          </p>
          
          <div className="mb-20">
            <h3 className="text-xl font-medium mb-6">Features of AntiPath</h3>
            <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" strokeWidth={1.5} />
                Rapid Scalable
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" strokeWidth={1.5} />
                Accurate
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" strokeWidth={1.5} />
                Portable
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" strokeWidth={1.5} />
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
              <h3 className="text-3xl font-normal mb-4 tracking-tight">Precision Detection</h3>
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

          {/* Real-Time Results */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 mb-6">
                <Zap className="w-6 h-6 text-secondary" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-normal mb-4 tracking-tight">Real-Time Results</h3>
              <p className="text-lg text-muted-foreground font-normal leading-relaxed">
                Get faster, more scalable, and more affordable results in real time, surpassing conventional methods.
              </p>
            </div>
            <div className="relative">
              <Card className="overflow-hidden shadow-soft border border-border/50 rounded-3xl aspect-[4/3]">
                <img 
                  src={realtimeResults} 
                  alt="Real-Time Analytics" 
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>

          {/* Early Intervention */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-6">
                <IndianRupee className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-normal mb-4 tracking-tight">Early Intervention</h3>
              <p className="text-lg text-muted-foreground font-normal leading-relaxed">
                Timely and accurate detection enables crucial early intervention, improving patient outcomes.
              </p>
            </div>
            <div className="relative">
              <Card className="overflow-hidden shadow-soft border border-border/50 rounded-3xl aspect-[4/3]">
                <img 
                  src={earlyIntervention} 
                  alt="Early Detection System" 
                  className="w-full h-full object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Epidote Advantage */}
      <section id="advantage" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-normal mb-8 tracking-tight">Technology That Moves With Intelligence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-normal">
              AntiPath-ML achieves high accuracy across all major AMR pathogens. It learns continuously, improving with every dataset. 
              Reports are generated instantly. Costs are reduced significantly. Our goal is simple: better data, faster decisions. 
              Our systems enable large-scale screening and vaccine integrity testing, optimized for use across low- and middle-income, 
              high-burden regions, where diagnostic access is most critical.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
