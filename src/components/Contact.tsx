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
      content: "XXXXXXXX",
      link: "#",
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

          {/* Map placeholder */}
          <Card className="overflow-hidden shadow-lg border-2 animate-fade-in">
            <div className="h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 text-lg font-medium">Localização do Escritório</p>
                <p className="text-gray-400 text-sm mt-2">Mapa do Google será integrado em breve</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
