import type { Metadata } from "next";
import { ArrowRight, BookOpen, Clock, PenLine } from "lucide-react";
import { getLatestNews } from "../lib/news";

export const metadata: Metadata = {
  title: "Blog | ORBIT — Noticias de IA y tecnología",
  description:
    "Las últimas noticias de inteligencia artificial y tecnología del mundo, actualizadas cada hora.",
};

// Regenera la página automáticamente cada hora
export const revalidate = 3600;

const categories = [
  "Todos",
  "Inteligencia Artificial",
  "IA & Startups",
  "IA & Tech",
  "Tecnología",
];

export default async function BlogPage() {
  const articles = await getLatestNews();
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <main>
      {/* ── Hero editorial oscuro — siempre dark ── */}
      <section className="blog-hero">
        <div className="blog-hero-inner">
          <p className="eyebrow">
            <BookOpen size={15} />
            <span>Blog & Noticias</span>
          </p>
          <h1>El mundo tech, directo a tu pantalla.</h1>
          <p className="blog-hero-lead">
            Las últimas noticias de inteligencia artificial y tecnología global,
            curadas de las mejores fuentes y actualizadas cada hora.
          </p>
          <div className="blog-hero-stats">
            <div className="blog-hero-stat">
              <strong>{articles.length}</strong>
              <span>artículos hoy</span>
            </div>
            <div className="blog-hero-stat">
              <strong>6</strong>
              <span>fuentes globales</span>
            </div>
            <div className="blog-hero-stat">
              <strong>1h</strong>
              <span>de actualización</span>
            </div>
          </div>
        </div>
        <span className="blog-hero-bg-num" aria-hidden="true">
          {String(articles.length).padStart(2, "0")}
        </span>
      </section>

      {/* ── Grid de artículos ── */}
      <section className="blog-section">
        <div className="blog-filter">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`blog-filter-pill${i === 0 ? " blog-filter-pill--active" : ""}`}
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="blog-grid" data-reveal="stagger">
          {/* Artículo destacado */}
          {featured && (
            <a
              href={`/blog/${featured.slug}`}
              className="blog-card blog-card--featured"
            >
              <div className="blog-card-cover">
                <div
                  className="blog-card-cover-inner"
                  style={{ background: featured.cover }}
                  aria-hidden="true"
                />
              </div>
              <div className="blog-card-body">
                <span className="blog-tag">{featured.category}</span>
                <h3>{featured.title}</h3>
                <p className="blog-card-excerpt">{featured.description}</p>
                <div className="blog-card-meta">
                  <span>
                    <Clock
                      size={13}
                      style={{ display: "inline", marginRight: 5, verticalAlign: "middle" }}
                    />
                    {featured.source} · {featured.pubDate}
                  </span>
                  <span className="blog-card-read-more">
                    Leer artículo <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          )}

          {/* Artículos regulares */}
          {rest.map((article) => (
            <a
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="blog-card"
            >
              <div className="blog-card-cover">
                <div
                  className="blog-card-cover-inner"
                  style={{ background: article.cover }}
                  aria-hidden="true"
                />
              </div>
              <div className="blog-card-body">
                <span className="blog-tag">{article.category}</span>
                <h3>{article.title}</h3>
                <p className="blog-card-excerpt">{article.description}</p>
                <div className="blog-card-meta">
                  <span>
                    <Clock
                      size={13}
                      style={{ display: "inline", marginRight: 5, verticalAlign: "middle" }}
                    />
                    {article.source} · {article.pubDate}
                  </span>
                  <span className="blog-card-read-more">
                    Leer <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── CTA editorial oscuro ── */}
      <section className="blog-newsletter">
        <div>
          <p className="eyebrow">
            <PenLine size={15} />
            ¿Quieres aplicar esto en tu empresa?
          </p>
          <h2>Convertimos tendencias en soluciones concretas.</h2>
          <p>
            Si algo de lo que lees aquí te genera una idea o pregunta, hablemos.
            Construimos lo que necesitas, adaptado a la realidad de tu negocio.
          </p>
        </div>
        <a className="primary-button" href="/#contacto" style={{ flexShrink: 0 }}>
          Agendar llamada
          <ArrowRight size={18} />
        </a>
      </section>
    </main>
  );
}
