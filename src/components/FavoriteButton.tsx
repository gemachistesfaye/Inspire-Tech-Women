import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

const sizeMap = {
  sm: { icon: 16, button: "h-8 w-8" },
  md: { icon: 20, button: "h-10 w-10" },
  lg: { icon: 22, button: "h-12 w-12" },
};

const FavoriteButton = ({ isFavorite, onToggle, size = "md", showLabel, className = "" }: FavoriteButtonProps) => {
  const { icon, button } = sizeMap[size];

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onToggle();
      }}
      className={`group relative inline-flex items-center gap-2 ${className}`}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <div
        className={`${button} flex items-center justify-center rounded-full border transition-all duration-300 ${
          isFavorite
            ? "border-accent/50 bg-accent/15 text-accent"
            : "border-border bg-card/80 text-muted-foreground hover:border-accent/30 hover:text-accent"
        } backdrop-blur-sm`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isFavorite ? "filled" : "empty"}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
          >
            <Heart
              size={icon}
              className={`transition-colors ${isFavorite ? "fill-accent text-accent" : ""}`}
            />
          </motion.div>
        </AnimatePresence>

        {/* Burst animation on favorite */}
        {isFavorite && (
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 rounded-full border-2 border-accent"
          />
        )}
      </div>
      {showLabel && (
        <span className="font-body text-sm font-medium text-muted-foreground">
          {isFavorite ? "Favorited" : "Favorite"}
        </span>
      )}
    </button>
  );
};

export default FavoriteButton;
