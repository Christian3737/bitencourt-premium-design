import { motion } from "framer-motion";
import galleryFacade from "@/assets/fachada.jpeg";
import galleryDoors from "@/assets/Portas.jpeg";
import galleryBox from "@/assets/box.jpeg";
import galleryWindows from "@/assets/esquadria.jpeg";
import gallery1 from "@/assets/boxpremium.jpeg";
import gallery2 from "@/assets/cobertura.jpeg";
import gallery3 from "@/assets/portacorrer.jpeg";
import gallery4 from "@/assets/porta-4.jpeg";

const images = [
  { src: galleryFacade, alt: "Fachada comercial com pele de vidro", label: "Fachadas" },
  { src: galleryDoors, alt: "Portas e janelas de alumínio", label: "Portas e Janelas" },
  { src: galleryBox, alt: "Box de banheiro em vidro temperado", label: "Box de Banheiro" },
  { src: galleryWindows, alt: "Janela de alumínio premium", label: "Esquadrias" },
    { src: gallery1, alt: "Fachada comercial com pele de vidro", label: "Box premium" },
  { src: gallery2, alt: "Portas e janelas de alumínio", label: "Cobertura em vidro" },
  { src: gallery3, alt: "Box de banheiro em vidro temperado", label: "Porta de correr-" },
  { src: gallery4, alt: "Janela de alumínio premium", label: "Porta 4 folhas" },
  
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary font-semibold tracking-widest uppercase text-sm">Portfólio</span>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mt-3">
            Nossos Trabalhos
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              className="relative group overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dark/90 via-surface-dark/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-display text-2xl text-surface-dark-foreground">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
