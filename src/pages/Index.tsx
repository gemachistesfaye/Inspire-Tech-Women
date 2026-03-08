import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Users, BookOpen, Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";
import QuoteCarousel from "@/components/QuoteCarousel";
import StatsSection from "@/components/StatsSection";
import Timeline from "@/components/Timeline";
import FieldDistributionChart from "@/components/FieldDistributionChart";
import { womenProfiles, quotes, statistics } from "@/data/womenData";
import { useFavorites } from "@/hooks/useFavorites";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const Index = () => {
  const featured = womenProfiles.filter((p) => p.featured);
  const { count } = useFavorites();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* === HERO === */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
          <div className="absolute inset-0 gradient-hero opacity-60" />
        </div>

        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: 4 + i * 3,
              height: 4 + i * 3,
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <motion.div
              custom={0} initial="hidden" animate="visible" variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 backdrop-blur-sm"
            >
              <Sparkles size={14} className="text-primary-foreground" />
              <span className="font-body text-xs font-semibold text-primary-foreground uppercase tracking-wider">
                Inspiring the Next Generation
              </span>
            </motion.div>

            <motion.h1
              custom={1} initial="hidden" animate="visible" variants={fadeUp}
              className="mt-6 font-display text-5xl font-bold leading-tight text-primary-foreground md:text-7xl"
            >
              Celebrating Women
              <br />
              Who Changed
              <br />
              <span className="italic">Technology</span>
            </motion.h1>

            <motion.p
              custom={2} initial="hidden" animate="visible" variants={fadeUp}
              className="mt-6 max-w-xl font-body text-lg leading-relaxed text-primary-foreground/75"
            >
              Discover the stories of extraordinary women who shaped the digital world — 
              from the first computer program to modern AI.
            </motion.p>

            <motion.div
              custom={3} initial="hidden" animate="visible" variants={fadeUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/profiles"
                className="glow-button gradient-accent inline-flex items-center gap-2 rounded-xl px-7 py-3.5 font-body text-sm font-semibold text-primary-foreground"
              >
                Explore Profiles <ArrowRight size={16} />
              </Link>
              <a
                href="#about"
                className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/25 px-7 py-3.5 font-body text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/10"
              >
                Learn More
              </a>
            </motion.div>

            <motion.div
              custom={4} initial="hidden" animate="visible" variants={fadeUp}
              className="mt-12 flex gap-8"
            >
              {[
                { icon: Users, label: "Pioneers", value: "6+" },
                { icon: BookOpen, label: "Stories", value: "50+" },
                { icon: Heart, label: "Favorites", value: count > 0 ? `${count}` : "0" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
                    <Icon size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-primary-foreground">{value}</p>
                    <p className="font-body text-xs text-primary-foreground/60">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* === ABOUT === */}
      <section id="about" className="relative py-24">
        <div className="absolute inset-0 radial-bg" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-body text-xs font-semibold text-primary uppercase tracking-wider">
                Why It Matters
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                The Untold Stories of
                <span className="gradient-text"> Tech Pioneers</span>
              </h2>
              <p className="mt-6 font-body text-lg leading-relaxed text-muted-foreground">
                Throughout history, women have been at the forefront of technological innovation — 
                from writing the first computer algorithm to inventing the technology behind WiFi. 
                Their contributions have been instrumental in shaping the world we live in today, 
                yet their stories often remain untold.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                { title: "Pioneers", desc: "First programmers, mathematicians, and inventors who built the foundations", icon: "🚀" },
                { title: "Innovators", desc: "Engineers and scientists who created technologies we use daily", icon: "💡" },
                { title: "Leaders", desc: "Activists and visionaries who opened doors for future generations", icon: "🌟" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                >
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="mt-3 font-display text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 font-body text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* === FEATURED PROFILES === */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-between gap-4 sm:flex-row"
          >
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-body text-xs font-semibold text-primary uppercase tracking-wider">
                Featured
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
                Meet the Pioneers
              </h2>
            </div>
            <Link
              to="/profiles"
              className="flex items-center gap-2 font-body text-sm font-semibold text-primary transition-all hover:gap-3"
            >
              View All Profiles <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((profile, i) => (
              <ProfileCard key={profile.id} profile={profile} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* === TIMELINE === */}
      <Timeline />

      <div className="section-divider" />

      {/* === QUOTES === */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-body text-xs font-semibold text-primary uppercase tracking-wider">
              Inspiration
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
              Words That Inspire
            </h2>
          </motion.div>
          <QuoteCarousel quotes={quotes} />
        </div>
      </section>

      <div className="section-divider" />

      {/* === FIELD DISTRIBUTION === */}
      <FieldDistributionChart />

      <div className="section-divider" />

      {/* === STATS === */}
      <StatsSection stats={statistics} />

      {/* === CTA === */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl gradient-hero px-8 py-16 text-center md:px-16"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />

            <h2 className="relative font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Get Inspired?
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg font-body text-primary-foreground/75">
              Explore the full collection of profiles and discover the incredible stories of women who shaped our technological world.
            </p>
            <Link
              to="/profiles"
              className="relative mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/10 px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
            >
              Explore All Profiles <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
