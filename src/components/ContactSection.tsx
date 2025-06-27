import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const contactInfo = [
    // {
    //   icon: Phone,
    //   label: "Phone",
    //   value: "+49 15510 389433",
    //   href: "tel:+4915510389433",
    //   color: "from-green-500 to-emerald-500"
    // },
    {
      icon: Mail,
      label: "Email",
      value: "gvidhulak@gmail.com",
      href: "mailto:gvidhulak@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Schmalkalden, Germany",
      href: null,
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "G Vidhula Kripali",
      href: "https://linkedin.com/in/g-vidhula-kripali",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Github,
      label: "Github",
      value: "G Vidhula Kripali",
      href: "https://linkedin.com/in/g-vidhulakripali",
      color: "from-purple-600 to-violet-700"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/g-vidhulakripali",
      color: "hover:bg-gray-700"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/g-vidhula-kripali",
      color: "hover:bg-blue-700"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:gvidhulak@gmail.com",
      color: "hover:bg-green-700"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <MessageCircle className="w-8 h-8 text-blue-400 mr-3" />
          <h2 className="text-4xl font-bold text-white">Let's Connect</h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-4"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Ready to collaborate on innovative projects and contribute to cutting-edge technology solutions
        </p>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2">
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-gray-700/50 hover:bg-white/15 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className={`bg-gradient-to-r ${contact.color} p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-1">{contact.label}</p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-white hover:text-blue-300 transition-colors font-medium block"
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-white font-medium">{contact.value}</span>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div>
          <Card className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-400/30 h-full">
            <CardContent className="p-8 flex flex-col justify-center text-center h-full">
              <div className="mb-2">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[rgb(15,68,173)] mb-1">Ready to Work Together?</h3>
                <p className="text-[rgb(15,68,173)] mb-4">
                  I'm always open to discussing new opportunities and interesting projects.
                </p>
              </div>
              
              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a href="mailto:gvidhulak@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>
                
                <div className="flex space-x-4 justify-center mt-2">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/10 rounded-full transition-all duration-300 hover:scale-110 ${social.color}`}
                      title={social.label}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="text-center">
        <Card className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 border-gray-700/50 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Let's create innovative solutions that make a difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:gvidhulak@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-black hover:text-white hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://github.com/g-vidhulakripali" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
