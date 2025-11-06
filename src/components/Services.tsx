import { Scale, Briefcase, Users, FileText, Gavel, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Direito Trabalhista",
      description: "Defesa de direitos trabalhistas, rescisões, acordos e processos judiciais.",
    },
    {
      icon: Scale,
      title: "Direito Civil",
      description: "Assessoria em contratos, indenizações, responsabilidade civil e litígios.",
    },
    {
      icon: Users,
      title: "Direito de Família",
      description: "Divórcios, partilhas, pensão alimentícia e guarda de menores.",
    },
    {
      icon: FileText,
      title: "Contratos e Consultoria",
      description: "Elaboração, revisão e consultoria jurídica em contratos diversos.",
    },
    {
      icon: Gavel,
      title: "Ações de Indenização",
      description: "Reparação de danos morais e materiais em diversas situações.",
    },
    {
      icon: Building,
      title: "Direito Empresarial",
      description: "Assessoria completa para empresas e empresários.",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-muted-foreground">
            Oferecemos serviços jurídicos especializados em diversas áreas do Direito, 
            com excelência e dedicação para atender suas necessidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-accent/50 animate-fade-in bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all">
                    <service.icon className="h-8 w-8 text-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
