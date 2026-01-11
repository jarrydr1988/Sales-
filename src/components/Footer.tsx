import { Instagram } from "lucide-react";
const Footer = () => {
  return <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-2xl text-primary">JARRYD ROOS</span>
            <span className="font-display text-2xl text-foreground">PT</span>
          </div>

          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground text-center">
            © 2025 Atlas Strength & Performance. All rights reserved.
          </p>

          {/* Links & Social */}
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="https://www.instagram.com/jarrydroos_pt?igsh=Y3pnY21mOGNhMjJp" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;