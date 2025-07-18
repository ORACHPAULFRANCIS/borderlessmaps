
import { CheckCircle, Target } from "lucide-react";

const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              About Borderless Maps
            </h1>
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
              src="/lovable-uploads/6592eaaa-1dda-47f9-bb14-ad0a0c858ab4.png" 
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
    </div>
  );
};

export default About;
