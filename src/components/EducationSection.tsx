
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
          <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-4xl font-bold text-gray-800">Education</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Academic foundation and continuous learning in computer science and engineering
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <Card 
            key={index} 
            className={`bg-white/70 backdrop-blur-sm border-gray-200/50 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl ${
              edu.isOngoing ? 'ring-2 ring-blue-400/40 border-blue-200' : 'border-gray-200'
            }`}
          >
            <CardContent className="p-8">
              <div className="flex items-start">
                <div className={`${
                  edu.isOngoing 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                    : 'bg-gradient-to-r from-gray-600 to-gray-700'
                } w-16 h-16 rounded-xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg`}>
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                      <p className="text-blue-600 font-semibold text-lg">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      {edu.isOngoing && (
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-white font-medium mb-2 shadow-md">
                          In Progress
                        </div>
                      )}
                      <span className="bg-purple-100 border border-purple-200 px-3 py-1 rounded-full text-purple-700 text-sm font-medium">
                        {edu.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2 text-blue-500" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2 text-blue-500" />
                      <span className="font-medium">{edu.location}</span>
                    </div>
                    {edu.cgpa && (
                      <div className="flex items-center text-gray-600">
                        <Award className="w-5 h-5 mr-2 text-blue-500" />
                        <span className="font-medium">CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                  </div>
                  
                  {edu.focus && (
                    <div className="mb-4">
                      <h4 className="text-gray-800 font-semibold mb-2">Specialization:</h4>
                      <p className="text-gray-600">{edu.focus}</p>
                    </div>
                  )}
                  
                  {edu.achievements && (
                    <div>
                      <h4 className="text-gray-800 font-semibold mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
