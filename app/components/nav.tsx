import { MessageCircle } from "lucide-react";
import { MobileNav } from "../mobile-nav";
import { ThemeToggle } from "../theme-toggle";
import { OrbitLogo } from "../orbit-logo";

export function Nav() {
  return (
    <nav className="nav" aria-label="Principal">
      <a className="brand" href="/" aria-label="ORBIT inicio">
        <OrbitLogo size={42} />
        <span>ORBIT</span>
      </a>
      <div className="nav-links">
        <a href="/servicios">Servicios</a>
        <a href="/blog">Blog</a>
        <a href="/#contacto">Contacto</a>
      </div>
      <div className="nav-actions">
        <ThemeToggle />
        <a className="nav-cta" href="/#contacto">
          <MessageCircle size={18} />
          Hablemos
        </a>
        <MobileNav />
      </div>
    </nav>
  );
}
