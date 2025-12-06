import { Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="p-2 rounded-lg gradient-hero shadow-glow">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              CiberSeguro
            </span>
          </a>
          
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <a 
                href="#consejos" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Ciberconsejos
              </a>
            </li>
            <li>
              <a 
                href="#contraseñas" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Contraseñas
              </a>
            </li>
            <li>
              <a 
                href="#ayuda" 
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                Pedir Ayuda
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
