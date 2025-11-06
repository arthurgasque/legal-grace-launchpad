import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-medeiros.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Início", id: "inicio" },
    { label: "Sobre", id: "sobre" },
    { label: "Áreas de Atuação", id: "servicos" },
    { label: "Equipe", id: "equipe" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <footer className="bg-gradient-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Medeiros Jr. Advocacia" className="h-16 mb-6" />
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Escritório de advocacia especializado em diversas áreas do Direito, 
              com foco em excelência, ética e resultados para nossos clientes.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                <Phone className="h-5 w-5 text-accent" />
                <span>XXXXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                <Mail className="h-5 w-5 text-accent" />
                <span>XXXXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="h-5 w-5 text-accent" />
                <span>XXXXXXXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/80 hover:text-accent transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-6">Redes Sociais</h3>
            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <div className="space-y-2">
              <p className="text-white/60 text-sm">CNPJ: XX.XXX.XXX/XXXX-XX</p>
              <a
                href="#"
                className="text-white/80 hover:text-accent transition-colors text-sm block"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Medeiros Jr. Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
