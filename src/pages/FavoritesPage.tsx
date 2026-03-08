import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";
import { useFavorites } from "@/hooks/useFavorites";
import { womenProfiles } from "@/data/womenData";

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const favoriteProfiles = womenProfiles.filter((p) => favorites.includes(p.id));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0 radial-bg" />
        <div className="container relative mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-accent/10 px-4 py-1.5 font-body text-xs font-semibold text-accent uppercase tracking-wider">
              Your Collection
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">
              Your <span className="gradient-text">Favorites</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-body text-muted-foreground">
              The inspiring women you've saved — your personal collection of tech pioneers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          {favoriteProfiles.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {favoriteProfiles.map((profile, i) => (
                <ProfileCard key={profile.id} profile={profile} index={i} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto max-w-md py-20 text-center"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                <Heart size={32} className="text-accent" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">No Favorites Yet</h2>
              <p className="mt-3 font-body text-muted-foreground">
                Start exploring profiles and tap the heart icon to save your favorite tech pioneers.
              </p>
              <Link
                to="/profiles"
                className="mt-6 inline-flex items-center gap-2 rounded-xl gradient-accent px-6 py-3 font-body text-sm font-semibold text-primary-foreground glow-button"
              >
                Browse Profiles
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FavoritesPage;
