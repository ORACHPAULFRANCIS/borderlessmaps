import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DownloadableBrochure = () => {
  const handleDownload = () => {
    // Create the brochure content as a printable HTML page
    const brochureContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Borderless Maps - Company Brochure</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            line-height: 1.6;
            color: #1a1a1a;
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }
        
        .brochure {
            max-width: 210mm;
            margin: 0 auto;
            background: white;
            min-height: 297mm;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #dc2626 100%);
            color: white;
            padding: 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
                radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%);
        }
        
        .logo {
            font-size: 42px;
            font-weight: 700;
            margin-bottom: 8px;
            position: relative;
            z-index: 2;
        }
        
        .tagline {
            font-size: 18px;
            font-weight: 300;
            position: relative;
            z-index: 2;
        }
        
        .content {
            padding: 40px;
        }
        
        .section {
            margin-bottom: 35px;
        }
        
        .section-title {
            font-size: 24px;
            font-weight: 600;
            color: #2563eb;
            margin-bottom: 15px;
            border-bottom: 2px solid #2563eb;
            padding-bottom: 5px;
        }
        
        .about {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            padding: 30px;
            border-radius: 12px;
            margin-bottom: 30px;
            border-left: 5px solid #dc2626;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 20px;
        }
        
        .service-card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            border-top: 3px solid #2563eb;
        }
        
        .service-title {
            font-weight: 600;
            color: #2563eb;
            margin-bottom: 8px;
        }
        
        .founder-section {
            background: linear-gradient(135deg, #fef3c7 0%, #fcd34d 100%);
            padding: 25px;
            border-radius: 12px;
            text-align: center;
            margin: 25px 0;
        }
        
        .contact-info {
            background: #1f2937;
            color: white;
            padding: 30px;
            border-radius: 12px;
            margin-top: 30px;
        }
        
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            margin-top: 15px;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .contact-label {
            font-weight: 600;
            color: #fbbf24;
        }
        
        .ugandan-pattern {
            height: 60px;
            background: linear-gradient(45deg, 
                #dc2626 0%, #dc2626 33.33%, 
                #fbbf24 33.33%, #fbbf24 66.66%, 
                #1a1a1a 66.66%, #1a1a1a 100%);
            background-size: 20px 20px;
            opacity: 0.1;
            margin: 20px 0;
        }
        
        .highlight {
            background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
            color: white;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            margin: 20px 0;
            font-weight: 500;
        }
        
        @media print {
            body { background: white; }
            .brochure { box-shadow: none; }
        }
    </style>
</head>
<body>
    <div class="brochure">
        <div class="header">
            <div class="logo">BORDERLESS MAPS</div>
            <div class="tagline">Spatial Data Storytellers</div>
            <div style="margin-top: 15px; font-size: 14px; opacity: 0.9;">
                Borderless Cartographers of Uganda Ltd.
            </div>
        </div>
        
        <div class="content">
            <div class="about">
                <h2 style="color: #dc2626; margin-bottom: 15px; font-size: 28px;">About Us</h2>
                <p style="font-size: 16px; margin-bottom: 15px;">
                    Borderless Maps is a dynamic geospatial consulting and education firm, officially registered as 
                    Borderless Cartographers of Uganda Ltd. We specialize in transforming complex geographic data 
                    into clear, visually compelling narratives that drive decision-making and inspire positive change 
                    across diverse sectors.
                </p>
                <p style="font-size: 16px;">
                    Based in Kampala, Uganda, our vision extends 'borderless' across the African continent, 
                    empowering decision-makers through spatial intelligence and fostering a new generation of 
                    digital cartographers.
                </p>
            </div>
            
            <div class="ugandan-pattern"></div>
            
            <div class="section">
                <h2 class="section-title">Our Vision & Mission</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 20px;">
                    <div style="background: #dbeafe; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb;">
                        <h3 style="color: #2563eb; font-weight: 600; margin-bottom: 10px;">Our Vision</h3>
                        <p>To empower decision-makers across Africa by transforming complex spatial data into compelling, actionable narratives.</p>
                    </div>
                    <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                        <h3 style="color: #f59e0b; font-weight: 600; margin-bottom: 10px;">Our Mission</h3>
                        <p>To create visually impactful, data-driven maps that inform, inspire, and influence positive change while building geospatial capacity.</p>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h2 class="section-title">Our Services</h2>
                <div class="services-grid">
                    <div class="service-card">
                        <div class="service-title">Static Maps</div>
                        <p>High-resolution, print-ready thematic, administrative, and base maps for reports and presentations.</p>
                    </div>
                    <div class="service-card">
                        <div class="service-title">Interactive Web Maps</div>
                        <p>Dynamic online maps allowing exploration, filtering, and interaction for dashboards and data portals.</p>
                    </div>
                    <div class="service-card">
                        <div class="service-title">Story Maps</div>
                        <p>Immersive web experiences combining maps with multimedia using ESRI StoryMaps and open-source tools.</p>
                    </div>
                    <div class="service-card">
                        <div class="service-title">Data Visualization</div>
                        <p>Impactful charts, dashboards, and infographics from spatial datasets for enhanced communication.</p>
                    </div>
                </div>
            </div>
            
            <div class="highlight">
                🌍 Transforming Complex Spatial Data into Compelling, Actionable Narratives 🌍
            </div>
            
            <div class="founder-section">
                <h3 style="color: #dc2626; margin-bottom: 10px;">Meet Our Founder</h3>
                <h4 style="color: #1f2937; font-weight: 600; margin-bottom: 5px;">Orach Paul Francis</h4>
                <p style="color: #f59e0b; font-weight: 500; margin-bottom: 10px;">Founder & Lead Solutions Engineer</p>
                <p style="color: #1f2937; font-size: 14px;">
                    Expert in GIS, Cartography, Python for Geospatial, and training with deep understanding of the African context.
                </p>
            </div>
            
            <div class="section">
                <h2 class="section-title">Why Choose Borderless Maps?</h2>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 20px;">
                    <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; border-left: 3px solid #16a34a;">
                        <strong style="color: #16a34a;">Local Expertise, Global Vision</strong>
                        <p style="font-size: 14px; margin-top: 5px;">Deep understanding of African context, powered by cutting-edge global geospatial technologies.</p>
                    </div>
                    <div style="background: #fef3c7; padding: 15px; border-radius: 8px; border-left: 3px solid #f59e0b;">
                        <strong style="color: #f59e0b;">Artistry & Accuracy</strong>
                        <p style="font-size: 14px; margin-top: 5px;">We combine technical precision with artistic design, creating beautiful and impactful maps.</p>
                    </div>
                    <div style="background: #dbeafe; padding: 15px; border-radius: 8px; border-left: 3px solid #2563eb;">
                        <strong style="color: #2563eb;">Empowerment Through Knowledge</strong>
                        <p style="font-size: 14px; margin-top: 5px;">Hands-on training builds job-ready GIS skills for the data-driven future.</p>
                    </div>
                    <div style="background: #fce7f3; padding: 15px; border-radius: 8px; border-left: 3px solid #db2777;">
                        <strong style="color: #db2777;">Trusted Insights</strong>
                        <p style="font-size: 14px; margin-top: 5px;">Partner with NGOs, government agencies, and private sector leaders for strategic advantage.</p>
                    </div>
                </div>
            </div>
            
            <div class="contact-info">
                <h2 style="color: #fbbf24; margin-bottom: 15px;">Get In Touch</h2>
                <p style="margin-bottom: 15px;">Ready to transform your data into actionable insights? Contact us today!</p>
                <div class="contact-grid">
                    <div class="contact-item">
                        <span class="contact-label">Company:</span>
                        <span>Borderless Cartographers of Uganda Ltd.</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-label">Location:</span>
                        <span>Kampala, Uganda</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-label">Website:</span>
                        <span>www.borderlessmaps.com</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-label">Services:</span>
                        <span>Geospatial Consulting & Training</span>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 25px; padding-top: 20px; border-top: 1px solid #374151;">
                    <p style="color: #fbbf24; font-weight: 600; font-size: 16px;">
                        "Driving smarter decisions across Africa through spatial intelligence"
                    </p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`;

    // Create and download the brochure
    const blob = new Blob([brochureContent], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Borderless-Maps-Company-Brochure.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <FileText className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h3 className="font-semibold text-lg mb-2">Company Brochure</h3>
        <p className="text-muted-foreground text-sm mb-4">
          Download our professional company brochure with complete business information and services overview.
        </p>
        <Button 
          onClick={handleDownload}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Brochure
        </Button>
      </CardContent>
    </Card>
  );
};

export default DownloadableBrochure;