import { useState } from 'react';
import { Linkedin, MessageCircle, Send, MapPin, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import AnimatedSection from './AnimatedSection';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <footer className="bg-charcoal text-cream relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-olive/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sea-glass/5 rounded-full blur-3xl" />
      
      <AnimatedSection className="py-20 md:py-28">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Contact Form */}
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Let's Start a{' '}
                <span className="text-olive-light">Conversation</span>
              </h3>
              <p className="text-cream/70 mb-8 max-w-md">
                Ready to transform your business with intelligent automation? 
                Get in touch with our team.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-cream/5 border-cream/10 text-cream placeholder:text-cream/40 focus:border-olive-light h-12 rounded-xl"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-cream/5 border-cream/10 text-cream placeholder:text-cream/40 focus:border-olive-light h-12 rounded-xl"
                  />
                </div>
                <Textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-cream/5 border-cream/10 text-cream placeholder:text-cream/40 focus:border-olive-light min-h-32 rounded-xl resize-none"
                />
                <Button type="submit" variant="hero" className="w-full md:w-auto">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>

            {/* Right - Info & Social */}
            <div className="lg:pl-12">
              <div className="mb-10">
                {/* Logo */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-olive flex items-center justify-center">
                    <span className="text-primary-foreground font-serif font-bold text-xl">T</span>
                  </div>
                  <span className="text-2xl font-serif font-semibold">TDSC</span>
                </div>
                
                <p className="text-cream/70 mb-8 max-w-sm">
                  Data Driven Intelligent Automation for Business Growth. 
                  Empowering organizations to achieve more through intelligent solutions.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-4 text-cream/70 hover:text-olive-light transition-colors cursor-pointer">
                  <MapPin className="w-5 h-5" />
                  <span>Innovation Hub, Tech City</span>
                </div>
                <div className="flex items-center gap-4 text-cream/70 hover:text-olive-light transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                  <span>hello@tdsc.com</span>
                </div>
                <div className="flex items-center gap-4 text-cream/70 hover:text-olive-light transition-colors cursor-pointer">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-cream/5 flex items-center justify-center hover:bg-olive transition-colors duration-300 group"
                >
                  <Linkedin className="w-5 h-5 text-cream/70 group-hover:text-cream" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-cream/5 flex items-center justify-center hover:bg-olive transition-colors duration-300 group"
                >
                  <MessageCircle className="w-5 h-5 text-cream/70 group-hover:text-cream" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-cream/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-cream/50">
              © 2024 TDSC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-cream/50 hover:text-olive-light transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-cream/50 hover:text-olive-light transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </footer>
  );
};

export default Footer;
