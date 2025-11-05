import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      q: "Wie läuft ein Projekt ab?",
      a: "In drei Phasen: Planung (Ziele, Inhalte, Umfang), Design & Umsetzung (Wireframes, UI, Entwicklung), Launch (Tests, Go-Live, Einweisung). Transparente Kommunikation in jedem Schritt.",
    },
    {
      q: "Wie lange dauert die Erstellung einer Website?",
      a: "Eine einfache Landingpage dauert meist 1–2 Wochen. Eine individuelle Website 3–6 Wochen – abhängig von Umfang, Inhalten und Feedbackrunden.",
    },
    {
      q: "Was kostet eine Website?",
      a: "Ich biete klare Pakete (Landingpage, Website, Shop) sowie individuelle Angebote. Schreib mir kurz dein Ziel – ich schicke dir ein passendes Angebot.",
    },
    {
      q: "Mit welchen Tools arbeite ich?",
      a: "Moderne Web-Stacks wie React/Vite, Tailwind für UI, und schlanke Integrationen (z. B. Formular/Booking/Shop) – performant, wartbar und SEO-freundlich.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 bg-background overflow-hidden">
      {/* subtle gradient dots */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.violet.200/20),transparent_60%)]" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Häufige Fragen</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Kurz und ehrlich beantwortet – damit du schnell entscheiden kannst.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-card rounded-xl border border-border shadow-soft p-4 md:p-6">
          <Accordion type="single" collapsible className="w-full divide-y divide-border">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base md:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

