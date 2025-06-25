
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsShowcase } from "@/components/SkillsShowcase";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-green-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="space-y-20 pb-20">
          <HeroSection />
          <AboutSection />
          <SkillsShowcase />
          <ProjectsShowcase />
          <ExperienceTimeline />
          <ContactSection />
        </main>
      </div>
    </div>
  );
};

export default Index;
