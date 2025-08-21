import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <div className="bg-surface-elevated rounded-lg shadow-card hover:shadow-elevated transition-all duration-300 overflow-hidden group">
      {/* Project Image */}
      {imageUrl && (
        <div className="bg-muted overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <div className="flex gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                className="p-2 text-text-secondary hover:text-primary hover:bg-accent rounded-lg transition-all duration-200"
                aria-label="View on GitHub"
              >
                <Github size={18} />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                className="p-2 text-text-secondary hover:text-primary hover:bg-accent rounded-lg transition-all duration-200"
                aria-label="View live project"
                target="_blank"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>

        <p className="text-text-secondary mb-4 leading-relaxed">
          {description}
        </p>

        {/* Technology Stack */}
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
    </div>
  );
};

export default ProjectCard;
