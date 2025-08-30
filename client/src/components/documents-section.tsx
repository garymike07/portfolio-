import { Download, FileText, GraduationCap, Award, Briefcase, FileCode, FileCertificate, FileCheck } from "lucide-react";

export default function DocumentsSection() {
  const documentCategories = [
    {
      id: 1,
      title: "Professional Documents",
      documents: [
        {
          id: 1,
          title: "Professional Resume",
          description: "Complete professional resume with work experience, skills, and qualifications",
          icon: FileText,
          color: "text-cyan-400",
          downloadUrl: "/api/resume",
          filename: "Mike_Kagera_Resume.pdf",
          lastUpdated: "August 2025"
        },
        {
          id: 2,
          title: "Professional Portfolio",
          description: "Comprehensive portfolio showcasing my projects and technical skills",
          icon: FileCode,
          color: "text-purple-400",
          downloadUrl: "/api/portfolio",
          filename: "Mike_Kagera_Portfolio.pdf",
          lastUpdated: "July 2025"
        }
      ]
    },
    {
      id: 2,
      title: "Educational Certificates",
      documents: [
        {
          id: 3,
          title: "Bachelor's Degree Certificate",
          description: "BSc. Information Technology from South Eastern Kenya University (2020)",
          icon: GraduationCap,
          color: "text-green-400",
          downloadUrl: "/api/degree",
          filename: "Mike_Kagera_Degree_Certificate.pdf",
          lastUpdated: "2020"
        },
        {
          id: 4,
          title: "KCSE Certificate",
          description: "Kenya Certificate of Secondary Education from Muhoho High School",
          icon: Award,
          color: "text-yellow-400",
          downloadUrl: "/api/kcse",
          filename: "Mike_Kagera_KCSE_Certificate.pdf",
          lastUpdated: "2014"
        }
      ]
    },
    {
      id: 3,
      title: "Professional Certifications",
      documents: [
        {
          id: 5,
          title: "Internship Certificate",
          description: "ICT Internship certificate from Council of Legal Education",
          icon: Briefcase,
          color: "text-blue-400",
          downloadUrl: "/api/internship",
          filename: "Mike_Kagera_Internship_Certificate.pdf",
          lastUpdated: "2025"
        },
        {
          id: 6,
          title: "Web Development Certification",
          description: "Full-Stack Web Development certification from freeCodeCamp",
          icon: FileCertificate,
          color: "text-red-400",
          downloadUrl: "/api/webdev-cert",
          filename: "Mike_Kagera_WebDev_Certificate.pdf",
          lastUpdated: "2022"
        },
        {
          id: 7,
          title: "IT Support Certification",
          description: "Google IT Support Professional certification",
          icon: FileCheck,
          color: "text-orange-400",
          downloadUrl: "/api/it-support-cert",
          filename: "Mike_Kagera_IT_Support_Certificate.pdf",
          lastUpdated: "2021"
        }
      ]
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
        
        {documentCategories.map((category) => (
          <div key={category.id} className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center text-primary">
              {category.title}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {category.documents.map((doc) => {
                const IconComponent = doc.icon;
                return (
                  <div key={doc.id} className="neuro-box hover-lift p-6">
                    <div className="glass-card p-6 rounded-2xl mb-6">
                      <div className="neuro-inset p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                        <IconComponent className={`${doc.color} text-3xl`} />
                      </div>
                      <h4 className="text-xl font-bold mb-2" data-testid={`document-title-${doc.id}`}>
                        {doc.title}
                      </h4>
                      <p className="text-slate-400 mb-4 text-sm" data-testid={`document-description-${doc.id}`}>
                        {doc.description}
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                        <span>Format: PDF</span>
                        <span>Last Updated: {doc.lastUpdated}</span>
                      </div>
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
          </div>
        ))}
        
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">
            All documents are available for download by potential employers and collaborators. 
            Documents are regularly updated to reflect my latest skills and experiences.
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
            <button 
              onClick={() => handleDownload('/api/all-documents', 'Mike_Kagera_All_Documents.zip')}
              className="neuro-box hover-lift px-6 py-3 font-semibold transition-all duration-300 flex items-center gap-3"
              data-testid="download-all-documents"
            >
              <Download className="text-xl" />
              Download All Documents
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}