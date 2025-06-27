import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { label: "About", id: "about" },
    { label: "Education", id: "education" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-gray-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
            className="focus:outline-none flex items-center"
            aria-label="Go to Home"
          >
            <img
              src="https://i.imgur.com/tQXvShC.png"
              alt="Home"
              className="w-10 h-10 rounded-full border-2 border-purple-300 object-cover hover:scale-105 transition-transform duration-200 mr-2"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">VK</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors hover:underline underline-offset-4"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Social Links & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            {/* Desktop Social Links */}
            <div className="hidden sm:flex space-x-2">
              <a
                href="mailto:gvidhulak@gmail.com"
                className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href="https://linkedin.com/in/g-vidhula-kripali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href="https://github.com/g-vidhulakripali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-blue-400" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-300 hover:text-white"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="py-4 space-y-4 border-t border-gray-700/50">
            {/* Mobile Navigation */}
            <nav className="space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2 px-4 rounded-lg hover:bg-gray-800/50"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Social Links */}
            <div className="flex justify-center space-x-4 pt-4 border-t border-gray-700/50">
              <a
                href="mailto:gvidhulak@gmail.com"
                className="p-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-blue-400" />
              </a>
              <a
                href="https://linkedin.com/in/g-vidhula-kripali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-400" />
              </a>
              <a
                href="https://github.com/g-vidhulakripali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-blue-400" />
              </a>
            </div>

            {/* Mobile Hire Me Button (if you want to uncomment it) */}
            {/* <div className="pt-4">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-gray-600 text-gray-300 hover:bg-gray-800"
                asChild
              >
                <a href="mailto:gvidhulak@gmail.com">
                  Hire Me
                </a>
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
};