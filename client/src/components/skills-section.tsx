import { MessageCircle, Users, Lightbulb, Wrench, Clock, Medal, Code, Server, Database, Globe, Palette, Shield } from "lucide-react";

export default function SkillsSection() {
  const programmingSkills = [
    { name: "JavaScript/TypeScript", level: 90, color: "from-cyan-400 to-blue-500", years: 4 },
    { name: "Python", level: 85, color: "from-purple-400 to-pink-500", years: 3 },
    { name: "Java", level: 80, color: "from-blue-400 to-indigo-500", years: 2 },
    { name: "SQL", level: 85, color: "from-green-400 to-emerald-500", years: 3 },
    { name: "PHP", level: 75, color: "from-indigo-400 to-blue-500", years: 2 },
  ];

  const frontendSkills = [
    { name: "React/Next.js", level: 88, color: "from-cyan-400 to-blue-500", years: 3 },
    { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-500", years: 4 },
    { name: "Tailwind CSS", level: 90, color: "from-blue-400 to-cyan-500", years: 2 },
    { name: "UI/UX Design", level: 75, color: "from-purple-400 to-pink-500", years: 2 },
    { name: "Responsive Design", level: 85, color: "from-green-400 to-emerald-500", years: 3 },
  ];

  const backendSkills = [
    { name: "Node.js/Express", level: 85, color: "from-green-400 to-emerald-500", years: 3 },
    { name: "PostgreSQL", level: 80, color: "from-blue-400 to-indigo-500", years: 3 },
    { name: "MongoDB", level: 75, color: "from-green-400 to-teal-500", years: 2 },
    { name: "REST API Design", level: 85, color: "from-cyan-400 to-blue-500", years: 3 },
    { name: "Authentication/Security", level: 80, color: "from-red-400 to-orange-500", years: 2 },
  ];

  const toolsSkills = [
    { name: "Git/GitHub", level: 90, color: "from-orange-400 to-red-500", years: 4 },
    { name: "Docker", level: 70, color: "from-blue-400 to-cyan-500", years: 1 },
    { name: "VS Code", level: 95, color: "from-blue-400 to-indigo-500", years: 4 },
    { name: "Figma/Adobe XD", level: 70, color: "from-purple-400 to-pink-500", years: 2 },
    { name: "AI Tools", level: 75, color: "from-green-400 to-emerald-500", years: 1 },
  ];

  const personalSkills = [
    { 
      name: "Communication", 
      icon: MessageCircle, 
      color: "text-cyan-400",
      description: "Clear verbal and written communication with technical and non-technical stakeholders"
    },
    { 
      name: "Teamwork", 
      icon: Users, 
      color: "text-purple-400",
      description: "Collaborative approach to project work with strong interpersonal skills"
    },
    { 
      name: "Problem-solving", 
      icon: Lightbulb, 
      color: "text-yellow-400",
      description: "Analytical thinking and creative solutions to complex technical challenges"
    },
    { 
      name: "Technical troubleshooting", 
      icon: Wrench, 
      color: "text-green-400",
      description: "Systematic approach to identifying and resolving technical issues"
    },
    { 
      name: "Time Management", 
      icon: Clock, 
      color: "text-blue-400",
      description: "Efficient prioritization of tasks and meeting project deadlines"
    },
    { 
      name: "Self-discipline", 
      icon: Medal, 
      color: "text-orange-400",
      description: "Strong work ethic and commitment to continuous improvement"
    },
  ];

  const technicalAreas = [
    { name: "Frontend Development", icon: Code, color: "text-cyan-400" },
    { name: "Backend Development", icon: Server, color: "text-purple-400" },
    { name: "Database Management", icon: Database, color: "text-green-400" },
    { name: "Web Performance", icon: Globe, color: "text-blue-400" },
    { name: "UI/UX Design", icon: Palette, color: "text-pink-400" },
    { name: "Security Implementation", icon: Shield, color: "text-red-400" },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text" data-testid="skills-title">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Technical Areas */}
          <div className="neuro-box hover-lift p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-cyan-400" data-testid="technical-areas-title">
              Technical Expertise
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalAreas.map((area) => {
                const IconComponent = area.icon;
                return (
                  <div key={area.name} className="glass-card p-4 rounded-lg flex items-center gap-3">
                    <div className={`p-2 rounded-full bg-card`}>
                      <IconComponent className={`${area.color} w-5 h-5`} />
                    </div>
                    <span className="font-medium text-sm">{area.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Personal Skills */}
          <div className="neuro-box hover-lift p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-purple-400" data-testid="personal-skills-title">
              Professional Skills
            </h3>
            <div className="space-y-4">
              {personalSkills.slice(0, 4).map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="flex items-center gap-3">
                    <div className={`p-2 rounded-full bg-card`}>
                      <IconComponent className={`${skill.color} w-5 h-5`} />
                    </div>
                    <div>
                      <h4 className="font-medium" data-testid={`personal-skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                        {skill.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Programming Skills */}
          <div className="neuro-box hover-lift p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-cyan-400" data-testid="programming-title">
              Programming Languages
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {programmingSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="font-medium text-sm sm:text-base" data-testid={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">
                        {skill.years} {skill.years === 1 ? 'year' : 'years'}
                      </span>
                    </div>
                    <span className="text-cyan-400 text-sm sm:text-base" data-testid={`skill-level-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="neuro-inset h-2 sm:h-3 rounded-full">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Frontend Skills */}
          <div className="neuro-box hover-lift p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-purple-400" data-testid="frontend-title">
              Frontend Technologies
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {frontendSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="font-medium text-sm sm:text-base" data-testid={`web-skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">
                        {skill.years} {skill.years === 1 ? 'year' : 'years'}
                      </span>
                    </div>
                    <span className="text-purple-400 text-sm sm:text-base" data-testid={`web-skill-level-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="neuro-inset h-2 sm:h-3 rounded-full">
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
          {/* Backend Skills */}
          <div className="neuro-box hover-lift p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-green-400" data-testid="backend-title">
              Backend Technologies
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {backendSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="font-medium text-sm sm:text-base" data-testid={`backend-skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">
                        {skill.years} {skill.years === 1 ? 'year' : 'years'}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm sm:text-base" data-testid={`backend-skill-level-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="neuro-inset h-2 sm:h-3 rounded-full">
                    <div 
                      className={`bg-gradient-to-r ${skill.color} h-full rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tools Skills */}
          <div className="neuro-box hover-lift p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-orange-400" data-testid="tools-title">
              Tools & Platforms
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {toolsSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between mb-2">
                    <div>
                      <span className="font-medium text-sm sm:text-base" data-testid={`tools-skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">
                        {skill.years} {skill.years === 1 ? 'year' : 'years'}
                      </span>
                    </div>
                    <span className="text-orange-400 text-sm sm:text-base" data-testid={`tools-skill-level-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="neuro-inset h-2 sm:h-3 rounded-full">
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
        
        {/* Additional Personal Skills */}
        <div className="mt-12 sm:mt-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center mb-8 sm:mb-12 gradient-text" data-testid="soft-skills-title">
            Soft Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {personalSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className="glass-card hover-lift p-6 rounded-2xl text-center">
                  <div className="neuro-inset p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className={`${skill.color} text-2xl`} />
                  </div>
                  <h4 className="font-semibold text-sm mb-2" data-testid={`soft-skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    {skill.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}