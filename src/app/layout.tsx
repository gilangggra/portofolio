import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://gilangramadan.dev"),
  title: "Gilang Ramadan | Web & Mobile Developer",
  description:
    "Official portfolio of Gilang Ramadan, Web & Mobile Developer. Crafting high-performance web systems, offline-first mobile apps, and structured digital architectures.",
  authors: [{ name: "Gilang Ramadan" }],
  creator: "Gilang Ramadan",
  icons: {
    icon: [
      { url: "/icon.png" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gilangramadan.dev",
    title: "Gilang Ramadan | Web & Mobile Developer",
    description:
      "Crafting high-performance web systems, offline-first mobile apps, and structured digital architectures.",
    siteName: "Gilang Ramadan Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Gilang Ramadan | Web & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilang Ramadan | Web & Mobile Developer",
    description:
      "Crafting high-performance web systems, offline-first mobile apps, and structured digital architectures.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var s = localStorage.getItem('theme');
                var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (s === 'light' || (!s && !d)) {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.style.colorScheme = 'light';
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-black text-black dark:text-white min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
