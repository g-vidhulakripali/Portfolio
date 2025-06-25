
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { EducationSection } from "@/components/EducationSection";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsShowcase } from "@/components/SkillsShowcase";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* 3D Moving Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        
        {/* 3D Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse transform rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg blur-xl animate-pulse delay-1000 transform rotate-12"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg blur-xl animate-pulse delay-3000 transform rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse delay-4000"></div>
        
        {/* Moving particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white/10 rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="space-y-0">
          <HeroSection />
          <div id="about">
            <AboutSection />
          </div>
          <div id="education" className="bg-slate-800/30 backdrop-blur-sm">
            <EducationSection />
          </div>
          <div id="experience">
            <ExperienceTimeline />
          </div>
          <div id="skills" className="bg-slate-800/30 backdrop-blur-sm">
            <SkillsShowcase />
          </div>
          <div id="projects">
            <ProjectsShowcase />
          </div>
          <div id="contact" className="bg-slate-800/30 backdrop-blur-sm">
            <ContactSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
