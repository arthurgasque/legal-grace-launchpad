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
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] p-0 flex items-center justify-center animate-fade-in group hover:scale-110 transition-all duration-300 animate-[pulse_3s_ease-in-out_infinite]"
      aria-label="Entrar em contato pelo WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="h-8 w-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
    </Button>
  );
};

export default WhatsAppButton;
