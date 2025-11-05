import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Müller",
      role: "Kundin",
      content: "Bella Nails ist mein absolutes Lieblingsstudio! Die Arbeit ist immer perfekt, die Designs kreativ und das Team super freundlich. Meine Nägel sehen jedes Mal fantastisch aus!",
      rating: 5,
    },
    {
      name: "Lisa Wagner",
      role: "Stammkundin",
      content: "Ich bin so froh, dieses Studio gefunden zu haben. Die Hygiene ist top, die Atmosphäre entspannend und die Nageldesignerin versteht genau, was ich möchte. Absolute Empfehlung!",
      rating: 5,
    },
    {
      name: "Anna Becker",
      role: "Braut",
      content: "Für meine Hochzeit habe ich mir bei Bella Nails die Nägel machen lassen. Das Ergebnis war traumhaft! Die Beratung war hervorragend und das Design hat perfekt zum Brautkleid gepasst.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Zufriedene Kunden sind unser bester Beweis für Qualität und Zuverlässigkeit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-smooth"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-secondary text-secondary"
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
