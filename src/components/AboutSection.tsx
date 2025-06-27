
import { User, Code, Briefcase, GraduationCap, Award } from "lucide-react";
import { useEffect, useRef } from "react";

export const AboutSection = () => {
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

  const stats = [
    { icon: Briefcase, label: "Years Experience", value: "3+" },
    { icon: Code, label: "Projects Completed", value: "15+" },
    { icon: GraduationCap, label: "Education Level", value: "Master's" },
    { icon: Award, label: "Technologies", value: "10+" },
  ];

  return (
    <section ref={sectionRef} className="container mx-auto px-4">
      <div className="text-center mb-16 animate-on-scroll">
        <div className="flex items-center justify-center mb-4">
          <User className="w-8 h-8 text-purple-300 mr-3" />
          <h2 className="text-4xl font-bold text-gray-100">About Me</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"></div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-on-scroll">
          <p className="text-lg text-gray-100 leading-relaxed">
            I'm a passionate Full Stack Developer currently pursuing my Master's in Applied Computer Science 
            in Germany. With over 3 years of professional experience, I've worked with leading companies 
            like Cognizant, delivering solutions for major clients including Caterpillar and Optum.
          </p>
          
          <p className="text-lg text-gray-100 leading-relaxed">
            My expertise spans across modern web technologies including Java, Spring Boot, Angular, React, 
            and Python. I'm passionate about creating scalable, user-friendly applications and continuously 
            learning new technologies to stay at the forefront of software development.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            {["Problem Solver", "Team Player", "Innovation Focused", "Quality Driven"].map((trait) => (
              <span
                key={trait}
                className="px-4 py-2 bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-400/30 rounded-full text-purple-200 text-sm hover:from-purple-600/40 hover:to-blue-600/40 transition-colors"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-6 animate-on-scroll">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 group border border-white/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-purple-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-100 mb-2">{stat.value}</div>
              <div className="text-gray-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
