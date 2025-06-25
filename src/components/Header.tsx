
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm border-b border-gray-700/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              VIDHULA KRIPALI GANESH BABU
            </h1>
            <p className="text-xl text-gray-300 mt-2">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="mailto:gvidhulak@gmail.com"
              className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-colors"
            >
              <Mail className="w-5 h-5 text-blue-400" />
            </a>
            <a
              href="https://linkedin.com/in/g-vidhula-kripali"
              className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-colors"
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
            </a>
            <a
              href="tel:+4915510389433"
              className="p-2 bg-blue-600/20 hover:bg-blue-600/30 rounded-full transition-colors"
            >
              <Phone className="w-5 h-5 text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
