import { Mail, Linkedin, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-section">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
              Andrea Bonomo
            </h3>
            <p className="text-muted-foreground text-sm">
              PhD candidate in Computational Mathematics, Learning & Data Science
              <br />
              Bioinformatics & multi-omics analysis
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/publications" className="text-muted-foreground hover:text-primary transition-colors">Publications</a></li>
              <li><a href="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
              <li><a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/cv" className="text-muted-foreground hover:text-primary transition-colors">CV</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:andreabonomo.ab@hotmail.it"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/andreabonomoab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://orcid.org/0000-0002-3737-2276"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="ORCID"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Andrea Bonomo. Built with React and hosted on GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  );
};