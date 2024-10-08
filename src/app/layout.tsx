import "./globals.css";
import type { Metadata } from "next";
import { ControlDisplayProvider } from "../context/ControlDisplay";
import DisplayNavBar from "@/components/nav/DisplayNavBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

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
        </ControlDisplayProvider>
      </body>
    </html>
  );
}
