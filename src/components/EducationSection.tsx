
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const EducationSection = () => {
  const education = [
    {
      degree: "Master of Applied Computer Science",
      institution: "Schmalkalden University of Applied Sciences",
      period: "2024 - Present",
      location: "Schmalkalden, Germany",
      status: "Current",
      focus: "Advanced Software Development, AI/ML, Enterprise Systems",
      type: "Master's Degree"
    },
    {
      degree: "Bachelor of Engineering in Electronics and Communication",
      institution: "Vemana Institute of Technology, Affiliated to VTU",
      period: "2016 - 2020",
      location: "Bangalore, India",
      cgpa: "8.0/10",
      achievements: ["Strong foundation in programming and system design", "Focus on embedded systems and telecommunications"],
      type: "Bachelor's Degree"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          <GraduationCap className="w-8 h-8 text-blue-400 mr-3" />
          <h2 className="text-4xl font-bold text-white">Education</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Academic foundation and continuous learning in computer science and engineering
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <Card 
            key={index} 
            className={`bg-white/10 backdrop-blur-sm border-gray-700/50 hover:bg-white/15 transition-all duration-300 ${
              edu.status === 'Current' ? 'ring-2 ring-blue-400/30' : ''
            }`}
          >
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className={`${
                  edu.status === 'Current' 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'bg-gradient-to-r from-gray-600 to-gray-700'
                } w-16 h-16 rounded-xl flex items-center justify-center mr-6 flex-shrink-0`}>
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-blue-300 font-semibold text-lg">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      {edu.status && (
                        <span className="bg-blue-600/20 px-4 py-2 rounded-full text-blue-300 font-medium mb-2 block">
                          {edu.status}
                        </span>
                      )}
                      <span className="bg-purple-600/20 px-3 py-1 rounded-full text-purple-300 text-sm">
                        {edu.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                      <span className="font-medium">{edu.location}</span>
                    </div>
                    {edu.cgpa && (
                      <div className="flex items-center text-gray-300">
                        <Award className="w-5 h-5 mr-2 text-blue-400" />
                        <span className="font-medium">CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                  </div>
                  
                  {edu.focus && (
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Specialization:</h4>
                      <p className="text-gray-300">{edu.focus}</p>
                    </div>
                  )}
                  
                  {edu.achievements && (
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
