import { motion } from "framer-motion";
import { Factory, Shield, Users, Clock } from "lucide-react";

const features = [
  { icon: Factory, title: "Fabricação Própria", desc: "Produção interna com controle total de qualidade." },
  { icon: Shield, title: "Instalação Profissional", desc: "Equipe técnica especializada e treinada." },
  { icon: Users, title: "Atendimento Personalizado", desc: "Projetos sob medida para cada cliente." },
  { icon: Clock, title: "Compromisso com Prazo", desc: "Pontualidade na entrega de cada projeto." },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm">Sobre nós</span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-3 mb-6">
              Excelência em Esquadrias e Vidros
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A <strong className="text-foreground">Bitencourt Esquadrias e Vidros</strong> é referência em fabricação e instalação de esquadrias de alumínio e vidros temperados em Tangará da Serra e região. Com anos de experiência no mercado, entregamos projetos que combinam estética, durabilidade e funcionalidade.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nosso compromisso é oferecer soluções completas — desde o projeto inicial até a instalação final — com materiais de primeira linha e acabamento impecável. Cada detalhe é pensado para garantir a satisfação total dos nossos clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="bg-card border border-border p-6 rounded-lg hover:border-primary/40 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <f.icon className="size-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display text-xl text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
