import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modus Next.js Boilerplate",
  description: "A Next.js boilerplate with Modus Web Components and Icons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('modus-theme') || 'modus-classic';
                  var mode = localStorage.getItem('modus-mode') || 'light';
                  var themeValue = theme + '-' + mode;
                  document.documentElement.setAttribute('data-theme', themeValue);
                  document.documentElement.setAttribute('data-mode', mode);
                  document.documentElement.className = mode;
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'modus-classic-light');
                  document.documentElement.setAttribute('data-mode', 'light');
                  document.documentElement.className = 'light';
                }
              })();
            `,
          }}
        />
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@latest/dist/modus-outlined/fonts/modus-icons.css"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@latest/dist/modus-outlined/fonts/modus-icons.css"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
