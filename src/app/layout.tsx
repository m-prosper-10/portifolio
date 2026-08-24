import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Full-Stack Developer",
    "Backend Engineer",
    "React",
    "Node.js",
    "Python",
    "TensorFlow",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (() => {
              const storageKey = "portfolio-theme";
              const isTheme = (value) =>
                value === "light" || value === "dark" || value === "system";

              try {
                const savedTheme = localStorage.getItem(storageKey);
                const theme = isTheme(savedTheme) ? savedTheme : "system";
                const resolvedTheme =
                  theme === "system" &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : theme === "system"
                      ? "light"
                      : theme;
                const root = document.documentElement;

                root.classList.remove("light", "dark");
                root.classList.add(resolvedTheme);
                root.dataset.theme = resolvedTheme;
                root.dataset.themePreference = theme;
                root.style.colorScheme = resolvedTheme;

                document
                  .querySelectorAll('meta[name="theme-color"]')
                  .forEach((metaThemeColor) => {
                    metaThemeColor.setAttribute(
                      "content",
                      resolvedTheme === "dark" ? "#000000" : "#ffffff"
                    );
                  });
              } catch (error) {
                // Ignore storage or media query failures and fall back to CSS defaults.
              }
            })();
          `}
        </Script>
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
      </head>
      <body className="font-sans antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-86HRW4RBB9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-86HRW4RBB9');
          `}
        </Script>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
