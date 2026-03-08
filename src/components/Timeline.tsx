import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  { year: "1843", title: "First Computer Program", description: "Ada Lovelace publishes the first algorithm intended for a computing machine." },
  { year: "1952", title: "First Compiler Created", description: "Grace Hopper develops the A-0 System, the first compiler for a computer language." },
  { year: "1962", title: "Space Calculations", description: "Katherine Johnson's calculations help launch John Glenn into orbit." },
  { year: "1942", title: "Frequency Hopping Patent", description: "Hedy Lamarr patents frequency-hopping technology, the basis for WiFi and Bluetooth." },
  { year: "1985", title: "Spanning Tree Protocol", description: "Radia Perlman invents STP, making modern internet infrastructure possible." },
  { year: "2004", title: "Nobel Peace Prize", description: "Wangari Maathai becomes the first African woman to receive the Nobel Peace Prize." },
];

const sortedEvents = [...events].sort((a, b) => parseInt(a.year) - parseInt(b.year));

const Timeline = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-body text-xs font-semibold text-primary uppercase tracking-wider">
            Through the Years
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            A Timeline of <span className="gradient-text">Breakthroughs</span>
          </h2>
        </motion.div>

        <div className="relative mt-16 mx-auto max-w-3xl">
          {/* Center line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

          {sortedEvents.map((event, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative mb-10 flex items-start gap-6 pl-12 md:pl-0 ${
                  isLeft ? "md:flex-row md:text-right" : "md:flex-row-reverse md:text-left"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-lg">
                    <span className="inline-block rounded-full gradient-accent px-3 py-1 font-display text-xs font-bold text-primary-foreground">
                      {event.year}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-foreground">{event.title}</h3>
                    <p className="mt-1 font-body text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </div>

                {/* Dot on the line */}
                <div className="absolute left-4 top-5 flex h-2.5 w-2.5 -translate-x-1/2 items-center justify-center md:left-1/2">
                  <div className="h-2.5 w-2.5 rounded-full gradient-accent ring-4 ring-background" />
                </div>

                {/* Spacer for the other side */}
                <div className="hidden flex-1 md:block" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
