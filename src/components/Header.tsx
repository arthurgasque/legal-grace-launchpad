import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-medeiros.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Início", id: "inicio", isAnchor: true },
    { label: "Sobre", id: "sobre", isAnchor: true },
    { label: "Áreas de Atuação", id: "servicos", isAnchor: true },
    { label: "Equipe", id: "equipe", isAnchor: true },
    { label: "Carta ao Cliente", id: "/carta-ao-cliente", isAnchor: false },
    { label: "Contato", id: "contato", isAnchor: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/98 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 animate-fade-in">
            <img src={logo} alt="Medeiros Jr. Advocacia" className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              item.isAnchor ? (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium hover:text-accent transition-colors ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <a
                  key={item.id}
                  href={item.id}
                  className={`text-sm font-medium hover:text-accent transition-colors ${
                    isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {item.label}
                </a>
              )
            ))}
            <Button
              variant="default"
              className="bg-gradient-red hover:opacity-90 transition-opacity shadow-red"
              onClick={() => scrollToSection("contato")}
            >
              Entrar em Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in bg-background/98 backdrop-blur-sm rounded-lg">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                item.isAnchor ? (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a
                    key={item.id}
                    href={item.id}
                    className="text-left text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              <Button
                variant="default"
                className="bg-gradient-red hover:opacity-90 transition-opacity w-full mt-2"
                onClick={() => scrollToSection("contato")}
              >
                Entrar em Contato
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
