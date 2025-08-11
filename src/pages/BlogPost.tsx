import { useParams, Navigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, ArrowLeft } from 'lucide-react';

// Mock blog post content - in a real app, this would come from a CMS or markdown files
const blogPostContent: Record<string, any> = {
  "nextflow-dsl2-modules-patterns-for-reproducible-rna-seq-and-wgbs-workflows": {
    title: "Nextflow DSL2 modules: patterns for reproducible RNA-seq and WGBS workflows",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["nextflow", "rna-seq", "wgbs", "reproducibility", "genomics"],
    content: `
# Nextflow DSL2 modules: patterns for reproducible RNA-seq and WGBS workflows

Building reproducible bioinformatics workflows is crucial for scientific validity and collaboration. Nextflow DSL2 provides powerful abstractions for creating modular, reusable workflows. In this post, I'll share patterns and best practices I've developed while building production RNA-seq and WGBS analysis pipelines.

## Key Design Principles

### 1. Module Structure
Each DSL2 module should be self-contained and focused on a single task:

\`\`\`nextflow
process FASTQC {
    tag "$meta.id"
    
    container 'quay.io/biocontainers/fastqc:0.11.9--0'
    
    input:
    tuple val(meta), path(reads)
    
    output:
    tuple val(meta), path("*_fastqc.{zip,html}"), emit: results
    tuple val(meta), path("*_fastqc.zip")       , emit: zip
    
    script:
    """
    fastqc --quiet --threads $task.cpus $reads
    """
}
\`\`\`

### 2. Metadata Propagation
Use consistent metadata structures throughout your workflow:

\`\`\`nextflow
workflow RNA_SEQ {
    take:
    reads_ch
    
    main:
    // Quality control
    FASTQC(reads_ch)
    
    // Trimming
    TRIMGALORE(reads_ch)
    
    // Alignment
    STAR_ALIGN(TRIMGALORE.out.reads, star_index)
    
    emit:
    bam = STAR_ALIGN.out.bam
    qc  = FASTQC.out.results
}
\`\`\`

## Handling Complex Dependencies

One challenge in genomics workflows is managing tools with complex dependency chains. Here's how I approach this:

### Conda Environments
Create separate conda environments for problematic tools:

\`\`\`yaml
# envs/bismark.yml
name: bismark
channels:
  - conda-forge
  - bioconda
dependencies:
  - bismark=0.24.0
  - bowtie2=2.4.5
  - samtools=1.15
\`\`\`

### Container Strategy
Use multi-stage Docker builds for tools requiring specific versions:

\`\`\`dockerfile
FROM continuumio/miniconda3:latest as builder

COPY envs/bismark.yml /tmp/environment.yml
RUN conda env create -f /tmp/environment.yml

FROM continuumio/miniconda3:latest
COPY --from=builder /opt/conda/envs/bismark /opt/conda/envs/bismark
ENV PATH="/opt/conda/envs/bismark/bin:$PATH"
\`\`\`

## Configuration Best Practices

### Profile Management
Separate configuration by computing environment:

\`\`\`nextflow
// nextflow.config
profiles {
    local {
        process.executor = 'local'
        process.cpus = 4
        process.memory = '8.GB'
    }
    
    slurm {
        process.executor = 'slurm'
        process.queue = 'normal'
        process.clusterOptions = '--account=myproject'
    }
    
    aws {
        process.executor = 'awsbatch'
        aws.region = 'us-east-1'
        aws.batch.cliPath = '/home/ec2-user/miniconda/bin/aws'
    }
}
\`\`\`

### Resource Allocation
Use functions for dynamic resource allocation:

\`\`\`nextflow
process STAR_ALIGN {
    cpus { check_max( 12, 'cpus' ) }
    memory { check_max( 36.GB * task.attempt, 'memory' ) }
    time { check_max( 6.h * task.attempt, 'time' ) }
    
    errorStrategy { task.exitStatus in 137..140 ? 'retry' : 'terminate' }
    maxRetries 2
    
    // Process definition...
}
\`\`\`

## Testing and Validation

### Unit Testing
Test individual modules with minimal datasets:

\`\`\`nextflow
// tests/test_fastqc.nf
include { FASTQC } from '../modules/fastqc'

workflow test_fastqc {
    input_ch = Channel.of([
        [id: 'test'], 
        file('test_data/test_R1.fastq.gz')
    ])
    
    FASTQC(input_ch)
}
\`\`\`

### Integration Testing
Use nf-test for comprehensive workflow testing:

\`\`\`nextflow
nextflow_workflow {
    name "Test RNA-seq workflow"
    script "main.nf"
    
    test("RNA-seq test dataset") {
        when {
            params {
                input = 'test_data/samplesheet.csv'
                outdir = 'results'
            }
        }
        
        then {
            assert workflow.success
            assert path("results/multiqc_report.html").exists()
        }
    }
}
\`\`\`

## Performance Optimization

### Channel Operations
Minimize channel operations and use efficient patterns:

\`\`\`nextflow
// Efficient: group operations
reads_ch
    .map { meta, reads -> [meta.sample, meta, reads] }
    .groupTuple()
    .map { sample, metas, reads -> [metas[0], reads.flatten()] }
\`\`\`

### Caching Strategy
Use publishDir selectively to avoid unnecessary file copying:

\`\`\`nextflow
process IMPORTANT_RESULTS {
    publishDir "\${params.outdir}/final_results", mode: 'copy'
    
    // Only publish final results, not intermediate files
}
\`\`\`

## Conclusion

These patterns have served me well in building robust, reproducible genomics workflows. The key is consistency in module design, careful handling of dependencies, and thorough testing. Remember that workflows are living documents - they should evolve with your understanding and requirements.

Next time, I'll dive into error handling strategies and debugging techniques for complex Nextflow workflows.
    `
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !blogPostContent[slug]) {
    return <Navigate to="/blog" replace />;
  }

  const post = blogPostContent[slug];

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <a href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </a>
          </Button>
        </div>

        {/* Article Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div 
            className="leading-relaxed text-foreground"
            dangerouslySetInnerHTML={{ 
              __html: post.content.replace(/\n/g, '<br>').replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>') 
            }}
          />
        </article>

        {/* Article Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Found this helpful? Have questions or suggestions?
            </p>
            <Button asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogPost;