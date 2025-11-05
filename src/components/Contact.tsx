import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      info: "XXXXXXXX",
      link: "#",
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "XXXXXXXX",
      link: "#",
    },
    {
      icon: MapPin,
      title: "Endereço",
      info: "XXXXXXXX",
      link: "#",
    },
  ];

  return (
    <section id="contato" className="py-20 sm:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-4">
            Entre em <span className="text-accent">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você. Envie sua mensagem ou entre em contato pelos
            canais abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contactInfo.map((item, index) => (
            <Card
              key={index}
              className="border-border hover:border-accent transition-all hover:shadow-red animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-4">
                  <item.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-poppins font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <a
                  href={item.link}
                  className="text-muted-foreground hover:text-accent transition-colors"
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {item.info}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
