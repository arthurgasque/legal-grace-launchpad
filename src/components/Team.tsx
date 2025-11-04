import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";
import lawyer1 from "@/assets/lawyer-1.jpg";
import lawyer2 from "@/assets/lawyer-2.jpg";
import lawyer3 from "@/assets/lawyer-3.jpg";

const Team = () => {
  const team = [
    {
      name: "Dra. Maria Silva Santos",
      specialty: "Direito de Família e Sucessões",
      image: lawyer1,
      email: "maria.silva@escritorio.com.br",
      whatsapp: "5511999999999",
    },
    {
      name: "Dr. Carlos Eduardo Mendes",
      specialty: "Direito Trabalhista e Previdenciário",
      image: lawyer2,
      email: "carlos.mendes@escritorio.com.br",
      whatsapp: "5511888888888",
    },
    {
      name: "Dr. Roberto Almeida Junior",
      specialty: "Direito Civil e Contratos",
      image: lawyer3,
      email: "roberto.almeida@escritorio.com.br",
      whatsapp: "5511777777777",
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
              className="border-border hover:shadow-lg transition-all duration-300 animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-darker/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
