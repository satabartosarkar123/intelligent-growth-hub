import { FileSearch, Cpu, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import { useParallax } from '@/hooks/useParallax';

const services = [
  {
    icon: FileSearch,
    title: 'Due Diligence',
    description: 'Uncover risks and opportunities.',
  },
  {
    icon: Cpu,
    title: 'AI Assessment',
    description: 'Evaluate AI readiness.',
  },
  {
    icon: GraduationCap,
    title: 'AI Training',
    description: 'Equip your team effectively.',
  },
];

const ServicesSection = () => {
  const parallaxOffset = useParallax(0.18);

  return (
    <AnimatedSection id="services" className="py-20 md:py-28 relative overflow-hidden bg-muted/30">
      {/* Parallax background pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      >
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, hsl(var(--accent) / 0.08) 0%, transparent 50%)`,
          }}
        />
      </div>
      
      {/* Parallax bubbles */}
      <div 
        className="bubble w-24 h-24 top-20 right-[18%] bubble-float opacity-40 hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      <div 
        className="bubble w-16 h-16 bottom-28 left-[12%] bubble-rise opacity-30 hidden lg:block"
        style={{ transform: `translateY(${parallaxOffset * 0.8}px)`, animationDelay: '2s' }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="golden-line mx-auto mb-4" />
          <h2 className="text-headline font-serif text-foreground mb-3">
            We Also{' '}
            <span className="gradient-text">Provide</span>
          </h2>
          <p className="text-body text-foreground/70">
            Specialized services for your transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-card-strong rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <service.icon 
                    className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" 
                    strokeWidth={1.5} 
                  />
                </div>
                
                {/* Content - Dark text on light glass */}
                <h3 className="text-title font-serif text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-caption text-foreground/70 mb-4">
                  {service.description}
                </p>
                
                {/* CTA */}
                <button className="text-caption text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5 group/btn">
                  Learn more
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/5">
            Get in Touch
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;
