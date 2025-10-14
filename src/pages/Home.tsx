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
      <section id="hero" className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={heroPoster} alt="" className="w-full h-full object-cover" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-light mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Precision Genomics for a Healthier Future
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Epidote Tech combines genomics and machine learning to address antibiotic resistance — challenges of modern medicine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white shadow-medium hover:shadow-large transition-all">
                Explore AntiPath-ML
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section id="product" className="py-20 container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6">AntiPath-ML: Fast, Precise, Predictive</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            An AMR screening platform, A real-time genomics-based, ML empowered, designed for India and other LMICs.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto mb-20">
          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all">
            <Zap className="w-10 h-10 mx-auto mb-3 text-primary" />
            <h4 className="text-lg font-medium">Rapid</h4>
          </Card>
          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all">
            <Target className="w-10 h-10 mx-auto mb-3 text-primary" />
            <h4 className="text-lg font-medium">Scalable</h4>
          </Card>
          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all">
            <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-primary" />
            <h4 className="text-lg font-medium">Accurate</h4>
          </Card>
          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all">
            <Gauge className="w-10 h-10 mx-auto mb-3 text-primary" />
            <h4 className="text-lg font-medium">Portable</h4>
          </Card>
          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-all">
            <IndianRupee className="w-10 h-10 mx-auto mb-3 text-primary" />
            <h4 className="text-lg font-medium">Affordable</h4>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 shadow-soft hover:shadow-medium transition-all">
            <h4 className="text-xl font-medium mb-3">Precision Detection</h4>
            <p className="text-muted-foreground">
              Our platform utilizes genomic data and adaptive machine learning to detect antimicrobial resistance.
            </p>
          </Card>
          <Card className="p-8 shadow-soft hover:shadow-medium transition-all">
            <h4 className="text-xl font-medium mb-3">Real-Time Results</h4>
            <p className="text-muted-foreground">
              Get faster, more scalable, and more affordable results in real time, surpassing conventional methods.
            </p>
          </Card>
          <Card className="p-8 shadow-soft hover:shadow-medium transition-all">
            <h4 className="text-xl font-medium mb-3">Early Intervention</h4>
            <p className="text-muted-foreground">
              Timely and accurate detection enables crucial early intervention, improving patient outcomes.
            </p>
          </Card>
        </div>
      </section>

      {/* The Epidote Advantage */}
      <section id="advantage" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Technology That Moves With Intelligence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
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
