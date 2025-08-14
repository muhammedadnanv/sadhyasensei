import { Leaf, Heart, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-kerala/5 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-secondary" />
              <span className="text-lg font-bold text-foreground">Sadhya Sensei</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Your ultimate digital assistant for planning and executing authentic Onam Sadhya feasts
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-foreground mb-4">Features</h3>
            <div className="space-y-2 text-center">
              <p className="text-sm text-muted-foreground">26+ Traditional Dishes</p>
              <p className="text-sm text-muted-foreground">Smart Shopping Lists</p>
              <p className="text-sm text-muted-foreground">Cooking Timelines</p>
              <p className="text-sm text-muted-foreground">Banana Leaf Guide</p>
            </div>
          </div>

          {/* Developer Attribution */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-semibold text-foreground mb-4">Engineered By</h3>
            <div className="flex items-center gap-2 mb-2">
              <Heart className="h-4 w-4 text-primary animate-glow" />
              <span className="text-sm text-muted-foreground">Built with passion</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-5 w-5 text-primary" />
              <a 
                href="https://www.linkedin.com/in/muhammedadnanvv/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground hover:text-primary transition-smooth text-sm"
              >
                Muhammed Adnan
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-1 text-center md:text-right">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Sadhya Sensei. Preserving Kerala's culinary heritage through technology.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Made in Kerala</span>
              <span>•</span>
              <span>For Kerala Traditions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;