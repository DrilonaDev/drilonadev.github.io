import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import design1 from "@/assets/design-1.jpg";
import design2 from "@/assets/design-2.jpg";
import ImageViewer from "@/components/ImageViewer";
import { useImageViewer } from "@/hooks/useImageViewer";

const Portfolio = () => {
  const projects = [
    {
      image: portfolio1,
      title: "Bella Nails",
      description: "Design für ein Nagelstudio",
      detailImageSrc: design1,
    },
    {
      image: portfolio2,
      title: "Noir Nails",
      description: "Design für ein Nagelstudio",
      detailImageSrc: design2,
    },
    {
      image: portfolio3,
      title: "Studio Raum & Material",
      description: "Design für Interior Designer / Architekturbüro",
      detailImageSrc: portfolio3,
    },
  ];

  const { isOpen, imageSrc, openImageViewer, closeImageViewer } = useImageViewer();

  return (
    <section id="portfolio" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Beispiele meiner Arbeit
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Eine kleine Auswahl an Projekten, die zeigen, wie wir klare Gestaltung mit starker Funktion verbinden.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-smooth cursor-pointer"
              onClick={() => openImageViewer(project.detailImageSrc)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <ImageViewer
          isOpen={isOpen}
          src={imageSrc}
          onClose={closeImageViewer}
          ariaLabel="Bildvorschau"
        />
      </div>
    </section>
  );
};

export default Portfolio;

