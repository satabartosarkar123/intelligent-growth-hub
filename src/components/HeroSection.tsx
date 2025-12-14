import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import bannerCollage from '@/assets/banner-collage.png';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image with blur overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerCollage}
          alt="Small business owners success stories"
          className="w-full h-full object-cover scale-105 blur-sm opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/90" />
      </div>
      
      {/* Floating glass bubbles */}
      <div className="bubble w-40 h-40 top-1/4 right-[15%] bubble-float hidden lg:block" style={{ animationDelay: '0s' }} />
      <div className="bubble w-24 h-24 top-1/3 left-[10%] bubble-rise hidden lg:block" style={{ animationDelay: '2s' }} />
      <div className="bubble w-32 h-32 bottom-1/4 right-[25%] bubble-float hidden lg:block" style={{ animationDelay: '4s' }} />
      <div className="bubble w-16 h-16 top-1/2 left-[20%] bubble-rise hidden lg:block" style={{ animationDelay: '1s' }} />
      <div className="bubble w-20 h-20 bottom-1/3 left-[30%] bubble-float hidden md:block" style={{ animationDelay: '3s' }} />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-foreground/80 uppercase">
              Intelligent Due Diligence
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="text-display font-serif text-foreground leading-tight mb-5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Data Driven{' '}
            <span className="gradient-text">Intelligent Automation</span>
            {' '}for Growth
          </h1>
          
          {/* Subtext - minimal */}
          <p className="text-body text-muted-foreground max-w-lg mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            AI-powered insights and automation that deliver measurable results.
          </p>
          
          {/* CTAs - removed Watch Demo */}
          <div className="flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="lg" onClick={() => scrollToSection('#contact')}>
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          {/* Trust indicators - minimal */}
          <div className="flex flex-wrap items-center gap-8 mt-14 pt-6 border-t border-border/20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col">
              <span className="text-2xl font-semibold gradient-text">500+</span>
              <span className="text-caption text-muted-foreground">Businesses</span>
            </div>
            <div className="w-px h-10 bg-border/30 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-2xl font-semibold gradient-text">98%</span>
              <span className="text-caption text-muted-foreground">Satisfaction</span>
            </div>
            <div className="w-px h-10 bg-border/30 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-2xl font-semibold gradient-text">40%</span>
              <span className="text-caption text-muted-foreground">Cost Reduction</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 hover:opacity-70 transition-opacity cursor-pointer group"
      >
        <span className="text-caption text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-muted-foreground/30 flex items-start justify-center p-1 group-hover:border-accent/50 transition-colors">
          <div className="w-1 h-2 rounded-full bg-accent animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;