import { motion } from "framer-motion";
import galleryFacade from "@/assets/gallery-facade.jpg";
import galleryDoors from "@/assets/gallery-doors.jpg";
import galleryBox from "@/assets/gallery-box.jpg";
import galleryWindows from "@/assets/gallery-windows.jpg";

const images = [
  { src: galleryFacade, alt: "Fachada comercial com pele de vidro", label: "Fachadas" },
  { src: galleryDoors, alt: "Portas e janelas de alumínio", label: "Portas e Janelas" },
  { src: galleryBox, alt: "Box de banheiro em vidro temperado", label: "Box de Banheiro" },
  { src: galleryWindows, alt: "Janela de alumínio premium", label: "Esquadrias" },
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
