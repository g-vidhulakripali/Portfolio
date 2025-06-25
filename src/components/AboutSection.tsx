
import { User, Code, Briefcase, GraduationCap, Award } from "lucide-react";

export const AboutSection = () => {
  const stats = [
    { icon: Briefcase, label: "Years Experience", value: "3+" },
    { icon: Code, label: "Projects Completed", value: "15+" },
    { icon: GraduationCap, label: "Education Level", value: "Master's" },
    { icon: Award, label: "Technologies", value: "10+" },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <User className="w-8 h-8 text-blue-400 mr-3" />
          <h2 className="text-4xl font-bold text-white">About Me</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm a passionate Full Stack Developer currently pursuing my Master's in Applied Computer Science 
            in Germany. With over 3 years of professional experience, I've worked with leading companies 
            like Cognizant, delivering solutions for major clients including Caterpillar and Optum.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            My expertise spans across modern web technologies including Java, Spring Boot, Angular, React, 
            and Python. I'm passionate about creating scalable, user-friendly applications and continuously 
            learning new technologies to stay at the forefront of software development.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            {["Problem Solver", "Team Player", "Innovation Focused", "Quality Driven"].map((trait) => (
              <span
                key={trait}
                className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm hover:from-blue-600/30 hover:to-purple-600/30 transition-colors"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
            >
              <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
