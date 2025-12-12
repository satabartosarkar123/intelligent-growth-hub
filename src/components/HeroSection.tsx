import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import bannerCollage from '@/assets/banner-collage.png';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background image with blur overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bannerCollage}
          alt="Small business owners success stories"
          className="w-full h-full object-cover scale-110 blur-sm"
        />
        <div className="absolute inset-0 bg-background/70 backdrop-blur-md" />
        <div className="absolute inset-0 bg-gradient-hero opacity-40" />
      </div>
      
      {/* Floating glass elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 glass-card rounded-3xl float opacity-50 hidden lg:block" />
      <div className="absolute bottom-1/3 left-20 w-24 h-24 glass-card rounded-2xl float-delayed opacity-40 hidden lg:block" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 glass-card rounded-xl float-slow opacity-30 hidden lg:block" />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-5 py-2.5 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Intelligent Due Diligence & Recommendation
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Data Driven{' '}
            <span className="gradient-text">Intelligent Automation</span>
            {' '}for Business Growth
          </h1>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Transform your operations with AI-powered insights and automation solutions 
            that deliver measurable results.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" onClick={() => scrollToSection('#contact')}>
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="glass" size="xl" className="group">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-8 mt-16 pt-8 border-t border-border/30 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col">
              <span className="text-3xl font-bold gradient-text">500+</span>
              <span className="text-sm text-muted-foreground">Businesses Served</span>
            </div>
            <div className="w-px h-12 bg-border/30 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold gradient-text">98%</span>
              <span className="text-sm text-muted-foreground">Client Satisfaction</span>
            </div>
            <div className="w-px h-12 bg-border/30 hidden sm:block" />
            <div className="flex flex-col">
              <span className="text-3xl font-bold gradient-text">40%</span>
              <span className="text-sm text-muted-foreground">Avg. Cost Reduction</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={() => scrollToSection('#about')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse hover:opacity-70 transition-opacity cursor-pointer"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-olive animate-bounce" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
