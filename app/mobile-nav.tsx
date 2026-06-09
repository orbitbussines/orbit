"use client";

import { ArrowRight, Menu, MessageCircle, X } from "lucide-react";
import { OrbitLogo } from "./orbit-logo";
import { useEffect, useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        className="menu-button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Menu size={22} />
      </button>

      {open && (
        <div
          className="mobile-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <nav className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-head">
              <a className="brand" href="#inicio" onClick={close}>
                <OrbitLogo size={36} />
                <span>ORBIT</span>
              </a>
              <button className="mobile-close" aria-label="Cerrar menú" onClick={close}>
                <X size={22} />
              </button>
            </div>

            <div className="mobile-drawer-links">
              {[
                { href: "#servicios", label: "Servicios" },
                { href: "#ia", label: "IA" },
                { href: "#proceso", label: "Proceso" },
                { href: "#contacto", label: "Contacto" },
              ].map(({ href, label }) => (
                <a key={href} href={href} onClick={close}>
                  {label}
                </a>
              ))}
            </div>

            <div className="mobile-drawer-cta">
              <a className="primary-button" href="#contacto" onClick={close}>
                <MessageCircle size={18} />
                Hablemos
                <ArrowRight size={18} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
