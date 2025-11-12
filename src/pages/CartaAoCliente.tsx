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
                variant="link"
                className="mb-6 text-white hover:text-white/80 p-0"
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
                É essencial que você esteja bem informado sobre o funcionamento do nosso escritório e dos processos judiciais. Para isso, gostaríamos de esclarecer alguns pontos importantes sobre como trabalhamos, os tempos de tramitação e os desafios enfrentados no sistema judiciário brasileiro.
              </p>
              </div>

              {/* Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6 mb-12 sm:mb-16">
                <div className="bg-gray-light p-6 rounded-lg border-l-4 border-accent">
                  <Users className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Equipe Integrada</h3>
                  <p className="text-muted-foreground">
                    Estrutura colaborativa com advogados e especialistas atuando em diferentes etapas
                  </p>
                </div>

                <div className="bg-gray-light p-6 rounded-lg border-l-4 border-accent">
                  <FileText className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Honorários Transparentes</h3>
                  <p className="text-muted-foreground">
                    Percentual sobre o benefício obtido, acordado de forma clara
                  </p>
                </div>

                <div className="bg-gray-light p-6 rounded-lg border-l-4 border-accent">
                  <Clock className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Comunicação Direta</h3>
                  <p className="text-muted-foreground">
                    Atendimento via WhatsApp para consultas, audiências e atualizações
                  </p>
                </div>

                <div className="bg-gray-light p-6 rounded-lg border-l-4 border-accent">
                  <Shield className="h-8 w-8 text-accent mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-2">Segurança e Ética</h3>
                  <p className="text-muted-foreground">
                    Compromisso com a Justiça e defesa dos direitos dos clientes
                  </p>
                </div>
              </div>

              {/* Content Sections */}
              <div className="space-y-10 sm:space-y-12">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-primary mb-4">
                    Nossa Equipe e Forma de Contratação
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
                    Nosso escritório é composto por uma equipe de advogados e colaboradores altamente qualificados, que trabalham de forma conjunta para garantir a melhor experiência e atendimento aos nossos clientes.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    Ao contratar os serviços do Medeiros Jr. Associados, você estará confiando em uma estrutura colaborativa. Isso significa que, embora um advogado possa ser seu primeiro ponto de contato, outros integrantes especializados da equipe poderão atuar em diferentes etapas do processo, desde audiências até a realização de cálculos e pareceres jurídicos. Nosso modelo de trabalho integrado assegura que cada caso seja tratado com o máximo de eficiência e expertise.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-primary mb-4">
                    Honorários e Consultas
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
                    As consultas realizadas no momento inicial do atendimento ou ao longo do andamento processual, em regra, não são cobradas.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    Os honorários advocatícios geralmente correspondem a um percentual sobre o benefício financeiro obtido com a solução do caso e são acordados de forma transparente, conforme as especificidades de cada situação.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-primary mb-4">
                    Nosso Canal Oficial de Comunicação
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
                    Para facilitar o atendimento, disponibilizamos canal via WhatsApp através dos contatos diretos da nossa equipe.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
                    Por esse canal, você pode:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-base sm:text-lg leading-relaxed text-muted-foreground mb-4 ml-4">
                    <li>Agendar consultas e atendimentos;</li>
                    <li>Obter atualizações sobre o andamento processual;</li>
                    <li>Receber informações sobre audiências e perícias;</li>
                    <li>Tratar de questões financeiras com nossa equipe.</li>
                  </ul>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 sm:p-8 rounded-r-lg">
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-red-700 mb-4">
                    Cuidado com Golpes
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-red-900">
                    Caso receba mensagens ou ligações de outros números solicitando pagamentos antecipados, não realize transferências e entre diretamente em contato conosco para confirmar qualquer informação. Este é um problema que tem afetado profissionais em todo o país, e é nosso compromisso alertar nossos clientes para evitar qualquer situação de fraude.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-primary mb-4">
                    Audiência na Justiça do Trabalho
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
                    Nas ações trabalhistas, a primeira audiência é obrigatória, e sua presença é indispensável. Caso o cliente não compareça, o processo poderá ser arquivado.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    Geralmente, após 60 dias da contratação, já é possível conhecer a data da audiência. Assim que obtivermos essa informação, nossa equipe entrará em contato para fornecer os detalhes necessários sobre data, horário e orientações pertinentes.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-primary mb-4">
                    O Tempo dos Processos
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
                    Sabemos o quanto pode ser desafiador lidar com a demora nos processos judiciais. Entretanto, é importante destacar que o andamento de cada etapa não depende apenas do advogado, mas também de diversos fatores externos, como o volume de processos, a atuação de juízes, peritos, servidores, representantes do Ministério Público e recursos nos tribunais superiores.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    Além disso, quando o processo chega à fase dos tribunais, o tempo pode ser consideravelmente maior devido à sobrecarga enfrentada pelo sistema judiciário. Infelizmente, essas circunstâncias muitas vezes estão além do alcance da advocacia.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-primary mb-4">
                    A Possibilidade de Êxito
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
                    Uma das maiores preocupações dos nossos clientes é saber se irão vencer a ação. No entanto, ressaltamos que o sucesso de um processo depende de inúmeros fatores, como interpretação de provas, testemunhas, documentos apresentados e a própria postura dos juízes quanto à aplicação das leis.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    Embora seja possível avaliar tendências jurisprudenciais, não podemos garantir o resultado. Nosso compromisso é trabalhar com ética, técnica e dedicação para buscar sempre as melhores alternativas para o seu caso.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-primary mb-4">
                    O Pagamento do Processo: Quando Ocorre?
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
                    Quando o processo chega ao fim e a Justiça reconhece o direito do cliente, inicia-se a fase de execução, onde o valor reconhecido é liquidado e transformado em um montante exato a ser pago.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
                    Essa fase, contudo, pode ser tão ou mais demorada que o processo principal, pois envolve etapas burocráticas como cálculos, impugnações, penhoras, leilões e outros trâmites legais. Nosso trabalho é manter você informado e conduzido com segurança durante todo o processo.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    Se o processo envolver órgãos públicos, ele seguirá para a fase de precatórios, que exige habilitação no orçamento da administração pública. Ainda que regularmente prevista em lei, o pagamento pelos entes públicos nem sempre ocorre dentro do prazo estipulado.
                  </p>
                </div>

                <div className="bg-accent/5 border-l-4 border-accent p-6 sm:p-8 rounded-r-lg">
                  <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-primary mb-4">
                    Confie em Nosso Trabalho
                  </h2>
                  <p className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-4">
                    Cada processo é único, e comparações com casos de terceiros podem gerar expectativas irreais. Nossa equipe trabalha com seriedade, transparência e ética profissional para buscar os melhores resultados possíveis. O escritório Medeiros Jr. Associados construiu sua trajetória com base no compromisso inabalável com a Justiça e a defesa dos direitos dos nossos clientes.
                  </p>
                  <p className="text-base sm:text-lg leading-relaxed text-primary font-semibold">
                    Conte conosco para transformar desafios jurídicos em soluções sólidas e eficazes!
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
