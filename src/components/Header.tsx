import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-medeiros-jr.png";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
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

  // Close mobile menu on ESC key and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    // Se não estiver na página principal, navegar primeiro
    if (location.pathname !== '/') {
      navigate('/');
      // Aguardar a navegação e então fazer o scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
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
            <span className={`text-xl font-bold tracking-wide transition-colors ${
              isCartaPage ? "text-white" : isScrolled ? "text-foreground" : "text-white"
            }`}>
              MEDEIROS JR
            </span>
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
            className={`md:hidden transition-all hover:scale-110 active:scale-95 relative z-50 ${
              isMobileMenuOpen 
                ? "bg-white rounded-full p-2 shadow-lg text-primary" 
                : isCartaPage ? "text-white" : isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div className={`fixed top-20 left-4 right-4 z-50 md:hidden transition-all duration-300 ${
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}>
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
                    className="text-left text-base font-medium text-foreground hover:text-accent hover:bg-gray-light transition-all py-4 px-6 border-b border-gray-medium last:border-0 active:bg-gray-medium active:scale-[0.98]"
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${index * 30}ms` : "0ms"
                    }}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.id}
                    to={item.id}
                    className="text-left text-base font-medium text-foreground hover:text-accent hover:bg-gray-light transition-all py-4 px-6 border-b border-gray-medium last:border-0 active:bg-gray-medium active:scale-[0.98]"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${index * 30}ms` : "0ms"
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
                className="bg-gradient-red hover:opacity-90 transition-all w-full shadow-red font-semibold text-base py-6 active:scale-[0.98]"
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
      </nav>
    </header>
  );
};

export default Header;
