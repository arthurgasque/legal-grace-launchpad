import { Award, Users, TrendingUp, Shield, Target, Heart } from "lucide-react";
import aboutImage from "@/assets/about-office.jpg";

const About = () => {
  const differentials = [
    {
      icon: Shield,
      title: "Atendimento Personalizado",
      description: "Cada caso é único e merece atenção dedicada"
    },
    {
      icon: Target,
      title: "Transparência",
      description: "Comunicação clara em todas as etapas"
    },
    {
      icon: Heart,
      title: "Resultados Comprovados",
      description: "Histórico de sucesso em defesa dos clientes"
    }
  ];

  const stats = [
    { icon: Award, value: "XX", label: "Anos de Experiência" },
    { icon: Users, value: "XX", label: "Clientes Atendidos" },
    { icon: TrendingUp, value: "XX%", label: "Taxa de Sucesso" },
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6">
              Sobre o Escritório
            </h2>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p className="text-lg">
                <span className="text-accent font-semibold">Desde nossa fundação</span>, atuamos com ética, estratégia e comprometimento com nossos clientes.
              </p>
              
              <p className="text-base">
                O <strong>Medeiros Jr. Advocacia</strong> é um escritório especializado em diversas áreas do Direito, 
                oferecendo assessoria jurídica completa e personalizada. Nossa missão é garantir que seus direitos 
                sejam protegidos com excelência e dedicação.
              </p>
              
              <p className="text-base">
                Contamos com uma equipe de profissionais altamente qualificados, preparados para atender 
                demandas com agilidade, precisão e total comprometimento com os resultados.
              </p>
            </div>

            {/* Differentials */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              {differentials.map((item, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 bg-white rounded-lg shadow-card hover:shadow-md transition-all hover:scale-105"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-full mb-4">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-semibold text-sm text-primary mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-3">
                    <stat.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={aboutImage}
                alt="Escritório Medeiros Jr. Advocacia"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent/10 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
