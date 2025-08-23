import { Download, FileText, GraduationCap, Award, Briefcase } from "lucide-react";

export default function DocumentsSection() {
  const documents = [
    {
      id: 1,
      title: "Professional Resume",
      description: "Complete professional resume with work experience, skills, and qualifications",
      icon: FileText,
      color: "text-cyan-400",
      downloadUrl: "/api/resume",
      filename: "Mike_Kagera_Resume.pdf"
    },
    {
      id: 2,
      title: "Bachelor's Degree Certificate",
      description: "BSc. Information Technology from South Eastern Kenya University (2020)",
      icon: GraduationCap,
      color: "text-purple-400",
      downloadUrl: "/api/degree",
      filename: "Mike_Kagera_Degree_Certificate.pdf"
    },
    {
      id: 3,
      title: "KCSE Certificate",
      description: "Kenya Certificate of Secondary Education from Muhoho High School",
      icon: Award,
      color: "text-green-400",
      downloadUrl: "/api/kcse",
      filename: "Mike_Kagera_KCSE_Certificate.pdf"
    },
    {
      id: 4,
      title: "Internship Certificate",
      description: "ICT Internship certificate from Council of Legal Education",
      icon: Briefcase,
      color: "text-yellow-400",
      downloadUrl: "/api/internship",
      filename: "Mike_Kagera_Internship_Certificate.pdf"
    }
  ];

  const handleDownload = (url: string, filename: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="documents" className="py-20 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-gradient-to-r from-green-900/20 to-blue-900/20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text" data-testid="documents-title">
          Documents & Certificates
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {documents.map((doc) => {
            const IconComponent = doc.icon;
            return (
              <div key={doc.id} className="neuro-box hover-lift p-6 text-center">
                <div className="glass-card p-6 rounded-2xl mb-6">
                  <div className="neuro-inset p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className={`${doc.color} text-3xl`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2" data-testid={`document-title-${doc.id}`}>
                    {doc.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm" data-testid={`document-description-${doc.id}`}>
                    {doc.description}
                  </p>
                  <button 
                    onClick={() => handleDownload(doc.downloadUrl, doc.filename)}
                    className={`glass-card px-4 py-2 rounded-lg hover:bg-glass-border transition-all duration-300 flex items-center gap-2 mx-auto ${doc.color}`}
                    data-testid={`download-${doc.id}`}
                  >
                    <Download className="text-sm" />
                    Download PDF
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">
            All documents are available for download by potential employers and collaborators.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button 
              onClick={() => handleDownload('/api/resume', 'Mike_Kagera_Resume.pdf')}
              className="neuro-box hover-lift px-6 py-3 font-semibold transition-all duration-300 flex items-center gap-3"
              data-testid="download-all-resume"
            >
              <Download className="text-xl" />
              Quick Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}