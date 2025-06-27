
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-gray-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            VK
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {[
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Projects", id: "projects" },
              { label: "Experience", id: "experience" },
              { label: "Contact", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors hover:underline underline-offset-4"
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex space-x-2">
              <a
                href="mailto:gvidhulak@gmail.com"
                className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href="https://linkedin.com/in/g-vidhula-kripali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href="https://github.com/g-vidhulakripali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-colors"
              >
                <Github className="w-4 h-4 text-blue-400" />
              </a>
            </div>
            
            {/* <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
              asChild
            >
              <a href="mailto:gvidhulak@gmail.com">
                Hire Me
              </a>
            </Button> */}
            
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
