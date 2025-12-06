import socialMediaImage from "@/assets/social-media-security.jpg";
import { Instagram, Music2, MessageCircle, Eye, Lock, UserX, Bell, Camera } from "lucide-react";
import Mascot from "./Mascot";

const tips = [
  {
    icon: Lock,
    title: "Configura tu privacidad",
    description: "Mantén tu perfil privado y revisa quién puede ver tus publicaciones, historias y seguidores."
  },
  {
    icon: Eye,
    title: "Piensa antes de publicar",
    description: "No compartas información personal como tu ubicación exacta, horarios o datos bancarios."
  },
  {
    icon: UserX,
    title: "Cuidado con desconocidos",
    description: "No aceptes solicitudes de amistad de personas que no conoces en la vida real."
  },
  {
    icon: Bell,
    title: "Activa las alertas de inicio de sesión",
    description: "Recibe notificaciones cuando alguien intente acceder a tu cuenta desde un dispositivo nuevo."
  },
  {
    icon: Camera,
    title: "Protege tu imagen",
    description: "No compartas fotos comprometedoras. Una vez en internet, pueden ser difíciles de eliminar."
  },
  {
    icon: MessageCircle,
    title: "Reporta contenido inapropiado",
    description: "Usa las herramientas de denuncia de cada plataforma para reportar acoso o contenido dañino."
  }
];

const platforms = [
  { name: "Instagram", icon: Instagram, color: "bg-gradient-to-br from-amber to-terracotta" },
  { name: "TikTok", icon: Music2, color: "bg-foreground" },
  { name: "WhatsApp", icon: MessageCircle, color: "bg-copper" }
];

const SocialMediaTips = () => {
  return (
    <section id="consejos" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Redes Sociales
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Ciberconsejos para Redes Sociales
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Las redes sociales son divertidas, pero es importante usarlas de forma segura. 
            Aquí tienes consejos prácticos para proteger tu privacidad.
          </p>
        </div>

        {/* Platforms */}
        <div className="flex justify-center gap-4 mb-12">
          {platforms.map((platform) => (
            <div 
              key={platform.name}
              className={`${platform.color} p-4 rounded-2xl shadow-card hover-lift`}
            >
              <platform.icon className="w-8 h-8 text-primary-foreground" />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 gradient-hero rounded-3xl opacity-20 blur-2xl" />
            <img 
              src={socialMediaImage} 
              alt="Iconos de redes sociales protegidos con candados de seguridad"
              className="relative rounded-2xl shadow-card w-full"
            />
            
            {/* Mascot */}
            <div className="absolute -bottom-8 -left-4 md:left-0">
              <Mascot 
                pose="pointing" 
                message="¡Recuerda! Tu privacidad es lo primero. Configura bien tus cuentas." 
                position="left"
              />
            </div>
          </div>

          {/* Tips Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mt-16 lg:mt-0">
            {tips.map((tip, index) => (
              <div 
                key={tip.title}
                className="p-5 rounded-xl gradient-card border border-border hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center mb-3">
                  <tip.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaTips;
