import { CheckCircle2, Scale, Users, Award, Target, Shield, Heart } from "lucide-react";
import aboutImage from "@/assets/about-office.jpg";
const About = () => {
  const differentials = [
    {
      icon: Shield,
      title: "Atendimento Personalizado",
      description: "Cada caso é único e merece atenção dedicada",
    },
    {
      icon: Target,
      title: "Transparência Total",
      description: "Comunicação clara em todas as etapas",
    },
    {
      icon: Heart,
      title: "Resultados Comprovados",
      description: "Histórico de sucesso em defesa dos clientes",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Equipe experiente e qualificada",
    },
  ];
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1000">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
              <Scale className="h-5 w-5 text-accent" />
              <span className="text-accent text-sm font-semibold uppercase tracking-wide">Sobre o Escritório</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-primary mb-6 leading-tight">
              Tradição, ética e <span className="text-accent">excelência </span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Desde a nossa fundação o escritório <strong className="text-primary"> MEDEIROS JR. ADVOCACIA</strong> atua
              com comprometimento absoluto na prestação de seus serviços. Oferecemos de forma especializada nosso
              trabalho em diversas áreas do Direito, proporcionando soluções jurídicas personalizadas e eficientes.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Nossa equipe é formada por profissionais capacitados e atualizados com o que há de melhor no mercado.
              Atuamos de forma integrada para defender o interesse dos nossos clientes, com transparência, competência e
              dedicação, pois acreditamos que cada processo merece atenção individualizada.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {differentials.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-red opacity-20 blur-2xl rounded-lg"></div>
              <img
                src={aboutImage}
                alt="Escritório Medeiros Jr. Advocacia"
                className="relative rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
