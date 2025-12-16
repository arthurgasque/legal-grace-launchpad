import { Scale, Briefcase, Users, ShoppingCart, CreditCard, Landmark, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Direito do Trabalho",
      description: "Foco na defesa de trabalhadores. Atuamos em demandas relacionadas a reconhecimento de vínculo, verbas rescisórias, revisão de salário, jornada de trabalho, assédio moral, condições de trabalho, acidentes laborais e outros direitos trabalhistas.",
    },
    {
      icon: Shield,
      title: "Direito Previdenciário",
      description: "Atuamos na interposição e acompanhamento de processos tanto administrativos, junto à Previdência Social, quanto judiciais, na busca do Direito de pretensos beneficiários junto ao Regime Geral da Previdência. Entre os benefícios podemos destacar auxílio incapacidade temporária, auxílio-acidente, aposentadorias, auxílio-reclusão, salário maternidade, pensão por morte, benefícios assistenciais (LOAS), retificação, reconhecimento, averbação de vínculos, planejamentos previdenciários e outros.",
    },
    {
      icon: Users,
      title: "Direito de Família e Sucessões",
      description: "Consultoria e atuação em inventários extrajudicial – cartórios – e judicial, testamentos, planejamento sucessório (testamentos, doações), partilha de bens, visando à preservação de patrimônio e segurança jurídica nas relações familiares. Além disso, atuamos nos procedimentos de regularização e transferência de patrimônio, bem como no levantamento de resíduos de benefícios ou valores e procedimentos que necessitem de alvará judicial.",
    },
    {
      icon: Scale,
      title: "Direito Civil",
      description: "Atuação específica em planejamento matrimonial (contratos de casamento, namoro, pacto antinupcial), divórcios, pensão alimentícia, regularização de imóveis (usucapião), curatela/interdição, locações, cobranças/execuções, superendividamento, empréstimos indevidos, ações contra convênios médicos, atraso na entrega de imóveis, elaboração e análise de contratos e demais conflitos que envolvam relações interpessoais.",
    },
    {
      icon: ShoppingCart,
      title: "Direito do Consumidor",
      description: "Defesa dos direitos dos consumidores, assegurando o cumprimento das normas que regulam as relações de consumo. Atuação em casos de práticas abusivas, contratos, cobranças indevidas e vícios de produtos ou serviços.",
    },
    {
      icon: Landmark,
      title: "Direito Tributário",
      description: "Assessoria em questões tributárias para empresas e pessoas físicas, com foco na redução de passivos tributários, planejamento fiscal e contencioso tributário.",
    },
    {
      icon: CreditCard,
      title: "Direito Bancário",
      description: "Consultoria e representação em questões relacionadas a instituições financeiras, como revisão de contratos, cobranças excessivas, negociações e demandas judiciais ou extrajudiciais.",
    },
  ];

  return (
    <section id="servicos" className="py-16 sm:py-20 lg:py-24 bg-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div 
            className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4"
            data-aos="fade-down"
          >
            <Scale className="h-5 w-5 text-accent" />
            <span className="text-accent text-sm font-semibold uppercase tracking-wide">Especialidades</span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-4"
            data-aos="fade-up"
          >
            Áreas de Atuação
          </h2>
          
          <p 
            className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Atendemos com expertise nas seguintes áreas do Direito
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-2 bg-white overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-7 w-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
