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
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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

      {/* Product Highlights */}
      <section id="product" className="py-24 container mx-auto px-4 lg:px-8">
        <Tabs defaultValue="antipath" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-16">
            <TabsTrigger value="antipath">AntiPath-ML</TabsTrigger>
            <TabsTrigger value="vaccine">Vaccine Genomics</TabsTrigger>
          </TabsList>

          <TabsContent value="antipath">
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

            <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {/* Precision Detection */}
              <Card className="p-8 bg-muted/30 border-border/50 hover:shadow-medium transition-shadow">
                <div className="flex flex-col items-start">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary/10 mb-6">
                    <Target className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-medium mb-3">Precision Detection</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our platform utilizes genomic data and adaptive machine learning to detect antimicrobial resistance.
                  </p>
                </div>
              </Card>

              {/* Real-Time Results */}
              <Card className="p-8 bg-muted/30 border-border/50 hover:shadow-medium transition-shadow">
                <div className="flex flex-col items-start">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-secondary/10 mb-6">
                    <Zap className="w-7 h-7 text-secondary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-medium mb-3">Real-Time Results</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Get faster, more scalable, and more affordable results in real time, surpassing conventional methods.
                  </p>
                </div>
              </Card>

              {/* Early Intervention */}
              <Card className="p-8 bg-muted/30 border-border/50 hover:shadow-medium transition-shadow">
                <div className="flex flex-col items-start">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-accent/10 mb-6">
                    <Gauge className="w-7 h-7 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-medium mb-3">Early Intervention</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Timely and accurate detection enables crucial early intervention, improving patient outcomes.
                  </p>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="vaccine">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-12">
                <h3 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight">Vaccine Genomics</h3>
                <p className="text-lg text-muted-foreground font-normal max-w-2xl mx-auto">
                  Advanced genomic analysis ensures vaccine safety and efficacy through comprehensive quality control and
                  monitoring.
                </p>
              </div>

              <Card className="overflow-hidden shadow-soft border border-border/50 rounded-3xl aspect-video max-w-3xl mx-auto bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">Vaccine Genomics Image Placeholder</p>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
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
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h3 className="text-4xl md:text-5xl font-normal mb-6 tracking-tight">Get in Touch</h3>
            <p className="text-lg text-muted-foreground font-normal max-w-2xl mx-auto mb-8">
              Reach out for research opportunities and for a commercial test of our platform
            </p>
            <Button
              size="lg"
              className="gradient-primary text-white shadow-medium hover:shadow-large transition-all rounded-full px-8 font-medium"
              onClick={onContactClick}
            >
              Get in Touch
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
