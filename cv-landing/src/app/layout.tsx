import type { Metadata } from "next";
import { googleFontsUrl } from "@/styles/tokens";
import { globalKeyframes } from "@/styles/keyframes";

export const metadata: Metadata = {
  title: "Ilya Cortes Ruiz — Backend Developer",
  description: "Portfolio / CV de Ilya Cortes Ruiz, estudiante de Ingenieria en TI con enfoque en backend, cloud y Android.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={googleFontsUrl} rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: globalKeyframes }} />
      </head>
      <body style={{ margin: 0, background: "#000", color: "#fff" }}>
        {children}
      </body>
    </html>
  );
}
