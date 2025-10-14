import { ArrowRight, Zap, Target, Gauge, IndianRupee, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroPoster from "@/assets/hero-video-poster.jpg";

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
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-normal mb-5 tracking-tight">AntiPath-ML: Fast, Precise, Predictive</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-normal">
            An AMR screening platform, A real-time genomics-based, ML empowered, designed for India and other LMICs.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-24">
          <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all border border-border/50 bg-card">
            <Zap className="w-8 h-8 mx-auto mb-4 text-primary" strokeWidth={1.5} />
            <h4 className="text-base font-medium">Rapid</h4>
          </Card>
          <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all border border-border/50 bg-card">
            <Target className="w-8 h-8 mx-auto mb-4 text-primary" strokeWidth={1.5} />
            <h4 className="text-base font-medium">Scalable</h4>
          </Card>
          <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all border border-border/50 bg-card">
            <CheckCircle2 className="w-8 h-8 mx-auto mb-4 text-primary" strokeWidth={1.5} />
            <h4 className="text-base font-medium">Accurate</h4>
          </Card>
          <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all border border-border/50 bg-card">
            <Gauge className="w-8 h-8 mx-auto mb-4 text-primary" strokeWidth={1.5} />
            <h4 className="text-base font-medium">Portable</h4>
          </Card>
          <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all border border-border/50 bg-card">
            <IndianRupee className="w-8 h-8 mx-auto mb-4 text-primary" strokeWidth={1.5} />
            <h4 className="text-base font-medium">Affordable</h4>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="p-10 shadow-soft hover:shadow-medium transition-all border border-border/50 bg-card">
            <h4 className="text-xl font-medium mb-4">Precision Detection</h4>
            <p className="text-muted-foreground leading-relaxed font-normal">
              Our platform utilizes genomic data and adaptive machine learning to detect antimicrobial resistance.
            </p>
          </Card>
          <Card className="p-10 shadow-soft hover:shadow-medium transition-all border border-border/50 bg-card">
            <h4 className="text-xl font-medium mb-4">Real-Time Results</h4>
            <p className="text-muted-foreground leading-relaxed font-normal">
              Get faster, more scalable, and more affordable results in real time, surpassing conventional methods.
            </p>
          </Card>
          <Card className="p-10 shadow-soft hover:shadow-medium transition-all border border-border/50 bg-card">
            <h4 className="text-xl font-medium mb-4">Early Intervention</h4>
            <p className="text-muted-foreground leading-relaxed font-normal">
              Timely and accurate detection enables crucial early intervention, improving patient outcomes.
            </p>
          </Card>
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
