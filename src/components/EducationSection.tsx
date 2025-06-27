import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";

export const EducationSection = () => {
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

  const education = [
    {
      degree: "Master of Applied Computer Science",
      institution: "Schmalkalden University of Applied Sciences",
      period: "2024 - Present",
      location: "Schmalkalden, Germany",
      focus: "Advanced Software Development, AI/ML, Enterprise Systems",
      type: "Master's Degree",
      isOngoing: true
    },
    {
      degree: "Bachelor of Engineering in Electronics and Communication",
      institution: "Vemana Institute of Technology, Affiliated to VTU",
      period: "2016 - 2020",
      location: "Bangalore, India",
      cgpa: "8.0/10",
      achievements: ["Strong foundation in programming and system design", "Focus on embedded systems and telecommunications"],
      type: "Bachelor's Degree",
      isOngoing: false
    }
  ];

  return (
    <section ref={sectionRef} className="container mx-auto px-4">
      <div className="text-center mb-16 animate-on-scroll">
        <div className="flex items-center justify-center mb-6">
          <GraduationCap className="w-8 h-8 text-purple-600 mr-3" />
          <h2 className="text-4xl font-bold text-gray-800">Education</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-4"></div>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Academic foundation and continuous learning in computer science and engineering
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <Card 
            key={index} 
            className={`bg-white/20 backdrop-blur-sm border-white/20 hover:bg-white/25 transition-all duration-300 shadow-lg hover:shadow-xl animate-on-scroll ${
              edu.isOngoing ? 'ring-2 ring-purple-400/40 border-purple-400/30' : 'border-white/20'
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className={`${
                  edu.isOngoing 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
                    : 'bg-gradient-to-r from-orange-600 to-orange-700'
                } w-16 h-16 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg`}>
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-start mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 break-words">{edu.degree}</h3>
                      <p className="text-purple-700 font-semibold text-lg">{edu.institution}</p>
                    </div>
                    <div className="flex items-start justify-end ml-4">
                      <span className="bg-purple-500/20 border border-purple-400/30 px-3 py-1 rounded-full text-purple-700 text-sm font-medium whitespace-nowrap flex items-center">
                        {edu.isOngoing && (
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0" title="Ongoing"></span>
                        )}
                        {edu.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                      <span className="font-medium">{edu.location}</span>
                    </div>
                    {edu.cgpa && (
                      <div className="flex items-center text-gray-700">
                        <Award className="w-5 h-5 mr-2 text-purple-600" />
                        <span className="font-medium">CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                  </div>
                  
                  {edu.focus && (
                    <div className="mb-4">
                      <h4 className="text-gray-800 font-semibold mb-2">Specialization:</h4>
                      <p className="text-gray-700">{edu.focus}</p>
                    </div>
                  )}
                  
                  {edu.achievements && (
                    <div>
                      <h4 className="text-gray-800 font-semibold mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-700 flex items-start">
                            <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
