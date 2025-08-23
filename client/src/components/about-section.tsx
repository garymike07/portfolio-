import { Code, Network, MapPin, Phone, Mail, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-gradient-to-r from-cyan-900/20 to-purple-900/20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 gradient-text" data-testid="about-title">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="neuro-box hover-lift p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400" data-testid="about-professional-summary-title">
                Professional Summary
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-6" data-testid="about-description-1">
                I'm an ICT professional with a strong foundation in system development, IT support, and digital transformation. With hands-on experience in designing and deploying tailored software solutions, my skill set spans across app development, database management, IT infrastructure support, and user training.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed" data-testid="about-description-2">
                I bring a problem-solving mindset, a collaborative spirit, and a commitment to delivering technology that solves real-world challenges. I'm passionate about using ICT to improve public service delivery, drive organizational efficiency, and empower users through smart, sustainable tech solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card hover-lift p-6 rounded-2xl">
                <div className="neuro-inset p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Code className="text-cyan-400 text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-3" data-testid="about-development-title">Development</h4>
                <p className="text-slate-400" data-testid="about-development-description">
                  Full-stack development with modern technologies and frameworks
                </p>
              </div>
              
              <div className="glass-card hover-lift p-6 rounded-2xl">
                <div className="neuro-inset p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Network className="text-purple-400 text-2xl" />
                </div>
                <h4 className="text-xl font-semibold mb-3" data-testid="about-support-title">IT Support</h4>
                <p className="text-slate-400" data-testid="about-support-description">
                  System administration and technical troubleshooting expertise
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="neuro-box p-6">
              <h4 className="text-xl font-semibold mb-4 text-cyan-400" data-testid="about-quick-facts-title">
                Quick Facts
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-purple-400" />
                  <span data-testid="about-location">Nairobi, Kenya</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-cyan-400" />
                  <span data-testid="about-phone">0792618156</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-purple-400" />
                  <span data-testid="about-email">wrootmike@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="text-cyan-400" />
                  <span data-testid="about-availability">Available for Remote Work</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="text-xl font-semibold mb-4" data-testid="about-languages-title">Languages</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span data-testid="language-english">English</span>
                    <span data-testid="language-english-level">Fluent</span>
                  </div>
                  <div className="neuro-inset h-2 rounded-full">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full w-full rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span data-testid="language-kiswahili">Kiswahili</span>
                    <span data-testid="language-kiswahili-level">Native</span>
                  </div>
                  <div className="neuro-inset h-2 rounded-full">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-full w-full rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
