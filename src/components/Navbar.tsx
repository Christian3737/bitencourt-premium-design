import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-surface-dark/90 backdrop-blur-md border-b border-border/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl text-surface-dark-foreground tracking-wide">
          BITENCOURT <span className="text-primary">ESQUADRIAS</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-surface-dark-foreground/70 hover:text-primary transition-colors font-medium tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5565999555263"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm bg-primary text-primary-foreground px-5 py-2 rounded-sm font-semibold tracking-wide uppercase hover:bg-primary/85 transition-colors"
          >
            Orçamento
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-surface-dark-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-surface-dark border-t border-border/10"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-surface-dark-foreground/70 hover:text-primary transition-colors font-medium tracking-wide uppercase"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="https://wa.me/5565999555263"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-5 py-3 rounded-sm font-semibold tracking-wide uppercase text-center hover:bg-primary/85 transition-colors"
              >
                Orçamento
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
