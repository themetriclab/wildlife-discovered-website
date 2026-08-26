import loonImg from "@/assets/loon-chick.jpg";
import mooseImg from "@/assets/moose.jpg";
import algonquinCoverAsset from "@/assets/algonquin-moose-cover-edited.webp";
import polarBearImg from "@/assets/polar-bear.jpg";
import waterfowlImg from "@/assets/waterfowl.jpg";
import swanImg from "@/assets/swan.jpg";

const monthOrder: Record<string, number> = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
};

const getMonthOrder = (month: string): number => {
  const firstMonth = month.split(/–|-/)[0].trim();
  return monthOrder[firstMonth] ?? 99;
};

export interface TourFact {
  label: string;
  value: string;
}

export interface TourSection {
  title: string;
  content: string;
}

export interface TourPricing {
  label: string;
  price: string;
  dates: string;
  availability: string;
}

export interface TourFaq {
  question: string;
  answer: string;
}

export interface Tour {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  image2?: string;
  month: string;
  season: string;
  location: string;
  duration: string;
  difficulty: string;
  groupSize: string;
  highlights: string[];
  animalFacts: TourFact[];
  migrationInfo: TourSection;
  whyPhotograph: TourSection;
  whatToExpect: TourSection;
  gearTips: string[];
  pricing?: TourPricing[];
  priceIncludes?: string[];
  priceExcludes?: string[];
  paymentPolicy?: string;
  /** Keyword-rich H1 override shown on the tour page. Falls back to `title`. */
  h1?: string;
  /** SEO <title> override. Falls back to `${title} | Silver Bear Photo Tours`. */
  seoTitle?: string;
  /** Meta description override. Falls back to `description`. */
  seoDescription?: string;
  /** Frequently asked questions, rendered on page + emitted as FAQPage JSON-LD. */
  faqs?: TourFaq[];
  /** Slug whose image gallery should be reused (for alias pages like moose → algonquin). */
  gallerySlug?: string;
}

const rawTours: Tour[] = [
  {
    slug: "loon-photography-tours",
    title: "Loon Photography Tours & Workshops",
    subtitle: "North America's leading loon photography experience — capture stunning images of common loons and their chicks on pristine Northern Ontario lakes",
    description:
      "Join Silver Bear Photo Tours on a guided loon photography tour in Northern Ontario. Photograph common loons and their chicks from a purpose-built boat on sparkling northern lakes, with expert instruction and a 90% chick success rate since 1997.",
    seoTitle: "Loon Photography Tours in Northern Ontario",
    seoDescription: "Guided loon photography tours in Northern Ontario. Photograph common loons and their chicks from a purpose-built boat — 90% chick success rate since 1997.",
    image: loonImg,
    month: "July",
    season: "Summer",
    location: "Northern Ontario, 2.5 Hours North of Toronto",
    duration: "2–6 Days",
    difficulty: "All Levels",
    groupSize: "Maximum 4 Photographers",
    highlights: [
      "Photograph loon parents carrying chicks on their backs — a fleeting behaviour lasting only weeks",
      "Watch and capture parents feeding their young fish and crayfish up close",
      "Shoot from just 16 inches above the water for dramatic eye-level perspectives",
      "Morning and evening sessions timed for the best golden-hour light",
      "90% loon chick success rate since 1997 across 11 monitored nesting pairs on 9 lakes",
    ],
    animalFacts: [
      { label: "Scientific Name", value: "Gavia immer (Common Loon)" },
      { label: "Wingspan", value: "Up to 136 cm (54 inches)" },
      { label: "Dive Depth", value: "Can dive over 60 metres (200 ft)" },
      { label: "Speed", value: "Over 120 km/h in flight" },
      { label: "Lifespan", value: "Up to 30 years in the wild" },
      { label: "Diet", value: "Primarily fish, also crayfish and aquatic insects" },
    ],
    migrationInfo: {
      title: "Loon Nesting Season & Behaviour",
      content:
        "Common loons breed on freshwater lakes across Canada from May through August, fiercely defending their nesting territories. By late September they migrate south to coastal waters along the Atlantic, Pacific, and Gulf coasts. July is the ideal month because chicks have recently hatched and still ride on their parents' backs — a tender behaviour that lasts only a few weeks. You'll also witness parents feeding their young, creating some of the most iconic and emotionally powerful wildlife images possible. Silver Bear Photo Tours monitors 11 nesting pairs across 9 different lakes, offering photographers a remarkable 90% chick success rate since 1997.",
    },
    whyPhotograph: {
      title: "Why July Is the Best Time for Loon Photography",
      content:
        "July offers calm lake conditions with stunning morning mist, creating ethereal backdrops for loon photography. The chicks are small enough to ride on their parents' backs — a fleeting behaviour that typically lasts only 2–3 weeks. The long daylight hours of the Canadian summer provide extended golden-hour windows at both dawn and dusk, perfect for low-light photography. Loons are also most vocal during breeding season, giving you the chance to capture dramatic yodelling and wailing postures. Different lakes offer varied water colours and reflections, ensuring each session produces unique compositions.",
    },
    whatToExpect: {
      title: "What to Expect on This Loon Photography Tour",
      content:
        "Each day begins with an early morning session on the water, timed for the best light. You'll photograph from a purpose-built boat with a flat floor, low sides, and comfortable swivel seats that drop down to position your lens just 16 inches from the water surface — perfect for dramatic eye-level loon portraits. A quiet electric trolling motor gets you in close without disturbing the birds, while an outboard gets you to each lake quickly. Your certified captain, guide, and instructor is with you at all times, offering personalized tips and calling out approaching wildlife. Midday is free to download images, explore Algonquin's trails for moose and boreal birds like grey jays and spruce grouse, or simply relax. Then it's back on the water for an evening session to capture loons in warm golden light.",
    },
    gearTips: [
      "300–600mm telephoto lens (500mm recommended for frame-filling loon portraits)",
      "Fast lens (f/4 or wider) for dawn and dusk low-light conditions",
      "Waterproof camera bag or dry bag for boat photography",
      "Polarizing filter for cutting water reflections and boosting colour",
      "Beanbag or gimbal head for stable shooting from the boat",
    ],
    pricing: [
      { label: "3-Day Loons & Chicks Workshop", price: "$1,470.00", dates: "July 2026", availability: "Full" },
      { label: "2-Day Loons & Chicks Workshop", price: "$980.00", dates: "July 2026", availability: "Full" },
    ],
    priceIncludes: [
      "Pick up and drop off at the hotel",
      "Light breakfast — yogurt, fruit juice, water, and granola bars",
      "Personalized photography instruction at all times",
      "Chilled bottled water on the boat",
    ],
    priceExcludes: [
      "Flights and transportation to the hotel",
      "Accommodation (recommendations gladly provided)",
      "All meals except breakfast",
      "13% HST Ontario taxes",
    ],
    paymentPolicy:
      "A non-refundable 50% deposit plus 13% Ontario sales tax is required to reserve your spot. Balance in full is due 2 months prior to the workshop start date. We accept PayPal or E-transfers. Travel insurance and health insurance are highly recommended.",
    faqs: [
      { question: "When is the best time for loon photography in Ontario?", answer: "July is the peak month for loon photography tours in Northern Ontario. Loon chicks have recently hatched and still ride on their parents' backs — a fleeting behaviour that lasts only 2–3 weeks." },
      { question: "How many photographers are on each loon photography tour?", answer: "A maximum of 4 photographers per boat, ensuring everyone gets a prime shooting position 16 inches above the water." },
      { question: "What lens is best for photographing loons?", answer: "A 300–600mm telephoto lens is ideal, with 500mm being our most recommended focal length for frame-filling loon and chick portraits." },
      { question: "Do I need photography experience to join?", answer: "No. Our loon photography workshops welcome all skill levels, from beginners to advanced photographers, with personalised instruction throughout." },
      { question: "Where do the loon photography tours take place?", answer: "On pristine lakes in Northern Ontario, roughly 2.5 hours north of Toronto, with access to 9 different lakes and 11 monitored nesting pairs." },
    ],
  },
  {
    slug: "algonquin-park-wildlife-photography-tour",
    title: "Algonquin Park Wildlife Photography Tour by Boat",
    subtitle: "Photograph moose, bald eagles, loons, and boreal wildlife by boat in the heart of Algonquin Park",
    description:
      "Join Silver Bear Photo Tours on a guided wildlife photography tour by boat in Ontario's world-renowned Algonquin Park. Capture moose feeding on lily pads, bald eagles in flight, territorial loon displays, and more from a stable, purpose-built photography boat.",
    h1: "Algonquin Park Wildlife Photography Tour by Boat",
    seoTitle: "Algonquin Park Wildlife Photography Tour by Boat",
    seoDescription: "Guided wildlife photography tours by boat in Algonquin Park, Ontario. Photograph moose, bald eagles, loons and boreal wildlife from a stable photo boat.",
    image: algonquinCoverAsset.url,
    month: "June",
    season: "Early Summer",
    location: "Algonquin Provincial Park, Ontario",
    duration: "3–6 Days",
    difficulty: "All Levels",
    groupSize: "Maximum 4 Photographers",
    highlights: [
      "Photograph moose feeding on lily pads from water level aboard a stable flat-bottom boat",
      "Capture bald eagles in flight and perching along Algonquin's waterways",
      "Witness spectacular territorial displays by common loons, including nest building",
      "Comfortable swivel seats mounted on the centreline for sharp, shake-free images",
      "Use monopod or tripod on the flat boat floor for razor-sharp results",
      "Silent approach with oars, push pole, or electric motor to get close without disturbing wildlife",
      "Full-day, seven-hour excursion with a light breakfast served on board",
    ],
    animalFacts: [
      { label: "Scientific Name", value: "Alces alces (Moose)" },
      { label: "Height", value: "Up to 2.1 m (6.9 ft) at the shoulder" },
      { label: "Weight", value: "Males up to 700 kg (1,500 lbs)" },
      { label: "Antler Span", value: "Up to 1.8 m (6 ft) across" },
      { label: "Population in Algonquin", value: "Approximately 2,500+ moose" },
      { label: "Diet", value: "Aquatic vegetation, lily pads, willow, birch, and aspen" },
    ],
    migrationInfo: {
      title: "Moose Behaviour in Algonquin Park",
      content:
        "Moose in Algonquin Park don't migrate long distances but shift between seasonal habitats. In early summer they frequent lakes and wetlands to feed on aquatic plants like lily pads, spending long stretches submerging their heads in the shallows — creating incredible photographic opportunities with the beautiful shoreline and boreal forest as backdrop. The boat-based approach provides a unique perspective that's impossible from land, with moose often feeding undisturbed just metres away.",
    },
    whyPhotograph: {
      title: "Why June Is the Best Time for Algonquin Wildlife",
      content:
        "June places you in Algonquin Park when moose are most active in the waterways, feeding extensively on aquatic vegetation. Bald eagles are nesting and hunting along the lakes, while common loons are in full territorial mode with dramatic displays and nest building. The long daylight hours and soft morning light create ideal conditions. The combination of moose, eagles, loons, and pristine boreal scenery makes this one of the finest wildlife photography experiences in North America.",
    },
    whatToExpect: {
      title: "What to Expect on This Algonquin Photography Tour",
      content:
        "You'll meet your certified captain and guide at a location in Algonquin Park and head out on the water for early morning light. The wide-bottomed boat with a flat floor and comfortable swivel seats mounted on the centreline keeps everything stable and shake-free — perfect for sharp images with your monopod or tripod. Your guide uses oars, a push pole, or a silent electric motor to slip in close to wildlife without disturbance. A light breakfast is served aboard around 8 am. Photography tips and camera settings are shared throughout whenever the moment allows. Note: biting insects (mosquitoes, black flies, deer flies) can be intense in June — come prepared with bug spray, a head net, and light long-sleeved clothing.",
    },
    gearTips: [
      "70–200mm and 100–400mm zoom lenses for versatility with moose and eagles",
      "Wide-angle lens for landscape-wildlife combinations on the water",
      "Monopod or tripod for sharp images from the stable boat platform",
      "Rain coat and pants — weather can change quickly in Algonquin",
      "Rubber boots for stepping in and out of the boat in shallow water",
      "Layered clothing — temperatures range from 20°C to as low as -3°C",
    ],
    pricing: [
      { label: "3-Day Algonquin Wildlife by Boat", price: "$1,500.00", dates: "June 4–6, 2027", availability: "Full" },
      { label: "3-Day Algonquin Wildlife by Boat", price: "$1,500.00", dates: "June 7–9, 2027", availability: "1 Spot Available" },
      { label: "3-Day Algonquin Wildlife by Boat", price: "$1,500.00", dates: "June 10–12, 2027", availability: "Full" },
      { label: "3-Day Algonquin Wildlife by Boat", price: "$1,500.00", dates: "June 13–15, 2027", availability: "2 Spots Available" },
      { label: "3-Day Algonquin Wildlife by Boat", price: "$1,500.00", dates: "June 16–18, 2027", availability: "1 Spot Available" },
    ],
    priceIncludes: [
      "Light breakfast — yogurt, fruit juice, fruit cup, chilled water, and granola bar",
      "Photography tips and camera settings guidance throughout the day",
    ],
    priceExcludes: [
      "Accommodation (recommendations provided upon booking)",
      "Transportation to and from the meeting location",
      "Algonquin Park vehicle permit (2-day permit required)",
      "13% HST Ontario taxes",
    ],
    paymentPolicy:
      "A non-refundable 50% deposit plus 13% Ontario tax is required to reserve your spot. Balance in full is due 2 months before the tour start date. We accept PayPal or E-transfers. Travel insurance and health insurance are highly recommended.",
    faqs: [
      { question: "When is the best time for moose photography in Algonquin Park?", answer: "June is the prime month. Moose feed extensively on aquatic vegetation in Algonquin's lakes and wetlands, often submerging their heads in the shallows just metres from the boat." },
      { question: "How close do you get to the moose?", answer: "Often within 20–30 metres. A silent electric motor and push pole allow our purpose-built boat to approach feeding moose without disturbing them." },
      { question: "Besides moose, what other wildlife can I photograph?", answer: "Bald eagles, common loons in territorial display, otters, beavers, mergansers, and a variety of boreal birds and waterfowl." },
      { question: "What lenses do I need for Algonquin wildlife photography?", answer: "A 70–200mm and a 100–400mm cover most situations. A wide-angle is useful for landscape-wildlife combinations on the water." },
      { question: "Are biting insects a problem in June?", answer: "Yes. Mosquitoes, black flies, and deer flies can be intense — bring bug spray, a head net, and light long-sleeved clothing." },
    ],
  },
  {
    slug: "polar-bear-photography-tour",
    title: "Polar Bear Photography Tours in Churchill, Manitoba",
    subtitle: "Photograph polar bears and Arctic wildlife at ground level in the polar bear capital of the world",
    description:
      "Join Silver Bear Photo Tours on an exclusive ground-level polar bear photography tour in Churchill, Manitoba. Capture stunning images of polar bears, arctic fox, snowy owls, ptarmigan, and the northern lights with a licensed guide and small group of just 5 photographers.",
    image: polarBearImg,
    h1: "Polar Bear Photography Tours in Churchill, Manitoba",
    seoTitle: "Churchill Polar Bear Photography Tours | Silver Bear Photo Tours",
    seoDescription: "Ground-level polar bear photography tours in Churchill, Manitoba. Small groups of 5 with a licensed Arctic guide — polar bears, arctic fox, snowy owls and northern lights in October and November.",
    month: "October – November",
    season: "Late Autumn",
    location: "Churchill, Manitoba — Polar Bear Capital of the World",
    duration: "6–8 Days",
    difficulty: "Intermediate–Advanced",
    groupSize: "5 Photographers",
    highlights: [
      "Photograph polar bears at ground level — eye to eye with the Arctic's apex predator",
      "Small group of only 5 photographers for an intimate, high-quality experience",
      "Arctic fox, cross fox, silver fox, red fox, arctic hare, willow and rock ptarmigan photography",
      "Possible sightings of snowy owls, gyrfalcons, wolves, and wolverine",
      "Northern lights photography when skies are clear",
      "Licensed Manitoba guide with 15 years of polar bear experience and WMA permits",
    ],
    animalFacts: [
      { label: "Scientific Name", value: "Ursus maritimus" },
      { label: "Weight", value: "Males up to 800 kg (1,760 lbs)" },
      { label: "Standing Height", value: "Up to 3 m (10 ft)" },
      { label: "Swimming Range", value: "Can swim over 100 km without rest" },
      { label: "Population", value: "Approx. 26,000 worldwide" },
      { label: "Fur", value: "Transparent hollow hairs over black skin" },
    ],
    migrationInfo: {
      title: "The Great Polar Bear Gathering at Hudson Bay",
      content:
        "Every autumn, roughly 1,000 polar bears congregate along the western coast of Hudson Bay near Churchill, Manitoba, waiting for the sea ice to form. Churchill is the world's premiere location to experience migrating polar bears. The bears have spent the summer fasting on land and are eager to return to the ice to hunt ring and bearded seals. October and November mark the peak of this congregation, with bears sparring, socializing, and resting on the tundra. Once the bay freezes — usually by mid to late November — the bears disperse onto the ice and become nearly impossible to photograph.",
    },
    whyPhotograph: {
      title: "Why Ground-Level Photography Changes Everything",
      content:
        "Unlike tundra buggy tours, Silver Bear Photo Tours puts you on the ground at eye level with polar bears — producing dramatically more powerful and intimate images. With only 5 photographers, everyone has access to a door in the 4×4 van for quick exits to photograph fast-moving foxes or bears, and for rapid re-entry if a bear approaches. The small group allows you to move freely, choose better backgrounds and angles, and feel truly immersed in the Arctic environment. The low golden Arctic light during October and November creates dramatic side-lighting and long shadows all day long.",
    },
    whatToExpect: {
      title: "What to Expect on This Polar Bear Photography Tour",
      content:
        "Fly from Winnipeg to Churchill where your guide will pick you up at the airport and take you to a private lodge with private bathrooms, comfortable beds, and a communal kitchen for gathering and reviewing images. After a safety orientation and winter photography tips, you head out in search of polar bears. Days are spent photographing polar bears, fox, ptarmigan, and more — with a short lunch break in the field. Your guide uses 15 years of experience reading bear patterns and behaviour to position you safely for the best shots. Evenings include dinner at Churchill's finest restaurants and possible northern lights photography when skies are clear. Polar bears are a protected species and Churchill is their home — every expedition follows strict Manitoba WMA protocols for ethical, undisturbed viewing. We never bait, call in, or pressure animals for a photo; ethical viewing produces stronger images and a healthier population for future photographers to enjoy.",
    },
    gearTips: [
      "300–600mm telephoto lens — your most-used focal range for Arctic wildlife",
      "Wide-angle lens for landscapes and northern lights photography",
      "Two camera bodies recommended for quick lens changes in the field",
      "Sturdy tripod for stability in wind and low-light conditions",
      "Extra batteries — cold temperatures drain them rapidly",
      "Insulated boots, warm winter coat, insulated over-pants, large warm mitts, thin gloves for camera buttons, warm hat, and wool socks (temps range from +2°C to -20°C)",
    ],
    pricing: [
      { label: "6-Day Polar Bear Tour", price: "$6,000 CAD", dates: "Oct 07–12, 2026", availability: "Available" },
      { label: "6-Day Polar Bear Tour", price: "$6,000 CAD", dates: "Oct 12–17, 2026", availability: "Available" },
      { label: "7-Day Polar Bear Tour", price: "$7,000 CAD", dates: "Oct 17–23, 2026", availability: "Available" },
      { label: "8-Day Polar Bear Tour", price: "$8,000 CAD", dates: "Oct 23–30, 2026", availability: "Available" },
      { label: "8-Day Polar Bear Tour", price: "$8,000 CAD", dates: "Oct 30–Nov 06, 2026", availability: "Available" },
      { label: "7-Day Polar Bear Tour", price: "$7,000 CAD", dates: "Nov 06–12, 2026", availability: "Available" },
      { label: "8-Day Polar Bear Tour", price: "$8,000 CAD", dates: "Nov 12–19, 2026", availability: "Available" },
    ],
    priceIncludes: [
      "Private lodge room with 3-piece bath, refrigerator, and individual thermostat",
      "All WMA permits and licenses",
      "Continental breakfasts daily",
      "Personalized photography instruction at all times",
      "Use of communal kitchen and common room",
      "Airport pickup and drop-off in Churchill",
    ],
    priceExcludes: [
      "Round-trip flights from Winnipeg to Churchill (booking assistance available)",
      "Hotel rooms in Winnipeg",
      "Lunches — purchased at the local grocery store and eaten in the field",
      "Dinners — join the group at Churchill's restaurants (no meal plan, choose anything on the menu)",
      "Alcoholic drinks and snacks",
      "5% Manitoba tax",
      "Single occupancy supplement ($950–$1,400 depending on trip length)",
    ],
    paymentPolicy:
      "A non-refundable $2,000 CAD deposit is required at time of booking. Balance in full is due 90 days prior to departure. Fees are based on double occupancy — single rooms available for an additional supplement. We accept e-transfer, PayPal (add 3.7%), or bank wire (add $17.50). Travel and health insurance are highly recommended.",
    faqs: [
      { question: "When is the best time for polar bear photography in Churchill?", answer: "October and November are the peak months. Roughly 1,000 polar bears congregate along the western coast of Hudson Bay near Churchill, Manitoba, waiting for the sea ice to form." },
      { question: "How is this different from a tundra buggy tour?", answer: "Our polar bear photography tours put you on the ground at eye level with the bears — producing dramatically more powerful and intimate images than elevated buggy platforms." },
      { question: "How many photographers are in the group?", answer: "Just 5 photographers, ensuring every guest has door access in our 4×4 van for quick exits and re-entry, plus freedom to choose the best angles." },
      { question: "Is it safe to photograph polar bears at ground level?", answer: "Yes, with a licensed Manitoba guide carrying full WMA permits and 15 years of polar bear field experience reading bear patterns and behaviour." },
      { question: "What other Arctic wildlife will I photograph?", answer: "Arctic fox, red fox, cross fox, silver fox, arctic hare, ptarmigan, snowy owls, gyrfalcons, and the northern lights when skies are clear." },
      { question: "What gear do I need for Churchill polar bear photography?", answer: "A 300–600mm telephoto, a wide-angle for landscapes and northern lights, two camera bodies, a sturdy tripod, extra batteries, and serious cold-weather clothing for temperatures down to -20°C." },
      { question: "Is this a polar bear photography workshop or a sightseeing tour?", answer: "This is a true photography workshop, not a sightseeing trip. Your licensed guide gives in-field instruction on camera settings, composition, exposure for snow and Arctic light, telephoto technique, and ethical wildlife viewing throughout each session." },
      { question: "How do I book this Churchill polar bear photography tour?", answer: "Reach out through our contact page to check current availability for October and November departures. A non-refundable $2,000 CAD deposit secures your spot, with the balance due 90 days before departure." },
    ],
  },
  {
    slug: "ontario-waterfowl-photography-tours",
    title: "Waterfowl & Swan Photography Workshops",
    subtitle: "Photograph diving ducks, fighting swans, osprey, terns, and tender swan families from a custom-built low-angle photography boat",
    description:
      "Join Silver Bear Photo Tours for an intimate waterfowl and swan photography workshop aboard a custom-built boat on southern Ontario's waters. Two seasonal options: late April for dramatic swan fights, diving ducks, and osprey — or late May for swan cygnets, terns in flight, and fine-art family portraits.",
    seoTitle: "Waterfowl & Swan Photography Workshops, Ontario",
    seoDescription: "Low-angle waterfowl and swan photography workshops in southern Ontario. Diving ducks, fighting swans, osprey, terns and cygnets from a custom photo boat.",
    image: waterfowlImg,
    month: "April – May",
    season: "Spring",
    location: "Southern Ontario, Lake Ontario",
    duration: "2–4 Days",
    difficulty: "All Levels",
    groupSize: "Maximum 4 Photographers",
    highlights: [
      "Photograph from a custom-built boat designed specifically for low-angle waterfowl and swan photography",
      "Late April: Capture fighting swans, mating displays, diving ducks, and osprey building nests",
      "Late May: Photograph swan cygnets riding on parents' backs and terns dragging bills through water",
      "Osprey photography in flight — hunting, carrying fish, and delivering to nests",
      "Gorgeous long-tailed ducks, coots, red-winged blackbirds, and more in breeding plumage",
      "Flight photography skills and camera setup covered during the workshop",
    ],
    animalFacts: [
      { label: "Species Diversity", value: "Over 30 waterfowl species in Ontario" },
      { label: "Trumpeter Swan", value: "North America's heaviest native flying bird — mates for life" },
      { label: "Mute Swan", value: "Introduced from Europe, known for dramatic fights and displays" },
      { label: "Long-tailed Duck", value: "Can dive over 60 m deep — one of the deepest diving ducks" },
      { label: "Osprey", value: "Dives feet-first to catch fish from up to 40 m above water" },
      { label: "Cygnet Window", value: "Cygnets ride on parents' backs for only 2–3 weeks" },
    ],
    migrationInfo: {
      title: "Spring Migration & Seasonal Waterfowl Behaviour",
      content:
        "Ontario sits along the Atlantic and Mississippi flyways, two of the four major migratory bird routes in North America. Each spring, large congregations of ducks, swans, and terns move into southern Ontario's waters. The late April workshop offers the peak of diving ducks, fighting swans in full territorial display, early terns, and osprey building nests. By late May, swan cygnets have hatched and are small enough to ride on their parents' backs — a tender behaviour lasting only 2–3 weeks. Ontario hosts both resident mute swans and native trumpeter swans, which were nearly extinct by the 1900s but have been successfully reintroduced.",
    },
    whyPhotograph: {
      title: "Two Seasons, Two Experiences — Both Extraordinary",
      content:
        "Late April brings waterfowl in their most stunning breeding plumage. Mute swans engage in spectacular fights and mating displays, while trumpeter swans protect their mates with dramatic posturing. Osprey are actively hunting and carrying fish and nesting materials. By late May, the mood shifts to tenderness — newborn cygnets ride on their parents' backs, pure white adult plumage glows against green spring vegetation, and calm morning waters produce perfect reflections. The custom boat offers perfect sun angles and pleasant backgrounds at all times — far superior to shooting from shore.",
    },
    whatToExpect: {
      title: "What to Expect on This Workshop",
      content:
        "Meet at the hotel just before sunrise and head to the dock. You'll photograph from a custom-built boat specifically designed for low-angle waterfowl and swan photography in absolute comfort, with perfect sun angles and clean backgrounds. Morning sessions run until the light becomes too harsh, then midday is yours — download images or explore the beaches of Lake Ontario. Afternoons and evenings bring a second session in warm golden light. Your guide provides personalized instruction on flight photography, fine-art techniques, and camera setup throughout.",
    },
    gearTips: [
      "100–400mm or 200–600mm zoom lens for flight photography versatility",
      "70–200mm f/2.8 for intimate swan and cygnet portraits with shallow depth of field",
      "Fast lens (f/4 or wider) for freezing wing motion in early light",
      "Fast memory cards for continuous burst shooting during flight sequences",
      "Polarizing filter for cutting glare on the water surface",
      "Warm layered clothing — spring mornings on the water can be cold",
    ],
    pricing: [
      { label: "2-Day Late April — Ducks, Fighting Swans & Osprey", price: "$985.00", dates: "April 2026", availability: "Full" },
      { label: "2-Day Late May — Cygnets, Terns & Osprey", price: "$985.00", dates: "May 2026", availability: "Full" },
    ],
    priceIncludes: [
      "Personalized instruction and camera setup for flight and low-level photography",
    ],
    priceExcludes: [
      "Transportation including flights to and from the hotel and dock",
      "Accommodation (recommendations gladly provided)",
      "All meals",
      "13% HST Ontario taxes",
    ],
    paymentPolicy:
      "A non-refundable 50% deposit plus 13% Ontario sales tax is required to reserve your spot. Balance in full is due 2 months prior to the workshop start date. We accept PayPal or E-transfers. Travel insurance and health insurance are highly recommended.",
    faqs: [
      { question: "When is the best time for swan photography in Ontario?", answer: "Late April for dramatic swan fights, mating displays, diving ducks, and osprey nest building. Late May for swan cygnets riding on parents' backs and terns in flight." },
      { question: "What's the difference between the two workshop dates?", answer: "Late April is action-driven — fighting swans, diving ducks, osprey. Late May is tender and intimate — cygnets, fine-art family portraits, terns dragging bills through water." },
      { question: "Can I photograph both swans and osprey on the same workshop?", answer: "Yes. Both workshop dates regularly include osprey hunting, carrying fish, and building or attending nests, alongside the swan and waterfowl photography." },
      { question: "What lens is best for waterfowl photography?", answer: "A 100–400mm or 200–600mm zoom for flight and wider scenes, plus a 70–200mm f/2.8 for intimate cygnet portraits with shallow depth of field." },
    ],
  },
  {
    slug: "moose-photography-tours",
    title: "Moose Photography Tours in Algonquin Park, Ontario",
    subtitle: "Photograph moose feeding on lily pads from a stable, low-angle photography boat in the heart of Algonquin Provincial Park",
    description:
      "Join Silver Bear Photo Tours on a guided moose photography tour by boat in Ontario's Algonquin Provincial Park. Capture bull moose, cows, and calves feeding on aquatic vegetation at water level — the most intimate moose photography experience in Canada, with a maximum of 4 photographers per boat.",
    image: mooseImg,
    h1: "Moose Photography Tours in Algonquin Park, Ontario",
    seoTitle: "Moose Photography Tours in Algonquin Park, Ontario",
    seoDescription: "Small-group moose photography tours by boat in Algonquin Park. Photograph moose feeding on lily pads at water level in June — max 4 photographers.",
    gallerySlug: "algonquin-park-wildlife-photography-tour",
    month: "June",
    season: "Early Summer",
    location: "Algonquin Provincial Park, Ontario",
    duration: "7 Hours",
    difficulty: "All Levels",
    groupSize: "Maximum 4 Photographers",
    highlights: [
      "Photograph moose feeding on lily pads from water level aboard a stable flat-bottom boat",
      "Approach bull moose, cows, and calves silently with electric motor, oars, or push pole",
      "Capture moose with Algonquin's boreal forest and shoreline as a natural backdrop",
      "Comfortable swivel seats mounted on the centreline for sharp, shake-free moose portraits",
      "Use monopod or tripod on the flat boat floor for razor-sharp wildlife images",
      "Bald eagles, loons, beavers, otters, and boreal birds frequently photographed on the same trip",
    ],
    animalFacts: [
      { label: "Scientific Name", value: "Alces alces (Moose)" },
      { label: "Height", value: "Up to 2.1 m (6.9 ft) at the shoulder" },
      { label: "Weight", value: "Males up to 700 kg (1,500 lbs)" },
      { label: "Antler Span", value: "Up to 1.8 m (6 ft) across" },
      { label: "Population in Algonquin", value: "Approximately 3,000 moose" },
      { label: "Diet", value: "Aquatic vegetation, lily pads, willow, birch, and aspen" },
    ],
    migrationInfo: {
      title: "Moose Behaviour in Algonquin Park",
      content:
        "Moose in Algonquin Park don't migrate long distances but shift between seasonal habitats. In early summer they frequent lakes and wetlands to feed on aquatic plants like lily pads, spending long stretches submerging their heads in the shallows — creating incredible photographic opportunities with the beautiful shoreline and boreal forest as backdrop. Boat-based moose photography provides a unique water-level perspective that's impossible from land, with moose often feeding undisturbed just metres away.",
    },
    whyPhotograph: {
      title: "Why June Is the Best Month for Moose Photography",
      content:
        "June places you in Algonquin Park when moose are most active in the waterways. They feed extensively on aquatic vegetation throughout the day, antlers in velvet, often with calves nearby. The long daylight hours and soft morning light create ideal conditions, and the calm lake surfaces produce mirror-like reflections of feeding bulls. Combined with bald eagles and loons in the same waterways, June is the single best window of the year for a boat-based moose photography tour in Ontario.",
    },
    whatToExpect: {
      title: "What to Expect on This Moose Photography Tour",
      content:
        "You'll meet your certified captain and guide at a location in Algonquin Park and head out on the water for early morning light. The wide-bottomed boat with a flat floor and comfortable swivel seats mounted on the centreline keeps everything stable and shake-free — perfect for sharp moose images with your monopod or tripod. Your guide uses oars, a push pole, or a silent electric motor to slip in close to feeding moose without disturbance. A light breakfast is served aboard around 8 am. Photography tips and camera settings are shared throughout. This is a seven-hour tour. Lunch is not included. Note: biting insects (mosquitoes, black flies, deer flies) can be intense in June — come prepared with bug spray, a head net, and light long-sleeved clothing.",
    },
    gearTips: [
      "100–400mm and 70–200mm zoom lenses for versatile moose framing on the water",
      "Wide-angle lens for moose-in-landscape compositions with Algonquin's boreal backdrop",
      "Monopod or tripod for sharp images from the stable boat platform",
      "Rain coat and pants — weather can change quickly in Algonquin",
      "Rubber boots for stepping in and out of the boat in shallow water",
      "Layered clothing — June temperatures range from 20°C to as low as -3°C",
    ],
    pricing: [
      { label: "3-Day Moose Photography by Boat", price: "$1,500.00", dates: "June 2027", availability: "Full" },
      { label: "3-Day Moose Photography by Boat", price: "$1,500.00", dates: "June 16–18, 2027", availability: "Spots Available" },
    ],
    priceIncludes: [
      "Light breakfast — yogurt, fruit juice, chilled water, and granola bar",
      "Photography tips and camera settings guidance throughout the day",
    ],
    priceExcludes: [
      "Accommodation (recommendations provided upon booking)",
      "Transportation to and from the meeting location",
      "lunch",
      "Algonquin Park vehicle permit (2-day permit required)",
      "13% HST Ontario taxes",
    ],
    paymentPolicy:
      "A non-refundable 50% deposit plus 13% Ontario tax is required to reserve your spot. Balance in full is due 2 months before the tour start date. We accept PayPal or E-transfers. Travel insurance and health insurance are highly recommended.",
    faqs: [
      { question: "When is the best time for moose photography in Algonquin Park?", answer: "June is the prime month for moose photography tours in Algonquin. Moose feed extensively on aquatic vegetation in the park's lakes and wetlands, often submerging their heads in the shallows just metres from the boat." },
      { question: "How close do you get to the moose?", answer: "Often within 20–30 metres. A silent electric motor, oars, and push pole let our purpose-built boat approach feeding moose at water level without disturbing them." },
      { question: "How many photographers are on each moose tour?", answer: "A maximum of 4 photographers per boat, with comfortable swivel seats on the centreline for shake-free shooting." },
      { question: "What lens is best for photographing moose?", answer: "A 100–400mm zoom covers most situations. A 70–200mm is great for moose with their boreal-forest surroundings, and a wide-angle works for landscape-wildlife compositions." },
      { question: "Where in Canada can I photograph moose?", answer: "Algonquin Provincial Park in Ontario hosts roughly 3,000 moose and is one of the most reliable and accessible places in Canada to photograph them — especially from a boat in June." },
      { question: "Is this a true moose photography workshop or a moose-watching tour?", answer: "It's a wildlife photography workshop first. The boat, group size, schedule, and instruction are all built around photographers, with in-field guidance on camera settings, telephoto technique, and composition for moose in marsh and wetland scenes." },
      { question: "Why photograph moose from a boat instead of from shore?", answer: "Boat-based moose photography puts the camera at water level, where feeding moose are most engaged with their surroundings — letting you capture moose reflections, moose in lily pads, and misty-lake compositions that are essentially impossible from shore." },
      { question: "How do I book a moose photography tour in Algonquin Park?", answer: "Contact us through the contact page to check availability for June departures. A non-refundable 50% deposit plus 13% Ontario tax holds your spot, with the balance due 2 months before the tour start date." },
    ],
  },
];

export const tours: Tour[] = rawTours.sort((a, b) => {
  const orderA = getMonthOrder(a.month);
  const orderB = getMonthOrder(b.month);
  return orderA !== orderB ? orderA - orderB : a.title.localeCompare(b.title);
});
