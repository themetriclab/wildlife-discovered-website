import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { tours } from "@/data/tours";
import DiagonalSplitImage from "@/components/DiagonalSplitImage";

const ToursSection = () => {
  return (
    <section id="tours" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-primary/60" />
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">Expeditions</span>
            <div className="h-px w-16 bg-primary/60" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Guided Photography Tours
          </h2>
        </div>

        {/* Intro copy — keyword-rich above-the-fold text helps SEO */}
        <p className="text-center text-muted-foreground max-w-3xl mx-auto -mt-8 mb-16 leading-relaxed">
          From ground-level <strong className="text-foreground font-medium">polar bear photography tours</strong> in Churchill, Manitoba to
          intimate <strong className="text-foreground font-medium">moose photography tours</strong> by boat in Algonquin Park, our small-group
          wildlife photography expeditions across Canada are designed for serious photographers who want authentic encounters in the wild.
        </p>

        {/* Featured expedition — Churchill polar bears */}
        {(() => {
          const featured = tours.find((t) => t.slug === "polar-bear-photography-tour");
          if (!featured) return null;
          return (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <Link
                to={`/tours/${featured.slug}`}
                className="group grid md:grid-cols-2 bg-card border border-primary/30 rounded-lg overflow-hidden hover:border-primary/70 transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-[3/2] md:aspect-auto md:min-h-[420px]">
                  <img
                    src={featured.image}
                    alt="Polar bear photographed at ground level in Churchill, Manitoba"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="text-primary text-xs font-medium tracking-[0.25em] uppercase mb-4">Featured Expedition</span>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    Churchill Polar Bear Photography Tours
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ground-level polar bear photography in Churchill, Manitoba — the polar bear capital of the world. Small groups of five,
                    a licensed Arctic guide, and the chance to photograph arctic fox, snowy owls and the northern lights.
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar size={14} className="text-primary" />
                    <span className="text-primary text-xs font-medium tracking-wider uppercase">{featured.month}</span>
                  </div>
                  <span className="text-primary text-sm font-medium tracking-wider uppercase group-hover:translate-x-1 transition-transform inline-block">
                    Explore the Churchill Tour →
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })()}

        {/* Tours grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {tours.filter((t) => !t.gallerySlug).map((tour, i) => (
            <motion.div
              key={tour.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                to={`/tours/${tour.slug}`}
                className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500"
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
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {tour.title}
                  </h3>
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
  );
};

export default ToursSection;
