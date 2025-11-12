import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, User } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Alex Sander Oliveira Farias",
      specialty: "Direito do Consumidor, Direito Bancário e Direito do Trabalho",
      description: "Bacharel em direito pela Universidade Federal do Rio Grande – FURG no ano de 2013. Com atuação voltada para o Direito do Consumidor, Direito Bancário e Direito do Trabalho, especialmente na defesa dos direitos dos trabalhadores reclamantes, busca oferecer uma assessoria jurídica personalizada, pautada na ética, transparência e na efetiva solução dos conflitos. Seu trabalho é guiado pelo compromisso em garantir justiça, segurança jurídica e resultados concretos para cada cliente.",
      email: "XXXXXXXX",
      whatsapp: "XXXXXXXX",
    },
    {
      name: "Hermes Medeiros Jr.",
      specialty: "Direito Tributário, Direito Civil e Direito do Trabalho",
      description: "Bacharel em direito pela Universidade Federal do Rio Grande – FURG no ano de 2013. Com atuação voltada para o Direito Tributário, Direito Civil e Direito do Trabalho, com foco na defesa dos interesses de empresas e empregadores, busca oferecer soluções jurídicas estratégicas, preventivas e eficientes. Seu trabalho é pautado na responsabilidade, técnica apurada e compromisso com a segurança jurídica e o equilíbrio nas relações empresariais.",
      email: "XXXXXXXX",
      whatsapp: "XXXXXXXX",
    },
    {
      name: "Djanine Lopes Pires Medeiros",
      specialty: "Direito do Trabalho, Direito Previdenciário e Planejamento Sucessório",
      description: "Bacharel em direito pela Universidade Federal do Rio Grande – FURG no ano de 2015 e especialização em Direito do Trabalho e Direito Previdenciário pela Anhanguera Educacional, possui ampla experiência em demandas contenciosas e assessoramento nas áreas trabalhista, previdenciária e sucessória. Destaca-se como especialista em inventários e planejamento sucessório, atuando de forma estratégica e de acordo com os objetivos individuais dos clientes. Seu compromisso aliado à experiência prática refletem a ética, a qualidade e a justiça em seu exercício profissional.",
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

        <div className="grid gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in bg-white border-2 hover:border-accent/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[300px_1fr] gap-0">
                  {/* Image placeholder */}
                  <div className="relative h-80 md:h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden group-hover:opacity-90 transition-opacity">
                    <User className="h-32 w-32 text-gray-400" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
                  </div>

                  {/* Info */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-accent font-semibold mb-4 uppercase tracking-wide">
                        {member.specialty}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                        {member.description}
                      </p>
                    </div>

                    <div className="flex gap-3">
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
