import { Button } from '@/components/ui/button';
import { Mail, Linkedin, ExternalLink, Download } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

export const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground mb-6 animate-fade-in">
            Andrea Bonomo
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto animate-fade-in [animation-delay:0.2s]">
            PhD candidate in Computational Mathematics, Learning & Data Science
            <br />
            <span className="text-primary font-medium">
              Bioinformatics & multi-omics analysis
            </span>
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in [animation-delay:0.4s]">
            Machine learning for genomics • long non-coding RNA discovery • metagenomics 
            • genome/transcriptome annotation • Nextflow pipelines • Docker/AWS 
            • statistical inference on NGS/omics data
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in [animation-delay:0.6s]">
            <div className="flex gap-3">
              <Button asChild variant="hero" size="lg">
                <a href="/contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:bg-primary/5 transition-all">
                <a href="/cv">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center gap-6 animate-fade-in [animation-delay:0.8s]">
            <a
              href="mailto:andreabonomo.ab@hotmail.it"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/andreabonomoab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://orcid.org/0000-0002-3737-2276"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 flex items-center"
              aria-label="ORCID"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};