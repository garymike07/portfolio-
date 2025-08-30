import { GraduationCap, School, BookOpen, Download, Award, BookMarked, Code } from "lucide-react";

export default function EducationSection() {
  const educationItems = [
    {
      id: 1,
      degree: "Bachelor of Science",
      field: "Information Technology",
      institution: "South Eastern Kenya University",
      year: "2020",
      icon: GraduationCap,
      color: "text-cyan-400",
      description: "Comprehensive program covering software development, database management, system analysis, and IT infrastructure.",
      achievements: [
        "Graduated with Second Class Honors, Upper Division",
        "Completed capstone project on 'Automated Student Management System'",
        "Served as IT Club Secretary (2018-2019)"
      ],
      relevantCourses: [
        "Software Engineering",
        "Database Systems",
        "Computer Networks",
        "Web Application Development",
        "System Analysis & Design",
        "Object-Oriented Programming"
      ]
    },
    {
      id: 2,
      degree: "Kenya Certificate of",
      field: "Secondary Education",
      institution: "Muhoho High School",
      year: "2011 – 2014",
      icon: School,
      color: "text-purple-400",
      description: "Strong foundation in mathematics, sciences, and English language, preparing for higher education in technology.",
      achievements: [
        "Achieved grade B+ overall",
        "Scored A in Mathematics and Computer Studies",
        "Participated in National Science Congress"
      ],
      relevantCourses: [
        "Mathematics",
        "Physics",
        "Computer Studies",
        "English",
        "Business Studies"
      ]
    },
    {
      id: 3,
      degree: "Kenya Certificate of",
      field: "Primary Education",
      institution: "Samrose Academy",
      year: "2010",
      icon: BookOpen,
      color: "text-green-400",
      description: "Excellence in academic performance with strong marks in mathematics and sciences, ranking 345 nationally.",
      achievements: [
        "Ranked 345 nationally",
        "Achieved 390 marks out of 500",
        "Received academic excellence award"
      ],
      relevantCourses: [
        "Mathematics",
        "Science",
        "English",
        "Social Studies"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2022",
      icon: Code,
      color: "text-blue-400"
    },
    {
      id: 2,
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "2022",
      icon: BookMarked,
      color: "text-yellow-400"
    },
    {
      id: 3,
      name: "IT Support Professional",
      issuer: "Google",
      year: "2021",
      icon: Award,
      color: "text-red-400"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text" data-testid="education-title">
          Education & Certifications
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="neuro-box hover-lift p-8">
                <div className="glass-card p-6 rounded-2xl mb-6">
                  <div className="neuro-inset p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className={`${item.color} text-3xl`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" data-testid={`education-degree-${item.id}`}>
                    {item.degree}
                  </h3>
                  <h4 className={`text-lg mb-2 ${item.color}`} data-testid={`education-field-${item.id}`}>
                    {item.field}
                  </h4>
                  <p className="text-slate-400 mb-4" data-testid={`education-institution-${item.id}`}>
                    {item.institution}
                  </p>
                  <div className={`text-sm font-semibold ${item.color}`} data-testid={`education-year-${item.id}`}>
                    {item.year}
                  </div>
                </div>
                <p className="text-slate-300 mb-4" data-testid={`education-description-${item.id}`}>
                  {item.description}
                </p>
                
                {/* Achievements */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold mb-2">Key Achievements:</h5>
                  <ul className="text-slate-300 text-sm space-y-1 list-disc pl-4">
                    {item.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Relevant Courses */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold mb-2">Relevant Courses:</h5>
                  <div className="flex flex-wrap gap-2">
                    {item.relevantCourses.slice(0, 4).map((course, index) => (
                      <span key={index} className={`bg-card px-2 py-1 rounded-md text-xs ${item.color.replace('text-', 'text-')}`}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Download buttons for certificates */}
                {item.id === 1 && (
                  <button 
                    onClick={() => window.open('/api/degree', '_blank')}
                    className="glass-card px-4 py-2 rounded-lg hover:bg-glass-border transition-all duration-300 flex items-center gap-2 mx-auto"
                    data-testid="download-degree"
                  >
                    <Download className="text-sm" />
                    Download Certificate
                  </button>
                )}
                {item.id === 2 && (
                  <button 
                    onClick={() => window.open('/api/kcse', '_blank')}
                    className="glass-card px-4 py-2 rounded-lg hover:bg-glass-border transition-all duration-300 flex items-center gap-2 mx-auto"
                    data-testid="download-kcse"
                  >
                    <Download className="text-sm" />
                    Download Certificate
                  </button>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Certifications Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-primary">Professional Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert) => {
              const IconComponent = cert.icon;
              return (
                <div key={cert.id} className="glass-card p-6 rounded-lg hover-lift">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full bg-card`}>
                      <IconComponent className={`${cert.color} w-5 h-5`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => window.open(`/api/certification/${cert.id}`, '_blank')}
                    className="text-xs flex items-center gap-1 text-primary hover:underline"
                  >
                    <Download className="w-3 h-3" />
                    View Certificate
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}