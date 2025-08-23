export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      period: "01/2024 – 02/2025",
      title: "ICT Intern",
      company: "Council of Legal Education",
      description: "Served as an ICT intern at the Council of Legal Education, gaining hands-on experience in information technology support and system administration within the legal education sector.",
      color: "bg-cyan-400",
      position: "left"
    },
    {
      id: 2,
      period: "01/2023 – 04/2023",
      title: "ICT Attache",
      company: "Gatundu Law Courts",
      description: "Helped troubleshoot technical issues reported by staff, resolving them quickly and effectively. Assisted with the maintenance and management of the court's computer systems and networks. Also assisted with website maintenance and updates.",
      color: "bg-purple-400",
      position: "right"
    },
    {
      id: 3,
      period: "08/2022",
      title: "IEBC ICT Officer",
      company: "Independent Electoral and Boundaries Commission",
      description: "Served as ICT Officer during the August 2022 polls, overseeing maintenance and troubleshooting of KEIMS kit and setting up network infrastructure in the tallying centre for Gatundu South constituency.",
      color: "bg-green-400",
      position: "left"
    },
    {
      id: 4,
      period: "07/2021 – 02/2022",
      title: "Junior Software Developer",
      company: "Freelancer",
      description: "Worked as a freelance junior software developer, primarily focusing on website development for clients on a contract basis, delivering custom web solutions and applications.",
      color: "bg-blue-400",
      position: "right"
    },
    {
      id: 5,
      period: "01/2018 – 03/2018",
      title: "Tutor (Peer Teacher)",
      company: "Academic Support",
      description: "Helped coach high school students while pursuing degree at university, providing academic support and guidance.",
      color: "bg-yellow-400",
      position: "left"
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-gradient-to-r from-purple-900/20 to-cyan-900/20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text" data-testid="experience-title">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full"></div>
            
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative flex items-center mb-12">
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 ${experience.color} rounded-full border-4 border-slate-900 z-10`}></div>
                
                <div className={`ml-16 md:ml-0 ${
                  experience.position === 'left' 
                    ? 'md:w-1/2 md:pr-8 md:text-right' 
                    : 'md:w-1/2 md:ml-auto md:pl-8'
                }`}>
                  <div className="neuro-box hover-lift p-6">
                    <div className={`font-semibold mb-2 ${experience.color.replace('bg-', 'text-')}`} data-testid={`experience-period-${experience.id}`}>
                      {experience.period}
                    </div>
                    <h3 className="text-xl font-bold mb-2" data-testid={`experience-title-${experience.id}`}>
                      {experience.title}
                    </h3>
                    <h4 className={`text-lg mb-4 ${
                      experience.position === 'left' ? 'text-purple-400' : 'text-cyan-400'
                    }`} data-testid={`experience-company-${experience.id}`}>
                      {experience.company}
                    </h4>
                    <p className="text-slate-300" data-testid={`experience-description-${experience.id}`}>
                      {experience.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
