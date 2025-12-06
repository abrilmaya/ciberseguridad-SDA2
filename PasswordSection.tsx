import passwordImage from "@/assets/password-security.jpg";
import { Key, Shield, CheckCircle2, ExternalLink, AlertTriangle, Sparkles } from "lucide-react";
import Mascot from "./Mascot";

const passwordTips = [
  "Usa al menos 12 caracteres",
  "Combina mayúsculas, minúsculas, números y símbolos",
  "No uses información personal (nombre, fecha de nacimiento)",
  "Usa una contraseña diferente para cada cuenta",
  "Considera usar un gestor de contraseñas"
];

const passwordGenerators = [
  {
    name: "Bitwarden Password Generator",
    url: "https://bitwarden.com/password-generator/",
    description: "Generador gratuito y de código abierto"
  },
  {
    name: "Norton Password Generator",
    url: "https://my.norton.com/extspa/passwordmanager?path=pwd-gen",
    description: "De la reconocida empresa de seguridad"
  },
  {
    name: "LastPass Generator",
    url: "https://www.lastpass.com/features/password-generator",
    description: "Simple y fácil de usar"
  }
];

const PasswordSection = () => {
  return (
    <section id="contraseñas" className="py-20 bg-card relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Seguridad de Cuentas
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Crea Contraseñas Seguras
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una contraseña fuerte es tu primera línea de defensa. Aprende a crear 
            contraseñas que los hackers no puedan adivinar.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Tips Column */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl gradient-hero">
                  <Key className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  Características de una buena contraseña
                </h3>
              </div>
              
              <ul className="space-y-3">
                {passwordTips.map((tip, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Warning Box */}
            <div className="p-5 rounded-xl bg-accent/10 border border-accent/30">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    Contraseñas que NUNCA debes usar
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    123456, password, tu nombre, fecha de nacimiento, qwerty, 
                    nombre de tu mascota o equipo de fútbol favorito.
                  </p>
                </div>
              </div>
            </div>

            {/* Mascot */}
            <div className="mt-8">
              <Mascot 
                pose="thumbsup" 
                message="¡Una contraseña fuerte es como un súper escudo! Usa los generadores que te recomiendo." 
                position="left"
              />
            </div>
          </div>

          {/* Generators Column */}
          <div>
            <div className="relative mb-8">
              <div className="absolute -inset-4 gradient-hero rounded-3xl opacity-10 blur-2xl" />
              <img 
                src={passwordImage}
                alt="Llave digital dorada representando seguridad de contraseñas"
                className="relative rounded-2xl shadow-card w-full"
              />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-secondary">
                <Sparkles className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Generadores de Contraseñas
              </h3>
            </div>

            <div className="space-y-3">
              {passwordGenerators.map((generator) => (
                <a
                  key={generator.name}
                  href={generator.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-background border border-border hover-lift group"
                >
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {generator.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {generator.description}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordSection;
