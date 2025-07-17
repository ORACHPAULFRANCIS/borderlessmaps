import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  MapPin, 
  Globe, 
  TrendingUp, 
  Users, 
  ChevronRight, 
  Star,
  CheckCircle,
  Play,
  BookOpen,
  BarChart3,
  Layers,
  Zap,
  Target,
  Award,
  Phone,
  Mail,
  MapIcon,
  Code,
  Database,
  LineChart,
  Monitor
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import founderPhoto from "@/assets/founder-photo.jpg";
import sampleMap from "@/assets/sample-map.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiry: "",
    message: ""
  });

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await supabase.functions.invoke('submit-inquiry', {
        body: {
          name: formData.name,
          email: formData.email,
          company: formData.organization,
          service: formData.inquiry,
          message: formData.message,
        },
      });

      if (response.error) {
        console.error('Submission error:', response.error);
        toast.error("Failed to submit inquiry. Please try again.");
        return;
      }

      toast.success("Thank you for your inquiry! We'll get back to you soon.");
      setFormData({ name: "", email: "", organization: "", inquiry: "", message: "" });
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast.error("Failed to submit inquiry. Please try again.");
    }
  };

  const handleQuoteRequest = () => {
    scrollToSection('contact');
    toast.info("Scroll down to contact us for a custom quote!");
  };

  const handleConsultationRequest = () => {
    scrollToSection('contact');
    toast.info("Let's discuss your project! Fill out the contact form below.");
  };

  const handleExploreImpact = () => {
    scrollToSection('portfolio');
  };

  const handleUnlockInsights = () => {
    scrollToSection('services');
  };

  const handleLearnSkills = () => {
    scrollToSection('training');
  };

  const handleViewAllTraining = () => {
    toast.info("Complete training catalog coming soon! Contact us for current offerings.");
  };

  const handleServiceLearnMore = (serviceName: string) => {
    toast.info(`Learn more about ${serviceName} - Contact us for detailed information!`);
  };

  const handleCourseDetails = (courseName: string) => {
    toast.info(`${courseName} details - Contact us to enroll or learn more!`);
  };

  const services = [
    {
      icon: <MapIcon className="h-8 w-8" />,
      title: "Static Maps",
      description: "High-resolution, print-ready thematic, administrative, and base maps for reports and presentations.",
      color: "text-green-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Interactive Web Maps", 
      description: "Dynamic online maps allowing exploration, filtering, and interaction for dashboards and data portals.",
      color: "text-blue-600"
    },
    {
      icon: <Play className="h-8 w-8" />,
      title: "Story Maps",
      description: "Immersive web experiences combining maps with multimedia using ESRI StoryMaps and open-source tools.",
      color: "text-orange-600"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Visualization",
      description: "Impactful charts, dashboards, and infographics from spatial datasets for enhanced communication.",
      color: "text-purple-600"
    }
  ];

  const features = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Local Expertise, Global Vision",
      description: "Deep understanding of African context, powered by cutting-edge global geospatial technologies."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Artistry & Accuracy", 
      description: "We combine technical precision with artistic design, creating beautiful and impactful maps."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Empowerment Through Knowledge",
      description: "Hands-on training builds job-ready GIS skills for the data-driven future."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Trusted Insights",
      description: "Partner with NGOs, government agencies, and private sector leaders for strategic advantage."
    }
  ];

  const trainingPrograms = [
    {
      title: "GIS Essentials for Data Storytelling",
      description: "Master the fundamentals using ArcMap, ArcGIS Pro, and QGIS",
      icon: <Layers className="h-6 w-6" />,
      level: "Beginner"
    },
    {
      title: "Python for Geo-Data Analysis", 
      description: "Dive into automation with Google Colab, GeoPandas, and Folium",
      icon: <Code className="h-6 w-6" />,
      level: "Intermediate"
    },
    {
      title: "Crafting Compelling Story Maps",
      description: "Master interactive narrative using ESRI StoryMaps platform",
      icon: <Monitor className="h-6 w-6" />,
      level: "Intermediate"
    },
    {
      title: "Remote Sensing for Extractives",
      description: "Apply satellite imagery for land use and environmental analysis",
      icon: <Database className="h-6 w-6" />,
      level: "Advanced"
    }
  ];

  const portfolioProjects = [
    {
      title: "Albertine Graben Oil and Gas Discoveries",
      sector: "Extractives",
      description: "Comprehensive mapping of oil and gas discoveries in the Albertine Graben region of Uganda, featuring detailed cartographic analysis and spatial visualization",
      image: sampleMap,
      impact: "Enhanced resource exploration planning"
    },
    {
      title: "Water Access Mapping in Northern Uganda",
      sector: "Public Health",
      description: "Interactive dashboard helping NGOs optimize resource deployment",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&h=400&fit=crop",
      impact: "15% increase in served communities"
    },
    {
      title: "Urban Planning Dashboard",
      sector: "Government",
      description: "Story map combining demographic data with infrastructure planning",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop",
      impact: "Streamlined city development decisions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <MapPin className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Borderless Maps</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('training')} className="text-foreground hover:text-primary transition-colors">Training</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 map-grid-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Borderless Maps
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
              Spatial Data Storytellers
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Transforming complex spatial data into compelling, actionable narratives, 
              driving smarter decisions across Africa.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg animate-pulse-glow"
              onClick={handleExploreImpact}
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Explore Our Impact
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white"
              onClick={handleUnlockInsights}
            >
              <Zap className="mr-2 h-5 w-5" />
              Unlock Your Insights
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg border-accent text-accent hover:bg-accent hover:text-white"
              onClick={handleLearnSkills}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Learn Geospatial Skills
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming Your Data Into Actionable Insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <CardHeader>
                  <div className={`${service.color} mb-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="mt-4">
                    <Button 
                      variant="ghost" 
                      className="p-0 text-primary hover:text-primary/80"
                      onClick={() => handleServiceLearnMore(service.title)}
                    >
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8"
              onClick={handleQuoteRequest}
            >
              Request a Map Project Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Maps That Tell Powerful Stories & Drive Impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-white">
                        {project.sector}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                      <div className="flex items-center text-sm text-primary font-medium">
                        <Star className="h-4 w-4 mr-1" />
                        Impact: {project.impact}
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                    <DialogDescription>
                      {project.sector} • {project.impact}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <p className="text-base">{project.description}</p>
                    <div className="flex gap-4">
                      <Button onClick={handleConsultationRequest}>
                        Request Similar Project
                      </Button>
                      <Button variant="outline" onClick={() => scrollToSection('contact')}>
                        Learn More
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Learn. Map. Lead.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Master Geospatial Skills with Borderless Maps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingPrograms.map((program, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {program.icon}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {program.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{program.description}</CardDescription>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                    onClick={() => handleCourseDetails(program.title)}
                  >
                    View Course Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-8"
              onClick={handleViewAllTraining}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Explore All Training Programs
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                About Borderless Maps
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Borderless Maps is a dynamic geospatial consulting and education firm, officially registered as 
                Borderless Cartographers of Uganda Ltd. We specialize in transforming complex geographic data 
                into clear, visually compelling narratives that drive decision-making and inspire positive change 
                across diverse sectors.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Based in Kampala, Uganda, our vision extends 'borderless' across the African continent, 
                empowering decision-makers through spatial intelligence and fostering a new generation of 
                digital cartographers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Our Vision</h3>
                    <p className="text-muted-foreground">To empower decision-makers across Africa by transforming complex spatial data into compelling, actionable narratives.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Our Mission</h3>
                    <p className="text-muted-foreground">To create visually impactful, data-driven maps that inform, inspire, and influence positive change while building geospatial capacity.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl"></div>
              <img 
                src={founderPhoto} 
                alt="Orach Paul Francis - Founder"
                className="relative z-10 w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 z-20">
                <h3 className="font-bold text-xl text-foreground mb-2">Orach Paul Francis</h3>
                <p className="text-primary font-medium">Founder & Lead Solutions Engineer</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Expert in GIS, Cartography, Python for Geospatial, and training with deep understanding of the African context.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Let's Map Something Great Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in Touch with the Borderless Maps Team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Card className="p-8">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl">Send us a message</CardTitle>
                <CardDescription>
                  We're excited to hear about your spatial data challenges, project ideas, or training needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Name *</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Organization</label>
                    <Input
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Your organization (optional)"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">How can we help you?</label>
                    <Select value={formData.inquiry} onValueChange={(value) => setFormData({ ...formData, inquiry: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="custom-map">I need a custom map/visualization</SelectItem>
                        <SelectItem value="training">I'm interested in a training course</SelectItem>
                        <SelectItem value="corporate-training">I'd like corporate training for my team</SelectItem>
                        <SelectItem value="general">General Inquiry / Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Message *</label>
                    <Textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl">Direct Contact</CardTitle>
                </CardHeader>
                <CardContent className="px-0 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>orachpf@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+256 774 061 585</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Kampala, Uganda (serving all of East Africa)</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-xl">Ready to Transform Your Data?</CardTitle>
                  <CardDescription>
                    Let's discuss how Borderless Maps can help you leverage spatial intelligence for impactful decisions.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <Button 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-white"
                    onClick={handleConsultationRequest}
                  >
                    <Globe className="mr-2 h-5 w-5" />
                    Request a Consultation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">Borderless Maps</span>
              </div>
              <p className="text-background/70 mb-4">
                Transforming complex spatial data into compelling, actionable narratives, 
                driving smarter decisions across Africa.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-background/70">
                <li><button onClick={() => handleServiceLearnMore('Custom Cartography')} className="hover:text-primary transition-colors">Custom Cartography</button></li>
                <li><button onClick={() => handleServiceLearnMore('Interactive Maps')} className="hover:text-primary transition-colors">Interactive Maps</button></li>
                <li><button onClick={() => handleServiceLearnMore('Story Maps')} className="hover:text-primary transition-colors">Story Maps</button></li>
                <li><button onClick={() => scrollToSection('training')} className="hover:text-primary transition-colors">GIS Training</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Connect</h3>
              <ul className="space-y-2 text-background/70">
                <li><button onClick={() => toast.info('LinkedIn coming soon!')} className="hover:text-primary transition-colors">LinkedIn</button></li>
                <li><button onClick={() => toast.info('TikTok coming soon!')} className="hover:text-primary transition-colors">TikTok</button></li>
                <li><button onClick={() => toast.info('YouTube coming soon!')} className="hover:text-primary transition-colors">YouTube</button></li>
                <li><button onClick={() => toast.info('Newsletter signup coming soon!')} className="hover:text-primary transition-colors">Newsletter</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
            <p>&copy; 2024 Borderless Maps (Borderless Cartographers of Uganda Ltd). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
