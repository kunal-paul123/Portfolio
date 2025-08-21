import ProjectCard from '../ProjectCard';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'CheatCode',
      description: 'Practice for technical interviews using AI.',
      technologies: ['NextJS', 'TailwindCSS', 'Vercel AI SDK'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'NewDemy',
      description: 'A learning management system to buy and sell courses.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio showcasing my projects and skills.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Task Manager Pro',
      description: 'A collaborative task management application with real-time updates.',
      technologies: ['React', 'Socket.io', 'PostgreSQL', 'Redux'],
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  return (
    <section className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
          My Projects
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed">
          A collection of projects I've worked on, showcasing my skills in full-stack development,
          UI/UX design, and modern web technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;