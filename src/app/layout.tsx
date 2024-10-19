import "./globals.css";
import type { Metadata } from "next";
import { ControlDisplayProvider } from "../context/ControlDisplay";
import DisplayNavBar from "@/components/nav/DisplayNavBar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "Gestión Transporte y Servicios a toda la Península",
  description:
    "Expertos en transporte y logística, con más de 40 años en el mercado, ofrecemos soluciones eficientes y confiables para tus necesidades de envío. Logística precisa, envíos eficientes.",
  keywords:
    "gtservicios,gtservicios,gt servicios,servicio transporte mercancia,transporte mercancia,transporte de carga,transporte de mercancia en vallecas,transporte de mercancia en vallecas madrid,transporte de mercancia madrid,transporte de paqueteria,logistica de paqueteria,logistica y transporte,transporte de mercancia en españa,transporte de mercancia a toda españa,servicio de paqueteria,gestion paqueteria, vallecas transporte",
};
<head>
  <title>
    GTServicios - Gestión Transporte y Servicios a toda la Península
  </title>

  <meta name="author" content="https://github.com/MoralesDaxz" />
  <meta name="copyright" content="© 2024 GTServicios" />
  <meta name="geo.region" content="ES" />
  <meta name="geo.placename" content="Madrid, España" />
  <meta property="og:locale" content="es_ES" />
  <meta property="og:site_name" content="GTServicios" />
  <meta property="og:title" content="GTServicios" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.gtservicios.es" />
  <meta
    property="og:description"
    content="Expertos en transporte y logística, con más de 40 años en el mercado, ofrecemos soluciones eficientes y confiables para tus necesidades de envío. Logística precisa, envíos eficientes."
  />
  <link rel="canonical" href="https://gtservicios.es" />
  <link rel="shortlink" href="https://gtservicios.es" />

  <meta property="og:url" content="https://gtservicios.es" />
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Gestión Transporte y Servicios a toda la Península"
  />
  <meta
    property="og:description"
    content="Expertos en transporte y logística, con más de 40 años en el mercado, ofrecemos soluciones eficientes y confiables para tus necesidades de envío. Logística precisa, envíos eficientes."
  />
  <meta property="og:image" content="https://i.ibb.co/dcdVcDT/gts.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="https://gtservicios.es" />
  <meta property="twitter:url" content="https://gtservicios.es" />
  <meta
    name="twitter:title"
    content="Gestión Transporte y Servicios a toda la Península"
  />
  <meta
    name="twitter:description"
    content="Expertos en transporte y logística, con más de 40 años en el mercado, ofrecemos soluciones eficientes y confiables para tus necesidades de envío. Logística precisa, envíos eficientes."
  />
  <meta property="og:image" content="https://i.ibb.co/dcdVcDT/gts.png" />
</head>;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ES">
      <head></head>
      <body>
        <ControlDisplayProvider>
          <DisplayNavBar />
          {children}
          <Footer />
        </ControlDisplayProvider>
      </body>
    </html>
  );
}
