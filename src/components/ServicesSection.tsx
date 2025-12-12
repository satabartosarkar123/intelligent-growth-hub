import { FileSearch, Cpu, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const services = [
  {
    icon: FileSearch,
    title: 'Due Diligence',
    description: 'Comprehensive assessments that uncover risks and opportunities in your business processes.',
    accent: 'from-olive to-olive-dark',
  },
  {
    icon: Cpu,
    title: 'AI Maturity Assessment',
    description: 'Evaluate your organization\'s readiness for AI adoption and identify growth pathways.',
    accent: 'from-sea-glass to-sea-glass-dark',
  },
  {
    icon: GraduationCap,
    title: 'AI Readiness Training',
    description: 'Equip your team with the skills and knowledge to leverage AI effectively.',
    accent: 'from-sandstone to-olive',
  },
];

const ServicesSection = () => {
  return (
    <AnimatedSection id="services" className="py-24 md:py-32 bg-sandstone-light relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--olive-grove) / 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, hsl(var(--sea-glass) / 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-olive/10 text-olive-dark text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-6">
            We Also{' '}
            <span className="gradient-text">Provide</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Beyond our core products, we offer specialized services to guide your 
            digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="bg-card rounded-3xl p-8 h-full shadow-soft hover:shadow-glass-xl transition-all duration-500 hover:-translate-y-3 border border-border/50 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-olive/10 flex items-center justify-center mb-6 group-hover:bg-olive group-hover:scale-110 transition-all duration-300">
                    <service.icon 
                      className="w-8 h-8 text-olive-dark group-hover:text-primary-foreground transition-colors duration-300" 
                      strokeWidth={1.5} 
                    />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4 relative">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 relative">
                  {service.description}
                </p>
                
                {/* CTA */}
                <Button variant="ghost" className="group-hover:bg-muted p-0 h-auto font-medium relative">
                  <span className="flex items-center gap-2 text-olive-dark">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Need a custom solution? Let's discuss your requirements.
          </p>
          <Button variant="outline" size="lg">
            Get in Touch
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection;
