
import { Code, Database, Globe, Cloud, Wrench, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

export const SkillsShowcase = () => {
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

  const skillCategories = [
    {
      title: "Frontend",
      icon: Globe,
      color: "from-purple-500 to-blue-500",
      skills: [
        { name: "React", level: 90 },
        { name: "Angular", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "HTML5/CSS3", level: 92 },
        { name: "Tailwind CSS", level: 85 },
      ]
    },
    {
      title: "Backend",
      icon: Database,
      color: "from-blue-500 to-indigo-500",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Boot", level: 88 },
        { name: "Python", level: 75 },
        { name: "REST APIs", level: 85 },
        { name: "Microservices", level: 80 },
      ]
    },
    {
      title: "Database & Cloud",
      icon: Cloud,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "SQL", level: 85 },
        { name: "Azure", level: 75 },
        { name: "DevOps", level: 70 },
        { name: "CI/CD", level: 80 },
        { name: "Git", level: 90 },
      ]
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Jenkins", level: 75 },
        { name: "Selenium", level: 80 },
        { name: "Agile", level: 85 },
        { name: "Testing & QA", level: 82 },
        { name: "LLM/AI", level: 70 },
      ]
    }
  ];

  const languages = [
    { name: "English", level: 90, levelText: "C1", color: "from-emerald-500 to-teal-500" },
    { name: "German", level: 40, levelText: "A2", color: "from-orange-500 to-red-500" },
    { name: "Tamil", level: 100, levelText: "Native", color: "from-violet-500 to-purple-500" },
  ];

  return (
    <section ref={sectionRef} className="container mx-auto px-4">
      <div className="text-center mb-16 animate-on-scroll">
        <div className="flex items-center justify-center mb-4">
          <Code className="w-8 h-8 text-purple-600 mr-3" />
          <h2 className="text-4xl font-bold text-gray-800">Skills & Expertise</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {skillCategories.map((category, index) => (
          <Card 
            key={index} 
            className="bg-white/20 backdrop-blur-sm border-white/20 hover:bg-white/25 transition-all duration-300 group animate-on-scroll"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 text-sm">{skill.name}</span>
                      <span className="text-gray-600 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-300/50 rounded-full h-2">
                      <div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Languages & Soft Skills */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white/20 backdrop-blur-sm border-white/20 animate-on-scroll">
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <Globe className="w-6 h-6 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Languages</h3>
            </div>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-medium">{lang.name}</span>
                    <span className={`px-3 py-1 rounded-full text-white text-sm bg-gradient-to-r ${lang.color}`}>
                      {lang.levelText}
                    </span>
                  </div>
                  <div className="w-full bg-gray-300/50 rounded-full h-3">
                    <div
                      className={`bg-gradient-to-r ${lang.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{ 
                        width: `${lang.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/20 backdrop-blur-sm border-white/20 animate-on-scroll">
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-purple-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Leadership", "Communication", "Problem Solving", "Team Work", "Time Management", "Adaptability"].map((skill, index) => (
                <div 
                  key={skill} 
                  className="p-3 bg-gray-200/30 rounded-lg text-center text-gray-700 hover:bg-gray-200/40 transition-colors hover:scale-105 duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
