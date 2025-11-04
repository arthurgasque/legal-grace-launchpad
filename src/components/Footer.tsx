import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo-medeiros.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="Medeiros Jr. Advocacia" className="h-16 w-auto brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Escritório de advocacia comprometido em defender seus direitos com ética,
              experiência e dedicação.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {["início", "sobre", "servicos", "equipe", "contato"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item);
                      if (element) element.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-primary-foreground/80 hover:text-accent text-sm transition-colors capitalize"
                  >
                    {item === "servicos" ? "Áreas de Atuação" : item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent/30 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent/30 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent/30 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-primary-foreground/60 text-xs">
              OAB/SP 123.456 • CNPJ 12.345.678/0001-90
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {currentYear} Medeiros Jr. Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
