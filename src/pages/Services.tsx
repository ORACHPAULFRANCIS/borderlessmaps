
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapIcon, 
  Globe, 
  Play, 
  BarChart3,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Services = () => {
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

  const handleServiceLearnMore = (serviceName: string) => {
    toast.info(`Learn more about ${serviceName} - Contact us for detailed information!`);
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h1>
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
            asChild
          >
            <Link to="/contact">
              Request a Map Project Quote
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
