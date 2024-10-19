import "./globals.css";
import type { Metadata } from "next";
import { ControlDisplayProvider } from "../context/ControlDisplay";
import DisplayNavBar from "@/components/nav/DisplayNavBar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "GTServicios - Gestión Transporte y Servicios a toda la Península",
  description:
    "Expertos en transporte y logística, con mas de 40 años en el mercado ofrecemos soluciones eficientes y confiables para tus necesidades de envío. Logística precisa, envíos eficientes.",
  keywords:
    "gtservicios,gtservicios,gt servicios,servicio transporte mercancia,transporte mercancia,transporte de carga,transporte de mercancia en vallecas,transporte de mercancia en vallecas madrid,transporte de mercancia madrid,transporte de paqueteria,logistica de paqueteria,logistica y transporte,transporte de mercancia en españa,transporte de mercancia a toda españa,servicio de paqueteria,gestion paqueteria",
};
<head>
  <meta name="author" content="https://github.com/MoralesDaxz" />
  <meta name="copyright" content="© 2024 GTServicios" />
  <meta name="geo.region" content="ES" />
  <meta name="geo.placename" content="Madrid, España" />
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
