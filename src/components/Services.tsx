import { Scale, Briefcase, Users, FileText, Gavel, Building, ShoppingCart, CreditCard, Landmark } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Direito do Consumidor",
      description: "Defesa dos direitos dos consumidores, assegurando o cumprimento das normas que regulam as relações de consumo. Atuação em casos de práticas abusivas, contratos, cobranças indevidas e vícios de produtos ou serviços.",
    },
    {
      icon: CreditCard,
      title: "Direito Bancário",
      description: "Consultoria e representação em questões relacionadas a instituições financeiras, como revisão de contratos, cobranças excessivas, negociações e demandas judiciais ou extrajudiciais.",
    },
    {
      icon: Briefcase,
      title: "Direito do Trabalho – Reclamante",
      description: "Foco na defesa de trabalhadores. Atuamos em demandas relacionadas a verbas rescisórias, assédio moral, condições de trabalho, acidentes laborais e outros direitos trabalhistas.",
    },
    {
      icon: Building,
      title: "Direito do Trabalho – Reclamado",
      description: "Defesa de empresas, empregadores e organizações em demandas trabalhistas, com uma atuação estratégica e preventiva, visando a regularidade e sustentabilidade nas relações de trabalho.",
    },
    {
      icon: Landmark,
      title: "Direito Tributário",
      description: "Assessoria em questões tributárias para empresas e pessoas físicas, com foco na redução de passivos tributários, planejamento fiscal e contencioso tributário.",
    },
    {
      icon: Scale,
      title: "Direito Civil",
      description: "Atuação em demandas contratuais, responsabilidade civil, direito das obrigações, locações, cobranças e demais conflitos que envolvam relações interpessoais.",
    },
    {
      icon: Users,
      title: "Sucessões",
      description: "Consultoria e atuação em inventários, testamentos, planejamento sucessório e partilha de bens, visando à preservação de patrimônio e segurança jurídica nas relações familiares.",
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
