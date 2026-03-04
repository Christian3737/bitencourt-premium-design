const Footer = () => {
  return (
    <footer className="py-10 bg-surface-dark border-t border-border/10">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-display text-2xl text-surface-dark-foreground mb-2">
          Bitencourt Esquadrias e Vidros
        </h3>
        <p className="text-surface-dark-foreground/50 text-sm mb-1">
          Tangará da Serra – MT
        </p>
        <p className="text-surface-dark-foreground/50 text-sm mb-4">
          WhatsApp: (65) 9 9955-5263
        </p>
        <p className="text-surface-dark-foreground/30 text-xs">
          © {new Date().getFullYear()} Bitencourt Esquadrias e Vidros. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
