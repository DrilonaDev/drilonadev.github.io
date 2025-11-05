import { Award, Users, Shield, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Über 10 Jahre Erfahrung",
      description: "Langjährige Expertise in professioneller Nagelpflege",
    },
    {
      icon: Shield,
      title: "Hygiene & Sicherheit",
      description: "Höchste Standards bei Sauberkeit und Sterilisation",
    },
    {
      icon: Users,
      title: "Qualifizierte Nageldesigner",
      description: "Ausgebildete Fachkräfte mit künstlerischem Talent",
    },
    {
      icon: Sparkles,
      title: "Premium Produkte",
      description: "Hochwertige Markenprodukte für langanhaltende Ergebnisse",
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Über Bella Nails Studio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mit Leidenschaft, Kreativität und über 10 Jahren Erfahrung verwandeln wir Ihre Nägel in kleine Kunstwerke. 
            Bei uns stehen <strong>Qualität, Hygiene und individuelles Design</strong> im Mittelpunkt – für gepflegte Hände, die begeistern.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-smooth"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
