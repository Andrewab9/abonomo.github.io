import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CalendarDays, Clock, Search, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: string;
  tags: string[];
  published: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: "nextflow-dsl2-modules-patterns-for-reproducible-rna-seq-and-wgbs-workflows",
    title: "Nextflow DSL2 modules: patterns for reproducible RNA-seq and WGBS workflows",
    excerpt: "Best practices and patterns for building modular, reusable Nextflow workflows for genomics analysis. Learn how to structure DSL2 modules, handle complex data flow, and ensure reproducibility across different computing environments.",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["nextflow", "rna-seq", "wgbs", "reproducibility", "genomics"],
    published: true
  },
  {
    id: "solving-conda-dependency-hell-and-when-to-switch-to-mamba-micromamba",
    title: "Solving Conda dependency hell (and when to switch to Mamba/Micromamba)",
    excerpt: "Practical strategies for managing bioinformatics software dependencies and troubleshooting common issues. Explore when and how to migrate from Conda to Mamba or Micromamba for better performance.",
    date: "2024-01-08",
    readTime: "6 min read",
    tags: ["conda", "mamba", "dependencies", "environment-management", "troubleshooting"],
    published: true
  },
  {
    id: "dockerizing-bioinformatics-tools-for-reproducibility-with-cache-multi-arch-tips",
    title: "Dockerizing bioinformatics tools for reproducibility (with cache & multi-arch tips)",
    excerpt: "Complete guide to containerizing bioinformatics workflows with Docker, including multi-architecture builds, layer caching strategies, and best practices for scientific reproducibility.",
    date: "2024-01-01",
    readTime: "12 min read",
    tags: ["docker", "containers", "reproducibility", "multi-arch", "optimization"],
    published: true
  },
  {
    id: "variant-calling-pitfalls-joint-genotyping-filtering-and-benchmarking-notes",
    title: "Variant calling pitfalls: joint genotyping, filtering, and benchmarking notes",
    excerpt: "Common challenges in variant calling workflows and how to address them. Covers joint genotyping strategies, filtering criteria, and benchmarking approaches for different use cases.",
    date: "2023-12-20",
    readTime: "10 min read",
    tags: ["variant-calling", "gatk", "joint-genotyping", "filtering", "benchmarking"],
    published: true
  },
  {
    id: "metagenomics-qc-adapters-low-complexity-reads-and-host-decontamination",
    title: "Metagenomics QC: adapters, low-complexity reads, and host decontamination",
    excerpt: "Quality control strategies for metagenomic data preprocessing. Learn about adapter trimming, handling low-complexity sequences, and removing host contamination from environmental samples.",
    date: "2023-12-10",
    readTime: "7 min read",
    tags: ["metagenomics", "quality-control", "preprocessing", "decontamination", "adapters"],
    published: true
  },
  {
    id: "funannotate-in-containers-fixing-perl-dbi-installation-errors-and-other-gotchas",
    title: "Funannotate in containers: fixing Perl DBI installation errors and other gotchas",
    excerpt: "Troubleshooting guide for running Funannotate in containerized environments. Solutions for common Perl DBI issues, dependency conflicts, and optimization tips for fungal genome annotation.",
    date: "2023-11-25",
    readTime: "9 min read",
    tags: ["funannotate", "containers", "perl", "troubleshooting", "genome-annotation"],
    published: true
  }
];

const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags))).sort();

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesTags = selectedTags.length === 0 ||
        selectedTags.every(tag => post.tags.includes(tag));

      return matchesSearch && matchesTags && post.published;
    });
  }, [searchTerm, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical insights and troubleshooting tips from day-to-day bioinformatics work
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Tags Filter */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-foreground">Filter by tags:</h3>
              {(selectedTags.length > 0 || searchTerm) && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Clear filters
                </Button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary/20 transition-colors"
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="academic-paper group">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <CalendarDays className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                  <span>•</span>
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                
                <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="mt-3 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {post.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{post.tags.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <Button variant="ghost" size="sm" asChild className="group/button">
                  <a href={`/blog/${post.id}`}>
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">
              No posts found matching your search criteria.
            </p>
            <Button variant="outline" onClick={clearFilters}>
              Clear filters
            </Button>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="academic-paper max-w-2xl mx-auto text-center">
            <CardContent className="pt-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-6">
                Get notified when I publish new posts about bioinformatics workflows, 
                troubleshooting tips, and computational biology insights.
              </p>
              <Button asChild size="lg">
                <a href="/contact">
                  Subscribe to Updates
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;