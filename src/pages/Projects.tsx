import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, FileText, Presentation } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  role: string;
  technologies: string[];
  links: {
    code?: string;
    paper?: string;
    poster?: string;
    demo?: string;
  };
  highlights: string[];
  status: 'completed' | 'in-progress' | 'published';
}

const projects: Project[] = [
  {
    title: "lncRNA Discovery with Machine Learning",
    description: "Comprehensive pipeline for identifying and characterizing long non-coding RNAs in plant genomes using advanced machine learning techniques including deep neural networks and natural language processing features.",
    role: "Lead Developer & Researcher",
    technologies: ["Python", "TensorFlow", "scikit-learn", "Biopython", "Nextflow", "Docker"],
    links: {
      code: "https://github.com/andreabonomo/lncrna-ml",
      paper: "https://doi.org/10.1038/s41467-024-12345-6",
      poster: "/papers/lncrna-poster-eccb2023.pdf"
    },
    highlights: [
      "Developed novel feature extraction methods combining sequence, structural, and evolutionary information",
      "Achieved 95% accuracy in lncRNA identification across multiple plant species",
      "Integrated NLP techniques for functional annotation prediction",
      "Created comprehensive benchmark dataset with 10,000+ validated lncRNAs"
    ],
    status: "published"
  },
  {
    title: "Metagenomics Analysis Pipelines",
    description: "Robust, scalable Nextflow pipelines for environmental and clinical metagenomics studies. Includes quality control, assembly, taxonomic profiling, and functional annotation with optimized containerized workflows.",
    role: "Pipeline Architect",
    technologies: ["Nextflow", "Docker", "Singularity", "Kraken2", "MetaPhlAn", "HUMAnN", "AWS"],
    links: {
      code: "https://github.com/andreabonomo/metagenomics-nf",
      demo: "https://metag-demo.example.com"
    },
    highlights: [
      "Processed over 5TB of metagenomic data from soil and marine samples",
      "Optimized workflows reducing analysis time by 60% through parallelization",
      "Implemented quality control modules with contamination detection",
      "Deployed on AWS with automatic scaling and cost optimization"
    ],
    status: "completed"
  },
  {
    title: "Sporothrix Genome Database (SGDB) Enhancement",
    description: "Major update to the Sporothrix Genome Database, adding 15 new high-quality genome assemblies with improved annotation and interactive visualization through JBrowse integration.",
    role: "Database Developer & Curator",
    technologies: ["PostgreSQL", "JBrowse", "BLAST+", "InterProScan", "React", "Node.js"],
    links: {
      demo: "https://sgdb.genome.org",
      paper: "https://doi.org/10.1093/database/baz123"
    },
    highlights: [
      "Curated and integrated 15 new Sporothrix genome assemblies",
      "Implemented comparative genomics tools for phylogenetic analysis",
      "Developed RESTful API for programmatic access to genome data",
      "Enhanced search functionality with full-text indexing"
    ],
    status: "completed"
  },
  {
    title: "Transcriptome Annotation with Deep Learning",
    description: "Novel deep learning approaches for accurate gene prediction and functional annotation in non-model organisms, addressing the challenge of limited training data through transfer learning.",
    role: "Machine Learning Researcher",
    technologies: ["PyTorch", "Transformers", "BLAST", "HMMER", "Snakemake", "CUDA"],
    links: {
      code: "https://github.com/andreabonomo/transcriptome-dl",
      poster: "/papers/transcriptome-dl-poster.pdf"
    },
    highlights: [
      "Developed transformer-based models for gene structure prediction",
      "Implemented transfer learning from model to non-model organisms",
      "Achieved state-of-the-art performance on plant transcriptome annotation",
      "Created training dataset with 50,000+ manually curated gene models"
    ],
    status: "in-progress"
  }
];

const Projects = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-success text-success-foreground';
      case 'completed':
        return 'bg-primary text-primary-foreground';
      case 'in-progress':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published':
        return 'Published';
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Key research projects and software contributions in computational biology and bioinformatics
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="academic-paper">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl leading-tight mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base mb-3">
                      <span className="font-medium text-primary">{project.role}</span>
                    </CardDescription>
                  </div>
                  <Badge className={getStatusColor(project.status)}>
                    {getStatusText(project.status)}
                  </Badge>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Key Highlights</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-muted-foreground text-sm leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div>
                  <h4 className="font-medium text-foreground mb-3">Resources</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.links.code && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.code} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    
                    {project.links.paper && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.paper} target="_blank" rel="noopener noreferrer">
                          <FileText className="mr-2 h-4 w-4" />
                          Paper
                        </a>
                      </Button>
                    )}
                    
                    {project.links.poster && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.poster} target="_blank" rel="noopener noreferrer">
                          <Presentation className="mr-2 h-4 w-4" />
                          Poster
                        </a>
                      </Button>
                    )}
                    
                    {project.links.demo && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="academic-paper max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new research opportunities, collaborative projects, 
                and sharing insights about computational biology and bioinformatics workflows.
              </p>
              <Button asChild size="lg">
                <a href="/contact">
                  Get in Touch
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;