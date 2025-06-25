
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ExperienceTimeline = () => {
  const experiences = [
    {
      company: "Cognizant Technology Solutions",
      role: "Full Stack Developer - Optum Inc.",
      period: "Feb 2021 - Aug 2024",
      location: "India",
      type: "Full-time",
      achievements: [
        "Redesigned Optum Eureka dashboard using Angular, enhancing functionality and user experience for healthcare data visualization",
        "Improved UI/UX optimization design elements, increasing user accessibility and performance by 40%",
        "Collaborated with cross-functional teams to implement scalable and efficient front-end solutions",
        "Led code reviews and mentored junior developers on best practices"
      ],
      technologies: ["Angular", "TypeScript", "UI/UX", "Healthcare Systems"],
      highlight: true
    },
    {
      company: "Cognizant Technology Solutions",
      role: "Software Developer - Caterpillar Inc.",
      period: "2021 - 2024",
      location: "India", 
      type: "Client Project",
      achievements: [
        "Developed and maintained enterprise intranet applications using Java, Spring Boot, and Angular",
        "Enhanced system efficiency and user experience for internal service management platforms",
        "Contributed to service request management systems, optimizing workflows and improving response times by 35%",
        "Worked on backend integration, ensuring seamless functionality and scalability for enterprise applications"
      ],
      technologies: ["Java", "Spring Boot", "Angular", "Enterprise Systems"],
      highlight: false
    }
  ];

  const education = [
    {
      degree: "Master of Applied Computer Science",
      institution: "Schmalkalden University of Applied Sciences",
      period: "2024 - present",
      location: "Germany",
      status: "Current",
      focus: "Advanced software development, AI/ML, and enterprise systems"
    },
    {
      degree: "B.E. in Electronics and Communication",
      institution: "Vemana Institute of Technology, VTU",
      period: "2016 - 2020",
      location: "India",
      cgpa: "8.0/10",
      achievements: ["Strong foundation in programming and system design"]
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <Briefcase className="w-8 h-8 text-blue-400 mr-3" />
          <h2 className="text-4xl font-bold text-white">Experience & Education</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
            Professional Experience
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-32 bg-gradient-to-b from-blue-400 to-purple-400"></div>
                )}
                
                <Card className={`bg-white/10 backdrop-blur-sm border-gray-700/50 hover:bg-white/15 transition-all duration-300 ${exp.highlight ? 'ring-2 ring-blue-400/30' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className={`${exp.highlight ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-gray-600 to-gray-700'} w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between mb-2">
                          <div>
                            <h4 className="text-xl font-semibold text-white">{exp.company}</h4>
                            <p className="text-blue-300 font-medium">{exp.role}</p>
                          </div>
                          <span className="bg-blue-600/20 px-3 py-1 rounded-full text-blue-300 text-sm">
                            {exp.type}
                          </span>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        
                        <ul className="space-y-2 mb-4">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-gray-300 flex items-start text-sm">
                              <ArrowRight className="w-4 h-4 text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-400/30 px-2 py-1 rounded text-xs text-green-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Briefcase className="w-6 h-6 text-purple-400 mr-3" />
            Education
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                {index < education.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-purple-400 to-pink-400"></div>
                )}
                
                <Card className="bg-white/10 backdrop-blur-sm border-gray-700/50 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <div className={`${edu.status === 'Current' ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-gray-600 to-gray-700'} w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start justify-between mb-2">
                          <div>
                            <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                            <p className="text-purple-300 font-medium">{edu.institution}</p>
                          </div>
                          {edu.status && (
                            <span className="bg-purple-600/20 px-3 py-1 rounded-full text-purple-300 text-sm">
                              {edu.status}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-3">
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
                              <span className="text-purple-300 font-medium">CGPA: {edu.cgpa}</span>
                            </div>
                          )}
                        </div>
                        
                        {edu.focus && (
                          <p className="text-gray-300 text-sm mb-2">{edu.focus}</p>
                        )}
                        
                        {edu.achievements && (
                          <ul className="space-y-1">
                            {edu.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-gray-300 flex items-start text-sm">
                                <ArrowRight className="w-4 h-4 text-purple-400 mt-0.5 mr-2 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
