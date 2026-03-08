import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Award, Lightbulb, Globe, Calendar, Quote, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";
import FavoriteButton from "@/components/FavoriteButton";
import ShareButton from "@/components/ShareButton";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { useFavorites } from "@/hooks/useFavorites";
import { womenProfiles } from "@/data/womenData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
};

const ProfileDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const profile = womenProfiles.find((p) => p.id === id);
  const relatedProfiles = womenProfiles.filter((p) => p.id !== id).slice(0, 3);
  const { isFavorite, toggleFavorite } = useFavorites();

  if (!profile) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-32">
          <div className="text-5xl">🔍</div>
          <h1 className="mt-4 font-display text-3xl font-bold text-foreground">Profile Not Found</h1>
          <p className="mt-2 font-body text-muted-foreground">The profile you're looking for doesn't exist.</p>
          <Link to="/profiles" className="mt-6 inline-flex items-center gap-2 font-body text-sm font-semibold text-primary hover:underline">
            <ArrowLeft size={16} /> Back to Profiles
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const initials = profile.name.split(" ").map((n) => n[0]).join("");

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgressBar />
      <Navbar />

      {/* === HERO === */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-primary-foreground/5 blur-3xl" />

        <div className="container relative mx-auto px-4 pb-24 pt-8">
          {/* Breadcrumb */}
          <motion.nav
            custom={0} initial="hidden" animate="visible" variants={fadeUp}
            className="flex items-center gap-1 font-body text-xs text-primary-foreground/60"
          >
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/profiles" className="hover:text-primary-foreground transition-colors">Profiles</Link>
            <ChevronRight size={12} />
            <span className="text-primary-foreground/90">{profile.name}</span>
          </motion.nav>

          <div className="mt-8 flex flex-col items-center gap-8 md:flex-row md:items-end">
            {/* Avatar */}
            <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUp} className="shrink-0">
              {profile.photoUrl ? (
                <div className="h-36 w-36 overflow-hidden rounded-2xl ring-4 ring-primary-foreground/20 shadow-2xl md:h-44 md:w-44">
                  <img src={profile.photoUrl} alt={profile.name} className="h-full w-full object-cover" />
                </div>
              ) : (
                <div className="flex h-36 w-36 items-center justify-center rounded-2xl bg-primary-foreground/15 ring-4 ring-primary-foreground/20 backdrop-blur-sm md:h-44 md:w-44">
                  <span className="font-display text-5xl font-bold text-primary-foreground">{initials}</span>
                </div>
              )}
            </motion.div>

            {/* Info */}
            <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUp} className="flex-1 text-center md:text-left md:pb-2">
              <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
                <span className="rounded-full bg-primary-foreground/15 px-3 py-1 font-body text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                  {profile.field}
                </span>
                <span className="flex items-center gap-1 font-body text-xs text-primary-foreground/60">
                  <Calendar size={12} />
                  {profile.birthYear}–{profile.deathYear || "Present"}
                </span>
              </div>
              <h1 className="mt-3 font-display text-4xl font-bold text-primary-foreground md:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-3 max-w-lg font-body text-sm leading-relaxed text-primary-foreground/70">
                {profile.shortDescription}
              </p>

              {/* Action buttons */}
              <div className="mt-5 flex items-center justify-center gap-3 md:justify-start">
                <FavoriteButton
                  isFavorite={isFavorite(profile.id)}
                  onToggle={() => toggleFavorite(profile.id)}
                  size="md"
                  showLabel
                />
                <ShareButton name={profile.name} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === QUOTE === */}
      {profile.quote && (
        <section className="relative -mt-8 z-10">
          <div className="container mx-auto px-4">
            <motion.div
              custom={3} initial="hidden" animate="visible" variants={fadeUp}
              className="glass-card mx-auto max-w-2xl rounded-2xl p-6 md:p-8"
            >
              <Quote size={28} className="text-primary/30" />
              <p className="mt-2 font-display text-lg italic leading-relaxed text-foreground md:text-xl">
                "{profile.quote}"
              </p>
              <p className="mt-3 font-body text-sm font-semibold text-primary">— {profile.name}</p>
            </motion.div>
          </div>
        </section>
      )}

      {/* === CONTENT === */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">Biography</h2>
              <div className="section-divider mt-3" />
              <p className="mt-6 font-body text-base leading-[1.8] text-muted-foreground">{profile.biography}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="flex items-center gap-3 font-display text-2xl font-bold text-foreground md:text-3xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Globe size={20} className="text-primary" />
                </div>
                Impact on Technology
              </h2>
              <div className="section-divider mt-3" />
              <p className="mt-6 font-body text-base leading-[1.8] text-muted-foreground">{profile.impact}</p>
            </motion.section>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="gradient-accent px-6 py-4">
                <h3 className="flex items-center gap-2 font-display text-base font-bold text-primary-foreground">
                  <Award size={18} /> Key Achievements
                </h3>
              </div>
              <ul className="p-6 space-y-3">
                {profile.achievements.map((a, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 font-body text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full gradient-accent" />
                    {a}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="overflow-hidden rounded-2xl border border-border bg-card"
            >
              <div className="bg-accent/10 px-6 py-4 border-b border-border">
                <h3 className="flex items-center gap-2 font-display text-base font-bold text-foreground">
                  <Lightbulb size={18} className="text-accent" /> Major Contributions
                </h3>
              </div>
              <ul className="p-6 space-y-3">
                {profile.contributions.map((c, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 font-body text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {c}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="section-divider" />

      {/* === RELATED === */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              More Inspiring Women
            </h2>
            <p className="mt-2 font-body text-muted-foreground">
              Continue exploring the stories of other remarkable pioneers.
            </p>
          </motion.div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProfiles.map((p, i) => (
              <ProfileCard key={p.id} profile={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfileDetailPage;
