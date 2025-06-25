
import { Briefcase, Calendar, MapPin, ArrowRight, Building, Code, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const ExperienceTimeline = () => {
  const experience = {
    company: "Cognizant Technology Solutions",
    role: "Full Stack Developer",
    period: "February 2021 - August 2024",
    location: "Bangalore, India",
    duration: "3 years 7 months",
    type: "Full-time",
    clients: ["Optum Inc. (Healthcare)", "Caterpillar Inc. (Manufacturing)"],
    keyProjects: [
      {
        title: "Optum Eureka Dashboard Redesign",
        description: "Redesigned healthcare data visualization dashboard using Angular and TypeScript",
        impact: "Improved user accessibility and performance by 40%",
        technologies: ["Angular", "TypeScript", "UI/UX Design", "Healthcare Systems"]
      },
      {
        title: "Enterprise Intranet Applications",
        description: "Developed and maintained enterprise-grade intranet solutions for Caterpillar",
        impact: "Optimized workflows and improved response times by 35%",
        technologies: ["Java", "Spring Boot", "Angular", "Enterprise Systems"]
      }
    ],
    responsibilities: [
      "Led front-end development for healthcare data visualization platforms",
      "Architected scalable enterprise intranet applications using Java and Spring Boot",
      "Collaborated with cross-functional teams across different time zones",
      "Mentored junior developers and conducted code reviews",
      "Implemented UI/UX optimization strategies for better user experience",
      "Ensured seamless backend integration and system scalability"
    ],
    technologies: ["Java", "Spring Boot", "Angular", "TypeScript", "JavaScript", "HTML/CSS", "REST APIs", "Microservices"],
    achievements: [
      "Successfully delivered projects for Fortune 500 clients",
      "Improved system performance by 40% through optimization",
      "Led code reviews and mentoring initiatives",
      "Maintained 99.9% uptime for critical enterprise applications"
    ]
  };

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-6">
          <Briefcase className="w-8 h-8 text-blue-400 mr-3" />
          <h2 className="text-4xl font-bold text-white">Professional Experience</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          3+ years of professional experience delivering enterprise solutions for global clients
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Card className="bg-white/10 backdrop-blur-sm border-gray-700/50 hover:bg-white/15 transition-all duration-300 ring-2 ring-blue-400/30">
          <CardContent className="p-8">
            {/* Company Header */}
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mr-6 flex-shrink-0">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{experience.company}</h3>
                  <p className="text-blue-300 font-semibold text-xl mb-3">{experience.role}</p>
                  <div className="flex flex-wrap gap-4 text-gray-300">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-blue-400" />
                      <span>{experience.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-blue-400" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
              <span className="bg-blue-600/20 px-4 py-2 rounded-full text-blue-300 font-medium">
                {experience.type}
              </span>
            </div>

            {/* Client Projects */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-blue-400" />
                Key Projects & Clients
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                {experience.keyProjects.map((project, idx) => (
                  <div key={idx} className="bg-slate-800/50 rounded-lg p-6 border border-gray-700/30">
                    <h5 className="text-lg font-semibold text-white mb-2">{project.title}</h5>
                    <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                    <div className="bg-green-600/20 border border-green-400/30 rounded-lg p-3 mb-4">
                      <p className="text-green-300 font-medium text-sm">
                        <TrendingUp className="w-4 h-4 inline mr-1" />
                        Impact: {project.impact}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="bg-blue-600/20 border border-blue-400/30 px-2 py-1 rounded text-xs text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-400" />
                Key Responsibilities
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {experience.responsibilities.map((responsibility, idx) => (
                  <div key={idx} className="flex items-start text-gray-300">
                    <ArrowRight className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-sm">{responsibility}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Skills */}
            <div className="mb-6">
              <h4 className="text-xl font-bold text-white mb-4">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-3">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-400/30 px-4 py-2 rounded-lg text-purple-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Key Achievements</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {experience.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-sm font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
