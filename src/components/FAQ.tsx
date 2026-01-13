import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Quais são as demandas atendidas pelo escritório Medeiros Jr. Advocacia?",
      answer: "Atuamos nas mais diversas demandas, como: inventários, planejamento sucessório (testamentos, doações), planejamento matrimonial (contratos de casamento, namoro, pacto antinupcial), divórcios, pensão alimentícia, regularização de imóveis (usucapião), curatela/interdição, consultorias trabalhistas contenciosa e administrativa, assessoramento empresarial, reclamatórias trabalhistas, planejamento previdenciário RGPS, concessão de aposentadorias, auxílio doença/incapacidade, LOAS, execuções, superindividamento, empréstimos indevidos, ações contra convênios médicos, atraso na entrega de imóveis, elaboração e análise de contratos, isenção de imposto de renda."
    },
    {
      question: "O Escritório Medeiros Jr. Advocacia atende quais regiões?",
      answer: "O Medeiros Jr. Advocacia está sediado em Rio Grande – RS e atende toda a região Sul, além de prestar serviços jurídicos online para clientes em todo o Brasil."
    },
    {
      question: "Posso contratar os advogados do escritório de forma online para atendimento e prestação de serviços a distância?",
      answer: "Sim! Oferecemos consultoria jurídica online para clientes em todo o Brasil. Por WhatsApp ou videochamada, você agenda consultas, tira dúvidas e acompanha processos de qualquer lugar, com a mesma qualidade do atendimento presencial."
    },
    {
      question: "Como agendar um atendimento jurídico com o escritório?",
      answer: "Entre em contato pelo WhatsApp oficial do escritório que se encontra no ícone desta página. Você pode escolher atendimento presencial em Rio Grande ou consultoria jurídica online. Respondemos rapidamente para avaliar seu caso."
    },
    {
      question: "Quanto costuma ser o tempo de demora de um processo?",
      answer: "O prazo para a conclusão varia conforme a complexidade do caso. Mantemos você informado sobre cada etapa importante."
    },
    {
      question: "Qual o prazo para ingressar com uma ação trabalhista?",
      answer: "O prazo para reclamação trabalhista é de até 2 anos após o desligamento, limitado aos últimos 5 anos trabalhados. Agende um atendimento com a nossa equipe para avaliarmos suas possibilidades."
    },
    {
      question: "Quais verbas eu tenho direito em caso de demissão sem justa causa?",
      answer: "Na demissão sem justa causa, você tem direito a saldo de salário, aviso prévio, férias proporcionais, 13º proporcional, FGTS com multa de 40% e seguro-desemprego, além de outros que precisam da avaliação de um profissional especializado. Nosso escritório oferece atendimento para analisar sua rescisão e garantir todos os seus direitos trabalhistas."
    },
    {
      question: "Como pedir aposentadoria pelo INSS?",
      answer: "Para aposentadoria, é necessário reunir alguns documentos como registro de identidade, CPF, comprovantes de contribuição, carteira de trabalho, entre outros. É importante você possuir um assessoramento especializado para a realização do seu pedido junto ao INSS como forma de evitar transtornos futuros ou até mesmo perda de tempo. Nosso escritório oferece assessoria completa, desde o planejamento do seu melhor benefício até a concessão, garantindo sua satisfação total e sua fidelização como nosso cliente."
    },
    {
      question: "Qual a diferença entre advogado e defensor público?",
      answer: "O advogado particular oferece atendimento personalizado, contato direto e estratégia focada no seu caso. A Defensoria Pública atende casos específicos e são voltados para o atendimento de pessoas hipossuficientes."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div 
              className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4"
              data-aos="fade-down"
            >
              <HelpCircle className="h-5 w-5 text-accent" />
              <span className="text-accent text-sm font-semibold uppercase tracking-wide">Tire suas dúvidas</span>
            </div>
            
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4"
              data-aos="fade-up"
            >
              Perguntas Frequentes
            </h2>
            
            <p 
              className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Esclarecemos as principais dúvidas sobre nossos serviços e atuação
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-card border-0 px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-base sm:text-lg font-semibold text-primary pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
