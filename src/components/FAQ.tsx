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
      question: "O que fazer quando sou demitido sem justa causa em Rio Grande?",
      answer: "Na demissão sem justa causa, você tem direito a saldo de salário, aviso prévio, férias proporcionais, 13º proporcional, FGTS com multa de 40% e seguro-desemprego. O Medeiros Jr. Advocacia oferece consultoria jurídica gratuita para analisar sua rescisão e garantir todos os seus direitos trabalhistas."
    },
    {
      question: "Como funciona a ação trabalhista para receber horas extras não pagas?",
      answer: "Se você trabalhou além da jornada sem receber, pode entrar com reclamação trabalhista em até 2 anos após a rescisão. Nosso escritório atua em Rio Grande, região Sul e todo Brasil, inclusive com atendimento jurídico online para recuperar suas horas extras."
    },
    {
      question: "Qual o prazo para entrar com ação trabalhista no Rio Grande do Sul?",
      answer: "O prazo para reclamação trabalhista é de até 2 anos após o desligamento, limitado aos últimos 5 anos trabalhados. Agende uma consulta gratuita com advogado trabalhista para avaliar seu caso antes que o prazo prescreva."
    },
    {
      question: "Advogado trabalhista cobra quanto? Como funcionam os honorários?",
      answer: "No Medeiros Jr., a consulta inicial é gratuita. Os honorários advocatícios geralmente são um percentual do valor obtido na ação, acordado de forma transparente. Trabalhamos com atendimento presencial em Rio Grande e online para todo o Brasil."
    },
    {
      question: "Como pedir aposentadoria pelo INSS em Rio Grande?",
      answer: "Para aposentadoria, é necessário reunir documentos de identidade, CPF, comprovantes de contribuição e carteira de trabalho. O Medeiros Jr. oferece assessoria completa para aposentadoria por idade, tempo de contribuição ou invalidez, com atendimento em Rio Grande e região Sul."
    },
    {
      question: "O que é revisão de aposentadoria e quando posso pedir?",
      answer: "A revisão de aposentadoria corrige cálculos errados do INSS e pode aumentar seu benefício. O prazo é de até 10 anos da concessão. Nosso escritório realiza análise gratuita para verificar se você tem direito à revisão previdenciária."
    },
    {
      question: "Como funciona o divórcio consensual em Rio Grande RS?",
      answer: "No divórcio consensual, o casal entra em acordo sobre partilha, guarda e pensão. Pode ser feito em cartório (se não houver filhos menores) ou judicialmente. O Medeiros Jr. atende em Rio Grande com consultoria para divórcio, pensão alimentícia e guarda compartilhada."
    },
    {
      question: "Posso contratar advogado online para atendimento jurídico à distância?",
      answer: "Sim! Oferecemos consultoria jurídica online para clientes em todo o Brasil. Por WhatsApp ou videochamada, você agenda consultas, tira dúvidas e acompanha processos de qualquer lugar, com a mesma qualidade do atendimento presencial em Rio Grande."
    },
    {
      question: "Escritório de advocacia em Rio Grande atende quais regiões?",
      answer: "O Medeiros Jr. Advocacia está sediado em Rio Grande – RS e atende toda a região Sul, além de prestar serviços jurídicos online para clientes em todo o Brasil. Atuamos em Direito Trabalhista, Previdenciário, Família, Civil e Consumidor."
    },
    {
      question: "Como agendar consulta jurídica gratuita com advogado?",
      answer: "Entre em contato pelo WhatsApp oficial do escritório. A consulta inicial é gratuita e você pode escolher atendimento presencial em Rio Grande ou consultoria jurídica online. Respondemos rapidamente para avaliar seu caso."
    },
    {
      question: "Quanto tempo demora um processo trabalhista ou previdenciário?",
      answer: "O prazo varia conforme a complexidade: processos trabalhistas costumam levar de 1 a 3 anos; previdenciários, de 6 meses a 2 anos. Mantemos você informado sobre cada etapa via WhatsApp e atualizações regulares."
    },
    {
      question: "Qual a diferença entre advogado e defensor público?",
      answer: "O advogado particular oferece atendimento personalizado, contato direto e estratégia focada no seu caso. A Defensoria Pública atende apenas quem não pode pagar advogado. No Medeiros Jr., a consulta é gratuita e os honorários só são cobrados em caso de êxito."
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
