import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle patterned background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.violet.300/20),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,theme(colors.orange.300/20),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Moderne Webseiten für kleine Unternehmen
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Ich helfe dir, online sichtbar zu werden – mit einer Website, die
            funktioniert und gut aussieht.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-hero hover:opacity-90 transition-smooth text-base md:text-lg px-8 py-6 shadow-medium"
            >
              Angebot ansehen
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="text-base md:text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
            >
              Kontakt aufnehmen
            </Button>
          </div>
        </div>

        {/* Portrait / Illustration */}
        <div className="relative hidden lg:block">
          <div className="relative w-[420px] h-[420px] mx-auto">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-4 border-violet-300/40" />
            <div className="absolute inset-6 rounded-full border-2 border-orange-300/40" />
            {/* Placeholder avatar circle (replace with real photo in public/drilona.jpg) */}
            <div className="absolute inset-3 rounded-full overflow-hidden bg-gradient-to-br from-violet-200 via-white to-orange-100 flex items-center justify-center">
              <div className="w-44 h-44 rounded-full bg-gradient-hero flex items-center justify-center shadow-soft">
                <span className="text-primary-foreground text-4xl font-bold">DD</span>
              </div>
            </div>
            {/* Floating shapes */}
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-violet-200/60 blur-xl" />
            <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-orange-200/70 blur-xl" />
          </div>
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
