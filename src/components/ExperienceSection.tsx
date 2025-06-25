
import { Briefcase, Calendar, MapPin } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Cognizant Technology Solutions, India",
      role: "Optum Inc.",
      period: "Feb 2021 - Aug 2024",
      achievements: [
        "Developed and redesigned the Optum Eureka dashboard using Angular, enhancing functionality and user experience.",
        "Improved UI/UX optimization design elements to increase user accessibility and performance.",
        "Collaborated with cross-functional teams to implement scalable and efficient front-end solutions."
      ]
    },
    {
      title: "Caterpillar Inc.",
      role: "Full Stack Developer",
      period: "2021 - 2024",
      achievements: [
        "Developed and maintained intranet applications using Java, Spring Boot, and Angular, enhancing system efficiency and user experience.",
        "Contributed to service request management systems, optimizing workflows and improving response times.",
        "Worked on integration and backend integration, ensuring seamless functionality and scalability for enterprise applications."
      ]
    }
  ];

  return (
    <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
      <div className="flex items-center mb-8">
        <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
        <h2 className="text-2xl font-bold text-white">Work Experience</h2>
      </div>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-blue-400/50 pl-6 relative">
            <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-2 top-0"></div>
            
            <div className="bg-slate-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
              <p className="text-blue-300 font-medium mb-3">{exp.role}</p>
              
              <div className="flex items-center text-gray-400 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{exp.period}</span>
              </div>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
