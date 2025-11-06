import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg animate-fade-in border-2 hover:border-accent/30 transition-all">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-2 focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-2 focus:border-accent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Descreva como podemos ajudá-lo"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="border-2 focus:border-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-red hover:opacity-90 transition-all shadow-red text-base py-6 hover:scale-105"
                >
                  Enviar Mensagem
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8 animate-fade-in">
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-md transition-all hover:scale-105 border-2 hover:border-accent/50"
                >
                  <CardContent className="p-6">
                    <a
                      href={item.link}
                      className="flex items-center gap-4"
                    >
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent transition-all">
                        <item.icon className="h-6 w-6 text-accent group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.content}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map placeholder */}
            <Card className="overflow-hidden shadow-lg border-2">
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">Mapa será adicionado em breve</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
