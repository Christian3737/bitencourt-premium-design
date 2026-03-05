import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-facade.jpg";

const WHATSAPP_URL = "https://wa.me/5565999555263";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Fachada moderna com esquadrias de alumínio e vidro"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-dark/95 via-surface-dark/80 to-surface-dark/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 border border-primary/60 text-primary text-sm font-semibold tracking-widest uppercase rounded-sm">
              Tangará da Serra – MT
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display text-surface-dark-foreground leading-[0.95] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Esquadrias de Alumínio e Vidros com{" "}
            <span className="text-primary">Qualidade</span> e{" "}
            <span className="text-primary">Precisão</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-surface-dark-foreground/70 mb-10 max-w-xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Fabricação e instalação com acabamento profissional em Tangará da Serra e região.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="h-14 px-10 text-base gap-3">
                <MessageCircle className="!size-5" />
                Solicitar Orçamento
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
