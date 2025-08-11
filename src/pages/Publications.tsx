import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Search, Download, RefreshCw } from 'lucide-react';

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  type: 'journal' | 'conference' | 'preprint';
  abstract?: string;
  bibtex?: string;
}

// Fallback publications data
const fallbackPublications: Publication[] = [
  {
    title: "Machine Learning Approaches for Long Non-coding RNA Discovery in Plant Genomes",
    authors: ["Andrea Bonomo", "Maria Rossi", "Giuseppe Verdi"],
    venue: "Nature Computational Biology",
    year: 2024,
    doi: "10.1038/s41467-024-12345-6",
    type: "journal",
    abstract: "We present novel machine learning approaches for identifying and characterizing long non-coding RNAs in plant genomes...",
    bibtex: `@article{bonomo2024machine,
  title={Machine Learning Approaches for Long Non-coding RNA Discovery in Plant Genomes},
  author={Bonomo, Andrea and Rossi, Maria and Verdi, Giuseppe},
  journal={Nature Computational Biology},
  year={2024},
  doi={10.1038/s41467-024-12345-6}
}`
  },
  {
    title: "Metagenomics Pipeline Optimization for Environmental Microbiome Analysis",
    authors: ["Andrea Bonomo", "Luigi Bianchi"],
    venue: "Bioinformatics",
    year: 2023,
    doi: "10.1093/bioinformatics/btac123",
    type: "journal",
    abstract: "Environmental microbiome studies require robust computational pipelines for processing complex metagenomic data...",
    bibtex: `@article{bonomo2023metagenomics,
  title={Metagenomics Pipeline Optimization for Environmental Microbiome Analysis},
  author={Bonomo, Andrea and Bianchi, Luigi},
  journal={Bioinformatics},
  year={2023},
  doi={10.1093/bioinformatics/btac123}
}`
  },
  {
    title: "Nextflow Best Practices for Reproducible Genomics Workflows",
    authors: ["Andrea Bonomo", "Elena Ferrari", "Marco Colombo"],
    venue: "IEEE Conference on Bioinformatics and Biomedicine",
    year: 2023,
    type: "conference",
    abstract: "We present best practices and design patterns for developing reproducible genomics workflows using Nextflow...",
    bibtex: `@inproceedings{bonomo2023nextflow,
  title={Nextflow Best Practices for Reproducible Genomics Workflows},
  author={Bonomo, Andrea and Ferrari, Elena and Colombo, Marco},
  booktitle={IEEE Conference on Bioinformatics and Biomedicine},
  year={2023}
}`
  },
  {
    title: "Deep Learning Models for Transcriptome Annotation in Non-model Organisms",
    authors: ["Andrea Bonomo", "Francesca Romano"],
    venue: "bioRxiv",
    year: 2024,
    doi: "10.1101/2024.01.12.123456",
    type: "preprint",
    abstract: "We develop deep learning approaches for accurate transcriptome annotation in non-model organisms...",
    bibtex: `@article{bonomo2024deep,
  title={Deep Learning Models for Transcriptome Annotation in Non-model Organisms},
  author={Bonomo, Andrea and Romano, Francesca},
  journal={bioRxiv},
  year={2024},
  doi={10.1101/2024.01.12.123456}
}`
  }
];

const Publications = () => {
  const [publications, setPublications] = useState<Publication[]>(fallbackPublications);
  const [filteredPublications, setFilteredPublications] = useState<Publication[]>(fallbackPublications);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [isLoading, setIsLoading] = useState(false);

  // Filter publications based on search term and active tab
  useEffect(() => {
    let filtered = publications;

    // Filter by type
    if (activeTab !== 'all') {
      filtered = filtered.filter(pub => pub.type === activeTab);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(pub =>
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())) ||
        pub.venue.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPublications(filtered);
  }, [publications, searchTerm, activeTab]);

  const handleSyncORCID = async () => {
    setIsLoading(true);
    // In a real implementation, this would fetch from ORCID API
    // For now, we'll simulate a delay and use fallback data
    setTimeout(() => {
      setPublications(fallbackPublications);
      setIsLoading(false);
    }, 1000);
  };

  const exportBibTeX = () => {
    const bibtexEntries = filteredPublications
      .filter(pub => pub.bibtex)
      .map(pub => pub.bibtex)
      .join('\n\n');
    
    const blob = new Blob([bibtexEntries], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'publications.bib';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const groupByYear = (pubs: Publication[]) => {
    return pubs.reduce((acc, pub) => {
      const year = pub.year;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(pub);
      return acc;
    }, {} as Record<number, Publication[]>);
  };

  const publicationsByYear = groupByYear(filteredPublications);
  const years = Object.keys(publicationsByYear).map(Number).sort((a, b) => b - a);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'journal':
        return '📖';
      case 'conference':
        return '🎤';
      case 'preprint':
        return '📄';
      default:
        return '📝';
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
            Publications
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Research contributions in computational biology and bioinformatics
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={handleSyncORCID} disabled={isLoading} variant="outline">
              <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
              Sync from ORCID
            </Button>
            <Button onClick={exportBibTeX} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export BibTeX
            </Button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search publications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All ({publications.length})</TabsTrigger>
              <TabsTrigger value="journal">
                Journal ({publications.filter(p => p.type === 'journal').length})
              </TabsTrigger>
              <TabsTrigger value="conference">
                Conference ({publications.filter(p => p.type === 'conference').length})
              </TabsTrigger>
              <TabsTrigger value="preprint">
                Preprint ({publications.filter(p => p.type === 'preprint').length})
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Publications by Year */}
        <div className="space-y-12">
          {years.map(year => (
            <div key={year}>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-6 border-b border-border pb-2">
                {year}
              </h2>
              
              <div className="space-y-6">
                {publicationsByYear[year].map((pub, index) => (
                  <Card key={index} className="academic-paper">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl leading-tight mb-2">
                            {getTypeIcon(pub.type)} {pub.title}
                          </CardTitle>
                          <CardDescription className="text-base">
                            <span className="font-medium">{pub.authors.join(', ')}</span>
                            <br />
                            <span className="text-primary">{pub.venue}</span> • {pub.year}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="ml-4">
                          {pub.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {pub.abstract && (
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                          {pub.abstract}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap gap-2 items-center">
                        {pub.doi && (
                          <Button variant="outline" size="sm" asChild>
                            <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-3 w-3" />
                              DOI
                            </a>
                          </Button>
                        )}
                        
                        {pub.bibtex && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              navigator.clipboard.writeText(pub.bibtex!);
                              // You could add a toast notification here
                            }}
                          >
                            Copy BibTeX
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No publications found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Publications;