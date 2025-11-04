import aboutImage from "@/assets/about-office.jpg";
import { Award, Users, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Award, value: "20+", label: "Anos de Experiência" },
    { icon: Users, value: "800+", label: "Clientes Atendidos" },
    { icon: TrendingUp, value: "98%", label: "Taxa de Sucesso" },
  ];

  return (
    <section id="sobre" className="py-20 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-primary mb-6">
              Sobre o <span className="text-accent">Escritório</span>
            </h2>
            <div className="space-y-4 text-foreground/80 text-base sm:text-lg leading-relaxed">
              <p>
                O <strong>Medeiros Jr. Advocacia</strong> se consolidou como referência em assessoria
                jurídica de excelência, trabalhando com dedicação e transparência para garantir os
                melhores resultados aos nossos clientes.
              </p>
              <p>
                Nossa equipe é composta por profissionais altamente qualificados e especializados
                em diversas áreas do Direito, sempre atualizados com as mudanças legislativas
                e jurisprudenciais mais recentes.
              </p>
              <p className="text-accent font-semibold text-xl italic border-l-4 border-accent pl-4">
                "Experiência, ética e comprometimento com seus direitos."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon className="h-8 w-8 text-accent mx-auto mb-2" />
                  <div className="text-2xl font-poppins font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={aboutImage}
                alt="Nossa equipe"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
