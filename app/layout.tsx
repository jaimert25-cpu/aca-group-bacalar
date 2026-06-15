import type { Metadata } from "next";
import "./globals.css";
import { GalleryProvider } from "@/components/GalleryProvider";

export const metadata: Metadata = {
  title:
    "Grupo ACA · Hoteles, restaurantes y el muelle frente a la Laguna de los Siete Colores · Bacalar",
  description:
    "Grupo ACA reúne hoteles, hostal, restaurantes, un muelle con paseos y departamentos frente a la Laguna de los Siete Colores en Bacalar, Quintana Roo.",
  metadataBase: new URL("https://acagroupbacalar.com"),
  openGraph: {
    title: "Grupo ACA · Bacalar",
    description:
      "Hoteles, hostal, restaurantes y un muelle con paseos por la Laguna de los Siete Colores.",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GalleryProvider>{children}</GalleryProvider>
      </body>
    </html>
  );
}
