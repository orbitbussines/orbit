import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { RevealObserver } from "./components/reveal-observer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ORBIT | Desarrollo web, apps e IA para miPymes",
  description:
    "Agencia colombiana de desarrollo web, software a medida y soluciones de inteligencia artificial para miPymes.",
  icons: {
    icon: [
      { url: "/orbit-icon.svg", type: "image/svg+xml" },
      { url: "/orbit-logo.png", type: "image/png" }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Script id="orbit-theme" strategy="beforeInteractive">
          {`
            (() => {
              try {
                const savedTheme = localStorage.getItem("orbit-theme");
                const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
                const theme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : systemTheme;
                document.documentElement.dataset.theme = theme;
                document.documentElement.style.colorScheme = theme;
              } catch {
                document.documentElement.dataset.theme = "light";
                document.documentElement.style.colorScheme = "light";
              }
            })();
          `}
        </Script>
        <RevealObserver />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
