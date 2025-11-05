import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/drilona.dev@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: "Neue Projektanfrage über das Kontaktformular",
          _replyto: formData.email,
          _captcha: false,
        }),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      toast({
        title: "Projektanfrage gesendet!",
        description: "Wir melden uns schnellstmöglich bei Ihnen.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({
        title: "Senden fehlgeschlagen",
        description: "Bitte versuchen Sie es später erneut oder schreiben Sie an drilona.dev@gmail.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        {/* CTA banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-orange-500 text-white p-10 md:p-14 mb-16">
          {/* subtle shapes */}
          <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/15 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/10 blur-2xl" />
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                Bereit für deine neue Website? Lass uns sprechen!
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Ich melde mich schnell bei dir – persönlich und unkompliziert.
              </p>
              <Button onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })} className="bg-white text-violet-700 hover:opacity-90">
                Projekt starten
              </Button>
            </div>
            {/* avatar/portrait placeholder */}
            <div className="hidden md:flex justify-end">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-white/15 flex items-center justify-center ring-2 ring-white/40">
                <span className="text-5xl font-bold">D</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card rounded-xl p-8 shadow-soft">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Kontakt
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Telefon</p>
                    <a href="tel:+4912345678900" className="text-muted-foreground hover:text-primary transition-smooth">
                      +41 (0)76 204 67 46
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">E-Mail</p>
                    <a href="mailto:drilona.dev@gmail.com" className="text-muted-foreground hover:text-primary transition-smooth">
                      drilona.dev@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft">
              <h4 className="font-semibold text-foreground mb-3">Öffnungszeiten</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Montag - Freitag: 8:00 - 17:30 Uhr</p>
                <p>Samstag: 9:00 - 12:00 Uhr</p>
                <p>Sonntag: Geschlossen</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact-form" className="bg-card rounded-xl p-8 shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ihr Name"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  E-Mail *
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="ihre@email.de"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefon
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Ihre Telefonnummer"
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Nachricht *
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Beschreiben Sie Ihren Projektwunsch..."
                  className="w-full min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-hero hover:opacity-90 transition-smooth py-6 text-lg disabled:opacity-60"
              >
                {isSubmitting ? "Wird gesendet…" : "Projekt anfragen"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
