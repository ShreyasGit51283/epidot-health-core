import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface HomeProps {
  onContactClick: () => void;
}

export const Home = ({ onContactClick }: HomeProps) => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-normal text-center mb-20">
            Your AI-Powered Research Partner
          </h1>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Description */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Upload className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl font-medium mb-4">Upload your sources</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Upload PDFs, websites, YouTube videos, audio files, Google Docs, or Google Slides, 
                    and NotebookLM will summarize them and make interesting connections between topics, 
                    all powered by Gemini 2.0's multimodal understanding capabilities.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Upload Area */}
            <div>
              <Card className="aspect-video bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-0 shadow-2xl flex items-center justify-center rounded-3xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-red-500/10" />
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white text-xl font-light">Upload sources</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Simple footer CTA */}
      <section className="py-20 container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-medium mb-6">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us to learn more about our diagnostic solutions.
          </p>
          <Button 
            size="lg" 
            onClick={onContactClick}
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
};
