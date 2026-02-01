import { Code, Database, Globe, Smartphone } from "lucide-react";

const AboutSection = () => {
  const skills = [
    {
      category: "Languages",
      icon: Globe,
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Typescript",
        "Tailwind CSS",
        "C",
        "Java",
        "Python",
      ],
    },
    {
      category: "Technologies/Frameworks",
      icon: Database,
      technologies: ["React.js", "Next.js", "Node.js", "Express.js", "AWS (S3, EC2)"],
    },
    {
      category: "Databases",
      icon: Code,
      technologies: ["MongoDB", "PostgreSQL"],
    },
    {
      category: "Developer Tools",
      icon: Code,
      technologies: ["Docker", "Git", "Github", "Postman", "Prisma", "Inngest"],
    },
  ];

  return (
    <section className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4 text-center lg:text-left">
          About Me
        </h1>
        <div className="space-y-4 text-lg text-text-secondary leading-relaxed">
          <p>
            Hello, I'm Kunal Paul, a Computer Science student at Techno
            International Batanagar, West Bengal. I have a strong interest in
            web development and enjoy building practical and user-friendly
            applications.
          </p>
          <p>
            My core skills in MERN stack - MongoDB, Express.js, React.js, and
            Node.js. I have experience in developing full-stack web
            applications, working on both frontend and backend, and integrating
            APIs.
          </p>
          <p>
            I am actively honing my skills to become a proficient full-stack
            developer.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-text-primary mb-8">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map(({ category, icon: Icon, technologies }) => (
            <div
              key={category}
              className="bg-surface-elevated rounded-lg p-6 shadow-card"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">
                  {category}
                </h3>
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
    </section>
  );
};

export default AboutSection;
