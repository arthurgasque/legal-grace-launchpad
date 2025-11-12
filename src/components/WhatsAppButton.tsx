import { Button } from "@/components/ui/button";
import whatsappIcon from "@/assets/whatsapp-icon.png";

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
      className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg p-0 flex items-center justify-center animate-fade-in group hover:scale-110 transition-transform"
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="h-10 w-10 group-hover:scale-110 transition-transform" />
    </Button>
  );
};

export default WhatsAppButton;
