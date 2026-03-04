import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layers, Building2, GlassWater, Wrench, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565999555263";

const serviceGroups = [
  {
    icon: Layers,
    title: "Esquadrias de Alumínio",
    items: ["Linha Suprema", "Linha Gold", "Linha 30", "Linha 25", "Veneziana"],
  },
  {
    icon: Building2,
    title: "Fachadas",
    items: ["Lambril", "Revestimento em Pele de Vidro"],
  },
  {
    icon: GlassWater,
    title: "Linha Temperada",
    items: ["Portas", "Janelas", "Box de banheiro", "Muro de vidro", "Portões pivotantes"],
  },
  {
    icon: Wrench,
    title: "Manutenção",
    items: ["Ajustes", "Reparos", "Trocas de peças"],
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Serviços</span>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mt-3">
            Soluções Completas
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="bg-background border border-border rounded-lg p-7 flex flex-col hover:shadow-xl hover:shadow-primary/5 transition-shadow group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <group.icon className="size-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-2xl text-foreground mb-4">{group.title}</h3>
              <ul className="space-y-2 mb-6 flex-1">
                {group.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground">
                  <MessageCircle className="!size-4" />
                  Solicitar orçamento
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
