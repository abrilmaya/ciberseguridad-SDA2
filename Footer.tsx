import { Shield, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg gradient-hero">
              <Shield className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-lg font-semibold">CiberSeguro</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#inicio" className="text-primary-foreground/70 hover:text-amber-light transition-colors">
              Inicio
            </a>
            <a href="#consejos" className="text-primary-foreground/70 hover:text-amber-light transition-colors">
              Ciberconsejos
            </a>
            <a href="#contraseñas" className="text-primary-foreground/70 hover:text-amber-light transition-colors">
              Contraseñas
            </a>
            <a href="#ayuda" className="text-primary-foreground/70 hover:text-amber-light transition-colors">
              Ayuda
            </a>
          </nav>

          <p className="flex items-center gap-2 text-sm text-primary-foreground/60">
            Hecho con <Heart className="w-4 h-4 text-accent" /> para tu seguridad
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} CiberSeguro - Proyecto Educativo sobre Ciberseguridad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
