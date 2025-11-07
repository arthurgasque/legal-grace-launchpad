import { useEffect } from "react";
import { ArrowLeft, Scale, FileText, Clock, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";

const CartaAoCliente = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-dark py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Button
                variant="ghost"
                className="mb-6 text-white hover:text-accent"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar ao site
              </Button>
              
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6">
                <Scale className="h-5 w-5 text-accent" />
                <span className="text-white font-medium">Transparência e Confiança</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6">
                Carta ao Cliente
              </h1>
              
              <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Conheça nossa filosofia de trabalho, nossos valores e como atuamos para defender seus direitos
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <div className="mb-12 sm:mb-16">
                <p className="text-lg leading-relaxed text-foreground mb-6">
                  Prezado Cliente,
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  É com grande satisfação que recebemos sua confiança para representá-lo juridicamente. 
                  Este documento tem como objetivo esclarecer de forma transparente como funciona nossa 
                  relação profissional, nossos métodos de trabalho e o que você pode esperar de nossa atuação.
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12 sm:mb-16">
                <div className="bg-gray-light p-6 rounded-lg border-l-4 border-accent">
                  <FileText className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Contratação</h3>
                  <p className="text-muted-foreground">
                    Após análise inicial do caso, formalizamos a contratação através de contrato claro e objetivo
                  </p>
                </div>

                <div className="bg-gray-light p-6 rounded-lg border-l-4 border-accent">
                  <Users className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Equipe Dedicada</h3>
                  <p className="text-muted-foreground">
                    Profissionais especializados acompanham seu caso do início ao fim
                  </p>
                </div>

                <div className="bg-gray-light p-6 rounded-lg border-l-4 border-accent">
                  <Clock className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Prazos Realistas</h3>
                  <p className="text-muted-foreground">
                    Informamos com honestidade sobre prazos e tramitação processual
                  </p>
                </div>

                <div className="bg-gray-light p-6 rounded-lg border-l-4 border-accent">
                  <Shield className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Ética e Sigilo</h3>
                  <p className="text-muted-foreground">
                    Sigilo absoluto e conduta ética em todas as nossas ações
                  </p>
                </div>
              </div>

              {/* Content Sections */}
              <div className="space-y-10 sm:space-y-12">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-primary mb-4">
                    Como Trabalhamos
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
                    Nosso escritório atua de forma estratégica e personalizada. Cada caso é único e 
                    merece atenção individualizada. Realizamos uma análise minuciosa da sua situação, 
                    estudamos a jurisprudência aplicável e traçamos a melhor estratégia jurídica para 
                    alcançar o resultado desejado.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    Mantemos comunicação constante com nossos clientes, fornecendo atualizações periódicas 
                    sobre o andamento dos processos e estando sempre disponíveis para esclarecer dúvidas 
                    e prestar orientações.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-primary mb-4">
                    Funcionamento Interno
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
                    Nossa equipe é composta por advogados especializados em diferentes áreas do Direito, 
                    permitindo uma atuação multidisciplinar e completa. Utilizamos sistemas modernos de 
                    gestão processual que garantem controle rigoroso de prazos e acompanhamento eficiente 
                    de todas as demandas.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    Todos os membros da equipe trabalham de forma integrada, compartilhando conhecimentos 
                    e experiências para oferecer a melhor solução jurídica para cada cliente.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-primary mb-4">
                    Expectativas e Transparência
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
                    É fundamental que haja clareza sobre o que esperar do processo judicial. Processos 
                    judiciais demandam tempo e podem passar por diferentes instâncias. Nosso compromisso 
                    é trabalhar incansavelmente pela sua causa, mas sempre com transparência sobre os 
                    desafios e possibilidades reais de cada situação.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    Não fazemos promessas de resultados impossíveis. Nossa atuação é baseada em análise 
                    técnica, experiência prática e aplicação ética das normas jurídicas.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-primary mb-4">
                    Prazo dos Processos
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
                    A duração de um processo depende de diversos fatores: complexidade da causa, volume 
                    de processos no tribunal, possibilidade de recursos e particularidades de cada caso. 
                    Processos simples podem ser resolvidos em meses, enquanto casos mais complexos podem 
                    levar anos.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    Acompanhamos cada etapa com atenção e fazemos tudo ao nosso alcance para obter a 
                    resolução mais rápida possível, sempre priorizando a qualidade e eficácia da defesa.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-primary mb-4">
                    Comunicação e Atendimento
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
                    Valorizamos a relação de confiança com nossos clientes. Estamos disponíveis para 
                    atendimento presencial, por telefone, e-mail ou WhatsApp. Respondemos dúvidas, 
                    fornecemos cópias de documentos e mantemos você sempre informado sobre qualquer 
                    movimentação em seu processo.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    Seu feedback é importante para nós. Estamos sempre abertos ao diálogo e comprometidos 
                    em oferecer um serviço de excelência.
                  </p>
                </div>

                <div className="bg-accent/5 border-l-4 border-accent p-6 sm:p-8 rounded-r-lg">
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-primary mb-4">
                    Nosso Compromisso
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
                    Nosso compromisso com você vai além da advocacia técnica. Buscamos construir uma 
                    relação de confiança, respeito e transparência. Cada cliente é tratado com a atenção 
                    e dedicação que merece, independentemente da complexidade ou valor da causa.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-primary font-semibold">
                    Conte conosco para defender seus direitos com ética, competência e determinação.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 sm:mt-16 text-center">
                <p className="text-lg text-muted-foreground mb-6">
                  Ficou com alguma dúvida? Entre em contato conosco
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-red hover:opacity-90 text-lg px-8 py-6"
                  onClick={() => {
                    window.open(
                      `https://wa.me/XXXXXXXX?text=Olá, li a Carta ao Cliente e gostaria de mais informações`,
                      "_blank"
                    );
                  }}
                >
                  Falar com Advogado
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default CartaAoCliente;
