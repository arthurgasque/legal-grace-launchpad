import { Scale, Briefcase, Users, FileText, Gavel, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Direito Trabalhista",
      description: "Defesa de direitos trabalhistas, rescisões, acordos e processos judiciais com estratégia e agilidade.",
    },
    {
      icon: Scale,
      title: "Direito Civil",
      description: "Assessoria completa em contratos, indenizações, responsabilidade civil e resolução de litígios.",
    },
    {
      icon: Users,
      title: "Direito de Família",
      description: "Divórcios, partilhas, pensão alimentícia, guarda de menores e inventários com sensibilidade e ética.",
    },
    {
      icon: FileText,
      title: "Contratos e Consultoria",
      description: "Elaboração, revisão e consultoria jurídica preventiva em contratos e operações empresariais.",
    },
    {
      icon: Gavel,
      title: "Ações de Indenização",
      description: "Reparação de danos morais e materiais, defesa do consumidor e responsabilidade civil.",
    },
    {
      icon: Building,
      title: "Direito Empresarial",
      description: "Assessoria jurídica completa para empresas, societário, recuperação judicial e compliance.",
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
            Atuação especializada e estratégica nas principais áreas do Direito, 
            sempre com foco em resultados efetivos para nossos clientes
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
