
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const EducationSection = () => {
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
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          <GraduationCap className="w-8 h-8 text-purple-400 mr-3" />
          <h2 className="text-4xl font-bold text-white">Education</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-4"></div>
        <p className="text-gray-200 max-w-2xl mx-auto text-lg">
          Academic foundation and continuous learning in computer science and engineering
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <Card 
            key={index} 
            className={`bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/15 transition-all duration-300 shadow-lg hover:shadow-xl ${
              edu.isOngoing ? 'ring-2 ring-purple-400/40 border-purple-400/30' : 'border-white/10'
            }`}
          >
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className={`${
                  edu.isOngoing 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
                    : 'bg-gradient-to-r from-gray-600 to-gray-700'
                } w-16 h-16 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg`}>
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-purple-300 font-semibold text-lg">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-purple-500/20 border border-purple-400/30 px-3 py-1 rounded-full text-purple-200 text-sm font-medium">
                        {edu.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 mr-2 text-purple-400" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-2 text-purple-400" />
                      <span className="font-medium">{edu.location}</span>
                    </div>
                    {edu.cgpa && (
                      <div className="flex items-center text-gray-300">
                        <Award className="w-5 h-5 mr-2 text-purple-400" />
                        <span className="font-medium">CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                  </div>
                  
                  {edu.focus && (
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Specialization:</h4>
                      <p className="text-gray-200">{edu.focus}</p>
                    </div>
                  )}
                  
                  {edu.achievements && (
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-200 flex items-start">
                            <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
