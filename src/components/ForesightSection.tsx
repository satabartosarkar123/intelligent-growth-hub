import { Sparkles, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const features = [
  {
    icon: Zap,
    title: 'Real-Time Data Integration',
    description: 'Seamlessly connect all your data sources for instant insights.',
  },
  {
    icon: BarChart3,
    title: 'SEO Maturity Grader',
    description: 'Analyze and optimize your digital presence automatically.',
  },
  {
    icon: Sparkles,
    title: 'Automation Dashboard',
    description: 'Visualize and control all your automated workflows in one place.',
  },
];

const ForesightSection = () => {
  return (
    <AnimatedSection id="foresight" className="py-24 md:py-32 relative overflow-hidden">
      {/* Glass morphism background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-olive/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-sea-glass/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-sandstone/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full glass-card text-olive-dark text-sm font-medium mb-6">
              Introducing Foresight
            </span>
            
            <h2 className="text-4xl md:text-6xl font-serif font-semibold text-foreground mb-6 leading-tight">
              Automate{' '}
              <span className="gradient-text">Intelligently</span>.
              <br />
              Grow{' '}
              <span className="gradient-text">Exponentially</span>.
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Foresight is our flagship product — a next-generation automation platform 
              designed for businesses ready to scale intelligently.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl">
                Book Free Trial
              </Button>
              <Button variant="glass" size="xl">
                <span>Explore Features</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="glass-card-strong rounded-2xl p-6 hover:shadow-glow transition-all duration-500 hover:-translate-x-2 cursor-pointer group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-olive/10 flex items-center justify-center group-hover:bg-olive group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-olive-dark group-hover:text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats pill */}
            <div className="flex items-center gap-6 pt-4">
              <div className="glass-card rounded-full px-6 py-3">
                <span className="text-2xl font-bold gradient-text">50+</span>
                <span className="text-sm text-muted-foreground ml-2">Integrations</span>
              </div>
              <div className="glass-card rounded-full px-6 py-3">
                <span className="text-2xl font-bold gradient-text">99.9%</span>
                <span className="text-sm text-muted-foreground ml-2">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ForesightSection;
