import { GraduationCap, School, BookOpen, Download } from "lucide-react";

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
      description: "Comprehensive program covering software development, database management, system analysis, and IT infrastructure."
    },
    {
      id: 2,
      degree: "Kenya Certificate of",
      field: "Secondary Education",
      institution: "Muhoho High School",
      year: "2011 – 2014",
      icon: School,
      color: "text-purple-400",
      description: "Strong foundation in mathematics, sciences, and English language, preparing for higher education in technology."
    },
    {
      id: 3,
      degree: "Kenya Certificate of",
      field: "Primary Education",
      institution: "Samrose Academy",
      year: "2010",
      icon: BookOpen,
      color: "text-green-400",
      description: "Excellence in academic performance with strong marks in mathematics and sciences, ranking 345 nationally."
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text" data-testid="education-title">
          Education
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="neuro-box hover-lift p-8 text-center">
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
      </div>
    </section>
  );
}
