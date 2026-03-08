import { Github, Linkedin, Send, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      {/* Decorative gradient */}
      <div className="absolute inset-0 radial-bg opacity-50" />

      <div className="container relative mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-accent">
                <Sparkles size={18} className="text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                Women<span className="gradient-text">InTech</span>
              </span>
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
              Celebrating the extraordinary women who shaped technology and continue to inspire the next generation of innovators.
            </p>
          </div>

          {/* Developer */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Developer</h3>
            <p className="mt-4 font-body text-sm text-muted-foreground">
              Crafted with <Heart size={12} className="inline text-accent" /> by <span className="font-semibold text-foreground">Gemachis Tesfaye</span>
            </p>
            <div className="mt-4 flex gap-3">
              {[
                { href: "https://github.com/gemachistesfaye", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/gemachis-tesfaye-137196318/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://t.me/GemachisTesfaye", icon: Send, label: "Telegram" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Our Mission</h3>
            <p className="mt-4 font-display text-lg italic leading-relaxed text-muted-foreground">
              "Empowering the next generation of women in technology."
            </p>
          </div>
        </div>

        <div className="section-divider mt-10" />
        <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Women in Tech Inspiration. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Built to inspire 💜
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
