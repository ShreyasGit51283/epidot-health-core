import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Our Story */}
      <section id="our-story" className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6 animate-fade-in-up">Inspired by Science. Driven by Purpose.</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Epidote — from Epigenetics and Antidote — was founded to bring precision and intelligence to healthcare. 
              Rooted in one of India's leading research institutions, we develop tools that make diagnostics faster and more reliable.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section id="milestones" className="py-20 container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Milestones in Motion</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-medium">
                <Calendar className="text-white" size={20} />
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-primary mb-1">2019</div>
              <h4 className="text-lg font-medium mb-2">Service operations begin</h4>
              <p className="text-muted-foreground">
                Epidote was established with a vision to revolutionize healthcare through precision diagnostics.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-medium">
                <Calendar className="text-white" size={20} />
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-primary mb-1">2022</div>
              <h4 className="text-lg font-medium mb-2">AMR R&D launched</h4>
              <p className="text-muted-foreground">
                Launched dedicated research and development for antimicrobial resistance detection platforms.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-medium">
                <Calendar className="text-white" size={20} />
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-primary mb-1">2024</div>
              <h4 className="text-lg font-medium mb-2">Planned equity investment round</h4>
              <p className="text-muted-foreground">
                Secured strategic investments to scale our diagnostic solutions.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-medium">
                <Calendar className="text-white" size={20} />
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold text-primary mb-1">2025</div>
              <h4 className="text-lg font-medium mb-2">Clinical trials to commence</h4>
              <p className="text-muted-foreground">
                Initiating clinical trials to validate and expand our diagnostic platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section id="founders" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">Scientific Leadership</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-soft hover:shadow-medium transition-all">
              <div className="aspect-square bg-gradient-to-br from-primary to-secondary"></div>
              <div className="p-6">
                <h4 className="text-lg font-medium mb-1">Dr. Ashwin Kelkar</h4>
                <p className="text-sm text-primary mb-3">Machine Learning Lead</p>
                <p className="text-sm text-muted-foreground">
                  Research at Penn State and Wellcome Trust Cambridge. Specializes in ML algorithms for genomic data.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden shadow-soft hover:shadow-medium transition-all">
              <div className="aspect-square bg-gradient-to-br from-secondary to-accent"></div>
              <div className="p-6">
                <h4 className="text-lg font-medium mb-1">Dr. Sanjeev Galande</h4>
                <p className="text-sm text-secondary mb-3">Genomics Lead</p>
                <p className="text-sm text-muted-foreground">
                  Professor and Dean, Shiv Nadar University; former Fellow at LBNL, Berkeley. Expert in next-generation genomic pipelines.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section id="team" className="py-20 container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4">People Who Build the Platform</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 shadow-soft hover:shadow-medium transition-all">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4"></div>
            <h4 className="text-lg font-medium mb-1">Manmita Shah</h4>
            <p className="text-sm text-primary mb-2">Strategy Lead</p>
            <p className="text-sm text-muted-foreground">
              Genomics strategy and NGS workflow design
            </p>
          </Card>

          <Card className="p-6 shadow-soft hover:shadow-medium transition-all">
            <div className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg mb-4"></div>
            <h4 className="text-lg font-medium mb-1">Tanvi Deshpande</h4>
            <p className="text-sm text-primary mb-2">Bioinformatics Lead</p>
            <p className="text-sm text-muted-foreground">
              Data pipelines and machine learning integration
            </p>
          </Card>

          <Card className="p-6 shadow-soft hover:shadow-medium transition-all">
            <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-4"></div>
            <h4 className="text-lg font-medium mb-1">Vishakha Sadavarte</h4>
            <p className="text-sm text-primary mb-2">Genomics Lead</p>
            <p className="text-sm text-muted-foreground">
              NGS workflows and sample operations
            </p>
          </Card>

          <Card className="p-6 shadow-soft hover:shadow-medium transition-all">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4"></div>
            <h4 className="text-lg font-medium mb-1">Dr. Deepali Phadke</h4>
            <p className="text-sm text-primary mb-2">Healthcare Liaison</p>
            <p className="text-sm text-muted-foreground">
              Regulatory policy and clinical partnerships
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};
