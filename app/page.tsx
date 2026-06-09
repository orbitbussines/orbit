import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Building2,
  Check,
  Code2,
  Cpu,
  Globe2,
  Mail,
  MessageCircle,
  MousePointerClick,
  PhoneCall,
  Play,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  Zap
} from "lucide-react";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";
import { OrbitLogo } from "./orbit-logo";

const stats = [
  { value: "2-4", label: "semanas para lanzar una primera versión" },
  { value: "24/7", label: "atención con agentes y flujos IA" },
  { value: "100%", label: "pensado para miPymes en Colombia" }
];

const services = [
  {
    icon: Globe2,
    title: "Páginas web que convierten",
    text: "Landings, formularios, sitios institucionales y webs corporativas con estructura comercial, SEO técnico y analítica desde el inicio."
  },
  {
    icon: Code2,
    title: "Software a medida",
    text: "Aplicaciones móviles, web apps, sistemas desktop y plataformas internas para ordenar operaciones, datos y equipos."
  },
  {
    icon: Bot,
    title: "Automatizaciones con IA",
    text: "Chats IA para WhatsApp, asistentes de ventas, flujos de soporte, RAG, integraciones y automatización de tareas repetitivas."
  }
];

const aiAgents = [
  {
    title: "Agente de ventas",
    tag: "WhatsApp IA",
    items: ["Responde preguntas", "Califica prospectos", "Agenda citas"]
  },
  {
    title: "Agente operativo",
    tag: "Automatización",
    items: ["Lee formularios", "Actualiza hojas/CRM", "Notifica al equipo"]
  },
  {
    title: "Agente de soporte",
    tag: "Atención 24/7",
    items: ["Consulta documentos", "Escala casos", "Resume conversaciones"]
  }
];

const process = [
  {
    title: "Entendemos el negocio",
    text: "Mapeamos objetivos, clientes, procesos y puntos donde la tecnología puede generar impacto real."
  },
  {
    title: "Prototipamos rápido",
    text: "Diseñamos una primera experiencia navegable para validar mensajes, flujos y alcance antes de construir."
  },
  {
    title: "Construimos y conectamos",
    text: "Desarrollamos el producto, integramos herramientas y dejamos una base escalable para crecer."
  },
  {
    title: "Medimos y mejoramos",
    text: "Acompañamos el lanzamiento con ajustes, datos y nuevas automatizaciones según el uso real."
  }
];

const packages = [
  {
    name: "Orbit Web",
    price: "Presencia digital",
    description: "Para empresas que necesitan verse profesionales y captar solicitudes.",
    items: ["Landing o web institucional", "Formulario conectado", "Analítica y SEO base"]
  },
  {
    name: "Orbit Build",
    price: "Producto a medida",
    description: "Para equipos que necesitan software propio para operar mejor.",
    items: ["Web app o app móvil", "Panel administrativo", "Integraciones y reportes"]
  },
  {
    name: "Orbit AI",
    price: "Automatización inteligente",
    description: "Para negocios que quieren responder, vender y operar con IA.",
    items: ["Chat IA para WhatsApp", "Base de conocimiento", "Flujos y alertas"]
  }
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="nav" aria-label="Principal">
        <a className="brand" href="#inicio" aria-label="ORBIT inicio">
          <OrbitLogo size={42} />
          <span>ORBIT</span>
        </a>
        <div className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#ia">IA</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <a className="nav-cta" href="#contacto">
            <MessageCircle size={18} />
            Hablemos
          </a>
          <MobileNav />
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={16} />
              <span className="eyebrow-text">Agencia de desarrollo + IA para miPymes</span>
            </p>
            <h1>
              Construimos la órbita digital de tu empresa.
            </h1>
            <p className="hero-lead">
              Creamos páginas web, productos digitales y automatizaciones con inteligencia
              artificial para que las empresas colombianas vendan, atiendan y operen mejor.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#contacto">
                Agenda una llamada
                <ArrowRight size={18} />
              </a>
              <a className="secondary-button" href="#servicios">
                <Play size={17} />
                Ver soluciones
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Panel tecnológico de ORBIT">
            <div className="orbital-console">
              <div className="console-topbar">
                <div className="console-brand">
                  <OrbitLogo size={46} />
                  <div>
                    <strong>ORBIT OS</strong>
                    <span>Sistema de lanzamiento digital</span>
                  </div>
                </div>
                <span className="live-pill">Online</span>
              </div>

              <div className="orbit-ring">
                <OrbitLogo size={210} className="orbit-center-logo" />
                <div className="ring-path ring-path-one" />
                <div className="ring-path ring-path-two" />
              </div>

              <div className="console-grid">
                <div className="console-card active">
                  <BrainCircuit size={20} />
                  <span>AI agent</span>
                  <strong>Ventas por WhatsApp</strong>
                </div>
                <div className="console-card">
                  <Workflow size={20} />
                  <span>Workflow</span>
                  <strong>Lead a CRM</strong>
                </div>
                <div className="console-card">
                  <MousePointerClick size={20} />
                  <span>Landing</span>
                  <strong>Conversion ready</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-row">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.value}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="logo-strip" aria-label="Tipos de proyectos">
        <div className="marquee-track" aria-hidden="true">
          {["Landings", "Formularios", "Web corporativa", "Apps móviles", "Web apps", "Desktop", "WhatsApp IA", "Automatizaciones",
            "Landings", "Formularios", "Web corporativa", "Apps móviles", "Web apps", "Desktop", "WhatsApp IA", "Automatizaciones"].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section" id="servicios">
        <div className="section-heading centered" data-reveal>
          <p className="eyebrow">Soluciones principales</p>
          <h2>Todo lo que una miPyme necesita para pasar de idea a sistema funcionando.</h2>
        </div>
        <div className="services-grid" data-reveal="stagger">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <div className="icon-box">
                  <Icon size={24} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="ai-lab" id="ia">
        <div className="ai-copy">
          <p className="eyebrow">IA aplicada al negocio</p>
          <h2>Agentes que responden, venden y ejecutan tareas mientras tu equipo avanza.</h2>
          <p>
            Entrenamos asistentes con la información de tu empresa y los conectamos con WhatsApp,
            formularios, calendarios, hojas de cálculo, CRMs o APIs internas.
          </p>
          <a className="primary-button" href="#contacto">
            Crear mi agente IA
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="agent-stack" data-reveal="stagger">
          {aiAgents.map((agent) => (
            <article className="agent-card" key={agent.title}>
              <div>
                <span>{agent.tag}</span>
                <h3>{agent.title}</h3>
              </div>
              <ul>
                {agent.items.map((item) => (
                  <li key={item}>
                    <Check size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="device-mockup" aria-label="Vista de producto digital">
          <div className="device-header">
            <span />
            <span />
            <span />
          </div>
          <div className="device-content">
            <div className="workflow-node">
              <PhoneCall size={19} />
              Nuevo lead desde WhatsApp
            </div>
            <div className="workflow-line" />
            <div className="workflow-node accent">
              <Cpu size={19} />
              IA califica y responde
            </div>
            <div className="workflow-line" />
            <div className="workflow-node">
              <Building2 size={19} />
              CRM actualizado
            </div>
          </div>
        </div>
        <div>
          <p className="eyebrow">Por qué ORBIT</p>
          <h2>Tecnología con criterio de negocio, no solo código.</h2>
          <p>
            Somos una startup creada para acompañar a empresas pequeñas y medianas que quieren
            digitalizarse sin perderse en tecnicismos. Traducimos una necesidad comercial u
            operativa en una solución clara, medible y lista para evolucionar.
          </p>
          <div className="feature-list">
            <span>
              <ShieldCheck size={18} />
              Seguridad y buenas prácticas
            </span>
            <span>
              <Rocket size={18} />
              Lanzamientos por fases
            </span>
            <span>
              <Zap size={18} />
              Automatización desde el inicio
            </span>
            <span>
              <Smartphone size={18} />
              Experiencia responsive
            </span>
          </div>
        </div>
      </section>

      <section className="section process-section" id="proceso">
        <div className="section-heading">
          <p className="eyebrow">Método ORBIT</p>
          <h2>De conversación inicial a producto en producción.</h2>
        </div>
        <div className="process-grid" data-reveal="stagger">
          {process.map((step, index) => (
            <article className="process-step" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section packages-section">
        <div className="section-heading centered" data-reveal>
          <p className="eyebrow">Paquetes flexibles</p>
          <h2>Elige el punto de partida y nosotros armamos el roadmap.</h2>
        </div>
        <div className="package-grid" data-reveal="stagger">
          {packages.map((item) => (
            <article className="package-card" key={item.name}>
              <span>{item.price}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <ul>
                {item.items.map((feature) => (
                  <li key={feature}>
                    <Check size={17} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contacto">
                Solicitar propuesta
                <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div>
          <p className="eyebrow">Empieza aquí</p>
          <h2>Cuéntanos qué quieres construir y te proponemos la primera órbita.</h2>
          <p>
            Puede ser una landing, una web institucional, una app, un sistema interno o un agente
            IA conectado a WhatsApp. Si el problema es claro, podemos convertirlo en producto.
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
            Proyecto
            <textarea name="message" placeholder="Cuéntanos que quieres construir" rows={4} />
          </label>
          <button type="submit">
            <Mail size={18} />
            Enviar solicitud
          </button>
        </form>
      </section>

      <footer className="footer">
        <a className="brand" href="#inicio" aria-label="ORBIT inicio">
          <OrbitLogo size={36} />
          <span>ORBIT</span>
        </a>
        <p>Desarrollo web, software a medida e inteligencia artificial para miPymes.</p>
        <a href="mailto:orbitbussines0513@gmail.com">orbitbussines0513@gmail.com</a>
      </footer>
    </main>
  );
}
