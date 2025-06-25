
import { Code, Wrench, Users, Globe } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Tech Skills",
      icon: Code,
      skills: [
        "Java | JavaScript", "Angular | React", "Html5, Css3 & JavaScript", "Spring Boot | REST APIs",
        "SQL & Databases", "Python Programming", "Microservices", "Streamlit | LLM",
        "Cloud & Azure DevOps", "Git | CI/CD | Jenkins", "Agile Methodology", "Selenium | Testing & QA",
        "Microsoft Office Suite"
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        "Software Architecture", "Problem Solving", "Team Collaboration", "Time Management"
      ]
    },
    {
      title: "Languages",
      icon: Globe,
      skills: [
        "English (C1)", "German (A2)", "Tamil (Fluent)"
      ]
    },
    {
      title: "Interests",
      icon: Wrench,
      skills: [
        "Cinephile", "Exploring Cultures", "Volunteering"
      ]
    }
  ];

  return (
    <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
      <div className="flex items-center mb-8">
        <Code className="w-6 h-6 text-blue-400 mr-3" />
        <h2 className="text-2xl font-bold text-white">Skills & Expertise</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <category.icon className="w-5 h-5 text-blue-400 mr-3" />
              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 px-3 py-1 rounded-full text-sm text-gray-300 hover:from-blue-600/30 hover:to-purple-600/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
