import { ClipboardCheck, PenTool, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Planung",
      description: "Wir besprechen dein Ziel und deine Ideen.",
    },
    {
      icon: PenTool,
      title: "Design & Umsetzung",
      description: "Ich gestalte und entwickle deine Website.",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Deine Website geht online – bereit, Kunden zu gewinnen.",
    },
  ];

  return (
    <section id="process" className="relative py-24 bg-background overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-400/60 via-orange-400/60 to-violet-400/60" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">So läuft die Zusammenarbeit</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent, strukturiert und unkompliziert – in drei klaren Schritten zur neuen Website.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative bg-card rounded-xl p-8 shadow-soft border border-border">
                {/* decorative line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-[-16px] w-8 h-[2px] bg-gradient-to-r from-violet-400 to-orange-400" />
                )}
                <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{`${index + 1}. ${step.title}`}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;

