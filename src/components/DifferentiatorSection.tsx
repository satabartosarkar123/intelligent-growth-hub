import { Brain, Eye, Grid3X3 } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const differentiators = [
  {
    icon: Brain,
    title: 'Data Driven Intelligence',
    tagline: 'AI-powered strategic insights',
  },
  {
    icon: Eye,
    title: 'Transparent Processes',
    tagline: 'Full visibility, every step',
  },
  {
    icon: Grid3X3,
    title: 'Standardized Excellence',
    tagline: 'Industry-leading frameworks',
  },
];

const DifferentiatorSection = () => {
  return (
    <AnimatedSection id="about" className="py-20 md:py-28 bg-sandstone-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-olive/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sea-glass/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-olive/10 text-olive-dark text-sm font-medium mb-4">
            What Sets Us Apart
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            Intelligent Automation,{' '}
            <span className="gradient-text">Redefined</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {differentiators.map((item, index) => (
            <div
              key={item.title}
              className="group relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:shadow-glass-xl transition-all duration-500 hover:-translate-y-2 text-center">
                {/* Icon */}
                <div className="icon-container mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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
