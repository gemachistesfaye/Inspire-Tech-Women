import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { WomanProfile } from "@/data/womenData";
import FavoriteButton from "@/components/FavoriteButton";
import { useFavorites } from "@/hooks/useFavorites";

interface ProfileCardProps {
  profile: WomanProfile;
  index?: number;
}

const ProfileCard = ({ profile, index = 0 }: ProfileCardProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
    >
      <Link to={`/profiles/${profile.id}`} className="group block h-full">
        <div className="card-elevated animated-border h-full overflow-hidden rounded-xl bg-card">
          {/* Image area */}
          <div className="img-zoom relative h-56 overflow-hidden">
            {profile.photoUrl ? (
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="gradient-hero flex h-full items-center justify-center">
                <span className="font-display text-3xl font-bold text-primary-foreground">{initials}</span>
              </div>
            )}
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60" />

            {/* Field badge */}
            <div className="absolute left-3 top-3">
              <span className="glass-card inline-block rounded-full px-3 py-1 font-body text-xs font-semibold text-foreground">
                {profile.field}
              </span>
            </div>

            {/* Favorite button */}
            <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <FavoriteButton
                isFavorite={isFavorite(profile.id)}
                onToggle={() => toggleFavorite(profile.id)}
                size="sm"
              />
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-start justify-between">
              <h3 className="font-display text-xl font-bold text-card-foreground transition-colors group-hover:text-primary">
                {profile.name}
              </h3>
              {isFavorite(profile.id) && (
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-accent" />
              )}
            </div>
            <p className="mt-1.5 font-body text-xs text-muted-foreground">
              {profile.birthYear}–{profile.deathYear || "Present"}
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground line-clamp-2">
              {profile.shortDescription}
            </p>

            <div className="mt-4 flex items-center gap-1.5 font-body text-sm font-semibold text-primary transition-all group-hover:gap-3">
              Explore Story <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProfileCard;
