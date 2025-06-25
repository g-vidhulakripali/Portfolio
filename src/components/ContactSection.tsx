
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+49 15510 389433",
      href: "tel:+4915510389433"
    },
    {
      icon: Mail,
      label: "Email",
      value: "gvidhulak@gmail.com",
      href: "mailto:gvidhulak@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Schmalkalden, Germany",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "G Vidhula Kripali",
      href: "https://linkedin.com/in/g-vidhula-kripali"
    }
  ];

  return (
    <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
      <div className="flex items-center mb-8">
        <Mail className="w-6 h-6 text-blue-400 mr-3" />
        <h2 className="text-2xl font-bold text-white">Contact</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {contactInfo.map((contact, index) => (
          <div key={index} className="bg-slate-800/50 rounded-lg p-6">
            <div className="flex items-center">
              <div className="bg-blue-600/20 p-3 rounded-full mr-4">
                <contact.icon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">{contact.label}</p>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="text-white hover:text-blue-300 transition-colors font-medium"
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
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-300 mb-4">
          Ready to collaborate on innovative projects and contribute to cutting-edge technology solutions.
        </p>
        <a
          href="mailto:gvidhulak@gmail.com"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-colors"
        >
          <Mail className="w-4 h-4 mr-2" />
          Get In Touch
        </a>
      </div>
    </section>
  );
};
