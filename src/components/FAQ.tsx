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
      question: "Como funciona a contratação no escritório?",
      answer: "Nosso escritório é composto por uma equipe de advogados e colaboradores altamente qualificados que trabalham de forma conjunta. Ao contratar o Medeiros Jr. Associados, você contará com uma estrutura colaborativa, onde diferentes especialistas poderão atuar em etapas específicas do processo, desde audiências até cálculos e pareceres jurídicos, garantindo máxima eficiência e expertise."
    },
    {
      question: "As consultas são cobradas?",
      answer: "As consultas realizadas no momento inicial do atendimento ou ao longo do andamento processual, em regra, não são cobradas. Os honorários advocatícios geralmente correspondem a um percentual sobre o benefício financeiro obtido com a solução do caso e são acordados de forma transparente, conforme as especificidades de cada situação."
    },
    {
      question: "Qual o canal oficial de comunicação?",
      answer: "Disponibilizamos canal via WhatsApp através dos contatos diretos da nossa equipe. Por esse canal, você pode agendar consultas, obter atualizações sobre o andamento processual, receber informações sobre audiências e perícias, e tratar de questões financeiras. Atenção: caso receba mensagens de outros números solicitando pagamentos, entre em contato conosco para confirmar."
    },
    {
      question: "Quanto tempo demora um processo?",
      answer: "O andamento de cada etapa não depende apenas do advogado, mas de diversos fatores externos como volume de processos, atuação de juízes, peritos, servidores e recursos nos tribunais superiores. Quando o processo chega à fase dos tribunais, o tempo pode ser consideravelmente maior devido à sobrecarga do sistema judiciário. Mantemos você sempre informado sobre cada etapa."
    },
    {
      question: "Como funciona a audiência na Justiça do Trabalho?",
      answer: "Nas ações trabalhistas, a primeira audiência é obrigatória e sua presença é indispensável - caso não compareça, o processo poderá ser arquivado. Geralmente, após 60 dias da contratação, já é possível conhecer a data da audiência. Assim que obtivermos essa informação, nossa equipe entrará em contato com todos os detalhes sobre data, horário e orientações necessárias."
    },
    {
      question: "Posso ter certeza de que vou ganhar a ação?",
      answer: "O sucesso de um processo depende de inúmeros fatores, como interpretação de provas, testemunhas, documentos apresentados e a postura dos juízes quanto à aplicação das leis. Embora seja possível avaliar tendências jurisprudenciais, não podemos garantir o resultado. Nosso compromisso é trabalhar com ética, técnica e dedicação para buscar sempre as melhores alternativas para o seu caso."
    },
    {
      question: "Quando ocorre o pagamento do processo?",
      answer: "Quando a Justiça reconhece o direito do cliente, inicia-se a fase de execução para liquidação do valor. Essa fase pode ser tão ou mais demorada que o processo principal, pois envolve cálculos, impugnações, penhoras e leilões. Se envolver órgãos públicos, seguirá para a fase de precatórios, que exige habilitação no orçamento público. Nosso trabalho é mantê-lo informado durante todo o processo."
    },
    {
      question: "Como me protejo de golpes?",
      answer: "Caso receba mensagens ou ligações de números desconhecidos solicitando pagamentos antecipados, NÃO realize transferências. Entre diretamente em contato conosco através dos números oficiais da equipe para confirmar qualquer informação. Este é um problema que tem afetado profissionais em todo o país, e é nosso compromisso alertar nossos clientes para evitar fraudes."
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
