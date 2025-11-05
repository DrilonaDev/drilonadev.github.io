const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">DD</span>
              </div>
              <span className="text-xl font-bold text-foreground">drilona.dev</span>
            </div>
            <p className="text-muted-foreground">
              Kleine Agentur mit Fokus auf moderne, klare Webseiten für kleine Unternehmen. 
              Professionell, menschlich und zugänglich.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontakt</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Telefon: +41 (0)76 204 67 46</p>
              <p>E-Mail: drilona.dev@gmail.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>Services</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Kontakt</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} drilona.dev. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
