import { CheckCircle2, Clock, Shield, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import vaccineImage from "@/assets/vaccine-testing.jpg";
import infectionImage from "@/assets/infection-detection.jpg";
import pathogenImage from "@/assets/pathogen-testing.jpg";

export const Products = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Overview */}
      <section id="overview" className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6 animate-fade-in-up">
            Diagnostic Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive suite of testing solutions combines cutting-edge technology with practical healthcare needs, 
            delivering speed, accuracy, and affordability.
          </p>
        </div>
      </section>

      {/* Vaccine Integrity */}
      <section id="vaccine" className="py-20 container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Vaccine Testing
            </div>
            <h2 className="text-4xl font-light mb-6">Vaccine Integrity Testing</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Ensure vaccine quality and potency throughout the supply chain with our advanced molecular testing platform. 
              Detect degradation, contamination, and storage issues before distribution.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Real-time potency verification</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Cold chain monitoring integration</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Results in under 15 minutes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>No specialized equipment required</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <Card className="overflow-hidden shadow-large">
              <img src={vaccineImage} alt="Vaccine Testing" className="w-full h-auto" />
            </Card>
          </div>
        </div>
      </section>

      {/* Infection Detection */}
      <section id="infection" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="overflow-hidden shadow-large">
                <img src={infectionImage} alt="Infection Detection" className="w-full h-auto" />
              </Card>
            </div>
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
                Infection Testing
              </div>
              <h2 className="text-4xl font-light mb-6">Rapid Infection Detection</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Point-of-care testing that delivers laboratory-quality results at the patient's bedside. 
                Identify infections quickly to enable faster treatment decisions and better outcomes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span>Multi-pathogen detection in single test</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span>99.9% sensitivity and specificity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span>Minimal sample volume required</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary mt-1 flex-shrink-0" size={20} />
                  <span>Easy-to-interpret results</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pathogen Testing */}
      <section id="pathogen" className="py-20 container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Pathogen Analysis
            </div>
            <h2 className="text-4xl font-light mb-6">Comprehensive Pathogen Testing</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Advanced molecular diagnostics for rapid identification of bacteria, viruses, and fungi. 
              Perfect for outbreak investigation, antimicrobial stewardship, and infection control.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                <span>Broad-spectrum pathogen coverage</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                <span>Antimicrobial resistance profiling</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                <span>Simultaneous strain typing</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                <span>Cloud-based data analytics</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <Card className="overflow-hidden shadow-large">
              <img src={pathogenImage} alt="Pathogen Testing" className="w-full h-auto" />
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process makes advanced diagnostics accessible to everyone
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-medium">
                1
              </div>
              <h4 className="text-xl font-semibold mb-2">Collect Sample</h4>
              <p className="text-muted-foreground">Simple, non-invasive sample collection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-medium">
                2
              </div>
              <h4 className="text-xl font-semibold mb-2">Process Test</h4>
              <p className="text-muted-foreground">Automated analysis with our platform</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-medium">
                3
              </div>
              <h4 className="text-xl font-semibold mb-2">Get Results</h4>
              <p className="text-muted-foreground">Receive accurate results in minutes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-medium">
                4
              </div>
              <h4 className="text-xl font-semibold mb-2">Take Action</h4>
              <p className="text-muted-foreground">Make informed treatment decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Why Choose Epidote Healthcare?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The advantages that set our solutions apart
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 shadow-soft hover:shadow-medium transition-all">
            <Clock className="w-12 h-12 mb-4 text-primary" />
            <h4 className="text-2xl font-semibold mb-3">Unmatched Speed</h4>
            <p className="text-muted-foreground">
              Get results in minutes instead of hours or days. Our rapid testing enables faster clinical decisions and better patient outcomes.
            </p>
          </Card>

          <Card className="p-8 shadow-soft hover:shadow-medium transition-all">
            <Shield className="w-12 h-12 mb-4 text-secondary" />
            <h4 className="text-2xl font-semibold mb-3">Superior Accuracy</h4>
            <p className="text-muted-foreground">
              Clinical-grade precision you can rely on. Our technology delivers laboratory-quality results at the point of care.
            </p>
          </Card>

          <Card className="p-8 shadow-soft hover:shadow-medium transition-all">
            <TrendingDown className="w-12 h-12 mb-4 text-accent" />
            <h4 className="text-2xl font-semibold mb-3">Lower Costs</h4>
            <p className="text-muted-foreground">
              Reduce operational expenses while improving care quality. Our solutions are designed for efficiency and affordability.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};
