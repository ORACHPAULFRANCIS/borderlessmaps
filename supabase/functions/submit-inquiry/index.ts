import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface InquiryRequest {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
  phone?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, service, message, phone }: InquiryRequest = await req.json();

    console.log("Processing inquiry submission:", { name, email, service });

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Save inquiry to database
    const { data: inquiry, error: dbError } = await supabase
      .from("inquiries")
      .insert({
        name,
        email,
        company: company || null,
        service,
        message,
        phone: phone || null,
      })
      .select()
      .single();
    
    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error(`Failed to save inquiry: ${dbError.message}`);
    }

    console.log("Inquiry saved successfully:", inquiry.id);

    // Initialize Resend
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

    // Send notification email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Borderless Maps <hello@borderlessmaps.com>",
      to: ["orachpf@gmail.com"],
      subject: `New Inquiry: ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Inquiry Received</h2>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          </div>
          
          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Inquiry Details</h3>
            <p><strong>Service of Interest:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="margin: 0; font-size: 14px; color: #6b7280;">
              This inquiry was submitted on ${new Date().toLocaleString()} and saved with ID: ${inquiry.id}
            </p>
          </div>
        </div>
      `,
    });

    console.log("Admin notification sent:", adminEmailResponse);

    // Send confirmation email to customer
    const customerEmailResponse = await resend.emails.send({
      from: "Borderless Maps <hello@borderlessmaps.com>",
      to: [email],
      subject: "Thank you for your inquiry - Borderless Maps",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for reaching out!</h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for your inquiry about <strong>${service}</strong>. We have received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Inquiry Summary</h3>
            <p><strong>Service:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p>In the meantime, feel free to explore our services or contact us directly:</p>
          <ul>
            <li><strong>Email:</strong> orachpf@gmail.com</li>
            <li><strong>Phone:</strong> +256 774 061 585</li>
            <li><strong>Location:</strong> Kampala, Uganda</li>
          </ul>
          
          <p>Best regards,<br>
          <strong>Borderless Maps Team</strong><br>
          Transforming spatial data into actionable insights</p>
        </div>
      `,
    });

    console.log("Customer confirmation sent:", customerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Inquiry submitted successfully",
        inquiryId: inquiry.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in submit-inquiry function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to submit inquiry",
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
