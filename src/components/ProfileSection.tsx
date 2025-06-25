
import { User, MapPin, GraduationCap } from "lucide-react";

export const ProfileSection = () => {
  return (
    <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
      <div className="flex items-center mb-6">
        <User className="w-6 h-6 text-blue-400 mr-3" />
        <h2 className="text-2xl font-bold text-white">Profile</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-300 leading-relaxed text-lg">
            A Master's student in Applied Computer Science in Germany with over 3+ years of professional experience as a Full Stack Developer. 
            Proficient in building scalable web applications using Java, Spring Boot, Angular, and Python. Proven track record in building 
            enterprise solutions at Cognizant for clients like Caterpillar and Optum. Skilled in full-stack architecture, DevOps, and Agile 
            methodologies. Strong problem-solving, team collaboration, and UI/UX optimization skills, with a passion for clean code and 
            continuous learning.
          </p>
          
          <div className="mt-6 flex items-center text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            <span>Schmalkalden, Germany</span>
          </div>
        </div>
        
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <div className="w-56 h-56 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
                <GraduationCap className="w-24 h-24 text-slate-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
