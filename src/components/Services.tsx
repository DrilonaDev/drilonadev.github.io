import { useMemo, useState } from "react";
import { Layout, Monitor, ShoppingCart } from "lucide-react";
import ServiceModal from "@/components/ServiceModal";
import { servicesData, type ServiceItem } from "@/lib/servicesData";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSlug, setActiveSlug] = useState<ServiceItem["slug"] | null>(null);

  const iconBySlug: Record<string, React.ComponentType<any>> = useMemo(
    () => ({
      "landingpage": Layout,
      "website": Monitor,
      "online-shop": ShoppingCart,
    }),
    []
  );

  const openServiceModal = (slug: ServiceItem["slug"]) => {
    setActiveSlug(slug);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    // delay clearing to allow exit animations later if needed
    setTimeout(() => setActiveSlug(null), 0);
  };

  const activeService = useMemo(
    () => servicesData.find((s) => s.slug === activeSlug) ?? null,
    [activeSlug]
  );

  return (
    <section id="services" className="relative py-24 bg-background overflow-hidden">
      {/* decorative shapes */}
      <div className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 rounded-full bg-violet-200/40 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-orange-200/40 blur-2xl" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Was wir anbieten
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Lösungen, die dich voranbringen – klar strukturiert, visuell ansprechend und auf dein Ziel ausgerichtet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const Icon = iconBySlug[service.slug] ?? Layout;
            return (
              <button
                key={service.slug}
                onClick={() => openServiceModal(service.slug)}
                className="group text-left w-full bg-card rounded-xl p-8 shadow-soft hover:shadow-medium transition-smooth border border-border hover:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-haspopup="dialog"
                aria-controls={`service-modal-title-${service.slug}`}
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                    <Icon className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.excerpt}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <ServiceModal service={activeService} isOpen={isModalOpen} onClose={closeServiceModal} />
      </div>
    </section>
  );
};

export default Services;
