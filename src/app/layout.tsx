import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Mugisha Prosper - AI Engineer",
  description:
    "AI Engineer and Full-Stack Developer specializing in machine learning, backend systems, and modern web applications. Based in Kigali, Rwanda.",
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
  authors: [{ name: "Mugisha Prosper" }],
  openGraph: {
    type: "website",
    url: "https://prospermugisha.vercel.app",
    title: "Mugisha Prosper - AI Engineer",
    description: "AI Engineer and Full-Stack Developer",
    siteName: "Mugisha Prosper",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mugisha Prosper - AI Engineer & Full-Stack Developer",
    description:
      "AI Engineer and Full-Stack Developer specializing in machine learning, backend systems, and modern web applications.",
    site: "https://mugishaprosper.dev",
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
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
