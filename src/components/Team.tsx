import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Mail, MessageCircle, User } from "lucide-react";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const team = [
    {
      name: "Alex Sander Oliveira Farias",
      specialty: "Direito do Consumidor, Direito Bancário e Direito do Trabalho",
      description: "Bacharel em direito pela Universidade Federal do Rio Grande – FURG no ano de 2013. Com atuação voltada para o Direito do Consumidor, Direito Bancário e Direito do Trabalho, especialmente na defesa dos direitos dos trabalhadores reclamantes, busca oferecer uma assessoria jurídica personalizada, pautada na ética, transparência e na efetiva solução dos conflitos. Seu trabalho é guiado pelo compromisso em garantir justiça, segurança jurídica e resultados concretos para cada cliente.",
      email: "XXXXXXXX",
      whatsapp: "5553984040489",
    },
    {
      name: "Hermes Medeiros Jr.",
      specialty: "Direito Tributário, Direito Civil e Direito do Trabalho",
      description: "Bacharel em direito pela Universidade Federal do Rio Grande – FURG no ano de 2013. Com atuação voltada para o Direito Tributário, Direito Civil e Direito do Trabalho, com foco na defesa dos interesses de empresas e empregadores, busca oferecer soluções jurídicas estratégicas, preventivas e eficientes. Seu trabalho é pautado na responsabilidade, técnica apurada e compromisso com a segurança jurídica e o equilíbrio nas relações empresariais.",
      email: "XXXXXXXX",
      whatsapp: "5553984060833",
    },
    {
      name: "Djanine Lopes Pires Medeiros",
      specialty: "Direito do Trabalho, Direito Previdenciário e Planejamento Sucessório",
      description: "Bacharel em direito pela Universidade Federal do Rio Grande – FURG no ano de 2015 e especialização em Direito do Trabalho e Direito Previdenciário pela Anhanguera Educacional, possui ampla experiência em demandas contenciosas e assessoramento nas áreas trabalhista, previdenciária e sucessória. Destaca-se como especialista em inventários e planejamento sucessório, atuando de forma estratégica e de acordo com os objetivos individuais dos clientes. Seu compromisso aliado à experiência prática refletem a ética, a qualidade e a justiça em seu exercício profissional.",
      email: "XXXXXXXX",
      whatsapp: "5553984324397",
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
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in bg-white border-2 hover:border-accent/50 cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedMember(index)}
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
                  <p className="text-sm text-accent font-medium mb-4 line-clamp-2">
                    {member.specialty}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-accent/50 hover:bg-accent hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedMember(index);
                    }}
                  >
                    Ver Perfil Completo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={selectedMember !== null} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedMember !== null && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center flex-shrink-0">
                      <User className="h-10 w-10 text-gray-400" />
                    </div>
                    <div className="text-left flex-1">
                      <DialogTitle className="text-2xl font-bold text-primary mb-1">
                        {team[selectedMember].name}
                      </DialogTitle>
                      <p className="text-sm text-accent font-semibold uppercase tracking-wide">
                        {team[selectedMember].specialty}
                      </p>
                    </div>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3 text-lg">Sobre</h4>
                    <p className="text-muted-foreground leading-relaxed text-justify">
                      {team[selectedMember].description}
                    </p>
                  </div>

                  {/* Contact Buttons */}
                  <div>
                    <h4 className="font-semibold text-primary mb-3 text-lg">Entrar em Contato</h4>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1 border-accent/50 hover:bg-accent hover:text-white"
                        onClick={() => window.open(`mailto:${team[selectedMember].email}`)}
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </Button>
                      <Button
                        className="flex-1 bg-gradient-red hover:opacity-90"
                        onClick={() =>
                          window.open(
                            `https://wa.me/${team[selectedMember].whatsapp}?text=Olá, gostaria de falar com ${team[selectedMember].name}`,
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
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Team;
