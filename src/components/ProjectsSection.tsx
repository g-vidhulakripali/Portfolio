
import { Folder, ExternalLink } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Retrieval-Augmented Generation (RAG)",
      description: "Built a RAG system using LLaMA for efficient AI-driven knowledge retrieval.",
      technologies: ["Python", "LLaMA", "AI/ML", "NLP"]
    },
    {
      title: "Detection and Prevention of Wormhole Attack in MANETs",
      description: "Designed a wormhole attack detection algorithm in MANETs using NS2 to enhance security.",
      technologies: ["Network Security", "NS2", "Algorithm Design", "Research"]
    }
  ];

  return (
    <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
      <div className="flex items-center mb-8">
        <Folder className="w-6 h-6 text-blue-400 mr-3" />
        <h2 className="text-2xl font-bold text-white">Projects</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-colors group">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>
              <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-400/30 px-2 py-1 rounded text-xs text-green-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
