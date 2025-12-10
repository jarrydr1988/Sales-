import { Instagram, Youtube, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialSection = () => {
  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      handle: "@forgefit",
      url: "#",
      followers: "45K",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400",
    },
    {
      icon: Youtube,
      label: "YouTube",
      handle: "ForgeFit",
      url: "#",
      followers: "120K",
      color: "hover:bg-red-600",
    },
    {
      icon: Facebook,
      label: "Facebook",
      handle: "ForgeFit",
      url: "#",
      followers: "30K",
      color: "hover:bg-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter/X",
      handle: "@forgefit",
      url: "#",
      followers: "15K",
      color: "hover:bg-foreground",
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Social Media */}
          <div>
            {/* Section Header */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="font-body text-sm uppercase tracking-wider text-primary">
                Connect With Me
              </span>
            </div>

            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              FOLLOW THE
              <br />
              <span className="text-gradient">JOURNEY</span>
            </h2>

            <p className="font-body text-lg text-muted-foreground mb-12 max-w-lg">
              Join our fitness community across social media for daily motivation, 
              workout tips, and behind-the-scenes content.
            </p>

            {/* Social Links Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  className={`group flex items-center gap-4 p-5 rounded-xl bg-secondary/50 border border-border transition-all duration-300 hover:border-transparent hover:text-foreground ${social.color}`}
                >
                  <div className="p-3 rounded-lg bg-background/50 group-hover:bg-background/20 transition-colors">
                    <social.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-display text-lg">{social.label}</p>
                    <p className="font-body text-sm text-muted-foreground group-hover:text-foreground/70">
                      {social.handle}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-xl text-primary group-hover:text-foreground">
                      {social.followers}
                    </p>
                    <p className="font-body text-xs uppercase tracking-wider text-muted-foreground group-hover:text-foreground/70">
                      Followers
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <div className="p-8 md:p-12 rounded-2xl bg-card border border-border">
              <h3 className="font-display text-3xl text-foreground mb-8">
                GET IN TOUCH
              </h3>

              <div className="space-y-6 mb-10">
                <a
                  href="mailto:contact@forgefit.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm uppercase tracking-wider text-muted-foreground">
                      Email
                    </p>
                    <p className="font-body text-foreground group-hover:text-primary transition-colors">
                      contact@forgefit.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm uppercase tracking-wider text-muted-foreground">
                      Phone
                    </p>
                    <p className="font-body text-foreground group-hover:text-primary transition-colors">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-body text-sm uppercase tracking-wider text-muted-foreground">
                      Location
                    </p>
                    <p className="font-body text-foreground">
                      Los Angeles, CA
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="pt-8 border-t border-border">
                <h4 className="font-display text-xl text-foreground mb-4">
                  JOIN THE NEWSLETTER
                </h4>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Get weekly workout tips, nutrition advice, and exclusive offers 
                  delivered straight to your inbox.
                </p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body"
                  />
                  <Button variant="hero">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
