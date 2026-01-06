import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

const getInquiryLabel = (type: string): string => {
  const labels: Record<string, string> = {
    "1on1": "1-on-1 Personal Training",
    "2on1": "2-on-1 Personal Training",
    "online": "Online Personal Training",
    "general": "General Inquiry",
  };
  return labels[type] || type;
};

const sendEmail = async (to: string[], from: string, subject: string, html: string) => {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({ from, to, subject, html }),
  });
  
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to send email: ${error}`);
  }
  
  return res.json();
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, inquiryType, message }: ContactRequest = await req.json();

    console.log("Received contact form submission:", { name, email, inquiryType });

    // Send confirmation email to the user
    const userEmailResponse = await sendEmail(
      [email],
      "Atlas Performance <onboarding@resend.dev>",
      "We've Received Your Message - Atlas Performance",
      `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; border-bottom: 2px solid #c9a227; padding-bottom: 10px;">Thank You, ${name}!</h1>
          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            We've received your inquiry about <strong>${getInquiryLabel(inquiryType)}</strong> and will get back to you within 24 hours.
          </p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="color: #666; font-size: 14px; margin: 0;"><strong>Your message:</strong></p>
            <p style="color: #555; font-size: 14px; margin-top: 10px;">${message}</p>
          </div>
          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            In the meantime, feel free to explore our website for more information about our training services.
          </p>
          <p style="color: #888; font-size: 14px; margin-top: 30px;">
            Best regards,<br>
            <strong>The Atlas Performance Team</strong>
          </p>
        </div>
      `
    );

    console.log("User confirmation email sent:", userEmailResponse);

    // Send notification email to the business
    const notificationEmailResponse = await sendEmail(
      ["jarrydr78@gmail.com"],
      "Atlas Performance Website <onboarding@resend.dev>",
      `New Contact Form Submission: ${getInquiryLabel(inquiryType)}`,
      `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #333; border-bottom: 2px solid #c9a227; padding-bottom: 10px;">New Contact Form Submission</h1>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Inquiry Type:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee; color: #333;">${getInquiryLabel(inquiryType)}</td>
            </tr>
          </table>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="color: #666; font-size: 14px; margin: 0;"><strong>Message:</strong></p>
            <p style="color: #555; font-size: 14px; margin-top: 10px; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `
    );

    console.log("Notification email sent:", notificationEmailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
