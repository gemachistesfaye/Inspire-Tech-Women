import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, GraduationCap, Brain } from "lucide-react";
import type { statistics } from "@/data/womenData";

const icons = [TrendingUp, Users, GraduationCap, Brain];

interface StatsSectionProps {
  stats: typeof statistics;
}

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <div ref={ref} className="font-display text-5xl font-bold gradient-text md:text-6xl">
      {count}{suffix}
    </div>
  );
};

const StatsSection = ({ stats }: StatsSectionProps) => {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 radial-bg" />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-body text-xs font-semibold text-primary uppercase tracking-wider">
            The Numbers
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Women in Tech: By the Numbers
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-muted-foreground">
            While progress has been made, there's still a long way to go toward gender equality in technology.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon size={24} />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-3 font-body text-sm font-medium text-muted-foreground">{stat.label}</p>
                
                {/* Hover glow */}
                <div className="absolute -bottom-6 left-1/2 h-12 w-32 -translate-x-1/2 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
