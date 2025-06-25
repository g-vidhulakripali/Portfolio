
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      degree: "Master of Applied Computer Science",
      institution: "Schmalkalden University of Applied Sciences, Germany",
      period: "2024 - present",
      location: "Germany"
    },
    {
      degree: "B.E. in Electronics and Communication",
      institution: "Vemana Institute of Technology, affl. to VTU, India",
      period: "2016 - 2020",
      cgpa: "CGPA: 8/10",
      location: "India"
    }
  ];

  return (
    <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
      <div className="flex items-center mb-8">
        <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
        <h2 className="text-2xl font-bold text-white">Education</h2>
      </div>
      
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-purple-400/50 pl-6 relative">
            <div className="absolute w-4 h-4 bg-purple-400 rounded-full -left-2 top-0"></div>
            
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
              <p className="text-purple-300 font-medium mb-3">{edu.institution}</p>
              
              <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{edu.location}</span>
                </div>
                {edu.cgpa && (
                  <div className="bg-purple-600/20 px-3 py-1 rounded-full">
                    <span className="text-purple-300 font-medium">{edu.cgpa}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
