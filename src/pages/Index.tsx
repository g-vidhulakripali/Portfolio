
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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Moving Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30 animate-pulse"></div>
        
        {/* Floating geometric shapes with motion */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/40 to-cyan-200/40 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-lg blur-xl animate-drift delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-green-200/40 to-blue-200/40 rounded-full blur-xl animate-float delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-gradient-to-br from-orange-200/40 to-red-200/40 rounded-lg blur-xl animate-drift delay-3000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-36 h-36 bg-gradient-to-br from-indigo-200/40 to-purple-200/40 rounded-full blur-xl animate-float delay-4000"></div>
        
        {/* Moving particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-blue-300/30 rounded-full animate-pulse`}
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
          
          {/* About Section - White background */}
          <div id="about" className="bg-white/80 backdrop-blur-sm scroll-fade-in">
            <AboutSection />
          </div>
          
          {/* Education Section - Light gradient */}
          <div id="education" className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm scroll-slide-right">
            <EducationSection />
          </div>
          
          {/* Experience Section - White background */}
          <div id="experience" className="bg-white/80 backdrop-blur-sm scroll-fade-in">
            <ExperienceTimeline />
          </div>
          
          {/* Skills Section - Light gradient */}
          <div id="skills" className="bg-gradient-to-r from-purple-50/80 to-pink-50/80 backdrop-blur-sm scroll-slide-left">
            <SkillsShowcase />
          </div>
          
          {/* Projects Section - White background */}
          <div id="projects" className="bg-white/80 backdrop-blur-sm scroll-fade-in">
            <ProjectsShowcase />
          </div>
          
          {/* Contact Section - Light gradient */}
          <div id="contact" className="bg-gradient-to-r from-blue-50/80 to-indigo-50/80 backdrop-blur-sm scroll-slide-right">
            <ContactSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
