import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-40 h-12 w-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg p-0 flex items-center justify-center animate-fade-in group hover:scale-110 transition-all"
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
    </Button>
  );
};

export default BackToTop;
