
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Footer = () => {
  const handleServiceLearnMore = (serviceName: string) => {
    toast.info(`Learn more about ${serviceName} - Contact us for detailed information!`);
  };

  return (
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
              <li><Link to="/training" className="hover:text-primary transition-colors">GIS Training</Link></li>
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
          <p>&copy; 2025 Borderless Maps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
