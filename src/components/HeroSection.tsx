
import { ArrowDown, Github, Linkedin, Mail, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto text-center">
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto mb-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-slate-900 rounded-full flex items-center justify-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl font-bold text-slate-800">VK</span>
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
          VIDHULA KRIPALI
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-4 animate-fade-in delay-300">
          Full Stack Developer
        </h2>
        
        <div className="flex items-center justify-center text-gray-400 mb-8 animate-fade-in delay-500">
          <MapPin className="w-5 h-5 mr-2" />
          <span>Schmalkalden, Germany</span>
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-700">
          Master's student with 3+ years of experience building scalable web applications. 
          Passionate about creating innovative solutions with modern technologies.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in delay-1000">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5 mr-2" />
            View My Work
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6 animate-fade-in delay-1200">
          <a
            href="mailto:gvidhulak@gmail.com"
            className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
          >
            <Mail className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
          </a>
          <a
            href="https://linkedin.com/in/g-vidhula-kripali"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
          >
            <Linkedin className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
          </a>
          <a
            href="https://github.com/vidhula-kripali" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 group backdrop-blur-sm"
          >
            <Github className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};
