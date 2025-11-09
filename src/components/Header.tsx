import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-medeiros.png";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isCartaPage = location.pathname === '/carta-ao-cliente';

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
        isCartaPage ? "bg-primary/95 backdrop-blur-sm shadow-md" :
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
                    isCartaPage ? "text-white" : isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  to={item.id}
                  className={`text-sm font-medium hover:text-accent transition-colors ${
                    isCartaPage ? "text-white" : isScrolled ? "text-foreground" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
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
            className={`md:hidden transition-all hover:scale-110 active:scale-95 ${
              isCartaPage ? "text-white" : isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed top-20 left-4 right-4 z-50 md:hidden animate-scale-in">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex flex-col py-3">
                {menuItems.map((item, index) => (
                  item.isAnchor ? (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-left text-base font-medium text-foreground hover:text-accent hover:bg-gray-light transition-all py-4 px-6 border-b border-gray-medium last:border-0 active:bg-gray-medium"
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      key={item.id}
                      to={item.id}
                      className="text-left text-base font-medium text-foreground hover:text-accent hover:bg-gray-light transition-all py-4 px-6 border-b border-gray-medium last:border-0 active:bg-gray-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
              </div>
              <div className="p-4 bg-gray-light">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-gradient-red hover:opacity-90 transition-opacity w-full shadow-red font-semibold text-base py-6"
                  onClick={() => {
                    scrollToSection("contato");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Entrar em Contato
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
