import { FileText, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

const publications = [
  {
    title: 'Future of Intelligent Automation',
    type: 'Whitepaper',
    date: 'Dec 2024',
  },
  {
    title: 'Due Diligence Best Practices',
    type: 'Report',
    date: 'Nov 2024',
  },
  {
    title: 'AI Readiness Guide',
    type: 'Guide',
    date: 'Oct 2024',
  },
  {
    title: 'Automation ROI Calculator',
    type: 'Tool',
    date: 'Sep 2024',
  },
];

const PublicationsSection = () => {
  return (
    <AnimatedSection id="publications" className="py-20 md:py-24 relative overflow-hidden">
      {/* Bubbles */}
      <div className="bubble w-28 h-28 top-16 left-[10%] bubble-float hidden lg:block" />
      <div className="bubble w-18 h-18 bottom-20 right-[15%] bubble-rise hidden lg:block" style={{ animationDelay: '2.5s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <div>
            <div className="golden-line mb-4" />
            <h2 className="text-headline font-serif text-foreground">
              Publications &{' '}
              <span className="gradient-text">Insights</span>
            </h2>
          </div>
          <Button variant="ghost" className="self-start md:self-auto text-sm">
            View All
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {publications.map((pub, index) => (
            <div
              key={pub.title}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="glass-card rounded-xl p-5 h-full hover:shadow-lg transition-all duration-500 hover:-translate-y-1">
                {/* Document icon */}
                <div className="w-full aspect-[4/3] rounded-lg bg-muted/50 mb-4 flex items-center justify-center group-hover:bg-primary/5 transition-colors duration-300">
                  <FileText className="w-8 h-8 text-muted-foreground/50 group-hover:text-primary/60 transition-colors" strokeWidth={1} />
                </div>
                
                {/* Type badge */}
                <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-caption font-medium mb-2">
                  {pub.type}
                </span>
                
                {/* Content */}
                <h3 className="text-sm font-medium text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
                
                {/* Footer */}
                <div className="flex items-center justify-between pt-3 border-t border-border/30">
                  <span className="text-caption text-muted-foreground">{pub.date}</span>
                  <Download className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
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