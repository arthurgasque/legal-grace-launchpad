import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open(
      `https://wa.me/XXXXXXXX?text=Olá, gostaria de mais informações sobre os serviços jurídicos`,
      "_blank"
    );
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg p-0 flex items-center justify-center animate-fade-in group hover:scale-110 transition-transform"
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
    </Button>
  );
};

export default WhatsAppButton;
