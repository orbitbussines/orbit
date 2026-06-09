export type NewsArticle = {
  slug: string;
  title: string;
  link: string;
  description: string;
  pubDate: string;
  source: string;
  category: string;
  cover: string;
};

// ── Slug helpers ──────────────────────────────────────────────────────────────

export function toSlug(url: string): string {
  return Buffer.from(url, "utf-8").toString("base64url");
}

export function fromSlug(slug: string): string {
  try {
    return Buffer.from(slug, "base64url").toString("utf-8");
  } catch {
    return "";
  }
}

// ── XML helpers ───────────────────────────────────────────────────────────────

function extractText(xml: string, tag: string): string {
  const cdata = new RegExp(
    `<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`,
    "i"
  ).exec(xml);
  if (cdata) return cdata[1].trim();
  const plain = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i").exec(xml);
  return plain ? plain[1].trim() : "";
}

function extractLink(item: string): string {
  // <link>url</link>
  const plain = /<link>([^<\s]+)<\/link>/.exec(item);
  if (plain) return plain[1].trim();
  // Atom: <link href="url"/>
  const atom = /<link[^>]+href="([^"]+)"/.exec(item);
  if (atom) return atom[1];
  return "";
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) =>
      String.fromCharCode(parseInt(code, 16))
    );
}

function formatDate(raw: string): string {
  try {
    const d = new Date(raw);
    if (isNaN(d.getTime())) return raw;
    return d.toLocaleDateString("es-CO", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return raw;
  }
}

// ── Feed fetcher ──────────────────────────────────────────────────────────────

async function fetchFeed(
  url: string,
  category: string,
  source: string,
  cover: string
): Promise<NewsArticle[]> {
  try {
    const res = await fetch(url, {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; ORBIT-News/1.0)",
        Accept: "application/rss+xml, application/xml, text/xml, */*",
      },
      signal: AbortSignal.timeout(7000),
    });
    if (!res.ok) return [];
    const xml = await res.text();
    // Support both RSS <item> and Atom <entry>
    const items =
      xml.match(/<item[\s\S]*?<\/item>/g) ??
      xml.match(/<entry[\s\S]*?<\/entry>/g) ??
      [];
    return items
      .slice(0, 10)
      .map((item) => {
        const title = decodeEntities(extractText(item, "title"));
        // Atom uses <summary> or <content>; RSS uses <description>
        const descRaw =
          extractText(item, "description") ||
          extractText(item, "summary") ||
          extractText(item, "content");
        const rawDesc = decodeEntities(descRaw)
          .replace(/<[^>]+>/g, "")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 260);
        const link = extractLink(item);
        // Atom uses <published> or <updated>; RSS uses <pubDate>
        const dateRaw =
          extractText(item, "pubDate") ||
          extractText(item, "published") ||
          extractText(item, "updated");
        if (!title || title.length < 5 || !link) return null;
        return {
          slug: toSlug(link),
          title,
          link,
          description: rawDesc || "Lee el artículo completo en la fuente original.",
          pubDate: formatDate(dateRaw),
          source,
          category,
          cover,
        } satisfies NewsArticle;
      })
      .filter((a): a is NewsArticle => a !== null);
  } catch {
    return [];
  }
}

// ── Feed list ─────────────────────────────────────────────────────────────────

const FEEDS = [
  {
    url: "https://techcrunch.com/category/artificial-intelligence/feed/",
    category: "Inteligencia Artificial",
    source: "TechCrunch",
    cover: "linear-gradient(135deg, #704cff 0%, #17d7e3 100%)",
  },
  {
    url: "https://venturebeat.com/category/ai/feed/",
    category: "IA & Startups",
    source: "VentureBeat",
    cover: "linear-gradient(135deg, #3d22b3 0%, #2ee79a 100%)",
  },
  {
    url: "https://www.technologyreview.com/feed/",
    category: "Tecnología",
    source: "MIT Tech Review",
    cover: "linear-gradient(135deg, #0d7a85 0%, #56f0b1 100%)",
  },
  {
    url: "https://www.theverge.com/rss/index.xml",
    category: "IA & Tech",
    source: "The Verge",
    cover: "linear-gradient(135deg, #c44dff 0%, #704cff 100%)",
  },
  {
    url: "https://feeds.arstechnica.com/arstechnica/technology-lab",
    category: "Tecnología",
    source: "Ars Technica",
    cover: "linear-gradient(135deg, #d35400 0%, #2ee79a 100%)",
  },
  {
    url: "https://www.wired.com/feed/rss",
    category: "Inteligencia Artificial",
    source: "Wired",
    cover: "linear-gradient(135deg, #1a1a2e 0%, #a98cff 100%)",
  },
] as const;

const FALLBACK: NewsArticle[] = [
  {
    slug: toSlug("https://techcrunch.com/category/artificial-intelligence/"),
    title: "Últimas noticias de inteligencia artificial",
    link: "https://techcrunch.com/category/artificial-intelligence/",
    description:
      "No se pudieron cargar las noticias en este momento. Haz clic para ir directamente a TechCrunch AI.",
    pubDate: new Date().toLocaleDateString("es-CO", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
    source: "TechCrunch",
    category: "Inteligencia Artificial",
    cover: "linear-gradient(135deg, #704cff 0%, #17d7e3 100%)",
  },
];

// ── Public API ────────────────────────────────────────────────────────────────

export async function getLatestNews(): Promise<NewsArticle[]> {
  const results = await Promise.allSettled(
    FEEDS.map((f) => fetchFeed(f.url, f.category, f.source, f.cover))
  );
  const articles = results
    .filter((r) => r.status === "fulfilled")
    .flatMap((r) => (r as PromiseFulfilledResult<NewsArticle[]>).value);

  return articles.length > 0 ? articles : FALLBACK;
}

export async function getArticleBySlug(slug: string): Promise<NewsArticle | null> {
  const targetLink = fromSlug(slug);
  if (!targetLink) return null;
  const news = await getLatestNews();
  return news.find((a) => a.link === targetLink || a.slug === slug) ?? null;
}
