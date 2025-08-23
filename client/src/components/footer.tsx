export default function Footer() {
  const handleWorkTogether = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-6">
        <div className="glass-card p-8 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold gradient-text mb-2" data-testid="footer-name">
                Mike Kagera
              </div>
              <div className="text-slate-400" data-testid="footer-title">
                ICT Professional
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-slate-400 mb-4" data-testid="footer-cta-text">
                Ready to start your next project?
              </div>
              <button 
                onClick={handleWorkTogether}
                className="neuro-box hover-lift px-6 py-3 font-semibold transition-all duration-300"
                data-testid="button-work-together"
              >
                Let's Work Together
              </button>
            </div>
            
            <div className="text-center md:text-right">
              <div className="text-slate-400 mb-4" data-testid="footer-copyright">
                © 2024 Mike Kagera
              </div>
              <div className="text-sm text-slate-500" data-testid="footer-tagline">
                Built with passion & code
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
