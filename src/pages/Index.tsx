import { Hero } from '@/components/Hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, ExternalLink, ArrowRight } from 'lucide-react';

const spotlightPublications = [
  {
    title: "Machine Learning Approaches for Long Non-coding RNA Discovery in Plant Genomes",
    venue: "Nature Computational Biology",
    year: "2024",
    doi: "10.1038/s41467-024-12345-6"
  },
  {
    title: "Metagenomics Pipeline Optimization for Environmental Microbiome Analysis",
    venue: "Bioinformatics",
    year: "2023",
    doi: "10.1093/bioinformatics/btac123"
  }
];

const recentPosts = [
  {
    title: "Nextflow DSL2 modules: patterns for reproducible RNA-seq and WGBS workflows",
    excerpt: "Best practices and patterns for building modular, reusable Nextflow workflows for genomics analysis.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["nextflow", "rna-seq", "wgbs"]
  },
  {
    title: "Solving Conda dependency hell (and when to switch to Mamba/Micromamba)",
    excerpt: "Practical strategies for managing bioinformatics software dependencies and troubleshooting common issues.",
    date: "2024-01-08",
    readTime: "6 min read",
    tags: ["conda", "mamba", "dependencies"]
  },
  {
    title: "Dockerizing bioinformatics tools for reproducibility",
    excerpt: "Complete guide to containerizing bioinformatics workflows with Docker, including multi-arch builds.",
    date: "2024-01-01",
    readTime: "12 min read",
    tags: ["docker", "containers", "reproducibility"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Bio Section */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">
              About My Research
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a PhD candidate focusing on the intersection of computational mathematics and bioinformatics. 
              My research involves developing machine learning algorithms for genomics, particularly in long non-coding RNA 
              discovery and metagenomics analysis. I'm passionate about creating reproducible computational workflows 
              and making bioinformatics tools more accessible to the scientific community.
            </p>
          </div>
        </div>
      </section>

      {/* Spotlight Publications */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
              Recent Publications
            </h2>
            <p className="text-lg text-muted-foreground">
              Selected publications from my research in computational biology
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {spotlightPublications.map((pub, index) => (
              <Card key={index} className="academic-paper">
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{pub.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {pub.venue} • {pub.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">DOI: {pub.doi}</Badge>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <a href="/publications">
                View All Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">
              Latest from the Blog
            </h2>
            <p className="text-lg text-muted-foreground">
              Practical insights and troubleshooting tips from bioinformatics work
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-8">
            {recentPosts.map((post, index) => (
              <Card key={index} className="academic-paper">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <CalendarDays className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                  <CardDescription className="mt-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg">
              <a href="/blog">
                View All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;