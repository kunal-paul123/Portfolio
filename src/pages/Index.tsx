import HomeSection from "@/components/sections/HomeSection";
import ProjectCard from "@/components/ProjectCard";
import chitchat from "@/assets/chitchat.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <main className="flex-1 lg:ml-72">
          <div className="p-6 lg:p-8 lg:pt-8">
            <HomeSection />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <ProjectCard
                title="ChitChat"
                description="A real time messaging platform using MERN stack and Socket.IO."
                technologies={[
                  "React.js",
                  "Node.js",
                  "MongoDB",
                  "Express.js",
                  "Socket.IO",
                ]}
                githubUrl="https://github.com/kunal-paul123/ChitChat-frontend"
                liveUrl="https://chit-chat-frontend-sepia.vercel.app/"
              />
              <ProjectCard
                title="TrendTrove"
                description="An Online ecommerce website."
                technologies={["React.js", "Node.js", "MongoDB", "Express.js"]}
                githubUrl="https://github.com/kunal-paul123/TrendTrove"
                liveUrl="https://trendtrove-1-002i.onrender.com/"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
