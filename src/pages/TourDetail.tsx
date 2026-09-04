import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { icons, ArrowLeft, Calendar, MapPin, Clock, Users, Mountain, Camera, ChevronRight, DollarSign, Check, X, CreditCard, HelpCircle } from "lucide-react";
import type { TourItineraryDay } from "@/data/tours";
import { tours } from "@/data/tours";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import DiagonalSplitImage from "@/components/DiagonalSplitImage";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

import loonHighKey2 from "@/assets/loon/high-key-loon-2.png";
import loonMist from "@/assets/loon/loon-in-mist.jpg";
import loonChickGreen from "@/assets/loon/loon-chick-green.png";
import loonAurora2 from "@/assets/loon/loon-aurora-water-2.png";
import loonChickGreen2 from "@/assets/loon/loon-chick-green-2.png";

import algCalfCow from "@/assets/algonquin/calf-looking-at-cow.png";
import algCow from "@/assets/algonquin/cow.jpg";
import algEagle from "@/assets/algonquin/eagle-perched.png";
import algMerganser from "@/assets/algonquin/female-merganser-2.png";
import algBull from "@/assets/algonquin/fav-bull-shot.jpg";
import algLoon from "@/assets/algonquin/loon-in-aurora-water-3.png";
import algOtter from "@/assets/algonquin/river-otter-look-back.png";
import algDucks from "@/assets/algonquin/ring-neck-duck-pair.png";
import algWolf from "@/assets/algonquin/wolf-on-rock-2.png";
import algMoose from "@/assets/algonquin/moose-sipping.png";
import algBabyBeaver from "@/assets/algonquin/baby-beaver.png";

import pbFoxSunset from "@/assets/polar-bear/arctic-fox-sunset-2.jpg";
import pbHareSnow from "@/assets/polar-bear/arctic-hare-snow.jpg";
import pbHareCape from "@/assets/polar-bear/arctic-hare-cape.jpg";
import pbErmineWide from "@/assets/polar-bear/ermine-wide.jpg";
import pbErmine1 from "@/assets/polar-bear/ermine-1.jpg";
import pbMomCubStorm from "@/assets/polar-bear/mom-cub-snowstorm-2.jpg";
import pbMaleSunset from "@/assets/polar-bear/male-sunset.jpg";
import pbMotherCubSleep from "@/assets/polar-bear/mother-cub-sleeping-2.jpg";
import pbMotherCubs from "@/assets/polar-bear/mother-cubs.jpg";
import pbMotherCubsLight from "@/assets/polar-bear/mother-cubs-light-2.jpg";
import pbRedFoxSunset2 from "@/assets/polar-bear/red-fox-sunset-2.jpg";
import pbRedFox from "@/assets/polar-bear/red-fox.jpg";
import pbYoungBearRock from "@/assets/polar-bear/young-bear-rock-2.jpg";
import pbBearsFighting from "@/assets/polar-bear/bears-fighting.jpg";
import pbBearYellowGrass from "@/assets/polar-bear/bear-yellow-grass.jpg";
import pbBearFrostyGrass from "@/assets/polar-bear/bear-frosty-grass.jpg";
import pbPtarmigan from "@/assets/polar-bear/ptarmigan-close.jpg";

import wfBlueBird from "@/assets/waterfowl/blue-bird-perched-2.jpg";
import wfTern from "@/assets/waterfowl/common-tern.jpg";
import wfTernWater from "@/assets/waterfowl/common-tern-water.jpg";
import wfLongTail from "@/assets/waterfowl/long-tail-flight.jpg";
import wfSwanWarm from "@/assets/waterfowl/swan-warm-light.png";
import wfSwanSilhouette from "@/assets/waterfowl/swan-silhouette-2.jpg";
import wfSwanCygnets from "@/assets/waterfowl/swan-cygnets.jpg";
import wfSwanCalm from "@/assets/waterfowl/swan-calm-water.jpg";
import wfLowRider from "@/assets/waterfowl/low-rider-swan.jpg";
import wfBeaver from "@/assets/waterfowl/beaver.jpg";

const loonSliderImages = [loonChickGreen, loonHighKey2, loonAurora2, loonMist, loonChickGreen2];
const algonquinSliderImages = [algWolf, algLoon, algBabyBeaver, algCow, algMerganser, algMoose, algDucks, algEagle, algOtter, algBull, algCalfCow];
const polarBearSliderImages = [pbErmine1, pbBearYellowGrass, pbMotherCubs, pbFoxSunset, pbHareSnow, pbMaleSunset, pbPtarmigan, pbRedFox, pbMomCubStorm, pbYoungBearRock, pbMotherCubsLight, pbBearsFighting, pbHareCape, pbMotherCubSleep, pbErmineWide, pbBearFrostyGrass, pbRedFoxSunset2];
const waterfowlSliderImages = [wfLongTail, wfSwanWarm, wfBeaver, wfTern, wfSwanCalm, wfBlueBird, wfSwanCygnets, wfTernWater, wfLowRider, wfSwanSilhouette];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const PolarBearIcon = ({ size = 20, className }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M8 6c-1.5 0-2.5 1-2.5 2.5 0 .5.2 1 .5 1.3-1 .5-1.8 1.6-1.8 3 0 2.5 2 4.7 4.8 4.7h4c2.8 0 4.8-2.2 4.8-4.7 0-1.4-.8-2.5-1.8-3 .3-.3.5-.8.5-1.3C17 7 16 6 14.5 6c-.8 0-1.5.3-2 .8-.5-.5-1.2-.8-2-.8s-1.5.3-2 .8c-.5-.5-1.2-.8-2-.8z" />
    <circle cx="9.5" cy="9.5" r=".6" fill="currentColor" />
    <circle cx="14.5" cy="9.5" r=".6" fill="currentColor" />
    <ellipse cx="12" cy="12.5" rx="1.2" ry=".8" fill="currentColor" />
  </svg>
);

const IconByName = ({ name, className, size = 20 }: { name?: string; className?: string; size?: number }) => {
  if (!name) return null;
  if (name === "PolarBear") return <PolarBearIcon size={size} className={className} />;
  const Icon = (icons as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name];
  return Icon ? <Icon size={size} className={className} /> : null;
};

const factIcon = (label: string): string => {
  const lower = label.toLowerCase();
  if (lower.includes("scientific")) return "Dna";
  if (lower.includes("weight")) return "Scale";
  if (lower.includes("height") || lower.includes("standing")) return "Ruler";
  if (lower.includes("wingspan") || lower.includes("span")) return "Wind";
  if (lower.includes("speed") || lower.includes("flight")) return "Zap";
  if (lower.includes("dive") || lower.includes("swimming") || lower.includes("range")) return "Waves";
  if (lower.includes("lifespan")) return "Hourglass";
  if (lower.includes("diet")) return "Utensils";
  if (lower.includes("population")) return "Users";
  if (lower.includes("fur")) return "PolarBear";
  if (lower.includes("species") || lower.includes("diversity")) return "Bird";
  return "Info";
};


const CardDecoration = ({ icon }: { icon?: string }) => (
  <div className="absolute top-0 right-0 p-5 opacity-[0.04] pointer-events-none select-none overflow-hidden">
    {icon ? <IconByName name={icon} size={96} className="text-primary" /> : null}
  </div>
);



const TourDetail = () => {
  const { slug } = useParams();
  const tour = tours.find((t) => t.slug === slug);

  if (!tour) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">Tour Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const otherTours = tours.filter((t) => t.slug !== slug && !t.gallerySlug);

  const siteUrl = "https://silverbearphototours.com";
  const absoluteImage = tour.image.startsWith("http") ? tour.image : `${siteUrl}${tour.image}`;
  const seoTitle = tour.seoTitle ?? `${tour.title} | Silver Bear Photo Tours`;
  const seoDescription = tour.seoDescription ?? tour.description;
  const h1 = tour.h1 ?? tour.title;
  const gallerySlug = tour.gallerySlug ?? tour.slug;

  const touristAttractionLd = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: tour.title,
    description: seoDescription,
    image: absoluteImage,
    url: `${siteUrl}/tours/${tour.slug}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA",
      addressLocality: tour.location,
    },
    touristType: "Wildlife photography enthusiasts",
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Photography Tours", item: `${siteUrl}/tours` },
      { "@type": "ListItem", position: 3, name: tour.title, item: `${siteUrl}/tours/${tour.slug}` },
    ],
  };
  const faqLd = tour.faqs && tour.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: tour.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }
    : null;
  const jsonLd: Record<string, unknown>[] = [touristAttractionLd, breadcrumbLd];
  if (faqLd) jsonLd.push(faqLd);

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title={seoTitle}
        description={seoDescription}
        path={`/tours/${tour.slug}`}
        image={absoluteImage}
        type="product"
        jsonLd={jsonLd}
      />
      <Navbar />








      {/* Hero */}
      <section className="relative h-[75vh] md:h-[85vh] overflow-hidden">
        {tour.image2 ? (
          <DiagonalSplitImage image1={tour.image} image2={tour.image2} alt={tour.title} className="absolute inset-0 w-full h-full" />
        ) : (
          <img src={tour.image} alt={tour.title} className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="relative z-10 flex flex-col justify-end h-full max-w-7xl mx-auto px-6 pb-16">
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wider uppercase mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} /> Back to Tours
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground max-w-4xl text-shadow-hero"
          >
            {h1}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-foreground/80 font-light max-w-2xl"
          >
            {tour.subtitle}
          </motion.p>
          {(tour.slug === "loon-photography-tours" || tour.slug === "ontario-waterfowl-photography-tours") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm font-medium"
            >
              <X size={16} />
              Currently not offering
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { icon: Calendar, label: "When", value: tour.month },
            { icon: MapPin, label: "Where", value: tour.location },
            { icon: Clock, label: "Duration", value: tour.duration },
            { icon: Users, label: "Group Size", value: tour.groupSize },
            { icon: Mountain, label: "Difficulty", value: tour.difficulty },
            { icon: Camera, label: "Season", value: tour.season },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <item.icon size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {/* Highlights */}
        <motion.section {...fadeUp}>
          <SectionHeader label="Overview" title="Tour Highlights" />
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {tour.highlights.map((h, i) => (
              <SpotlightCard key={i} className="p-5 relative overflow-hidden">
                <div className="relative z-10 flex items-start gap-3">
                  <ChevronRight size={18} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground/90 text-sm leading-relaxed">{h}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </motion.section>


        {/* Tour Image Slider */}
        {gallerySlug === "loon-photography-tours" && (
          <section className="-mx-6 overflow-hidden">
            <ImageAutoSlider images={loonSliderImages} />
          </section>
        )}
        {gallerySlug === "algonquin-park-wildlife-photography-tour" && (
          <section className="-mx-6 overflow-hidden">
            <ImageAutoSlider images={algonquinSliderImages} />
          </section>
        )}
        {gallerySlug === "polar-bear-photography-tour" && (
          <section className="-mx-6 overflow-hidden">
            <ImageAutoSlider images={polarBearSliderImages} />
          </section>
        )}
        {gallerySlug === "ontario-waterfowl-photography-tours" && (
          <section className="-mx-6 overflow-hidden">
            <ImageAutoSlider images={waterfowlSliderImages} />
          </section>
        )}

        {/* Pricing & Dates */}
        {tour.pricing && tour.pricing.length > 0 && (
          <motion.section {...fadeUp}>
            <SectionHeader label="Pricing" title="Available Dates & Rates" />
            {(tour.slug === "loon-photography-tours" || tour.slug === "ontario-waterfowl-photography-tours") && (
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm font-medium">
                <X size={16} />
                Currently not offering
              </div>
            )}
            <div className="grid md:grid-cols-3 gap-4 mt-10">
              {tour.pricing.map((p, i) => (
              <SpotlightCard key={i} className="p-6 flex flex-col relative overflow-hidden">
                  <CardDecoration icon="Calendar" />
                  <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary">
                        <Calendar size={14} />
                      </div>
                    </div>
                    <p className="text-sm font-medium text-foreground mb-2">{p.label}</p>
                    <p className="text-2xl font-display font-bold text-primary mb-2">{p.price}</p>
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar size={14} className="text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">{p.dates}</p>
                    </div>
                    {p.note && (
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{p.note}</p>
                    )}
                  </div>
                  <span className={`mt-4 inline-block self-start text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full ${
                    p.availability.toLowerCase() === "full"
                      ? "bg-destructive/10 text-destructive"
                      : p.availability.toLowerCase().includes("1 spot")
                        ? "bg-destructive/20 text-destructive border border-destructive/30"
                        : "bg-primary/10 text-primary"
                  }`}>
                    {p.availability}
                  </span>
                </SpotlightCard>
              ))}
            </div>

          </motion.section>
        )}

        {/* Animal Facts */}
        <motion.section {...fadeUp}>
          <SectionHeader label="Wildlife" title="Animal Facts" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            {tour.animalFacts.map((fact, i) => (
              <SpotlightCard key={fact.label} className="p-5 relative overflow-hidden">
                <CardDecoration icon={factIcon(fact.label)} />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <IconByName name={factIcon(fact.label)} size={16} className="text-primary" />
                    <p className="text-xs text-primary uppercase tracking-wider font-medium">{fact.label}</p>
                  </div>
                  <p className="text-foreground text-sm font-medium">{fact.value}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </motion.section>


        {/* Migration Info */}
        <motion.section {...fadeUp} className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader label="Migration" title={tour.migrationInfo.title} />
            <p className="text-muted-foreground leading-relaxed mt-6">{tour.migrationInfo.content}</p>
          </div>
          <div>
            <SectionHeader label="Photography" title={tour.whyPhotograph.title} />
            <p className="text-muted-foreground leading-relaxed mt-6">{tour.whyPhotograph.content}</p>
          </div>
        </motion.section>

        {/* What to Expect */}
        <motion.section {...fadeUp}>
          <SectionHeader label="Experience" title={tour.whatToExpect.title} />
          {tour.whatToExpectItems && tour.whatToExpectItems.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {tour.whatToExpectItems.map((item, i) => (
                <SpotlightCard key={i} className="p-6 relative overflow-hidden">
                  <CardDecoration icon={item.icon} />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <IconByName name={item.icon} size={22} className="text-primary" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.content}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          ) : (
            <div className="bg-card border border-border rounded-xl p-8 md:p-12 mt-10">
              <p className="text-muted-foreground leading-relaxed max-w-3xl">{tour.whatToExpect.content}</p>
            </div>
          )}
        </motion.section>


        {/* Itinerary */}
        {tour.itinerary && tour.itinerary.length > 0 && (
          <motion.section {...fadeUp}>
            <SectionHeader label="Itinerary" title="A Typical Day on Tour" />
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              {tour.itinerary.map((day, i) => (
                <SpotlightCard key={i} className="p-6 relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-lg font-display font-semibold text-foreground mb-3">{day.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{day.content}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </motion.section>
        )}


        {/* Fitness & Safety */}
        {tour.fitnessSafety && (
          <motion.section {...fadeUp} className="bg-card border border-border rounded-xl p-8 md:p-12">
            <SectionHeader label="Safety" title={tour.fitnessSafety.title} />
            <p className="text-muted-foreground leading-relaxed mt-6 max-w-3xl">{tour.fitnessSafety.content}</p>
          </motion.section>
        )}

        {/* Gear Tips */}
        <motion.section {...fadeUp}>
          <SectionHeader label="Preparation" title="Recommended Gear" />
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {tour.gearTips.map((tip, i) => (
              <SpotlightCard key={i} className="p-5 relative overflow-hidden">
                <CardDecoration icon="Camera" />
                <div className="relative z-10 flex items-start gap-3">
                  <Camera size={16} className="text-primary mt-0.5 shrink-0" />
                  <p className="text-foreground/90 text-sm">{tip}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </motion.section>



        {/* Inclusions & Exclusions */}
        {(tour.priceIncludes || tour.priceExcludes) && (
          <motion.section {...fadeUp} className="grid md:grid-cols-2 gap-8">
            {tour.priceIncludes && (
              <div>
                <SectionHeader label="Included" title="What's Included" />
                <div className="mt-6 space-y-3">
                  {tour.priceIncludes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      <p className="text-foreground/90 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tour.priceExcludes && (
              <div>
                <SectionHeader label="Not Included" title="What's Not Included" />
                <div className="mt-6 space-y-3">
                  {tour.priceExcludes.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <X size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                      <p className="text-muted-foreground text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.section>
        )}

        {/* Payment Policy */}
        {tour.paymentPolicy && (
          <motion.section {...fadeUp} className="bg-card border border-border rounded-xl p-8 md:p-12">
            <SectionHeader label="Booking" title="Payment & Registration Policy" />
            <p className="text-muted-foreground leading-relaxed mt-6 max-w-3xl">{tour.paymentPolicy}</p>
          </motion.section>
        )}

        {/* CTA */}
        {tour.faqs && tour.faqs.length > 0 && (
          <motion.section {...fadeUp}>
            <SectionHeader label="FAQ" title="Frequently Asked Questions" />
            <div className="mt-10 space-y-4">
              {tour.faqs.map((f, i) => (
                <SpotlightCard key={i} className="p-6 relative overflow-hidden">
                  <CardDecoration icon="HelpCircle" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-3">
                      <HelpCircle size={18} className="text-primary mt-0.5 shrink-0" />
                      <h3 className="text-foreground font-medium">{f.question}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-7">{f.answer}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>

          </motion.section>
        )}
        <motion.section {...fadeUp} className="text-center py-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Ready to Capture the Wild?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Secure your spot on the {tour.title}. Limited to {tour.groupSize} per expedition.
          </p>
          <Link
            to={`/contact?tour=${tour.slug}`}
            className="inline-block px-10 py-4 bg-primary text-primary-foreground font-medium tracking-widest uppercase text-sm hover:bg-primary/90 transition-colors"
          >
            Book This Tour
          </Link>
        </motion.section>

        {/* Other Tours */}
        <motion.section {...fadeUp}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader label="Explore" title="Other Expeditions" />
            <Link to="/tours" className="text-sm text-primary hover:underline font-medium tracking-wider uppercase">
              View all photography tours
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {otherTours.map((t) => (
              <Link
                key={t.slug}
                to={`/tours/${t.slug}`}
                className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  {t.image2 ? (
                    <DiagonalSplitImage image1={t.image} image2={t.image2} alt={t.title} className="w-full h-full transition-transform duration-700 group-hover:scale-110" />
                  ) : (
                    <img
                      src={t.image}
                      alt={t.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="p-4">
                  <p className="text-xs text-primary font-medium tracking-wider uppercase mb-1">{t.month}</p>
                  <h3 className="text-sm font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {t.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

const SectionHeader = ({ label, title }: { label: string; title: string }) => (
  <div>
    <div className="flex items-center gap-3 mb-3">
      <div className="h-px w-10 bg-primary/60" />
      <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium">{label}</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{title}</h2>
  </div>
);

export default TourDetail;
