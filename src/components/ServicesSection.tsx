import { FileSearch, Cpu, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

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
  return (
    <AnimatedSection id="services" className="py-20 md:py-28 dark-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--golden-cedar) / 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, hsl(var(--silver-sage) / 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>
      
      {/* Bubbles */}
      <div className="bubble w-24 h-24 top-20 right-[18%] bubble-float opacity-20 hidden lg:block" />
      <div className="bubble w-16 h-16 bottom-28 left-[12%] bubble-rise opacity-15 hidden lg:block" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="golden-line mx-auto mb-4 opacity-60" />
          <h2 className="text-headline font-serif text-white/95 mb-3">
            We Also{' '}
            <span className="text-accent">Provide</span>
          </h2>
          <p className="text-body text-white/60">
            Specialized services for your transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-all duration-500 hover:-translate-y-1">
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-105 transition-all duration-300">
                  <service.icon 
                    className="w-5 h-5 text-accent group-hover:text-primary-foreground transition-colors duration-300" 
                    strokeWidth={1.5} 
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-title font-serif text-white/95 mb-2">
                  {service.title}
                </h3>
                <p className="text-caption text-white/50 mb-4">
                  {service.description}
                </p>
                
                {/* CTA */}
                <button className="text-caption text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5 group/btn">
                  Learn more
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
            Get in Touch
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;