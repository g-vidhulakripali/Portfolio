import { Folder, ExternalLink, Github, Code, Brain, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export const ProjectsShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Retrieval-Augmented Generation (RAG) System",
      description: "Built an advanced RAG system using LLaMA for intelligent knowledge retrieval and AI-driven responses. Implemented vector databases and semantic search capabilities.",
      icon: Brain,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      technologies: ["Python","Langchain", "LLaMA", "Vector DB", "LLM", "Angular", "Sqlite"],
      github: "https://github.com/g-vidhulakripali/TaADs-Project",
      live: null,
      featured: true
    },
    {
      title: "MANET Security Enhancement",
      description: "Developed sophisticated algorithms for detecting and preventing wormhole attacks in Mobile Ad-hoc Networks using NS2 simulator.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      technologies: ["Network Security", "NS2", "Algorithm Design", "Research"],
      github: null,
      live: null,
      featured: true
    },
    {
      title: "Optum Eureka Dashboard",
      description: "Redesigned and enhanced the Optum Eureka dashboard using Angular, improving user experience and system performance for healthcare data visualization.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      technologies: ["Angular", "TypeScript", "UI/UX", "Healthcare"],
      github: null,
      live: null,
      featured: false
    },
    {
      title: "Caterpillar Service Management",
      description: "Developed enterprise-level service request management system using Java Spring Boot and Angular, optimizing workflows for industrial operations.",
      icon: Code,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      technologies: ["Java", "Spring Boot", "Angular", "Enterprise"],
      github: null,
      live: null,
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section ref={sectionRef} className="container mx-auto px-4">
      <div className="text-center mb-16 animate-on-scroll">
        <div className="flex items-center justify-center mb-4">
          <Folder className="w-8 h-8 text-blue-300 mr-3" />
          <h2 className="text-4xl font-bold text-gray-100">Featured Projects</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and passion for technology
        </p>
      </div>

      {/* Featured Projects */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {featuredProjects.map((project, index) => (
          <Card 
            key={index} 
            className="bg-white/10 backdrop-blur-sm border-gray-700/50 overflow-hidden group hover:bg-white/15 transition-all duration-300 animate-on-scroll"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative overflow-hidden h-48">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute top-4 left-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center">
                  <project.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-gray-100 group-hover:text-blue-300 transition-colors">
                {project.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-gray-200 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-400/30 px-3 py-1 rounded-full text-xs text-green-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-3 pt-4">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-black hover:bg-gray-800 hover:text-white"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Project
                    </a>
                  </Button>
                )}
                {project.live && (
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-purple-600"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Other Projects */}
      {/* <div className="animate-on-scroll">
        <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">Other Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm border-gray-700/50 hover:bg-white/15 transition-all duration-300 group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                      <project.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-100 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h4>
                  </div>
                </div>
                
                <p className="text-gray-200 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 px-2 py-1 rounded text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}

      {/* GitHub CTA */}
      <div className="text-center mt-16 animate-on-scroll">
        <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-400/30 max-w-2xl mx-auto">
          <CardContent className="p-8">
            <Github className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-[rgb(15,68,173)] mb-4">Explore More on GitHub</h3>
            <p className="text-[rgb(15,68,173)] mb-6">
              Check out my GitHub profile for more projects, contributions, and code samples
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              asChild
            >
              <a href="https://github.com/g-vidhulakripali" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                Visit GitHub Profile
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
