import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, User } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "[Nome do Advogado(a)]",
      specialty: "Especialista em Direito Civil",
      email: "XXXXXXXX",
      whatsapp: "XXXXXXXX",
    },
    {
      name: "[Nome do Advogado(a)]",
      specialty: "Especialista em Direito Trabalhista",
      email: "XXXXXXXX",
      whatsapp: "XXXXXXXX",
    },
    {
      name: "[Nome do Advogado(a)]",
      specialty: "Especialista em Direito de Família",
      email: "XXXXXXXX",
      whatsapp: "XXXXXXXX",
    },
  ];

  return (
    <section id="equipe" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Nossa Equipe
          </h2>
          <p className="text-lg text-muted-foreground">
            Profissionais qualificados e comprometidos em oferecer o melhor atendimento jurídico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in bg-white border-2 hover:border-accent/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                {/* Image placeholder */}
                <div className="relative h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden group-hover:opacity-90 transition-opacity">
                  <User className="h-32 w-32 text-gray-400" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                </div>

                {/* Info */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-medium mb-4">
                    {member.specialty}
                  </p>

                  <div className="flex gap-2 justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-accent/50 hover:bg-accent hover:text-white"
                      onClick={() => window.open(`mailto:${member.email}`)}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-red hover:opacity-90"
                      onClick={() =>
                        window.open(
                          `https://wa.me/${member.whatsapp}?text=Olá, gostaria de falar com ${member.name}`,
                          "_blank"
                        )
                      }
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
