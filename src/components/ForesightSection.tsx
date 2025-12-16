import { Sparkles, BarChart3, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import { useParallax } from '@/hooks/useParallax';

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
  const parallaxOffset = useParallax(0.2);

  return (
    <AnimatedSection id="foresight" className="py-16 md:py-24 relative overflow-hidden">
      {/* Dark contrast background */}
      <div className="absolute inset-0 bg-turquin" />
      
      {/* Parallax floating orbs */}
      <div 
        className="absolute w-72 h-72 rounded-full bg-cerule/15 blur-3xl top-0 left-1/4"
        style={{ 
          transform: `translateY(${parallaxOffset}px)`,
          animation: 'pulse-soft 4s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute w-56 h-56 rounded-full bg-sagace/10 blur-3xl bottom-10 right-1/4"
        style={{ 
          transform: `translateY(${parallaxOffset * 0.7}px)`,
          animation: 'pulse-soft 5s ease-in-out infinite',
          animationDelay: '2s'
        }}
      />
      <div 
        className="absolute w-40 h-40 rounded-full bg-cerule/10 blur-2xl top-1/2 right-[10%]"
        style={{ transform: `translateY(${parallaxOffset * 1.2}px)` }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="animate-on-scroll">
            <div className="w-10 h-0.5 bg-gradient-to-r from-cerule to-sagace mb-4" />
            
            <h2 className="text-2xl md:text-3xl font-serif text-white leading-tight tracking-tight mb-3">
              Automate{' '}
              <span className="text-cerule">Intelligently</span>.
            </h2>
            
            <p className="text-sm text-white/70 mb-5 max-w-sm">
              Next-gen automation for scaling businesses.
            </p>

            <Button className="bg-cerule text-white hover:bg-cerule/90 text-xs px-5 py-2 h-auto">
              Book Free Trial
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>

          {/* Right - Feature Cards */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="animate-on-scroll bg-white/5 backdrop-blur-sm border border-cerule/15 rounded-lg p-4 hover:border-cerule/40 transition-all duration-300 hover:-translate-x-1 cursor-pointer group"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-cerule/15 flex items-center justify-center group-hover:bg-cerule transition-all duration-300">
                    <feature.icon className="w-4 h-4 text-cerule group-hover:text-white" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-white">
                      {feature.title}
                    </h3>
                    <p className="text-[10px] text-white/60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="flex items-center gap-3 pt-2">
              <div className="bg-white/5 border border-sagace/30 rounded-full px-3 py-1.5">
                <span className="text-sm font-medium text-cerule">50+</span>
                <span className="text-[10px] text-white/60 ml-1">Integrations</span>
              </div>
              <div className="bg-white/5 border border-sagace/30 rounded-full px-3 py-1.5">
                <span className="text-sm font-medium text-cerule">99.9%</span>
                <span className="text-[10px] text-white/60 ml-1">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ForesightSection;
