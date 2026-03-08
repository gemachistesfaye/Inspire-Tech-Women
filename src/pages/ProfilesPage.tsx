import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";
import { womenProfiles } from "@/data/womenData";
import { useFavorites } from "@/hooks/useFavorites";

const fields = ["All", "Computer Science", "AI", "Engineering", "Mathematics", "Environmental Science"] as const;

const ProfilesPage = () => {
  const [search, setSearch] = useState("");
  const [activeField, setActiveField] = useState<string>("All");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { isFavorite, count } = useFavorites();

  const filtered = useMemo(() => {
    return womenProfiles.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchesField = activeField === "All" || p.field === activeField;
      const matchesFav = !showFavoritesOnly || isFavorite(p.id);
      return matchesSearch && matchesField && matchesFav;
    });
  }, [search, activeField, showFavoritesOnly, isFavorite]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 radial-bg" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-body text-xs font-semibold text-primary uppercase tracking-wider">
              All Profiles
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">
              Women Who <span className="gradient-text">Inspire</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-body text-muted-foreground">
              Browse profiles of remarkable women who have made lasting contributions to technology and science.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          {/* Search & Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-input bg-card px-12 py-3.5 font-body text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <SlidersHorizontal className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {fields.map((field) => (
                <button
                  key={field}
                  onClick={() => setActiveField(field)}
                  className={`relative rounded-full px-4 py-2 font-body text-xs font-medium transition-all duration-200 ${
                    activeField === field
                      ? "text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {activeField === field && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 rounded-full gradient-accent"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{field}</span>
                </button>
              ))}

              {/* Favorites toggle */}
              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 font-body text-xs font-medium transition-all duration-200 ${
                  showFavoritesOnly
                    ? "bg-accent/15 text-accent border border-accent/30"
                    : "bg-secondary text-secondary-foreground hover:bg-accent/10 hover:text-accent"
                }`}
              >
                <Heart size={12} className={showFavoritesOnly ? "fill-accent" : ""} />
                Favorites {count > 0 && `(${count})`}
              </button>
            </div>
          </motion.div>

          {/* Results count */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center font-body text-sm text-muted-foreground"
          >
            Showing <span className="font-semibold text-foreground">{filtered.length}</span> profile{filtered.length !== 1 && "s"}
            {showFavoritesOnly && " from your favorites"}
          </motion.p>

          {/* Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((profile, i) => (
                <ProfileCard key={profile.id} profile={profile} index={i} />
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-16 text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                {showFavoritesOnly ? (
                  <Heart size={24} className="text-muted-foreground" />
                ) : (
                  <Search size={24} className="text-muted-foreground" />
                )}
              </div>
              <p className="font-display text-lg font-semibold text-foreground">
                {showFavoritesOnly ? "No favorites yet" : "No profiles found"}
              </p>
              <p className="mt-1 font-body text-sm text-muted-foreground">
                {showFavoritesOnly
                  ? "Tap the heart icon on a profile to add it to your favorites."
                  : "Try a different search term or filter."}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProfilesPage;
