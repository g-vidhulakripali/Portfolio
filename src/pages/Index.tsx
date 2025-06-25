
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 via-blue-800/20 to-indigo-800/20 animate-pulse"></div>
        
        {/* Large floating orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-drift delay-1000"></div>
        <div className="absolute -bottom-40 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full blur-3xl animate-float delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-full blur-3xl animate-drift delay-3000"></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-20 left-1/3 w-48 h-48 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute bottom-32 right-1/3 w-56 h-56 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-2xl animate-bounce-slow delay-1500"></div>
        
        {/* Small floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-300/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/3 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rotate-45 blur-xl animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-20 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rotate-12 blur-xl animate-spin-slow delay-2000"></div>
        
        {/* Moving waves */}
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
            <path
              d="M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z"
              fill="url(#wave1)"
              className="animate-wave"
            />
            <path
              d="M0,500 C400,400 800,600 1200,500 L1200,800 L0,800 Z"
              fill="url(#wave2)"
              className="animate-wave-reverse"
            />
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1"/>
                <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.05"/>
                <stop offset="100%" stopColor="#6366F1" stopOpacity="0.1"/>
              </linearGradient>
              <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.05"/>
                <stop offset="50%" stopColor="#6366F1" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      
      <div className="relative z-10">
        <Header />
        
        <main className="space-y-0">
          <HeroSection />
          
          {/* About Section - Semi-transparent dark */}
          <div id="about" className="bg-gray-900/40 backdrop-blur-md scroll-fade-in">
            <AboutSection />
          </div>
          
          {/* Education Section - Semi-transparent lighter */}
          <div id="education" className="bg-white/10 backdrop-blur-md scroll-slide-right">
            <EducationSection />
          </div>
          
          {/* Experience Section - Semi-transparent dark */}
          <div id="experience" className="bg-gray-900/40 backdrop-blur-md scroll-fade-in">
            <ExperienceTimeline />
          </div>
          
          {/* Skills Section - Semi-transparent lighter */}
          <div id="skills" className="bg-white/10 backdrop-blur-md scroll-slide-left">
            <SkillsShowcase />
          </div>
          
          {/* Projects Section - Semi-transparent dark */}
          <div id="projects" className="bg-gray-900/40 backdrop-blur-md scroll-fade-in">
            <ProjectsShowcase />
          </div>
          
          {/* Contact Section - Semi-transparent lighter */}
          <div id="contact" className="bg-white/10 backdrop-blur-md scroll-slide-right">
            <ContactSection />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
