import { Sparkles, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const features = [
  {
    icon: Zap,
    title: 'Real-Time Integration',
    description: 'Connect data sources instantly.',
  },
  {
    icon: BarChart3,
    title: 'SEO Grader',
    description: 'Optimize digital presence.',
  },
  {
    icon: Sparkles,
    title: 'Automation Dashboard',
    description: 'Control workflows in one place.',
  },
];

const ForesightSection = () => {
  return (
    <AnimatedSection id="foresight" className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Glass bubbles */}
      <div className="bubble w-36 h-36 top-16 left-[8%] bubble-rise hidden lg:block" />
      <div className="bubble w-28 h-28 bottom-24 right-[12%] bubble-float hidden lg:block" style={{ animationDelay: '3s' }} />
      <div className="bubble w-20 h-20 top-1/2 right-[8%] bubble-rise hidden md:block" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="golden-line mb-4" />
            
            <h2 className="text-display font-serif text-foreground mb-4 leading-tight">
              Automate{' '}
              <span className="gradient-text">Intelligently</span>.
            </h2>
            
            <p className="text-body text-muted-foreground mb-6 max-w-md">
              Next-generation automation for businesses ready to scale.
            </p>

            <Button variant="hero" size="lg">
              Book Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right - Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card-strong rounded-xl p-5 hover:shadow-lg transition-all duration-500 hover:-translate-x-1 cursor-pointer group"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-caption text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats - minimal */}
            <div className="flex items-center gap-4 pt-2">
              <div className="glass-card rounded-full px-4 py-2">
                <span className="text-lg font-semibold gradient-text">50+</span>
                <span className="text-caption text-muted-foreground ml-1.5">Integrations</span>
              </div>
              <div className="glass-card rounded-full px-4 py-2">
                <span className="text-lg font-semibold gradient-text">99.9%</span>
                <span className="text-caption text-muted-foreground ml-1.5">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ForesightSection;