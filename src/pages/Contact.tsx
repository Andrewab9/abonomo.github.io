import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, ExternalLink, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - in a real app, this would submit to a service
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "For research collaborations and general inquiries",
      value: "andreabonomo.ab@hotmail.it",
      href: "mailto:andreabonomo.ab@hotmail.it",
      primary: true
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      description: "Professional networking and career discussions",
      value: "linkedin.com/in/andreabonomoab",
      href: "https://www.linkedin.com/in/andreabonomoab/",
      primary: false
    },
    {
      icon: <ExternalLink className="h-6 w-6" />,
      title: "ORCID",
      description: "Academic profile and publication tracking",
      value: "0000-0002-3737-2276",
      href: "https://orcid.org/0000-0002-3737-2276",
      primary: false
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always interested in discussing research collaborations, bioinformatics challenges, 
            or sharing insights about computational biology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="academic-paper">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>
                  Drop me a line and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="Tell me more about your project, question, or collaboration idea..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="academic-paper">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="text-primary mt-1">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {method.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {method.description}
                        </p>
                        <Button
                          variant={method.primary ? "default" : "outline"}
                          size="sm"
                          asChild
                        >
                          <a 
                            href={method.href}
                            target={method.href.startsWith('mailto') ? '_self' : '_blank'}
                            rel={method.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                          >
                            {method.title === 'Email' ? method.value : `Visit ${method.title}`}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Location */}
            <Card className="academic-paper">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Genoa, Italy
                  <br />
                  <span className="text-sm">
                    Currently based at the University of Genoa for PhD research
                  </span>
                </p>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="academic-paper">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                <p className="text-muted-foreground text-sm">
                  I typically respond to emails within 24-48 hours. For urgent matters 
                  related to ongoing collaborations, please mention "URGENT" in the subject line.
                </p>
              </CardContent>
            </Card>

            {/* Collaboration Interests */}
            <Card className="academic-paper">
              <CardHeader>
                <CardTitle>Collaboration Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Machine learning applications in genomics</li>
                  <li>• Workflow development and optimization</li>
                  <li>• Multi-omics data integration projects</li>
                  <li>• Open-source bioinformatics tool development</li>
                  <li>• Reproducible research practices</li>
                  <li>• Student mentoring and teaching opportunities</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;