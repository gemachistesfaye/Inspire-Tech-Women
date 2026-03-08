import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import type { Quote as QuoteType } from "@/data/womenData";

interface QuoteCarouselProps {
  quotes: QuoteType[];
}

const QuoteCarousel = ({ quotes }: QuoteCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % quotes.length);
  }, [quotes.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl quote-section px-6 py-16 md:px-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative quote icon */}
      <Quote size={80} className="absolute left-6 top-6 text-primary/5 md:left-10" />
      
      <div className="relative min-h-[140px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -30, filter: "blur(4px)" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center"
          >
            <blockquote className="font-display text-xl font-medium italic leading-relaxed text-foreground md:text-3xl">
              "{quotes[current].text}"
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-8 bg-primary/40" />
              <div>
                <p className="font-body text-sm font-bold text-primary">
                  {quotes[current].author}
                </p>
                <p className="font-body text-xs text-muted-foreground">{quotes[current].role}</p>
              </div>
              <div className="h-px w-8 bg-primary/40" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div className="mt-8 flex justify-center gap-2">
        {quotes.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="group relative h-2 overflow-hidden rounded-full transition-all"
            style={{ width: i === current ? 32 : 8 }}
            aria-label={`Go to quote ${i + 1}`}
          >
            <div className={`absolute inset-0 rounded-full transition-colors ${
              i === current ? "gradient-accent" : "bg-muted-foreground/20"
            }`} />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default QuoteCarousel;
