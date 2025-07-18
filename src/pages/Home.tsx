
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  Zap,
  Target,
  Award,
  Users,
  CheckCircle,
  BookOpen
} from "lucide-react";
import { Link } from "react-router-dom";
import DownloadableBrochure from "@/components/DownloadableBrochure";

const Home = () => {
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

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
              asChild
            >
              <Link to="/portfolio">
                <TrendingUp className="mr-2 h-5 w-5" />
                Explore Our Impact
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white"
              asChild
            >
              <Link to="/services">
                <Zap className="mr-2 h-5 w-5" />
                Unlock Your Insights
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg border-accent text-accent hover:bg-accent hover:text-white"
              asChild
            >
              <Link to="/training">
                <BookOpen className="mr-2 h-5 w-5" />
                Learn Geospatial Skills
              </Link>
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

      {/* Brochure Download Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Learn More About Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download our comprehensive company brochure to discover how we can transform your spatial data into actionable insights.
            </p>
          </div>
          <div className="flex justify-center">
            <DownloadableBrochure />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
