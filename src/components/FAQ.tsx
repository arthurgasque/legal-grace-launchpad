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
      question: "Como funciona a primeira consulta?",
      answer: "A primeira consulta pode ser agendada por WhatsApp, telefone ou e-mail. Durante o atendimento, ouvimos atentamente sua situação, analisamos a viabilidade jurídica e apresentamos as melhores estratégias para seu caso, de forma clara e transparente."
    },
    {
      question: "Quais são as formas de pagamento?",
      answer: "Trabalhamos com diversas modalidades de pagamento para facilitar o acesso à justiça: honorários fixos, parcelamento, honorários de êxito (conforme a natureza da causa) e convênios. Entre em contato para conhecer a melhor opção para seu caso."
    },
    {
      question: "Quanto tempo demora um processo?",
      answer: "O tempo de tramitação varia conforme a complexidade do caso, a área do direito envolvida e a instância judicial. Mantemos nossos clientes sempre informados sobre o andamento processual e trabalhamos para obter a resolução mais rápida e eficaz possível."
    },
    {
      question: "O escritório atende em outras cidades?",
      answer: "Sim! Atendemos clientes em todo o Brasil. Além do atendimento presencial em nosso escritório, oferecemos consultas online por videoconferência, garantindo comodidade e agilidade independentemente da sua localização."
    },
    {
      question: "Como faço para acompanhar meu processo?",
      answer: "Você receberá atualizações periódicas sobre seu processo por e-mail, WhatsApp ou telefone. Além disso, nossa equipe está sempre disponível para esclarecer dúvidas e fornecer informações detalhadas sobre o andamento da sua causa."
    },
    {
      question: "Qual a diferença entre advogado e escritório de advocacia?",
      answer: "Um escritório de advocacia oferece uma estrutura completa com múltiplos profissionais especializados em diferentes áreas, garantindo atendimento mais ágil, expertise diversificada e suporte integral ao cliente. Nossa equipe trabalha de forma integrada para oferecer as melhores soluções jurídicas."
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
