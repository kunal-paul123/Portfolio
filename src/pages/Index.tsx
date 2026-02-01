import HomeSection from "@/components/sections/HomeSection";
import ProjectCard from "@/components/ProjectCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <main className="flex-1 lg:ml-72">
          <div className="p-6 lg:p-8 lg:pt-8">
            <HomeSection />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <ProjectCard
                title="ElevateAI"
                description="Your AI Career Coach"
                technologies={[
                  "Next.js",
                  "Typescript",
                  "Tailwind CSS",
                  "Shadcn UI",
                  "PostgreSQL",
                  "Prisma",
                  "Inngest",
                  "Clerk",
                ]}
                githubUrl="https://github.com/kunal-paul123/ElevateAI"
                liveUrl="https://elevate-ai-omega.vercel.app/"
              />
              <ProjectCard
                title="TrendTrove"
                description="An Online ecommerce website."
                technologies={["React.js", "Node.js", "MongoDB", "Express.js", "AWS (S3, EC2)", "CloudFront", "Razorpay"]}
                githubUrl="https://github.com/kunal-paul123/TrendTrove"
                liveUrl="https://trendtrove.mooo.com/"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
