import { Linkedin, MessageCircle, MapPin, Mail, Phone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
      
      <AnimatedSection className="py-12 md:py-16">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Logo & About */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-primary-foreground font-serif font-semibold text-base">T</span>
                </div>
                <span className="text-lg font-serif font-medium">TDSC</span>
              </div>
              
              <p className="text-body text-white/50 max-w-xs">
                Intelligent automation for business growth.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-medium text-white/80 mb-4">Contact</h4>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 text-caption text-white/50 hover:text-accent transition-colors cursor-pointer">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Innovation Hub, Tech City</span>
                </div>
                <div className="flex items-center gap-3 text-caption text-white/50 hover:text-accent transition-colors cursor-pointer">
                  <Mail className="w-3.5 h-3.5" />
                  <span>hello@tdsc.com</span>
                </div>
                <div className="flex items-center gap-3 text-caption text-white/50 hover:text-accent transition-colors cursor-pointer">
                  <Phone className="w-3.5 h-3.5" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-medium text-white/80 mb-4">Connect</h4>
              <div className="flex items-center gap-2.5">
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                >
                  <Linkedin className="w-3.5 h-3.5 text-white/50 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-white/50 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-caption text-white/40">
              © 2024 TDSC. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="text-caption text-white/40 hover:text-accent transition-colors">
                Privacy
              </a>
              <a href="#" className="text-caption text-white/40 hover:text-accent transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
};

export default Footer;