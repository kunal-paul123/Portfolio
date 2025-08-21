import { Code, Database, Globe, Smartphone } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Globe,
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'],
    },
    {
      category: 'Backend',
      icon: Database,
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
    },
    {
      category: 'Tools',
      icon: Code,
      technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'],
    },
  ];

  return (
    <section className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
          About Me
        </h1>
        <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
          <p>
            I'm a passionate full-stack developer with over 3 years of experience building 
            modern web applications. I love creating user-centered solutions that solve 
            real-world problems.
          </p>
          <p>
            My journey in tech started with curiosity about how websites work, and it has 
            evolved into a deep appreciation for clean code, thoughtful design, and 
            continuous learning.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing 
            to open source projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map(({ category, icon: Icon, technologies }) => (
            <div key={category} className="bg-surface-elevated rounded-lg p-6 shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-3 py-1 text-sm bg-accent text-accent-foreground rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-8">Experience</h2>
        <div className="space-y-6">
          <div className="bg-surface-elevated rounded-lg p-6 shadow-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-text-primary">Senior Full Stack Developer</h3>
              <span className="text-sm text-text-secondary">2022 - Present</span>
            </div>
            <p className="text-primary font-medium mb-2">TechCorp Solutions</p>
            <p className="text-text-secondary">
              Led development of multiple web applications using React, Node.js, and cloud technologies. 
              Improved application performance by 40% and mentored junior developers.
            </p>
          </div>
          
          <div className="bg-surface-elevated rounded-lg p-6 shadow-card">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-text-primary">Full Stack Developer</h3>
              <span className="text-sm text-text-secondary">2021 - 2022</span>
            </div>
            <p className="text-primary font-medium mb-2">StartupHub Inc.</p>
            <p className="text-text-secondary">
              Built responsive web applications and RESTful APIs. Collaborated with cross-functional 
              teams to deliver projects on time and within budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;