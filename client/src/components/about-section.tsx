export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-bg opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight gradient-text sm:text-4xl mb-4 animate-fade-in-up">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8 animate-scale-in animate-delay-200" />
          
          <p className="mt-6 text-lg leading-8 text-muted-foreground animate-fade-in-up animate-delay-300">
            A passionate and results-oriented ICT professional with over 4 years of experience in web development and IT support. 
            I specialize in building modern, user-friendly web applications and providing robust IT infrastructure solutions. 
            My approach combines technical expertise with strong problem-solving abilities to deliver high-quality results that meet business objectives.
          </p>
          
          <div className="mt-10">
            <h3 className="text-2xl font-semibold gradient-text mb-8 animate-fade-in-up animate-delay-400">
              Professional Focus Areas
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up animate-delay-500 group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">F</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 gradient-text">
                  Frontend Development
                </h4>
                <p className="text-muted-foreground">
                  Building responsive, accessible, and performant user interfaces using React, Next.js, TypeScript, and Tailwind CSS. Focused on creating intuitive user experiences with modern design principles.
                </p>
              </div>
              
              <div className="card-glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up animate-delay-600 group">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 gradient-text">
                  Backend Development
                </h4>
                <p className="text-muted-foreground">
                  Developing scalable server-side applications with Node.js, Express, and PostgreSQL. Experienced in designing RESTful APIs, implementing authentication systems, and optimizing database performance.
                </p>
              </div>
              
              <div className="card-glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 animate-fade-in-up animate-delay-700 group">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 gradient-text">
                  IT Infrastructure & Support
                </h4>
                <p className="text-muted-foreground">
                  Managing network infrastructure, system administration, and technical troubleshooting. Experienced in setting up and maintaining secure IT environments for organizations in the legal and educational sectors.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <div className="card-glass p-8 rounded-3xl animate-fade-in-up animate-delay-800">
              <h3 className="text-2xl font-semibold gradient-text mb-6">
                Professional Philosophy
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I believe in continuous learning and staying updated with emerging technologies. My approach to projects combines technical excellence with clear communication and a focus on delivering business value. I'm particularly interested in creating solutions that are not only technically sound but also accessible and user-friendly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

