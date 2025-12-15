import { Brain, Eye, Grid3X3 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { useParallax } from '@/hooks/useParallax';

const differentiators = [
  {
    icon: Brain,
    title: 'Data Intelligence',
    tagline: 'AI-powered insights',
  },
  {
    icon: Eye,
    title: 'Transparency',
    tagline: 'Full visibility',
  },
  {
    icon: Grid3X3,
    title: 'Excellence',
    tagline: 'Industry standards',
  },
];

const DifferentiatorSection = () => {
  const parallaxOffset = useParallax(0.15);

  return (
    <AnimatedSection id="about" className="py-20 md:py-24 relative overflow-hidden bg-background">
      {/* Parallax background elements */}
      <div 
        className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div 
        className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset * 1.2}px)` }}
      />
      
      {/* Parallax floating bubbles */}
      <div 
        className="bubble w-20 h-20 top-20 right-[20%] bubble-float hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.8}px)` }}
      />
      <div 
        className="bubble w-14 h-14 bottom-32 left-[15%] bubble-rise hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.6}px)`, animationDelay: '2s' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="golden-line mx-auto mb-4" />
          <h2 className="text-headline font-serif text-foreground">
            Automation,{' '}
            <span className="gradient-text">Redefined</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-8">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="group relative animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-500 hover:-translate-y-1 text-center">
                {/* Icon */}
                <div className="icon-container mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <item.icon className="w-5 h-5 text-primary-foreground" strokeWidth={1.5} />
                </div>
                
                {/* Content - Dark text on light background */}
                <h3 className="text-title font-serif text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-caption text-foreground/70">
                  {item.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default DifferentiatorSection;
