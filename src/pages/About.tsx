import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Our Story */}
      <section id="our-story" className="py-24 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-normal mb-8 animate-fade-in-up tracking-tight">Inspired by Science. Driven by Purpose.</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-normal leading-relaxed">
              Epidote — from Epigenetics and Antidote — was founded to bring precision and intelligence to healthcare. 
              Rooted in one of India's leading research institutions, we develop tools that make diagnostics faster and more reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section id="milestones" className="py-24 container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-normal mb-4 tracking-tight">Milestones in Motion</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-medium">
                <Calendar className="text-white" size={18} strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-primary mb-2">2019</div>
              <h4 className="text-lg font-medium mb-2">Service operations begin</h4>
              <p className="text-muted-foreground font-normal leading-relaxed">
                Epidote was established with a vision to revolutionize healthcare through precision diagnostics.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-medium">
                <Calendar className="text-white" size={18} strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-primary mb-2">2022</div>
              <h4 className="text-lg font-medium mb-2">AMR R&D launched</h4>
              <p className="text-muted-foreground font-normal leading-relaxed">
                Launched dedicated research and development for antimicrobial resistance detection platforms.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-medium">
                <Calendar className="text-white" size={18} strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-primary mb-2">2024</div>
              <h4 className="text-lg font-medium mb-2">Planned equity investment round</h4>
              <p className="text-muted-foreground font-normal leading-relaxed">
                Secured strategic investments to scale our diagnostic solutions.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-medium">
                <Calendar className="text-white" size={18} strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-primary mb-2">2025</div>
              <h4 className="text-lg font-medium mb-2">Clinical trials to commence</h4>
              <p className="text-muted-foreground font-normal leading-relaxed">
                Initiating clinical trials to validate and expand our diagnostic platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section id="founders" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-normal mb-4 tracking-tight">Scientific Leadership</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-soft hover:shadow-medium transition-all border border-border/50 bg-card">
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10"></div>
              <div className="p-8">
                <h4 className="text-lg font-medium mb-2">Dr. Ashwin Kelkar</h4>
                <p className="text-sm text-primary mb-3 font-medium">Machine Learning Lead</p>
                <p className="text-sm text-muted-foreground font-normal leading-relaxed">
                  Research at Penn State and Wellcome Trust Cambridge. Specializes in ML algorithms for genomic data.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-soft hover:shadow-medium transition-all border border-border/50 bg-card">
              <div className="aspect-square bg-gradient-to-br from-secondary/10 to-accent/10"></div>
              <div className="p-8">
                <h4 className="text-lg font-medium mb-2">Dr. Sanjeev Galande</h4>
                <p className="text-sm text-secondary mb-3 font-medium">Genomics Lead</p>
                <p className="text-sm text-muted-foreground font-normal leading-relaxed">
                  Professor and Dean, Shiv Nadar University; former Fellow at LBNL, Berkeley. Expert in next-generation genomic pipelines.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section id="team" className="py-24 container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-normal mb-4 tracking-tight">People Who Build the Platform</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="p-8 shadow-soft hover:shadow-medium transition-all border border-border/50 bg-card">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl mb-6"></div>
            <h4 className="text-base font-medium mb-2">Manmita Shah</h4>
            <p className="text-sm text-primary mb-3 font-medium">Strategy Lead</p>
            <p className="text-sm text-muted-foreground font-normal leading-relaxed">
              Genomics strategy and NGS workflow design
            </p>
          </Card>

          <Card className="p-8 shadow-soft hover:shadow-medium transition-all border border-border/50 bg-card">
            <div className="aspect-square bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl mb-6"></div>
            <h4 className="text-base font-medium mb-2">Tanvi Deshpande</h4>
            <p className="text-sm text-primary mb-3 font-medium">Bioinformatics Lead</p>
            <p className="text-sm text-muted-foreground font-normal leading-relaxed">
              Data pipelines and machine learning integration
            </p>
          </Card>

          <Card className="p-8 shadow-soft hover:shadow-medium transition-all border border-border/50 bg-card">
            <div className="aspect-square bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl mb-6"></div>
            <h4 className="text-base font-medium mb-2">Vishakha Sadavarte</h4>
            <p className="text-sm text-primary mb-3 font-medium">Genomics Lead</p>
            <p className="text-sm text-muted-foreground font-normal leading-relaxed">
              NGS workflows and sample operations
            </p>
          </Card>

          <Card className="p-8 shadow-soft hover:shadow-medium transition-all border border-border/50 bg-card">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-6"></div>
            <h4 className="text-base font-medium mb-2">Dr. Deepali Phadke</h4>
            <p className="text-sm text-primary mb-3 font-medium">Healthcare Liaison</p>
            <p className="text-sm text-muted-foreground font-normal leading-relaxed">
              Regulatory policy and clinical partnerships
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};
