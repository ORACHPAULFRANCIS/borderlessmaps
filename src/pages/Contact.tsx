
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Phone,
  Mail,
  MapPin,
  Globe
} from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiry: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Map Something Great Together
          </h1>
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
                      <SelectItem value="general">General Inquiry / Partnerships</SelectItem>
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

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Inquiry"}
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
                  onClick={() => toast.info("Let's discuss your project! Fill out the contact form above.")}
                >
                  <Globe className="mr-2 h-5 w-5" />
                  Request a Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
