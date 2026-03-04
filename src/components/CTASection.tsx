import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565999555263";

const CTASection = () => {
  return (
    <section className="py-28 bg-surface-dark relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-display text-surface-dark-foreground mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Seu projeto merece acabamento de{" "}
          <span className="text-primary">alto padrão.</span>
        </motion.h2>

        <motion.p
          className="text-surface-dark-foreground/60 text-lg mb-10 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Entre em contato agora e receba seu orçamento personalizado sem compromisso.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="cta" size="lg" className="h-16 px-12 text-lg gap-3">
              <MessageCircle className="!size-6" />
              Falar Agora no WhatsApp
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
