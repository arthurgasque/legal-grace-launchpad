import { useState, useEffect } from "react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      area: "Direito Trabalhista",
      text: "Excelente atendimento! Conseguiram resolver meu caso com muita agilidade e profissionalismo. Recomendo de olhos fechados.",
    },
    {
      name: "João Santos",
      area: "Direito de Família",
      text: "Equipe muito atenciosa e dedicada. Me senti acolhido desde o primeiro contato e o resultado foi além das minhas expectativas.",
    },
    {
      name: "Ana Costa",
      area: "Direito Civil",
      text: "Profissionais extremamente competentes. Resolveram uma questão complexa com muita clareza e transparência. Muito satisfeita!",
    },
    {
      name: "Carlos Mendes",
      area: "Direito Empresarial",
      text: "Assessoria jurídica de primeira qualidade. O escritório demonstrou conhecimento técnico excepcional e comprometimento total com meu caso.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-white mb-6">
            O que dizem nossos clientes
          </h2>
          <p className="text-lg text-white/80">
            Depoimentos de quem confiou em nosso trabalho e alcançou resultados positivos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 shadow-xl">
            <CardContent className="p-8 sm:p-12">
              <div className="relative">
                <Quote className="h-12 w-12 text-accent/50 mb-6" />
                
                <div className="min-h-[200px] flex flex-col justify-center">
                  <p className="text-lg sm:text-xl text-white leading-relaxed mb-8 italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="border-t border-white/20 pt-6">
                    <p className="text-white font-semibold text-lg mb-1">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-accent text-sm">
                      {testimonials[currentIndex].area}
                    </p>
                  </div>
                </div>
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-8 bg-accent"
                        : "w-2 bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
