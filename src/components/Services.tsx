import {
  Briefcase,
  Home,
  Heart,
  FileText,
  Shield,
  UserCheck,
  Building,
  Gavel,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Direito Trabalhista",
      description: "Defesa de direitos trabalhistas, rescisões contratuais, verbas e processos na Justiça do Trabalho.",
    },
    {
      icon: Home,
      title: "Direito Civil",
      description: "Contratos, obrigações, responsabilidade civil e soluções para litígios entre particulares.",
    },
    {
      icon: Heart,
      title: "Direito de Família",
      description: "Divórcios, guarda de filhos, pensão alimentícia, inventários e questões familiares.",
    },
    {
      icon: Shield,
      title: "Ações de Indenização",
      description: "Reparação de danos morais e materiais, responsabilização civil e trabalhista.",
    },
    {
      icon: FileText,
      title: "Contratos e Consultoria",
      description: "Elaboração, revisão e análise de contratos empresariais, civis e comerciais.",
    },
    {
      icon: Building,
      title: "Direito Empresarial",
      description: "Assessoria jurídica para empresas, questões societárias e contratuais.",
    },
    {
      icon: Gavel,
      title: "Direito do Consumidor",
      description: "Defesa de consumidores lesados, vícios em produtos, defeitos e cobranças indevidas.",
    },
    {
      icon: UserCheck,
      title: "Direito Imobiliário",
      description: "Compra, venda, locação, regularização de imóveis e disputas condominiais.",
    },
  ];

  return (
    <section id="servicos" className="py-20 sm:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-4">
            Áreas de <span className="text-accent">Atuação</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos assessoria completa em diversas áreas do Direito, sempre com excelência
            e dedicação aos nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:border-accent transition-all duration-300 hover:shadow-red group animate-scale-in bg-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary group-hover:bg-accent/10 transition-colors">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-poppins font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
