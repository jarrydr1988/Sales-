import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

// CORS headers - allow all origins for this public form
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface MacroRequest {
  email: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  goal: string;
  ebookUrl?: string;
}

// HTML escape function to prevent XSS
const escapeHtml = (text: string): string => {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>\"']/g, (char) => htmlEscapes[char]);
};

// Input validation
const validateMacroRequest = (data: unknown): { valid: true; data: MacroRequest } | { valid: false; error: string } => {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Invalid request body' };
  }

  const { email, name, goal, ebookUrl } = data as Record<string, unknown>;
  
  const calories = Number( (data as any).calories);
  const protein = Number( (data as any).protein);
  const carbs = Number( (data as any).carbs);
  const fats = Number( (data as any).fats);

  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) {
    return { valid: false, error: 'Invalid email address' };
  }

  if (typeof name !== 'string' || name.trim().length === 0 || name.length > 100) {
    return { valid: false, error: 'Name must be between 1 and 100 characters' };
  }

  if (isNaN(calories) || calories < 500 || calories > 10000) {
    return { valid: false, error: 'Calories must be a number between 500 and 10000' };
  }

  if (isNaN(protein) || protein < 0 || protein > 1000) {
    return { valid: false, error: 'Protein must be a number between 0 and 1000' };
  }

  if (isNaN(carbs) || carbs < 0 || carbs > 1500) {
    return { valid: false, error: 'Carbs must be a number between 0 and 1500' };
  }

  if (isNaN(fats) || fats < 0 || fats > 500) {
    return { valid: false, error: 'Fats must be a number between 0 and 500' };
  }

  const validGoals = ['fat-loss', 'muscle-gain', 'maintenance'];
  if (typeof goal !== 'string' || !validGoals.includes(goal)) {
    return { valid: false, error: 'Invalid goal type' };
  }

  // Validate ebookUrl if provided
  if (ebookUrl !== undefined) {
    if (typeof ebookUrl !== 'string') {
      return { valid: false, error: 'Invalid ebook URL' };
    }
    // Only allow lovable domains for ebook URLs
    const allowedDomains = [
      'lovable.app/',
      'lovableproject.com/',
      'localhost'
    ];
    if (!allowedDomains.some(domain => ebookUrl.includes(domain))) {
      return { valid: false, error: 'Invalid ebook URL domain' };
    }
  }

  return {
    valid: true,
    data: {
      email: email.trim().toLowerCase(),
      name: name.trim(),
      calories: Math.round(calories),
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fats: Math.round(fats),
      goal,
      ebookUrl: ebookUrl as string | undefined,
    },
  };
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const rawData = await req.json();
    const validation = validateMacroRequest(rawData);

    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: validation.error }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { email, name, calories, protein, carbs, fats, goal, ebookUrl } = validation.data;

    // Escape HTML in user inputs
    const safeName = escapeHtml(name);

    console.log("Processing macro results request for goal:", goal);

    const goalLabel = goal === "fat-loss" ? "Fat Loss" : goal === "muscle-gain" ? "Muscle Gain" : "Maintenance";

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="margin: 0; padding: 0; background-color: #0d0d0d; font-family: 'Inter', Arial, sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0d0d0d; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background-color: #141414; border-radius: 12px; overflow: hidden;">
                <!-- Header -->
                <tr>
                  <td style="padding: 40px 40px 20px; text-align: center; border-bottom: 1px solid #333;">
                    <h1 style="margin: 0; font-family: 'Oswald', Arial, sans-serif; font-size: 28px; color: #8B9A5B; letter-spacing: 2px;">ATLAS</h1>
                    <p style="margin: 5px 0 0; font-size: 12px; color: #f5f5eb; letter-spacing: 3px;">STRENGTH & PERFORMANCE</p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <h2 style="margin: 0 0 20px; font-family: 'Oswald', Arial, sans-serif; font-size: 24px; color: #f5f5eb;">
                      Hey ${safeName}! 👋
                    </h2>
                    <p style="margin: 0 0 30px; font-size: 16px; color: #8b8b80; line-height: 1.6;">
                      Here are your personalized macro targets for your <strong style="color: #8B9A5B;">${goalLabel}</strong> goal:
                    </p>
                    
                    <!-- Macro Results -->
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                      <tr>
                        <td style="padding: 20px; background-color: #1a1a1a; border-radius: 8px; border: 1px solid #8B9A5B; text-align: center;">
                          <p style="margin: 0 0 5px; font-size: 36px; font-weight: bold; color: #8B9A5B;">${calories}</p>
                          <p style="margin: 0; font-size: 12px; color: #8b8b80; letter-spacing: 1px; text-transform: uppercase;">Daily Calories</p>
                        </td>
                      </tr>
                    </table>
                    
                    <table width="100%" cellpadding="0" cellspacing="10">
                      <tr>
                        <td width="33%" style="padding: 15px; background-color: #1a1a1a; border-radius: 8px; text-align: center;">
                          <p style="margin: 0 0 5px; font-size: 24px; font-weight: bold; color: #f5f5eb;">${protein}g</p>
                          <p style="margin: 0; font-size: 11px; color: #8b8b80; letter-spacing: 1px; text-transform: uppercase;">Protein</p>
                        </td>
                        <td width="33%" style="padding: 15px; background-color: #1a1a1a; border-radius: 8px; text-align: center;">
                          <p style="margin: 0 0 5px; font-size: 24px; font-weight: bold; color: #f5f5eb;">${carbs}g</p>
                          <p style="margin: 0; font-size: 11px; color: #8b8b80; letter-spacing: 1px; text-transform: uppercase;">Carbs</p>
                        </td>
                        <td width="33%" style="padding: 15px; background-color: #1a1a1a; border-radius: 8px; text-align: center;">
                          <p style="margin: 0 0 5px; font-size: 24px; font-weight: bold; color: #f5f5eb;">${fats}g</p>
                          <p style="margin: 0; font-size: 11px; color: #8b8b80; letter-spacing: 1px; text-transform: uppercase;">Fats</p>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Ebook Section -->
                    <div style="margin-top: 30px; padding: 25px; background-color: #1a1a1a; border-radius: 8px; border-left: 4px solid #8B9A5B;">
                      <h3 style="margin: 0 0 10px; font-family: 'Oswald', Arial, sans-serif; font-size: 18px; color: #f5f5eb;">
                        🎁 BONUS: Meal Ideas Ebook
                      </h3>
                      <p style="margin: 0 0 15px; font-size: 14px; color: #8b8b80; line-height: 1.5;">
                        We've included a free ebook with meal ideas to help you hit your macro targets!
                      </p>
                      <a href="https://www.atlasstrengthandperformance.com/ebook/macro-guide.pdf" style="display: inline-block; padding: 12px 24px; background-color: #8B9A5B; color: #0d0d0d; text-decoration: none; font-weight: bold; font-size: 14px; border-radius: 6px;">
                        Download Ebook
                      </a>
                    </div>
                    
                    <!-- CTA -->
                    <div style="margin-top: 30px; text-align: center;">
                      <p style="margin: 0 0 15px; font-size: 14px; color: #8b8b80;">
                        Want personalized coaching to achieve your goals faster?
                      </p>
                      <a href="https://id-preview--392bbc09-4115-4655-9a37-a54406ac4db8.lovable.app/#contact" style="display: inline-block; padding: 14px 28px; background-color: #8B9A5B; color: #0d0d0d; text-decoration: none; font-weight: bold; font-size: 14px; border-radius: 6px; text-transform: uppercase; letter-spacing: 1px;">
                        Get Started Today
                      </a>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 30px 40px; background-color: #0d0d0d; text-align: center; border-top: 1px solid #333;">
                    <p style="margin: 0; font-size: 12px; color: #666;">
                      © Atlas Strength & Performance
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Atlas Strength & Performance <jarryd@atlasstrengthandperformance.com>",
        to: [email],
        subject: "Your Personalized Macro Targets - Atlas Strength & Performance",
        html: emailHtml,
      }),
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Resend API error:", errorData);
      throw new Error("Email service error");
    }

    const data = await res.json();
    console.log("Email sent successfully");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    // Return generic error message to client
    return new Response(
      JSON.stringify({ success: false, error: "Failed to send email. Please try again later." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
