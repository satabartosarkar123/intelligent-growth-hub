import { Sparkles, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
    <AnimatedSection id="foresight" className="py-20 md:py-28 dark-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, hsl(var(--golden-cedar) / 0.2) 0%, transparent 50%),
                             radial-gradient(circle at 80% 70%, hsl(var(--silver-sage) / 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>
      
      {/* Glass bubbles */}
      <div className="bubble w-36 h-36 top-16 left-[8%] bubble-rise opacity-15 hidden lg:block" />
      <div className="bubble w-28 h-28 bottom-24 right-[12%] bubble-float opacity-20 hidden lg:block" style={{ animationDelay: '3s' }} />
      <div className="bubble w-20 h-20 top-1/2 right-[8%] bubble-rise opacity-15 hidden md:block" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="golden-line mb-4 opacity-60" />
            
            <h2 className="text-display font-serif text-white/95 mb-4 leading-tight">
              Automate{' '}
              <span className="text-accent">Intelligently</span>.
            </h2>
            
            <p className="text-body text-white/60 mb-6 max-w-md">
              Next-generation automation for businesses ready to scale.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg">
                Book Free Trial
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:text-white">
                <Link to="/foresight">
                  Explore Foresight
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all duration-500 hover:-translate-x-1 cursor-pointer group"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-all duration-300">
                    <feature.icon className="w-5 h-5 text-accent group-hover:text-primary-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white/95">
                      {feature.title}
                    </h3>
                    <p className="text-caption text-white/50">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats - minimal */}
            <div className="flex items-center gap-4 pt-2">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <span className="text-lg font-semibold text-accent">50+</span>
                <span className="text-caption text-white/50 ml-1.5">Integrations</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <span className="text-lg font-semibold text-accent">99.9%</span>
                <span className="text-caption text-white/50 ml-1.5">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ForesightSection;