import { Brain, Eye, Grid3X3, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const differentiators = [
  {
    icon: Brain,
    title: 'Data Driven Intelligence',
    description: 'AI-powered insights that transform raw data into strategic decisions.',
  },
  {
    icon: Eye,
    title: 'Transparent Processes',
    description: 'Clear visibility into every step of your automation journey.',
  },
  {
    icon: Grid3X3,
    title: 'Standardized Excellence',
    description: 'Industry-leading frameworks for consistent, reliable results.',
  },
];

const DifferentiatorSection = () => {
  return (
    <AnimatedSection id="about" className="py-24 md:py-32 bg-sandstone-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-olive/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sea-glass/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-olive/10 text-olive-dark text-sm font-medium mb-4">
            What Sets Us Apart
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-6">
            Intelligent Automation,{' '}
            <span className="gradient-text">Redefined</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We combine cutting-edge AI with transparent processes to deliver 
            automation solutions that truly understand your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="glass-card rounded-3xl p-8 h-full hover:shadow-glass-xl transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className="icon-container mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-primary-foreground" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                
                {/* Arrow link */}
                <div className="flex items-center gap-2 text-olive-dark font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default DifferentiatorSection;
