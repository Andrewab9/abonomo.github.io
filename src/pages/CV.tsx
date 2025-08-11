import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ExternalLink, Mail, Linkedin } from 'lucide-react';

const CV = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
            Curriculum Vitae
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Academic and professional background in computational biology and bioinformatics
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="/downloads/Bonomo_Andrea_CV.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/downloads/resume.json" download>
                <Download className="mr-2 h-5 w-5" />
                JSON Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Contact Info */}
        <section className="mb-12">
          <Card className="academic-paper">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                    Andrea Bonomo
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    PhD Candidate in Computational Mathematics, Learning & Data Science
                    <br />
                    University of Genoa, Italy
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href="mailto:andreabonomo.ab@hotmail.it" className="text-primary hover:underline">
                      andreabonomo.ab@hotmail.it
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="h-4 w-4 text-muted-foreground" />
                    <a href="https://www.linkedin.com/in/andreabonomoab/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      linkedin.com/in/andreabonomoab
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    <a href="https://orcid.org/0000-0002-3737-2276" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      ORCID: 0000-0002-3737-2276
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Research Interests */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">Research Interests</h2>
          <Card className="academic-paper">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Primary Areas</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Machine learning for genomics</li>
                    <li>• Long non-coding RNA discovery</li>
                    <li>• Metagenomics analysis</li>
                    <li>• Computational transcriptomics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Technical Focus</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Workflow development (Nextflow)</li>
                    <li>• Container technologies (Docker/Singularity)</li>
                    <li>• Cloud computing (AWS)</li>
                    <li>• Reproducible research practices</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">Education</h2>
          <div className="space-y-6">
            <Card className="academic-paper">
              <CardHeader>
                <CardTitle>PhD in Computational Mathematics, Learning & Data Science</CardTitle>
                <CardDescription>University of Genoa, Italy • 2021 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Thesis: "Machine Learning Approaches for Genomic Data Analysis and Non-coding RNA Discovery"
                </p>
                <p className="text-muted-foreground mb-3">
                  Advisor: Prof. [Name] • Expected completion: 2024
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Bioinformatics</Badge>
                  <Badge variant="secondary">Genomics</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="academic-paper">
              <CardHeader>
                <CardTitle>Master's in Bioinformatics</CardTitle>
                <CardDescription>University of Bologna, Italy • 2019 - 2021</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Thesis: "Computational Methods for Transcriptome Annotation in Plant Genomes"
                </p>
                <p className="text-muted-foreground mb-3">
                  Grade: 110/110 cum laude
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Transcriptomics</Badge>
                  <Badge variant="secondary">Genome Annotation</Badge>
                  <Badge variant="secondary">Computational Biology</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="academic-paper">
              <CardHeader>
                <CardTitle>Bachelor's in Computer Science</CardTitle>
                <CardDescription>University of Milan, Italy • 2016 - 2019</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">
                  Thesis: "Data Structures and Algorithms for Biological Sequence Analysis"
                </p>
                <p className="text-muted-foreground mb-3">
                  Grade: 108/110
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Algorithms</Badge>
                  <Badge variant="secondary">Data Structures</Badge>
                  <Badge variant="secondary">Software Engineering</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">Professional Experience</h2>
          <div className="space-y-6">
            <Card className="academic-paper">
              <CardHeader>
                <CardTitle>Research Assistant</CardTitle>
                <CardDescription>University of Genoa • 2021 - Present</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Developed machine learning models for lncRNA identification</li>
                  <li>• Built and maintained bioinformatics pipelines using Nextflow</li>
                  <li>• Collaborated on multi-omics data integration projects</li>
                  <li>• Mentored undergraduate students in computational biology</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="academic-paper">
              <CardHeader>
                <CardTitle>Bioinformatics Intern</CardTitle>
                <CardDescription>European Bioinformatics Institute (EBI) • Summer 2020</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Contributed to genome annotation pipelines</li>
                  <li>• Worked on database optimization and API development</li>
                  <li>• Participated in code reviews and software testing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="academic-paper">
              <CardHeader>
                <CardTitle>Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">R</Badge>
                  <Badge variant="secondary">Bash/Shell</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">C++</Badge>
                  <Badge variant="secondary">SQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="academic-paper">
              <CardHeader>
                <CardTitle>Bioinformatics Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Nextflow</Badge>
                  <Badge variant="secondary">Snakemake</Badge>
                  <Badge variant="secondary">GATK</Badge>
                  <Badge variant="secondary">BWA</Badge>
                  <Badge variant="secondary">STAR</Badge>
                  <Badge variant="secondary">Salmon</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="academic-paper">
              <CardHeader>
                <CardTitle>Cloud & DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Docker</Badge>
                  <Badge variant="secondary">AWS</Badge>
                  <Badge variant="secondary">Singularity</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">CI/CD</Badge>
                  <Badge variant="secondary">Conda</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="academic-paper">
              <CardHeader>
                <CardTitle>Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">scikit-learn</Badge>
                  <Badge variant="secondary">TensorFlow</Badge>
                  <Badge variant="secondary">PyTorch</Badge>
                  <Badge variant="secondary">Pandas</Badge>
                  <Badge variant="secondary">NumPy</Badge>
                  <Badge variant="secondary">Biopython</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Awards & Honors */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">Awards & Honors</h2>
          <div className="space-y-4">
            <Card className="academic-paper">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-foreground">Best Student Paper Award</h3>
                    <p className="text-muted-foreground">European Conference on Computational Biology (ECCB)</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2023</span>
                </div>
              </CardContent>
            </Card>

            <Card className="academic-paper">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-foreground">PhD Fellowship</h3>
                    <p className="text-muted-foreground">Italian Ministry of University and Research</p>
                  </div>
                  <span className="text-sm text-muted-foreground">2021-2024</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Languages */}
        <section className="mb-12">
          <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">Languages</h2>
          <Card className="academic-paper">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex justify-between">
                  <span className="text-foreground">Italian</span>
                  <span className="text-muted-foreground">Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">English</span>
                  <span className="text-muted-foreground">Fluent (C1)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Spanish</span>
                  <span className="text-muted-foreground">Intermediate (B2)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">French</span>
                  <span className="text-muted-foreground">Basic (A2)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default CV;