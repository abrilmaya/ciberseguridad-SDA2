import helpImage from "@/assets/help-support.jpg";
import { Phone, Globe, MessageSquare, Shield, Heart, AlertCircle, ExternalLink } from "lucide-react";
import Mascot from "./Mascot";

const helpResources = [
  {
    icon: Phone,
    name: "Teléfono de la Esperanza",
    contact: "717 003 717",
    description: "Atención 24 horas para situaciones de acoso y ciberbullying",
    type: "Teléfono",
    url: "https://telefonodelaesperanza.org/"
  },
  {
    icon: Shield,
    name: "INCIBE - Línea de Ayuda",
    contact: "017",
    description: "Instituto Nacional de Ciberseguridad. Ayuda gratuita y confidencial",
    type: "Teléfono",
    url: "https://www.incibe.es/linea-de-ayuda-en-ciberseguridad"
  },
  {
    icon: Globe,
    name: "Policía Nacional - Delitos Telemáticos",
    contact: "denuncias.policia.es",
    description: "Para denunciar fraudes, estafas y delitos por internet",
    type: "Web",
    url: "https://www.policia.es/_es/colabora_702702702.php"
  },
  {
    icon: MessageSquare,
    name: "Fundación ANAR",
    contact: "900 20 20 10",
    description: "Ayuda a niños y adolescentes en riesgo. Gratuito y anónimo",
    type: "Teléfono",
    url: "https://www.anar.org/"
  }
];

const warningSignals = [
  "Recibes mensajes amenazantes o insultos constantes",
  "Alguien difunde rumores falsos sobre ti en redes",
  "Te excluyen sistemáticamente de grupos online",
  "Publican fotos tuyas sin tu consentimiento",
  "Alguien se hace pasar por ti en internet",
  "Recibes peticiones de dinero o información sospechosas"
];

const HelpSection = () => {
  return (
    <section id="ayuda" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Apoyo y Recursos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            ¿Necesitas Ayuda?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Si estás sufriendo ciberbullying, acoso o has sido víctima de fraude online, 
            no estás solo. Hay profesionales dispuestos a ayudarte.
          </p>
        </div>

        {/* Main Image with Mascot */}
        <div className="relative max-w-lg mx-auto mb-16">
          <div className="absolute -inset-4 gradient-hero rounded-3xl opacity-20 blur-2xl" />
          <img 
            src={helpImage}
            alt="Manos que representan ayuda y apoyo comunitario"
            className="relative rounded-2xl shadow-card w-full"
          />
          
          {/* Mascot */}
          <div className="absolute -bottom-12 -right-4 md:right-0">
            <Mascot 
              pose="heart" 
              message="No estás solo. Pedir ayuda es de valientes. ¡Yo estoy contigo!" 
              position="right"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">
          {/* Warning Signals */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10">
                <AlertCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Señales de alerta
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-6">
              Busca ayuda si experimentas alguna de estas situaciones:
            </p>

            <ul className="space-y-3">
              {warningSignals.map((signal, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border"
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground">{signal}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Resources */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl gradient-hero">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-foreground">
                Dónde pedir ayuda
              </h3>
            </div>

            <div className="space-y-4">
              {helpResources.map((resource) => (
                <a
                  key={resource.name}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-5 rounded-xl gradient-card border border-border hover-lift group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {resource.name}
                        </h4>
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </div>
                      <p className="text-lg font-bold text-primary mb-1">
                        {resource.contact}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {resource.description}
                      </p>
                      <span className="inline-block mt-2 px-2 py-0.5 rounded text-xs bg-secondary text-secondary-foreground">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Emergency Note */}
            <div className="mt-6 p-5 rounded-xl bg-accent/5 border border-accent/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Importante:</strong> Si estás en peligro inmediato, 
                llama al <strong className="text-accent">112</strong> (emergencias) o acude a la 
                comisaría de policía más cercana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
