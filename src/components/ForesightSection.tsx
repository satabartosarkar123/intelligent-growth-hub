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
    <AnimatedSection id="foresight" className="py-16 md:py-24 bg-[hsl(222,80%,9%)] relative overflow-hidden">
      {/* Floating orbs with new palette */}
      <div className="absolute w-72 h-72 rounded-full bg-[hsl(210,100%,74%)]/10 blur-3xl top-0 left-1/4 animate-pulse" />
      <div className="absolute w-56 h-56 rounded-full bg-[hsl(251,100%,83%)]/15 blur-3xl bottom-10 right-1/4 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute w-40 h-40 rounded-full bg-[hsl(210,100%,74%)]/8 blur-2xl top-1/2 right-[10%]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <div className="w-10 h-0.5 bg-gradient-to-r from-[hsl(210,100%,74%)] to-[hsl(251,100%,83%)] mb-4" />
            
            <h2 className="text-2xl md:text-3xl font-serif text-[hsl(195,100%,97%)] mb-3 leading-tight tracking-tight">
              Automate{' '}
              <span className="bg-gradient-to-r from-[hsl(210,100%,74%)] to-[hsl(251,100%,83%)] bg-clip-text text-transparent">Intelligently</span>.
            </h2>
            
            <p className="text-sm text-[hsl(210,30%,70%)] mb-5 max-w-sm">
              Next-gen automation for scaling businesses.
            </p>

            <Button className="bg-[hsl(210,100%,74%)] text-[hsl(222,80%,9%)] hover:bg-[hsl(210,100%,80%)] text-xs px-5 py-2 h-auto">
              Book Free Trial
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>

          {/* Right - Feature Cards */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-[hsl(222,70%,12%)]/80 backdrop-blur-sm border border-[hsl(210,100%,74%)]/10 rounded-lg p-4 hover:border-[hsl(210,100%,74%)]/30 transition-all duration-300 hover:-translate-x-1 cursor-pointer group"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-[hsl(210,100%,74%)]/10 flex items-center justify-center group-hover:bg-[hsl(210,100%,74%)] transition-all duration-300">
                    <feature.icon className="w-4 h-4 text-[hsl(210,100%,74%)] group-hover:text-[hsl(222,80%,9%)]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-xs font-medium text-[hsl(195,100%,97%)]">
                      {feature.title}
                    </h3>
                    <p className="text-[10px] text-[hsl(210,30%,60%)]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="flex items-center gap-3 pt-2">
              <div className="bg-[hsl(222,70%,12%)]/60 border border-[hsl(251,100%,83%)]/20 rounded-full px-3 py-1.5">
                <span className="text-sm font-medium bg-gradient-to-r from-[hsl(210,100%,74%)] to-[hsl(251,100%,83%)] bg-clip-text text-transparent">50+</span>
                <span className="text-[10px] text-[hsl(210,30%,60%)] ml-1">Integrations</span>
              </div>
              <div className="bg-[hsl(222,70%,12%)]/60 border border-[hsl(251,100%,83%)]/20 rounded-full px-3 py-1.5">
                <span className="text-sm font-medium bg-gradient-to-r from-[hsl(210,100%,74%)] to-[hsl(251,100%,83%)] bg-clip-text text-transparent">99.9%</span>
                <span className="text-[10px] text-[hsl(210,30%,60%)] ml-1">Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ForesightSection;