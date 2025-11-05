import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, User } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "[Nome do Advogado(a)]",
      specialty: "[Especialidade]",
      email: "XXXXXXXX",
      whatsapp: "XXXXXXXX",
    },
    {
      name: "[Nome do Advogado(a)]",
      specialty: "[Especialidade]",
      email: "XXXXXXXX",
      whatsapp: "XXXXXXXX",
    },
    {
      name: "[Nome do Advogado(a)]",
      specialty: "[Especialidade]",
      email: "XXXXXXXX",
      whatsapp: "XXXXXXXX",
    },
  ];

  return (
    <section id="equipe" className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-4">
            Nossa <span className="text-accent">Equipe</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais experientes e comprometidos em oferecer as melhores soluções
            jurídicas para você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden bg-secondary/50 flex items-center justify-center h-80">
                  <User className="w-24 h-24 text-muted-foreground/30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-poppins font-semibold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-4">{member.specialty}</p>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:border-accent hover:text-accent"
                      onClick={() => window.open(`mailto:${member.email}`)}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      E-mail
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 bg-accent hover:bg-accent/90"
                      onClick={() =>
                        window.open(
                          `https://wa.me/${member.whatsapp}?text=Olá, gostaria de agendar uma consulta`,
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
