export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            About Me
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A passionate and results-oriented ICT professional with over 4 years of experience in web development and IT support. 
            I specialize in building modern, user-friendly web applications and providing robust IT infrastructure solutions. 
            My approach combines technical expertise with strong problem-solving abilities to deliver high-quality results that meet business objectives.
          </p>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Professional Focus Areas
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-card p-6 rounded-lg shadow-md flex-1 min-w-[280px]">
                <h4 className="text-xl font-semibold mb-2">
                  Frontend Development
                </h4>
                <p className="text-muted-foreground">
                  Building responsive, accessible, and performant user interfaces using React, Next.js, TypeScript, and Tailwind CSS. Focused on creating intuitive user experiences with modern design principles.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md flex-1 min-w-[280px]">
                <h4 className="text-xl font-semibold mb-2">
                  Backend Development
                </h4>
                <p className="text-muted-foreground">
                  Developing scalable server-side applications with Node.js, Express, and PostgreSQL. Experienced in designing RESTful APIs, implementing authentication systems, and optimizing database performance.
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md flex-1 min-w-[280px]">
                <h4 className="text-xl font-semibold mb-2">
                  IT Infrastructure & Support
                </h4>
                <p className="text-muted-foreground">
                  Managing network infrastructure, system administration, and technical troubleshooting. Experienced in setting up and maintaining secure IT environments for organizations in the legal and educational sectors.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Professional Philosophy
            </h3>
            <p className="text-muted-foreground">
              I believe in continuous learning and staying updated with emerging technologies. My approach to projects combines technical excellence with clear communication and a focus on delivering business value. I'm particularly interested in creating solutions that are not only technically sound but also accessible and user-friendly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}