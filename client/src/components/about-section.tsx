export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Full-Stack Developer & IT Specialist
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A passionate and results-oriented ICT professional with a knack for
            building modern, user-friendly web applications and providing robust
            IT solutions. I thrive in collaborative environments and I am
            committed to leveraging technology to solve complex problems and
            drive business value.
          </p>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              What I Do
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-card p-6 rounded-lg shadow-md flex-1 min-w-[280px]">
                <h4 className="text-xl font-semibold mb-2">
                  Frontend Development
                </h4>
                <p className="text-muted-foreground">
                  React, Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md flex-1 min-w-[280px]">
                <h4 className="text-xl font-semibold mb-2">
                  Backend Development
                </h4>
                <p className="text-muted-foreground">
                  Node.js, Express, REST APIs, PostgreSQL
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-md flex-1 min-w-[280px]">
                <h4 className="text-xl font-semibold mb-2">
                  IT Support
                </h4>
                <p className="text-muted-foreground">
                  System Administration, Network Management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
