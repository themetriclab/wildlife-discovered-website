import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { tours } from "@/data/tours";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import DiagonalSplitImage from "@/components/DiagonalSplitImage";

const SITE_URL = "https://silverbearphototours.com";

const Tours = () => {
  const listedTours = tours.filter((t) => !t.gallerySlug);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Photography Tours", item: `${SITE_URL}/tours` },
    ],
  };

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: listedTours.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/tours/${t.slug}`,
      name: t.title,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Wildlife Photography Tours Ontario & Churchill Polar Bear Tours"
        description="Small-group wildlife photography tours in Ontario and Churchill polar bear photography tours: Algonquin moose by boat, loons, waterfowl and ground-level polar bears. Expert guiding since 1997."
        path="/tours"
        type="website"
        jsonLd={[breadcrumbLd, itemListLd]}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 bg-secondary/30">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-primary/60" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Expeditions</span>
            <div className="h-px w-16 bg-primary/60" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Wildlife Photography Tours in Canada
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
            Silver Bear Photo Tours runs small-group, guide-led <strong className="text-foreground font-medium">wildlife photography tours</strong> across
            Canada — from ground-level <strong className="text-foreground font-medium">polar bear photography tours</strong> in{" "}
            <strong className="text-foreground font-medium">Churchill, Manitoba</strong> to intimate{" "}
            <strong className="text-foreground font-medium">moose photography tours in Algonquin Park</strong>,{" "}
            <strong className="text-foreground font-medium">loon photography tours</strong>, and waterfowl photography workshops. Every tour is led
            by professional guide Erik Bertelsen, with decades of experience and Silver Bear's trusted best-in-class guiding since 1997.
          </p>
        </div>
      </section>

      {/* Tours grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listedTours.map((tour, i) => (
              <motion.div
                key={tour.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to={`/tours/${tour.slug}`}
                  className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500 h-full"
                >
                  <div className="relative overflow-hidden aspect-[3/2]">
                    {tour.image2 ? (
                      <DiagonalSplitImage
                        image1={tour.image}
                        image2={tour.image2}
                        alt={tour.title}
                        className="w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={14} className="text-primary" />
                      <span className="text-primary text-xs font-medium tracking-wider uppercase">{tour.month}</span>
                    </div>
                    <h2 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {tour.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {tour.description}
                    </p>
                    <span className="inline-block mt-4 text-primary text-sm font-medium tracking-wider uppercase group-hover:translate-x-1 transition-transform">
                      View Details →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO copy block */}
      <section className="py-16 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
            Guided Photography Tours Across Canada
          </h2>
          <div className="text-muted-foreground leading-relaxed space-y-4">
            <p>
              Whether you're searching for a <strong className="text-foreground font-medium">polar bear tour for photographers</strong> near
              Churchill, Manitoba, an <strong className="text-foreground font-medium">Algonquin wildlife photography tour</strong> to photograph
              moose and loons, or a dedicated <strong className="text-foreground font-medium">photo tour in Algonquin for moose</strong>, Silver
              Bear Photo Tours builds every expedition around small groups and serious photographers. Our{" "}
              <strong className="text-foreground font-medium">Churchill Manitoba photography tours</strong> are designed for ground-level access
              and intimate wildlife encounters that larger operators simply can't offer.
            </p>
            <p>
              Each tour page below includes detailed trip information — wildlife behaviour, best months to shoot, gear recommendations, pricing,
              and frequently asked questions — so you know exactly what to expect before you book.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tours;
