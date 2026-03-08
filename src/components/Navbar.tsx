import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Sparkles, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useFavorites } from "@/hooks/useFavorites";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count } = useFavorites();
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
    }
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/profiles", label: "Profiles" },
    { to: "/favorites", label: "Favorites" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-accent">
            <Sparkles size={18} className="text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold text-foreground">
            Women<span className="gradient-text">InTech</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative rounded-lg px-4 py-2 font-body text-sm font-medium transition-all duration-200 ${
                isActive(l.to)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <span className="flex items-center gap-1.5">
                {l.label}
                {l.to === "/favorites" && count > 0 && (
                  <span className="flex h-4 min-w-[16px] items-center justify-center rounded-full gradient-accent px-1 font-body text-[10px] font-bold text-primary-foreground">
                    {count}
                  </span>
                )}
              </span>
              {isActive(l.to) && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full gradient-accent"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
          <div className="ml-4 h-5 w-px bg-border" />
          <button
            onClick={() => setDark(!dark)}
            className="ml-2 rounded-lg p-2 text-muted-foreground transition-all hover:bg-secondary/50 hover:text-foreground"
            aria-label="Toggle dark mode"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={dark ? "sun" : "moon"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-1 md:hidden">
          <Link to="/favorites" className="relative rounded-lg p-2 text-muted-foreground transition-all hover:bg-secondary/50">
            <Heart size={18} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full gradient-accent px-1 font-body text-[9px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
          <button
            onClick={() => setDark(!dark)}
            className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-secondary/50"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="px-4 py-2">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 font-body text-sm font-medium transition-colors ${
                    isActive(l.to)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
