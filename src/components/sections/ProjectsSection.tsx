import ProjectCard from "../ProjectCard";
import chitchat from "@/assets/chitchat.png";
import trendTrove from "@/assets/trendtrove.png";
import weatherApp from "@/assets/weather.png";
import elevateAI from "./../../assets/elevateAI.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "ElevateAI",
      description: "Your AI Career Coach",
      imageUrl: elevateAI,
      technologies: [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Shadcn UI",
        "PostgreSQL",
        "Prisma",
        "Inngest",
        "Clerk",
      ],
      githubUrl: "https://github.com/kunal-paul123/ElevateAI",
      liveUrl: "https://elevate-ai-omega.vercel.app/",
    },
    {
      title: "Chitchat",
      description:
        "A real time messaging platform using MERN stack and Socket.IO.",
      imageUrl: chitchat,
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Socket.IO",
      ],
      githubUrl: "https://github.com/kunal-paul123/ChitChat-frontend",
      liveUrl: "https://chit-chat-frontend-sepia.vercel.app/",
    },
    {
      title: "TrendTrove",
      description: "An Online ecommerce website.",
      imageUrl: trendTrove,
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/kunal-paul123/TrendTrove",
      liveUrl: "https://trendtrove-1-002i.onrender.com/",
    },
    {
      title: "Web Weather App",
      imageUrl: weatherApp,
      description: "A web weather app in ReactJs using open weather API.",
      technologies: ["React.js", "JavaScript", "OpenWeatherMap API"],
      githubUrl: "https://github.com/kunal-paul123/react-weather-app",
      liveUrl: "https://react-weather-app-vert-nine.vercel.app/",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4 text-center lg:text-left">
          My Projects
        </h1>
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
