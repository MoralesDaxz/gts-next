import "./globals.css";
import type { Metadata } from "next";
import { ControlDisplayProvider } from "../context/ControlDisplay";
import DisplayNavBar from "@/components/nav/DisplayNavBar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Gestión Transporte y Servicios a toda la Península",

  description:
    "Expertos en logística, paquetería y almacenamiento. Con más de 40 años de experiencia, ofrecemos soluciones confiables y eficientes en Madrid y toda la peninsula para tus necesidades de envío.",
  keywords:
    "gtservicios,gt servicios,servicio transporte mercancia,transporte mercancia,transporte de carga,transporte de mercancia en vallecas,transporte de mercancia en vallecas madrid,transporte de mercancia madrid,transporte de paqueteria,logistica de paqueteria,logistica y transporte,transporte de mercancia en españa,transporte de mercancia a toda españa,servicio de paqueteria,gestion paqueteria, vallecas transporte",
};
<head>
  <title>
    GTServicios - Gestión Transporte y Servicios a toda la Península
  </title>

  <meta name="author" content="https://github.com/MoralesDaxz" />
  <meta name="geo.region" content="ES" />
  <meta property="og:locale" content="es_ES" />
  <meta name="geo.placename" content="Madrid, España" />
  <meta property="og:site_name" content="GTServicios" />
  <meta property="og:title" content="GTServicios" />
  <meta property="og:type" content="website" />
  <meta name="copyright" content="© 2024 GTServicios" />

  <meta property="og:url" content="https://www.gtservicios.es" />
  <meta
    property="og:description"
    content="Expertos en logística, paquetería y almacenamiento. Con más de 40 años de experiencia, ofrecemos soluciones confiables y eficientes en Madrid y toda la peninsula para tus necesidades de envío."
  />
  <meta property="og:image" content="https://i.ibb.co/ZTCLzxZ/gts.png" />
  <meta property="og:image:alt" content="Transporte_paqueteria" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="https://www.gtservicios.es" />
  <meta property="twitter:url" content="https://www.gtservicios.es" />
  <meta
    name="twitter:title"
    content="GTServicios - Servicio logístico y transporte"
  />
  <meta
    name="twitter:description"
    content="Expertos en logística, paquetería y almacenamiento. Con más de 40 años de experiencia, ofrecemos soluciones confiables y eficientes en Madrid y toda la peninsula para tus necesidades de envío."
  />
  <meta name="twitter:image" content="https://i.ibb.co/ZTCLzxZ/gts.png" />

  <link rel="canonical" href="https://gtservicios.es" />
  <link rel="shortlink" href="https://gtservicios.es" />
</head>;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ES">
      <body className="w-full">
        <ControlDisplayProvider>
          <DisplayNavBar />
          {children}
          <Footer />
        </ControlDisplayProvider>
      </body>
    </html>
  );
}
