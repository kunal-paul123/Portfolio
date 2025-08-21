import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import HomeSection from '@/components/sections/HomeSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ArticlesSection from '@/components/sections/ArticlesSection';
import ContactSection from '@/components/sections/ContactSection';
import ProjectCard from '@/components/ProjectCard';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div>
            <HomeSection onSectionChange={setActiveSection} />
            {/* Featured Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <ProjectCard
                title="CheatCode"
                description="Practice for technical interviews using AI."
                technologies={['NextJS', 'TailwindCSS', 'Vercel AI SDK']}
                githubUrl="#"
                liveUrl="#"
              />
              <ProjectCard
                title="NewDemy"
                description="A learning management system to buy and sell courses."
                technologies={['React', 'Node.js', 'MongoDB', 'Express']}
                githubUrl="#"
                liveUrl="#"
              />
            </div>
          </div>
        );
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'articles':
        return <ArticlesSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <HomeSection onSectionChange={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-72">
          <div className="p-6 lg:p-8 pt-16 lg:pt-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;