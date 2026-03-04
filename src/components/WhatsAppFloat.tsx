import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5565999555263";

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="size-7 text-[#fff]" />
    </a>
  );
};

export default WhatsAppFloat;
