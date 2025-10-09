import { Lightbulb, Heart, Zap, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Our Story */}
      <section id="our-story" className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Our Story</h1>
            <p className="text-xl text-muted-foreground">
              From research beginnings to diagnostic innovation
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2019, Epidot Health began with a vision to revolutionize healthcare through innovative diagnostic solutions. 
              Our journey started in a small research lab, exploring novel approaches to molecular testing.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              In 2020, we made a pivotal decision to pivot from pure research to practical diagnostics. We recognized that the healthcare 
              industry desperately needed faster, more accurate, and more affordable testing solutions. This insight led us to develop 
              our proprietary testing platform.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, Epidot Health stands at the forefront of diagnostic innovation, serving healthcare providers worldwide with 
              solutions that make a real difference in patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section id="mission-values" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Mission & Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all">
              <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Continuously pushing the boundaries of what's possible in diagnostic technology
              </p>
            </Card>

            <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all">
              <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                Maintaining the highest standards of quality and scientific rigor in everything we do
              </p>
            </Card>

            <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-all">
              <div className="w-16 h-16 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                <Zap className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">Impact</h3>
              <p className="text-muted-foreground">
                Making a meaningful difference in global health through accessible diagnostics
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Led by experts in molecular biology, diagnostics, and healthcare innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-soft hover:shadow-medium transition-all">
            <div className="aspect-square bg-gradient-to-br from-primary to-secondary"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Dr. Sarah Chen</h3>
              <p className="text-sm text-primary mb-3">Co-Founder & CEO</p>
              <p className="text-sm text-muted-foreground">
                Former research director with 15+ years in molecular diagnostics
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden shadow-soft hover:shadow-medium transition-all">
            <div className="aspect-square bg-gradient-to-br from-secondary to-accent"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Dr. Michael Roberts</h3>
              <p className="text-sm text-secondary mb-3">Co-Founder & CTO</p>
              <p className="text-sm text-muted-foreground">
                Biotechnology innovator with multiple patents in rapid testing
              </p>
            </div>
          </Card>

          <Card className="overflow-hidden shadow-soft hover:shadow-medium transition-all">
            <div className="aspect-square bg-gradient-to-br from-accent to-primary"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Dr. Amara Okafor</h3>
              <p className="text-sm text-accent mb-3">Chief Scientific Officer</p>
              <p className="text-sm text-muted-foreground">
                Leading expert in infectious disease diagnostics and public health
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Milestones */}
      <section id="milestones" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth
            </p>
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
                <h3 className="text-xl font-semibold mb-2">Company Founded</h3>
                <p className="text-muted-foreground">
                  Epidot Health established with a focus on novel molecular testing approaches
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
                <div className="text-sm font-semibold text-primary mb-1">2020</div>
                <h3 className="text-xl font-semibold mb-2">Strategic Pivot</h3>
                <p className="text-muted-foreground">
                  Shifted focus to practical diagnostic solutions for real-world healthcare challenges
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
                <h3 className="text-xl font-semibold mb-2">First Product Launch</h3>
                <p className="text-muted-foreground">
                  Introduced our vaccine integrity testing platform to the market
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
                <h3 className="text-xl font-semibold mb-2">Global Expansion</h3>
                <p className="text-muted-foreground">
                  Expanded to serve healthcare providers across multiple continents
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press & Partners - Optional */}
      <section id="press-partners" className="py-20 container mx-auto px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Recognition</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Our work has been recognized by leading healthcare and technology organizations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-50">
            <div className="h-20 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold">Partner Logo</span>
            </div>
            <div className="h-20 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold">Partner Logo</span>
            </div>
            <div className="h-20 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold">Partner Logo</span>
            </div>
            <div className="h-20 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-sm font-semibold">Partner Logo</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
