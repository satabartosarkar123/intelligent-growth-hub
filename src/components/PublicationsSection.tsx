import { FileText, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const publications = [
  {
    title: 'The Future of Intelligent Automation',
    type: 'Whitepaper',
    date: 'December 2024',
    description: 'An in-depth analysis of how AI is reshaping business automation.',
  },
  {
    title: 'Due Diligence Best Practices',
    type: 'Research Report',
    date: 'November 2024',
    description: 'Essential frameworks for thorough business assessments.',
  },
  {
    title: 'AI Readiness Assessment Guide',
    type: 'Guide',
    date: 'October 2024',
    description: 'A step-by-step approach to evaluating organizational AI readiness.',
  },
  {
    title: 'Automation ROI Calculator',
    type: 'Tool',
    date: 'September 2024',
    description: 'Interactive tool to calculate your automation investment returns.',
  },
];

const PublicationsSection = () => {
  return (
    <AnimatedSection id="publications" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-olive/10 text-olive-dark text-sm font-medium mb-4">
              Resources
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-foreground">
              Publications &{' '}
              <span className="gradient-text">Insights</span>
            </h2>
          </div>
          <Button variant="outline" className="self-start md:self-auto">
            View All Resources
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {publications.map((pub, index) => (
            <div
              key={pub.title}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:shadow-glass-xl transition-all duration-500 hover:-translate-y-2">
                {/* Document icon placeholder */}
                <div className="w-full aspect-[4/3] rounded-xl bg-muted mb-5 flex items-center justify-center group-hover:bg-olive/10 transition-colors duration-300">
                  <FileText className="w-12 h-12 text-muted-foreground group-hover:text-olive-dark transition-colors" strokeWidth={1} />
                </div>
                
                {/* Type badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-olive/10 text-olive-dark text-xs font-medium mb-3">
                  {pub.type}
                </span>
                
                {/* Content */}
                <h3 className="text-base font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-olive-dark transition-colors">
                  {pub.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {pub.description}
                </p>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-xs text-muted-foreground">{pub.date}</span>
                  <Download className="w-4 h-4 text-muted-foreground group-hover:text-olive-dark transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default PublicationsSection;
