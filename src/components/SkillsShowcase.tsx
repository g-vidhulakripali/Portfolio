
import { Code, Database, Globe, Cloud, Wrench, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const SkillsShowcase = () => {
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
    { name: "English", level: "C1", color: "bg-purple-500" },
    { name: "German", level: "A2", color: "bg-blue-500" },
    { name: "Tamil", level: "Native", color: "bg-indigo-500" },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <Code className="w-8 h-8 text-purple-400 mr-3" />
          <h2 className="text-4xl font-bold text-white">Skills & Expertise</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {skillCategories.map((category, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/15 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 text-sm">{skill.name}</span>
                      <span className="text-gray-300 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
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
        <Card className="bg-white/10 backdrop-blur-sm border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <Globe className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                  <span className="text-gray-200">{lang.name}</span>
                  <span className={`px-3 py-1 rounded-full text-white text-sm ${lang.color}`}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white/10 backdrop-blur-sm border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <Users className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Leadership", "Communication", "Problem Solving", "Team Work", "Time Management", "Adaptability"].map((skill) => (
                <div key={skill} className="p-3 bg-gray-800/30 rounded-lg text-center text-gray-200 hover:bg-gray-800/40 transition-colors">
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
