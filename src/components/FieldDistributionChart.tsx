import { useMemo } from "react";
import { motion } from "framer-motion";
import { womenProfiles } from "@/data/womenData";

const fieldColors: Record<string, { bg: string; bar: string }> = {
  "Computer Science": { bg: "bg-primary/15", bar: "bg-primary" },
  "Engineering": { bg: "bg-accent/15", bar: "bg-accent" },
  "Mathematics": { bg: "bg-chart-3/15", bar: "bg-chart-3" },
  "AI": { bg: "bg-chart-4/15", bar: "bg-chart-4" },
  "Environmental Science": { bg: "bg-chart-5/15", bar: "bg-chart-5" },
};

const fieldIcons: Record<string, string> = {
  "Computer Science": "💻",
  "Engineering": "⚙️",
  "Mathematics": "📐",
  "AI": "🤖",
  "Environmental Science": "🌿",
};

const FieldDistributionChart = () => {
  const distribution = useMemo(() => {
    const counts: Record<string, string[]> = {};
    womenProfiles.forEach((p) => {
      if (!counts[p.field]) counts[p.field] = [];
      counts[p.field].push(p.name);
    });
    const total = womenProfiles.length;
    return Object.entries(counts)
      .map(([field, names]) => ({
        field,
        count: names.length,
        names,
        percent: Math.round((names.length / total) * 100),
      }))
      .sort((a, b) => b.count - a.count);
  }, []);

  const maxCount = Math.max(...distribution.map((d) => d.count));

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-body text-xs font-semibold text-primary uppercase tracking-wider">
            Distribution
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Profiles by <span className="gradient-text">Field</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg font-body text-muted-foreground">
            Explore how our featured women are distributed across different fields of expertise.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-5">
          {distribution.map((item, i) => {
            const colors = fieldColors[item.field] || { bg: "bg-muted", bar: "bg-foreground" };
            return (
              <motion.div
                key={item.field}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{fieldIcons[item.field] || "📚"}</span>
                    <div>
                      <h3 className="font-display text-base font-bold text-foreground">{item.field}</h3>
                      <p className="font-body text-xs text-muted-foreground">
                        {item.names.join(", ")}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-display text-2xl font-bold text-foreground">{item.count}</span>
                    <span className="ml-1 font-body text-xs text-muted-foreground">({item.percent}%)</span>
                  </div>
                </div>

                <div className={`h-3 w-full rounded-full ${colors.bg}`}>
                  <motion.div
                    className={`h-full rounded-full ${colors.bar}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.count / maxCount) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Summary pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 font-body text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{womenProfiles.length}</span> profiles across
            <span className="font-semibold text-foreground">{distribution.length}</span> fields
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default FieldDistributionChart;
