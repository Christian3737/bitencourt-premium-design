import { motion } from "framer-motion";
import { Factory, Gem, HardHat, Zap, FileCheck } from "lucide-react";

const items = [
  { icon: Factory, text: "Fabricação própria" },
  { icon: Gem, text: "Materiais de alta qualidade" },
  { icon: HardHat, text: "Instalação especializada" },
  { icon: Zap, text: "Atendimento rápido" },
  { icon: FileCheck, text: "Orçamento sem compromisso" },
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 bg-graphite">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Por que nos escolher</span>
          <h2 className="text-4xl md:text-5xl font-display text-graphite-foreground mt-3">
            Nossos Diferenciais
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.text}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="size-7 text-primary" />
              </div>
              <span className="text-graphite-foreground font-medium text-sm">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
