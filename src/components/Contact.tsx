import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "XXXXXXXX",
      link: "tel:XXXXXXXX",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "XXXXXXXX",
      link: "mailto:XXXXXXXX",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "R. Gen. Canabarro, 468 - Centro, Rio Grande - RS, 96200-200",
      link: "https://maps.app.goo.gl/4g3wVdbjBPAbA9Dt7",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atendê-lo. Envie sua mensagem ou entre em contato através dos nossos canais.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-md transition-all hover:scale-105 border-2 hover:border-accent/50"
              >
                <CardContent className="p-6">
                  <a
                    href={item.link}
                    className="flex flex-col items-center text-center gap-4"
                  >
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent transition-all">
                      <item.icon className="h-8 w-8 text-accent group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors text-lg">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{item.content}</p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Google Maps */}
          <Card className="overflow-hidden shadow-lg border-2 animate-fade-in">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d711.0206412124162!2d-52.101972522432014!3d-32.03669029908207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95119dffd4bfd585%3A0x172729c28eb704fd!2sMedeiros%20Jr%20Advocacia%20Personalizada!5e0!3m2!1spt-BR!2sbr!4v1763062892139!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Medeiros Jr. Advocacia"
              className="w-full h-96"
            />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
