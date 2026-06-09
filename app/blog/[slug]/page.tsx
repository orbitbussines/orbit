import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ExternalLink, Clock } from "lucide-react";
import { getArticleBySlug, getLatestNews } from "../../lib/news";

export const revalidate = 3600;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  return {
    title: article ? `${article.title} | ORBIT Blog` : "Artículo | ORBIT Blog",
    description: article?.description ?? "Noticias de IA y tecnología.",
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  // Artículo no encontrado en el feed actual
  if (!article) {
    return (
      <main>
        <section className="article-not-found">
          <h2>Este artículo ya no está disponible en el feed.</h2>
          <p>Es posible que haya sido reemplazado por noticias más recientes.</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a className="primary-button" href="/blog">
              <ArrowLeft size={18} />
              Ver noticias actuales
            </a>
          </div>
        </section>
      </main>
    );
  }

  // Artículos relacionados (misma categoría, excluyendo el actual)
  const all = await getLatestNews();
  const related = all
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <main>
      {/* ── Portada del artículo ── */}
      <div className="article-cover" style={{ background: article.cover }}>
        <a href="/blog" className="article-cover-back">
          <ArrowLeft size={16} />
          Volver al blog
        </a>
        <div className="article-cover-source">
          <span className="blog-tag" style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff" }}>
            {article.category}
          </span>
          <span className="article-source-name">{article.source}</span>
        </div>
      </div>

      {/* ── Cuerpo del artículo ── */}
      <article className="article-body">
        <h1 className="article-title">{article.title}</h1>

        <div className="article-meta-row">
          <span className="article-source-badge">{article.source}</span>
          <span>·</span>
          <span>
            <Clock size={13} style={{ display: "inline", marginRight: 5, verticalAlign: "middle" }} />
            {article.pubDate}
          </span>
        </div>

        <p className="article-excerpt">{article.description}</p>

        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button article-cta"
        >
          <ExternalLink size={18} />
          Leer artículo completo en {article.source}
        </a>

        <p className="article-disclaimer">
          Este es un resumen automático extraído del feed de {article.source}. El contenido
          completo y los derechos de autor corresponden a la fuente original.
        </p>
      </article>

      {/* ── Artículos relacionados ── */}
      {related.length > 0 && (
        <section className="article-related">
          <div className="article-related-inner">
            <p className="eyebrow">Más de {article.category}</p>
            <h2>Noticias relacionadas</h2>
            <div className="article-related-grid">
              {related.map((r) => (
                <a key={r.slug} href={`/blog/${r.slug}`} className="blog-card">
                  <div className="blog-card-cover">
                    <div
                      className="blog-card-cover-inner"
                      style={{ background: r.cover }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-tag">{r.category}</span>
                    <h3>{r.title}</h3>
                    <div className="blog-card-meta">
                      <span>{r.source} · {r.pubDate}</span>
                      <span className="blog-card-read-more">
                        Leer <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
