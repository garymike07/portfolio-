import { MessageCircle, Users, Lightbulb, Wrench, Clock, Medal } from "lucide-react";

export default function SkillsSection() {
  const technicalSkills = [
    { name: "JavaScript", level: 90, color: "from-cyan-400 to-blue-500" },
    { name: "Python", level: 85, color: "from-purple-400 to-pink-500" },
    { name: "Java", level: 80, color: "from-blue-400 to-indigo-500" },
    { name: "React", level: 88, color: "from-cyan-400 to-blue-500" },
    { name: "SQL", level: 85, color: "from-green-400 to-emerald-500" },
  ];

  const webSkills = [
    { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-500" },
    { name: "Bootstrap", level: 80, color: "from-purple-400 to-pink-500" },
    { name: "UI/UX Design", level: 75, color: "from-cyan-400 to-blue-500" },
    { name: "Photoshop", level: 70, color: "from-blue-400 to-indigo-500" },
    { name: "AI Tools", level: 75, color: "from-green-400 to-emerald-500" },
  ];

  const personalSkills = [
    { name: "Communication", icon: MessageCircle, color: "text-cyan-400" },
    { name: "Teamwork", icon: Users, color: "text-purple-400" },
    { name: "Problem-solving", icon: Lightbulb, color: "text-yellow-400" },
    { name: "Technical troubleshooting", icon: Wrench, color: "text-green-400" },
    { name: "Time Management", icon: Clock, color: "text-blue-400" },
    { name: "Self-discipline", icon: Medal, color: "text-orange-400" },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text" data-testid="skills-title">
          Technical Skills
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="neuro-box hover-lift p-8">
            <h3 className="text-2xl font-semibold mb-8 text-cyan-400" data-testid="programming-title">
              Programming & Development
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium" data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      {skill.name}
                    </span>
                    <span className="text-cyan-400" data-testid={`skill-level-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="neuro-inset h-3 rounded-full">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Web Technologies */}
          <div className="neuro-box hover-lift p-8">
            <h3 className="text-2xl font-semibold mb-8 text-purple-400" data-testid="web-technologies-title">
              Web Technologies & Tools
            </h3>
            <div className="space-y-6">
              {webSkills.map((skill, index) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium" data-testid={`web-skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      {skill.name}
                    </span>
                    <span className="text-purple-400" data-testid={`web-skill-level-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="neuro-inset h-3 rounded-full">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Personal Skills */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-center mb-12 gradient-text" data-testid="personal-skills-title">
            Personal Skills
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {personalSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className="glass-card hover-lift p-6 rounded-2xl text-center">
                  <div className="neuro-inset p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className={`${skill.color} text-2xl`} />
                  </div>
                  <h4 className="font-semibold text-sm" data-testid={`personal-skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    {skill.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
