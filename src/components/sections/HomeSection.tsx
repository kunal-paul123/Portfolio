import { ArrowRight } from 'lucide-react';

interface HomeSectionProps {
  onSectionChange: (section: string) => void;
}

const HomeSection = ({ onSectionChange }: HomeSectionProps) => {
  return (
    <section className="max-w-4xl mx-auto">
      {/* Hero Content */}
      <div className="mb-12">
        <div className="mb-6">
          <span className="text-4xl mb-4 block">👋</span>
          <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 leading-tight">
            Hello there! I'm Nikhil
          </h1>
        </div>
        
        <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
          <p>
            I'm a full-stack developer that loves building products and web apps that 
            can make a difference!
          </p>
          <p>
            Explore my portfolio and feel free to reach out if you're interested in collaboration.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <button
            onClick={() => onSectionChange('projects')}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
          >
            View My Work
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => onSectionChange('contact')}
            className="inline-flex items-center gap-2 bg-surface-elevated text-text-primary px-6 py-3 rounded-lg font-medium hover:bg-accent transition-all duration-200 shadow-sm border border-border"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Recent Work Preview */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-text-primary">
            What I've been working on
          </h2>
          <button
            onClick={() => onSectionChange('projects')}
            className="text-primary hover:text-primary/80 font-medium transition-colors duration-200"
          >
            View all projects →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;