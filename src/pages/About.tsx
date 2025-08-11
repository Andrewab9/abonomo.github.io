import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GraduationCap, Award, Users, MapPin, Mail, Linkedin, ExternalLink } from 'lucide-react';

const skills = {
  "Programming Languages": ["Python", "R", "Bash/Shell", "JavaScript", "C++"],
  "Bioinformatics Tools": ["Nextflow", "Snakemake", "GATK", "BWA", "STAR", "Salmon", "StringTie"],
  "Machine Learning": ["scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "Biopython"],
  "Cloud & DevOps": ["Docker", "AWS", "Singularity", "Git", "GitHub Actions", "Conda/Mamba"],
  "Data Analysis": ["RNA-seq", "WGBS", "ChIP-seq", "Metagenomics", "Variant Calling", "GWAS"]
};

const education = [
  {
    degree: "PhD in Computational Mathematics, Learning & Data Science",
    institution: "University of Genoa",
    period: "2021 - Present",
    description: "Focus on machine learning applications in genomics and bioinformatics, with emphasis on long non-coding RNA discovery and metagenomics analysis."
  },
  {
    degree: "Master's in Bioinformatics",
    institution: "University of Bologna",
    period: "2019 - 2021",
    description: "Specialized in computational biology and genomics analysis with thesis on transcriptome annotation."
  }
];

const talks = [
  {
    title: "Machine Learning for lncRNA Discovery in Plant Genomes",
    venue: "European Conference on Computational Biology (ECCB)",
    date: "September 2023",
    type: "Oral Presentation"
  },
  {
    title: "Nextflow Best Practices for Reproducible Genomics Workflows",
    venue: "Bioinformatics Italian Society Annual Meeting",
    date: "June 2023",
    type: "Workshop"
  }
];

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
            About Andrea Bonomo
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            PhD candidate passionate about bridging computational mathematics and biological discovery
          </p>
        </div>

        {/* Main Bio */}
        <div className="prose prose-lg max-w-none mb-16">
          <Card className="academic-paper">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed mb-6">
                I'm a PhD candidate in Computational Mathematics, Learning & Data Science at the University of Genoa, 
                where I focus on developing innovative machine learning approaches for biological data analysis. 
                My research sits at the intersection of computational mathematics, bioinformatics, and data science.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                My current research focuses on machine learning applications for genomics, particularly in the discovery 
                and characterization of long non-coding RNAs (lncRNAs) in plant genomes. I'm also deeply involved in 
                metagenomics analysis, developing computational pipelines for environmental and clinical microbiome studies.
              </p>
              
              <p className="text-lg leading-relaxed">
                Beyond research, I'm passionate about reproducible science and open-source software development. 
                I contribute to the bioinformatics community through workflow development, tool containerization, 
                and sharing practical troubleshooting insights gained from day-to-day computational work.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-8 flex items-center">
            <GraduationCap className="mr-3 h-8 w-8 text-primary" />
            Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="academic-paper">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-base">
                    {edu.institution} • {edu.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-8">
            Technical Skills
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="academic-paper">
                <CardHeader>
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Talks & Presentations */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-8 flex items-center">
            <Users className="mr-3 h-8 w-8 text-primary" />
            Talks & Presentations
          </h2>
          
          <div className="space-y-6">
            {talks.map((talk, index) => (
              <Card key={index} className="academic-paper">
                <CardHeader>
                  <CardTitle className="text-xl">{talk.title}</CardTitle>
                  <CardDescription className="text-base">
                    {talk.venue} • {talk.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">{talk.type}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-8 flex items-center">
            <MapPin className="mr-3 h-8 w-8 text-primary" />
            Get in Touch
          </h2>
          
          <Card className="academic-paper">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground mb-6">
                I'm always interested in discussing research collaborations, bioinformatics challenges, 
                or sharing experiences in computational biology. Feel free to reach out!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="default" size="lg">
                  <a href="mailto:andreabonomo.ab@hotmail.it">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Me
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://www.linkedin.com/in/andreabonomoab/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://orcid.org/0000-0002-3737-2276" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    ORCID
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;