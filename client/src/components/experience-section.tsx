export default function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      period: "01/2024 – 02/2025",
      title: "ICT Intern",
      company: "Council of Legal Education",
      description: "Served as an ICT intern at the Council of Legal Education, focusing on IT infrastructure management and technical support.",
      responsibilities: [
        "Managed and maintained the organization's network infrastructure, ensuring 99.9% uptime for critical systems",
        "Provided technical support to 50+ staff members, resolving an average of 15 tickets per day",
        "Implemented security protocols that reduced vulnerability incidents by 40%",
        "Assisted in the deployment of a new document management system that improved workflow efficiency by 30%"
      ],
      color: "bg-cyan-400",
      position: "left"
    },
    {
      id: 2,
      period: "01/2023 – 04/2023",
      title: "ICT Attache",
      company: "Gatundu Law Courts",
      description: "Provided comprehensive IT support and system administration for the court's digital infrastructure.",
      responsibilities: [
        "Troubleshot and resolved technical issues for 30+ court staff members, maintaining a 95% first-contact resolution rate",
        "Managed and optimized the court's computer systems and network infrastructure",
        "Implemented regular maintenance schedules that reduced system downtime by 25%",
        "Redesigned and updated the court's website, improving user experience and accessibility"
      ],
      color: "bg-purple-400",
      position: "right"
    },
    {
      id: 3,
      period: "08/2022",
      title: "IEBC ICT Officer",
      company: "Independent Electoral and Boundaries Commission",
      description: "Served as ICT Officer during the August 2022 general elections, ensuring smooth technical operations.",
      responsibilities: [
        "Maintained and troubleshot KEIMS (Kenya Integrated Election Management System) kits during the national elections",
        "Set up and managed network infrastructure in the tallying center for Gatundu South constituency",
        "Provided real-time technical support during the voting and tallying process",
        "Collaborated with a team of 8 ICT officers to ensure data integrity and system security throughout the election"
      ],
      color: "bg-green-400",
      position: "left"
    },
    {
      id: 4,
      period: "07/2021 – 02/2022",
      title: "Junior Software Developer",
      company: "Freelancer",
      description: "Worked as a freelance developer creating custom web solutions for diverse clients.",
      responsibilities: [
        "Developed responsive websites using React, Next.js, and Tailwind CSS for 10+ clients",
        "Created custom e-commerce solutions with integrated payment systems",
        "Implemented SEO best practices, improving client site visibility by an average of 35%",
        "Maintained ongoing relationships with clients, providing technical support and website updates"
      ],
      color: "bg-blue-400",
      position: "right"
    },
    {
      id: 5,
      period: "01/2018 – 03/2018",
      title: "Tutor (Peer Teacher)",
      company: "Academic Support",
      description: "Provided academic support to high school students while pursuing my university degree.",
      responsibilities: [
        "Tutored 15+ high school students in mathematics, physics, and computer studies",
        "Developed customized learning materials to address individual student needs",
        "Conducted weekly group study sessions to reinforce classroom learning",
        "Helped improve student performance with 80% of tutored students showing grade improvements"
      ],
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
                    <p className="text-slate-300 mb-4" data-testid={`experience-description-${experience.id}`}>
                      {experience.description}
                    </p>
                    <div className="mt-4">
                      <h5 className="font-semibold text-sm mb-2">Key Responsibilities:</h5>
                      <ul className={`text-slate-300 text-sm space-y-2 ${experience.position === 'left' ? 'md:text-right' : ''}`}>
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className={`inline-block w-1.5 h-1.5 rounded-full ${experience.color} mt-1.5 mr-2 ${experience.position === 'left' ? 'md:hidden' : ''}`}></span>
                            <span>{responsibility}</span>
                            <span className={`inline-block w-1.5 h-1.5 rounded-full ${experience.color} mt-1.5 ml-2 ${experience.position === 'left' ? 'md:inline-block' : 'hidden'}`}></span>
                          </li>
                        ))}
                      </ul>
                    </div>
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