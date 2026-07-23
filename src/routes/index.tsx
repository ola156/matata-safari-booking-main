import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Menu,
  X,
  MapPin,
  Users,
  Calendar,
  Phone,
  Mail,
  Star,
  Shield,
  Clock,
  Compass,
  Car,
  Utensils,
  Home as HomeIcon,
  Camera,
  ChevronDown,
  Check,
  MessageCircle,
  ArrowRight,
  Award,
  Leaf,
} from "lucide-react";
import heroImg from "@/assets/hero-safari.jpg";
import logoImg from "@/assets/logo.jpg";
import gZebra from "@/assets/g-zebra.jpg";
import pkgAmboseli from "@/assets/g-landscape.jpg";
import pkgBeach from "@/assets/g-safari-1.jpg";
import gLion from "@/assets/g-lion (2).jpg";
import gJeep from "@/assets/g-jeep (2).jpg";
import gAntel from "@/assets/g-antel.jpg";
import gFlyer from "@/assets/g-flyer.jpg";
import gElephant from "@/assets/g-elephant.jpg";
import gPool from "@/assets/g-pool.jpg";
import gBalloon from "@/assets/g-balloon.jpg";
import gLandscape from "@/assets/g-landscape.jpg";
import gSafari from "@/assets/g-safari.jpg";
import gDolphin from "@/assets/dolphin.jpg";
import gDolphin2 from "@/assets/dolphin-2.jpg";
import gTiger from "@/assets/g-tiger.jpg";
import gTour from "@/assets/g-desert.jpg";
import mombasaAir from "@/assets/mombasa_air.jpg";
import mombasaAirSafari from "@/assets/mombasa_air_safari.jpg";
import { CONTACT_INFO, TOURS_DATA } from "@/data/tours";

const WHATSAPP = CONTACT_INFO.primaryPhone.replace(/\D/g, "");
const formatPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("254")) {
    return `+${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  }
  return phone;
};
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matata MT Tours — Luxury Kenya Safaris & Coastal Escapes" },
      { name: "description", content: "Tailor-made luxury game drives in Maasai Mara, Amboseli, Tsavo, plus Kilifi & Diani beach escapes. Native Kenyan guides. Book on WhatsApp." },
      { property: "og:title", content: "Matata MT Tours — Luxury Kenya Safaris & Coastal Escapes" },
      { property: "og:description", content: "Tailor-made luxury game drives in Maasai Mara, Amboseli, Tsavo, plus Kilifi & Diani beach escapes. Native Kenyan guides. Book on WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const NAV = [
  { label: "Safaris", href: "#safaris" },
  { label: "Kenya Destinations", href: "#destinations" },
  { label: "Custom Itinerary", href: "#builder" },
  { label: "Reviews", href: "#reviews" },
  { label: "About Us", href: "#about" },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrolled={scrolled} />
      <Hero />
      <Packages />
      <Destinations />
      <Estimator />
      <WhyUs />
      <Gallery />
      <Reviews />
      <TrustBadges />
      <About />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

/* ---------------- Header ---------------- */
function Header({
  menuOpen,
  setMenuOpen,
  scrolled,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  scrolled: boolean;
}) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav shadow-[0_4px_30px_-10px_oklch(0.14_0.015_160/0.25)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <div className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full border border-gold/50 bg-emerald-deep">
            <img src={logoImg} alt="Matata MT Tours logo" className="h-full w-full object-cover" />
          </div>
          <div className="min-w-0">
            <div
              className={`truncate font-display text-lg leading-none font-semibold tracking-wide sm:text-xl ${
                scrolled ? "text-emerald-deep" : "text-white"
              }`}
            >
              MATATA MT TOURS
            </div>
            <div className="mt-1 inline-flex items-center gap-1.5">
              <span className="inline-block h-px w-4 bg-gold" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                Kenya Tours & Safaris
              </span>
            </div>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100 ${
                scrolled ? "text-emerald-deep hover:text-gold" : "text-white/90 hover:text-gold"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={waLink("Hello Matata MT Tours, I'd like to book a safari.")}
            target="_blank"
            rel="noreferrer"
            className="btn-gold btn-gold-hover animate-glow inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm"
          >
            <MessageCircle className="h-4 w-4" />
            Book Safari on WhatsApp
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-full border lg:hidden ${
            scrolled
              ? "border-emerald-deep/20 bg-white/70 text-emerald-deep"
              : "border-white/30 bg-white/10 text-white backdrop-blur"
          }`}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="glass-nav lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 pb-6 pt-2">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-emerald-deep hover:bg-sand"
              >
                {n.label}
              </a>
            ))}
            <a
              href={waLink("Hello Matata MT Tours, I'd like to book a safari.")}
              target="_blank"
              rel="noreferrer"
              className="btn-gold btn-gold-hover mt-3 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm"
            >
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury 4x4 safari at sunset in Maasai Mara"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/50 via-transparent to-obsidian/20" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-10 pt-32 sm:pb-16 lg:justify-center lg:px-8 lg:pt-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/5 px-3.5 py-1.5 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
              Kilifi · Maasai Mara · Kenya
            </span>
          </div>
          <h1 className="mt-5 font-display text-4xl leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Experience{" "}
            <span className="italic gold-text">Unforgettable</span> Kenyan
            Safaris & Coastal Adventures
          </h1>
          <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
            Tailor-made luxury game drives, Maasai Mara expeditions, and Kilifi
            beach escapes designed around you, guided by native Kenyans who
            know every trail by heart.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={waLink("Hi Matata MT Tours! I'd like a tailor-made safari quote.")}
              target="_blank"
              rel="noreferrer"
              className="btn-gold btn-gold-hover inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm"
            >
              <MessageCircle className="h-4 w-4" /> Book Safari on WhatsApp
            </a>
            <a
              href="#safaris"
              className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-gold"
            >
              View safari packages <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <QuickBookingBar />
      </div>
    </section>
  );
}

/* ---------------- Quick Booking Bar ---------------- */
const DESTINATIONS = [
  "Maasai Mara",
  "Tsavo East & West",
  "Amboseli",
  "Kilifi & Diani Beach",
];
const DURATIONS = ["3 Days", "5 Days", "7+ Days"];

function QuickBookingBar() {
  const [dest, setDest] = useState(DESTINATIONS[0]);
  const [dur, setDur] = useState(DURATIONS[0]);
  const [group, setGroup] = useState(2);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mt-10 rounded-2xl border border-gold/25 bg-white/8 p-2.5 shadow-[var(--shadow-elegant)] backdrop-blur-xl md:mt-14">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-[1.3fr_1fr_1fr_auto]">
          <FieldSelect
            icon={<MapPin className="h-4 w-4" />}
            label="Destination"
            value={dest}
            onChange={setDest}
            options={DESTINATIONS}
          />
          <FieldSelect
            icon={<Calendar className="h-4 w-4" />}
            label="Duration"
            value={dur}
            onChange={setDur}
            options={DURATIONS}
          />
          <div className="flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3">
            <Users className="h-4 w-4 text-emerald-deep" />
            <div className="flex-1">
              <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Group Size
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-emerald-deep">
                  {group} {group === 1 ? "Traveler" : "Travelers"}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setGroup(Math.max(1, group - 1))}
                    className="grid h-7 w-7 place-items-center rounded-full border border-emerald-deep/20 text-emerald-deep hover:bg-sand"
                    aria-label="Decrease"
                  >
                    –
                  </button>
                  <button
                    onClick={() => setGroup(Math.min(20, group + 1))}
                    className="grid h-7 w-7 place-items-center rounded-full border border-emerald-deep/20 text-emerald-deep hover:bg-sand"
                    aria-label="Increase"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(true)}
            className="btn-gold btn-gold-hover inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm"
          >
            Check Availability <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {open && (
        <BookingModal
          onClose={() => setOpen(false)}
          prefill={{ dest, dur, group }}
        />
      )}
    </>
  );
}

function FieldSelect({
  icon,
  label,
  value,
  onChange,
  options,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <label className="flex items-center gap-3 rounded-xl bg-white/95 px-4 py-3">
      <span className="text-emerald-deep">{icon}</span>
      <span className="flex-1">
        <span className="block text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        <span className="relative block">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full appearance-none bg-transparent pr-6 text-sm font-semibold text-emerald-deep outline-none"
          >
            {options.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-emerald-deep/60" />
        </span>
      </span>
    </label>
  );
}

/* ---------------- Booking Modal ---------------- */
function BookingModal({
  onClose,
  prefill,
}: {
  onClose: () => void;
  prefill: { dest: string; dur: string; group: number };
}) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const message = useMemo(
    () =>
      `Hello Matata MT Tours! I'd like to check availability:\n• Name: ${
        name || "—"
      }\n• Destination: ${prefill.dest}\n• Duration: ${prefill.dur}\n• Group: ${
        prefill.group
      } travelers\n• Preferred start date: ${date || "flexible"}\n\nPlease send a quote.`,
    [name, date, prefill],
  );

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-obsidian/70 p-0 backdrop-blur-sm sm:items-center sm:p-6">
      <div className="w-full max-w-lg overflow-hidden rounded-t-3xl border border-gold/30 bg-background shadow-[var(--shadow-elegant)] sm:rounded-3xl animate-scale-in">
        <div className="relative bg-emerald-deep px-6 py-5 text-white">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
            Instant Reservation
          </div>
          <h3 className="mt-1 font-display text-2xl">Reserve Your Safari</h3>
          <p className="mt-1 text-sm text-white/70">
            We'll confirm on WhatsApp in minutes.
          </p>
        </div>

        <div className="space-y-4 px-6 py-6">
          <Summary label="Destination" value={prefill.dest} />
          <Summary label="Duration" value={prefill.dur} />
          <Summary label="Travelers" value={`${prefill.group}`} />

          <div>
            <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              Your Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-emerald-deep outline-none focus:border-gold"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
              Preferred Start Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-emerald-deep outline-none focus:border-gold"
            />
          </div>

          <a
            href={waLink(message)}
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
            className="btn-gold btn-gold-hover mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm"
          >
            <MessageCircle className="h-4 w-4" /> Send Booking on WhatsApp
          </a>
          <p className="text-center text-xs text-muted-foreground">
            Or call us: <span className="font-semibold text-emerald-deep">{formatPhone(CONTACT_INFO.primaryPhone)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-sand px-4 py-3">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <span className="text-sm font-semibold text-emerald-deep">{value}</span>
    </div>
  );
}

/* ---------------- Packages ---------------- */
const getTourImage = (tourId: string) => {
  switch (tourId) {
    case "safari-blue-watamu":
      return gDolphin;
    case "safari-blue-wasini":
      return gDolphin2;
    case "tsavo-east-express":
      return gJeep;
    case "flight-safari-mombasa-masai-mara":
      return mombasaAirSafari;
    case "hot-air-balloon":
      return gBalloon;
    case "tsavo-2-days":
      return gLandscape;
    case "classic-safari":
      return gLion;
    case "explorer-safari":
      return gAntel;
    case "ultimate-safari":
      return gElephant;
      case "best-of-tsavo":
        return gTour;

        case 'tsavo-amboseli':
        return gTiger;
    default:
      return pkgAmboseli;
  }
};

const getTourCategoryLabel = (category: string) => {
  switch (category) {
    case "excursion":
      return "Excursion";
    case "flyin":
      return "Fly-in Safari";
    case "addon":
      return "Optional Add-on";
    default:
      return "Multi-day Safari";
  }
};

const getTourHighlights = (tour: (typeof TOURS_DATA)[number]) => [
  tour.duration,
  getTourCategoryLabel(tour.category),
  tour.description ?? "Tailored quote available on request.",
];

function Packages() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="safaris" className="relative bg-sand py-20 sm:py-28">
      <SectionHeading
        eyebrow="Featured Safari Packages"
        title="Signature Kenyan Journeys"
        subtitle="Hand-crafted itineraries balancing wild encounters with genuine luxury."
      />
      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {TOURS_DATA.map((tour) => (
          <article
            key={tour.id}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)] transition-transform duration-500 hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={getTourImage(tour.id)}
                alt={tour.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white backdrop-blur">
                <Clock className="h-3 w-3" /> {tour.duration}
              </div>
              <div className="absolute bottom-4 right-4 rounded-full border border-gold/60 bg-obsidian/70 px-3 py-1.5 text-sm text-white backdrop-blur">
                <span className="text-[10px] uppercase tracking-widest text-gold">From</span>{" "}
                <span className="font-semibold">{tour.price}</span>
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                {getTourCategoryLabel(tour.category)}
              </div>
              <h3 className="mt-1 font-display text-xl leading-tight text-emerald-deep">
                {tour.title}
              </h3>

              <ul className="mt-4 grid grid-cols-2 gap-2">
                {getTourHighlights(tour).map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-center gap-2 rounded-lg bg-sand px-2.5 py-2 text-xs text-emerald-deep"
                  >
                    <span className="text-gold">
                      <Compass className="h-3 w-3" />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setOpen(open === tour.id ? null : tour.id)}
                className="mt-5 inline-flex items-center justify-between rounded-xl border border-emerald-deep/15 bg-white px-4 py-3 text-sm font-medium text-emerald-deep hover:border-gold"
              >
                View details
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    open === tour.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ${
                  open === tour.id
                    ? "mt-3 grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <ol className="space-y-3 rounded-xl bg-sand p-4">
                    <li className="flex gap-3">
                      <span className="mt-0.5 shrink-0 rounded-full bg-emerald-deep px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-gold">
                        Info
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-emerald-deep">
                          {tour.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {tour.description ?? "A tailored quote is available on request."}
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              <a
                href={waLink(
                  `Hi Matata MT Tours! I'd like to reserve: ${tour.title} (${tour.price}). Please share availability.`,
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-gold btn-gold-hover mt-5 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm"
              >
                <MessageCircle className="h-4 w-4" /> Reserve via WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Destinations ---------------- */
const DEST_CARDS = [
  { name: "Maasai Mara", tag: "Pop up roof 4x4 Jeep Land Cruiser", img: gSafari },
  { name: "Diani & Watamu", tag: "Wildlife safari experience", img: gLion },
  { name: "Tsavo East", tag: "Lion Hills / Boma Simba", img: gLandscape },
  { name: "Kilifi & Diani Beach", tag: "Coastal Escape", img: pkgBeach },
];

function Destinations() {
  return (
    <section id="destinations" className="bg-background py-20 sm:py-28">
      <SectionHeading
        eyebrow="Kenya Destinations"
        title="Every Landscape, One Country"
        subtitle="From the plains of the Mara to the turquoise waters of the Indian Ocean."
      />
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-2 gap-4 px-5 md:grid-cols-4 lg:px-8">
        {DEST_CARDS.map((d) => (
          <a
            key={d.name}
            href={waLink(`Hi! I'd like info on trips to ${d.name}.`)}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
          >
            <img
              src={d.img}
              alt={d.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/20 to-transparent" />
            <div className="absolute inset-x-4 bottom-4">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                {d.tag}
              </div>
              <div className="mt-1 font-display text-lg leading-tight text-white sm:text-xl">
                {d.name}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Cost Estimator ---------------- */
const PARK_OPTIONS = [
  { id: "mara", name: "Maasai Mara", price: 180 },
  { id: "amboseli", name: "Amboseli", price: 150 },
  { id: "tsavo", name: "Tsavo East/West", price: 140 },
  { id: "kilifi", name: "Kilifi & Diani Beach", price: 130 },
];

function Estimator() {
  const [step, setStep] = useState(1);
  const [parks, setParks] = useState<string[]>(["mara"]);
  const [days, setDays] = useState(5);
  const [group, setGroup] = useState(2);

  const perPerson = useMemo(() => {
    const parkAvg = parks.length
      ? PARK_OPTIONS.filter((p) => parks.includes(p.id)).reduce(
          (s, p) => s + p.price,
          0,
        ) / parks.length
      : 150;
    const groupDiscount = group >= 4 ? 0.88 : group >= 2 ? 0.94 : 1;
    return Math.round(parkAvg * days * groupDiscount);
  }, [parks, days, group]);

  const total = perPerson * group;

  const toggle = (id: string) =>
    setParks((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );

  const message = `Hi Matata MT Tours! I built a custom safari:\n• Parks: ${parks
    .map((id) => PARK_OPTIONS.find((p) => p.id === id)?.name)
    .join(", ")}\n• Duration: ${days} days\n• Group: ${group} people\n• Estimated: $${perPerson}/person (Total ~$${total})\n\nPlease send a tailored quote.`;

  return (
    <section id="builder" className="relative overflow-hidden bg-emerald-deep py-20 text-white sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, oklch(0.78 0.14 82) 0, transparent 40%), radial-gradient(circle at 80% 80%, oklch(0.78 0.14 82) 0, transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/5 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
              Custom Itinerary Builder
            </span>
          </div>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
            Design Your <span className="italic gold-text">Perfect</span> Safari
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/70 sm:text-base">
            Pick parks, duration, and group size. We'll price it instantly and
            send a pre-filled WhatsApp quote request.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="glass-dark rounded-3xl p-6 sm:p-8">
            <Stepper step={step} />

            {step === 1 && (
              <div className="mt-6">
                <h4 className="font-display text-xl text-white">Choose parks & destinations</h4>
                <p className="mt-1 text-sm text-white/60">Select one or more.</p>
                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {PARK_OPTIONS.map((p) => {
                    const active = parks.includes(p.id);
                    return (
                      <button
                        key={p.id}
                        onClick={() => toggle(p.id)}
                        className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all ${
                          active
                            ? "border-gold bg-gold/10"
                            : "border-white/15 bg-white/5 hover:border-gold/50"
                        }`}
                      >
                        <div>
                          <div className="text-sm font-semibold text-white">{p.name}</div>
                          <div className="text-xs text-white/60">${p.price}/day base</div>
                        </div>
                        <span
                          className={`grid h-6 w-6 place-items-center rounded-full border ${
                            active ? "border-gold bg-gold text-emerald-deep" : "border-white/30"
                          }`}
                        >
                          {active && <Check className="h-3.5 w-3.5" />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="mt-6">
                <h4 className="font-display text-xl text-white">Duration</h4>
                <p className="mt-1 text-sm text-white/60">{days} days</p>
                <input
                  type="range"
                  min={2}
                  max={14}
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="mt-5 w-full accent-[oklch(0.78_0.14_82)]"
                />
                <div className="mt-2 flex justify-between text-xs text-white/50">
                  <span>2 days</span>
                  <span>14 days</span>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="mt-6">
                <h4 className="font-display text-xl text-white">Group size</h4>
                <p className="mt-1 text-sm text-white/60">
                  Larger groups unlock better per-person pricing.
                </p>
                <div className="mt-5 flex items-center justify-center gap-6">
                  <button
                    onClick={() => setGroup(Math.max(1, group - 1))}
                    className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white hover:border-gold"
                  >
                    –
                  </button>
                  <div className="font-display text-5xl text-gold">{group}</div>
                  <button
                    onClick={() => setGroup(Math.min(20, group + 1))}
                    className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white hover:border-gold"
                  >
                    +
                  </button>
                </div>
                <div className="mt-2 text-center text-xs text-white/50">travelers</div>
              </div>
            )}

            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                className="text-sm text-white/70 disabled:opacity-30"
              >
                ← Back
              </button>
              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  className="btn-gold btn-gold-hover inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm"
                >
                  Next <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <span className="text-xs text-white/60">Review your estimate →</span>
              )}
            </div>
          </div>

          <aside className="glass-dark rounded-3xl p-6 sm:p-8">
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
              Live Estimate
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-5xl text-white sm:text-6xl">
                ${perPerson}
              </span>
              <span className="text-sm text-white/60">/person</span>
            </div>
            <div className="mt-1 text-sm text-white/70">
              Total ~ <span className="font-semibold text-gold">${total.toLocaleString()}</span> for {group} traveler{group > 1 ? "s" : ""}
            </div>

            <div className="my-6 hairline-gold" />

            <dl className="space-y-2 text-sm">
              <Row label="Parks" value={`${parks.length} selected`} />
              <Row label="Duration" value={`${days} days`} />
              <Row label="Group" value={`${group}`} />
            </dl>

            <a
              href={waLink(message)}
              target="_blank"
              rel="noreferrer"
              className="btn-gold btn-gold-hover mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm"
            >
              <MessageCircle className="h-4 w-4" /> Get Tailored Quote
            </a>
            <p className="mt-2 text-center text-[11px] text-white/50">
              Indicative price. Final quote confirmed by our team.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Stepper({ step }: { step: number }) {
  const labels = ["Destinations", "Duration", "Group"];
  return (
    <div className="flex items-center gap-3">
      {labels.map((l, i) => {
        const n = i + 1;
        const active = step >= n;
        return (
          <div key={l} className="flex flex-1 items-center gap-3">
            <div
              className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-xs font-semibold ${
                active
                  ? "border-gold bg-gold text-emerald-deep"
                  : "border-white/20 text-white/60"
              }`}
            >
              {n}
            </div>
            <span
              className={`hidden text-xs font-semibold uppercase tracking-widest sm:inline ${
                active ? "text-white" : "text-white/40"
              }`}
            >
              {l}
            </span>
            {n < labels.length && (
              <span className={`h-px flex-1 ${active ? "bg-gold/60" : "bg-white/15"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-white/10 py-2">
      <dt className="text-white/60">{label}</dt>
      <dd className="font-semibold text-white">{value}</dd>
    </div>
  );
}

/* ---------------- Why Us ---------------- */
const FEATURES = [
  {
    icon: <Car className="h-6 w-6" />,
    title: "Custom 4x4 Safari Vehicles",
    body: "Pop-up roof Land Cruisers designed for photography and unobstructed game viewing.",
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Native Kenyan Guides",
    body: "Decades of local wildlife tracking and cultural expertise in every park.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Tailored Itineraries",
    body: "From considered budgets to ultra-luxury lodges — designed around you.",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "24/7 Dedicated Support",
    body: "Instant response on WhatsApp — before, during, and after your journey.",
  },
];

function WhyUs() {
  return (
    <section className="bg-sand py-20 sm:py-28">
      <SectionHeading
        eyebrow="Why Travel With Us"
        title="Kenya, The Right Way"
        subtitle="Local expertise, luxury standards, and a genuine hand-crafted approach."
      />
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-gold hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-emerald-deep text-gold transition-transform group-hover:scale-105">
              {f.icon}
            </div>
            <h3 className="mt-5 font-display text-xl text-emerald-deep">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
function Gallery() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <SectionHeading
        eyebrow="Photo Gallery"
        title="A Journey In Frames"
        subtitle="Real moments from real Matata journeys — bush to beach."
      />
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-4 grid-rows-[repeat(6,minmax(60px,auto))] gap-3 px-5 sm:gap-4 lg:px-8">
        <GItem src={gZebra} alt="Zebra in the wild" className="col-span-2 row-span-3" />
        <GItem src={mombasaAir} alt="Mombasa airport" className="col-span-2 row-span-2" />
        <GItem src={gFlyer} alt="Mombasa safari flyer" className="col-span-1 row-span-2" />
        <GItem src={gTour} alt="Elephant in the bush" className="col-span-1 row-span-2" />
        <GItem src={gLion} alt="Lion at golden hour" className="col-span-2 row-span-2" />
        <GItem src={gPool} alt="Coastal poolside escape" className="col-span-2 row-span-3" />
        <GItem src={gSafari} alt="Coastal poolside escape" className="col-span-2 row-span-3" />
      </div>
    </section>
  );
}

function GItem({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-obsidian/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
        <Camera className="h-3 w-3" /> Kenya
      </div>
    </div>
  );
}

/* ---------------- Reviews ---------------- */
const REVIEWS = [
  {
    name: "Amelia R.",
    place: "London, UK",
    body: "Absolutely transformative. Our guide spotted a leopard on day one and everything was seamless from Nairobi to our beach stay in Kilifi.",
  },
  {
    name: "Marcus & Elena",
    place: "New York, USA",
    body: "The 7-day bush & beach was worth every dollar. Luxury lodges, private drives, and the team responded on WhatsApp within minutes.",
  },
  {
    name: "Priya K.",
    place: "Dubai, UAE",
    body: "Their itinerary builder made planning effortless. Amboseli with Kilimanjaro at sunrise is a memory we'll never forget.",
  },
];

function Reviews() {
  return (
    <section id="reviews" className="bg-sand py-20 sm:py-28">
      <SectionHeading
        eyebrow="Client Stories"
        title="Loved by Travelers Worldwide"
        subtitle="Real reviews from our recent guests."
      />
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-5 px-5 md:grid-cols-3 lg:px-8">
        {REVIEWS.map((r) => (
          <figure
            key={r.name}
            className="rounded-3xl border border-border bg-card p-7 shadow-sm"
          >
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 font-display text-lg leading-snug text-emerald-deep">
              "{r.body}"
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-deep font-semibold text-gold">
                {r.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-semibold text-emerald-deep">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.place}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Trust Badges ---------------- */
function TrustBadges() {
  const badges = [
    { icon: <Shield className="h-5 w-5" />, label: "100% Certified Local Kenyan Operator" },
    { icon: <Check className="h-5 w-5" />, label: "Safety First Guaranteed" },
    { icon: <Clock className="h-5 w-5" />, label: "24/7 Instant Booking" },
  ];
  return (
    <section className="bg-background py-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-5 sm:grid-cols-3 lg:px-8">
        {badges.map((b) => (
          <div
            key={b.label}
            className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-emerald-deep text-gold">
              {b.icon}
            </span>
            <span className="text-sm font-semibold text-emerald-deep">{b.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section id="about" className="bg-emerald-deep py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-white/5 px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
              About Matata MT Tours
            </span>
          </div>
          <h2 className="mt-4 font-display text-3xl leading-tight sm:text-5xl">
            Born in Kilifi. <span className="italic gold-text">Kenya, End-to-End.</span>
          </h2>
          <p className="mt-5 text-base text-white/75">
            Matata MT Tours is a locally-owned Kenyan operator built by native
            guides and coastal hosts. From the wild plains of the Maasai Mara
            to the turquoise reefs of Diani, we design private safaris that
            marry serious wildlife access with quiet, high-end comfort.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6">
            <Stat n="12+" label="Years guiding" />
            <Stat n="2,400+" label="Travelers hosted" />
            <Stat n="4.9★" label="Average rating" />
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-gold/20">
          <img src={gJeep} alt="Safari vehicle at sunset" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl text-gold sm:text-4xl">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-white/60">{label}</div>
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="bg-obsidian text-white/80">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-full border border-gold/50 bg-emerald-deep">
              <img src={logoImg} alt="Matata MT Tours logo" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="font-display text-xl text-white">MATATA MT TOURS</div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold">
                Kenya Tours & Safaris
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-white/60">
            Luxury tailor-made Kenyan safaris and coastal escapes. Locally
            owned, personally guided, always available on WhatsApp.
          </p>
          <a
            href={waLink("Hello Matata MT Tours!")}
            target="_blank"
            rel="noreferrer"
            className="btn-gold btn-gold-hover mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm"
          >
            <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-gold">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">Contact</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" />
              Kilifi, Kenya
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-gold" />
              <a href={`tel:${CONTACT_INFO.primaryPhone.replace(/\s/g, "")}`} className="hover:text-gold">
                {formatPhone(CONTACT_INFO.primaryPhone)}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-gold" />
              <a href={`tel:${CONTACT_INFO.secondaryPhone.replace(/\s/g, "")}`} className="hover:text-gold">
                {formatPhone(CONTACT_INFO.secondaryPhone)}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-gold" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-gold break-all">
                {CONTACT_INFO.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/50 sm:flex-row lg:px-8">
          <span>© {new Date().getFullYear()} Matata MT Tours. All rights reserved.</span>
          <span>Kilifi · Maasai Mara · Amboseli · Tsavo · Diani</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Floating WhatsApp ---------------- */
function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hello Matata MT Tours! I'd like to plan a safari.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="btn-gold btn-gold-hover animate-glow fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full sm:h-16 sm:w-16"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}

/* ---------------- Section Heading ---------------- */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl px-5 text-center lg:px-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white px-3.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-deep">
          {eyebrow}
        </span>
      </div>
      <h2 className="mt-4 font-display text-3xl leading-tight text-emerald-deep sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}
