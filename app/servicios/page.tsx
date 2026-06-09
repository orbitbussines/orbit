import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Globe2,
  Code2,
  Bot,
  Sparkles,
  BarChart3,
  Search,
  FormInput,
  Smartphone,
  Database,
  Lock,
  Plug,
  LayoutDashboard,
  RefreshCw,
  MessageSquare,
  BookOpen,
  Bell,
  Users,
  Zap,
  Brain,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Servicios | ORBIT — Desarrollo web, software e IA para miPymes",
  description:
    "Conoce en detalle los servicios de ORBIT: páginas web que convierten, software a medida y automatizaciones con inteligencia artificial.",
};

const webFeatures = [
  { icon: Search, label: "SEO técnico desde el día 1" },
  { icon: FormInput, label: "Formularios conectados" },
  { icon: BarChart3, label: "Analítica y reportes" },
  { icon: Smartphone, label: "Diseño mobile-first" },
  { icon: Zap, label: "Rendimiento A+" },
  { icon: Globe2, label: "Dominio y hosting" },
];

const webUseCases = [
  "Restaurantes y negocios locales",
  "Clínicas y centros médicos",
  "Bufetes de abogados",
  "Tiendas y showrooms",
  "Empresas de construcción",
  "Agencias y consultoras",
];

const softwareFeatures = [
  { icon: LayoutDashboard, label: "Panel administrativo" },
  { icon: Database, label: "Base de datos escalable" },
  { icon: Lock, label: "Autenticación segura" },
  { icon: Plug, label: "Integraciones API" },
  { icon: BarChart3, label: "Reportes y dashboards" },
  { icon: RefreshCw, label: "Actualizaciones continuas" },
];

const softwareUseCases = [
  "Gestión de inventario",
  "CRM personalizado",
  "Plataforma de reservas",
  "Sistema de turnos",
  "Portal para empleados",
  "App de pedidos internos",
];

const iaFeatures = [
  { icon: Brain, label: "Entrenamiento con tus datos" },
  { icon: Users, label: "Escalamiento a humano" },
  { icon: MessageSquare, label: "Conecta con WhatsApp" },
  { icon: Plug, label: "Integración con CRMs" },
  { icon: BookOpen, label: "Base de conocimiento" },
  { icon: Bell, label: "Métricas en tiempo real" },
];

const iaUseCases = [
  "Atención al cliente 24/7",
  "Calificación de leads",
  "Soporte técnico automatizado",
  "Onboarding de usuarios",
  "Seguimiento de pedidos",
  "Agenda de citas automática",
];

export default function ServiciosPage() {
  return (
    <main>

      {/* ── Hero exclusivo Servicios ── */}
      <section className="servicios-hero">
        <div className="servicios-hero-inner">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            <Sparkles size={16} />
            <span className="eyebrow-text">Lo que construimos</span>
          </p>
          <h1>Soluciones digitales para hacer crecer tu empresa.</h1>
          <p className="hero-lead" style={{ margin: "22px auto 0", textAlign: "center" }}>
            Desde una página web que capta clientes hasta un sistema interno a medida
            o un agente IA que trabaja mientras duermes — todo bajo un mismo equipo.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center", marginTop: "32px" }}>
            <a className="primary-button" href="#contacto-servicios">
              Solicitar propuesta
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Tabs de servicios como puente visual hacia las secciones */}
        <div className="service-quick-nav">
          <a className="service-quick-link" href="#web">
            <Globe2 size={15} />
            Páginas web
          </a>
          <a className="service-quick-link" href="#software">
            <Code2 size={15} />
            Software a medida
          </a>
          <a className="service-quick-link" href="#ia">
            <Bot size={15} />
            Automatización IA
          </a>
        </div>
      </section>

      {/* ── Servicio 1: Páginas web — fondo claro, acento cyan ── */}
      <section className="service-detail service-detail--web" id="web">
        <span className="service-section-num" aria-hidden="true">01</span>
        <div className="service-detail-grid">
          <div className="service-detail-text">
            <p className="eyebrow">
              <Globe2 size={15} />
              Páginas web
            </p>
            <h2>Tu negocio merece una presencia digital que venda.</h2>
            <p>
              Creamos landings, webs institucionales, portafolios y sitios corporativos
              diseñados desde cero para captar clientes, generar confianza y posicionarse
              en Google. Nada de plantillas genéricas: cada proyecto parte del negocio real.
            </p>
            <div className="service-features-grid">
              {webFeatures.map(({ icon: Icon, label }) => (
                <div className="service-feature-chip" key={label}>
                  <Icon size={15} />
                  {label}
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px" }}>
              <a className="primary-button" href="#contacto-servicios">
                Cotizar mi web
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="service-visual-panel">
            <span className="service-use-case-label">Ideal para</span>
            <ul className="service-use-cases">
              {webUseCases.map((item) => (
                <li key={item}>
                  <Check size={15} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Servicio 2: Software — sección completamente oscura con grid ── */}
      <section className="service-detail service-detail--dark" id="software">
        <span className="service-section-num" aria-hidden="true">02</span>
        <div className="service-detail-grid reversed">
          <div className="service-detail-text">
            <p className="eyebrow">
              <Code2 size={15} />
              Software a medida
            </p>
            <h2>Cuando las herramientas genéricas ya no alcanzan.</h2>
            <p>
              Construimos web apps, aplicaciones móviles, plataformas internas y sistemas
              de gestión diseñados exactamente para cómo opera tu equipo. Sin licencias
              de terceros, sin límites de usuarios, con control total sobre tus datos.
            </p>
            <div className="service-features-grid">
              {softwareFeatures.map(({ icon: Icon, label }) => (
                <div className="service-feature-chip" key={label}>
                  <Icon size={15} />
                  {label}
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px" }}>
              <a className="primary-button" href="#contacto-servicios">
                Hablar de mi proyecto
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="service-visual-panel">
            <span className="service-use-case-label">Casos de uso</span>
            <ul className="service-use-cases">
              {softwareUseCases.map((item) => (
                <li key={item}>
                  <Check size={15} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Servicio 3: IA — gradiente verde/mint ── */}
      <section className="service-detail service-detail--ia" id="ia">
        <span className="service-section-num" aria-hidden="true">03</span>
        <div className="service-detail-grid">
          <div className="service-detail-text">
            <p className="eyebrow">
              <Bot size={15} />
              Automatización con IA
            </p>
            <h2>Un equipo que trabaja las 24 horas sin descanso.</h2>
            <p>
              Entrenamos agentes de inteligencia artificial con la información de tu empresa
              y los conectamos a WhatsApp, formularios, CRMs y calendarios. Responden,
              califican prospectos, actualizan registros y escalan al humano cuando es
              necesario.
            </p>
            <div className="service-features-grid">
              {iaFeatures.map(({ icon: Icon, label }) => (
                <div className="service-feature-chip" key={label}>
                  <Icon size={15} />
                  {label}
                </div>
              ))}
            </div>
            <div style={{ marginTop: "32px" }}>
              <a className="primary-button" href="#contacto-servicios">
                Crear mi agente IA
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="service-visual-panel">
            <span className="service-use-case-label">Automatizaciones frecuentes</span>
            <ul className="service-use-cases">
              {iaUseCases.map((item) => (
                <li key={item}>
                  <Check size={15} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section className="servicios-contact" id="contacto-servicios">
        <div>
          <p className="eyebrow">¿No sabes cuál necesitas?</p>
          <h2>Cuéntanos el problema y te decimos cuál es la mejor solución.</h2>
          <p>
            Muchas veces la combinación de dos o tres servicios es lo que genera el mayor
            impacto. Una llamada de 30 minutos es suficiente para entender el panorama y
            proponer un camino.
          </p>
        </div>
        <form className="contact-form" action="mailto:orbitbussines0513@gmail.com" method="post" encType="text/plain">
          <label>
            Nombre
            <input type="text" name="name" placeholder="Tu nombre" />
          </label>
          <label>
            Correo
            <input type="email" name="email" placeholder="correo@empresa.com" />
          </label>
          <label>
            ¿Qué necesitas?
            <textarea name="message" placeholder="Describe el problema o el proyecto" rows={4} />
          </label>
          <button type="submit">
            <Mail size={18} />
            Enviar consulta
          </button>
        </form>
      </section>
    </main>
  );
}
