import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import Hero from "./components/hero/Hero";
import RentModal from "./components/modals/RentModal";

import { Providers } from "./providers";
import ToasterProvider from "./providers/ToasterProvider";
import getCurrentUser from "./actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GloryMar Vista Resort",
  description:
    "Affordable beach resort located @ Pagkilatan Batangas City, where you can see the marvellous sunset",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ClientOnly>
            <ToasterProvider />
            <RentModal />
            <LoginModal />
            <RegisterModal />
            <Navbar currentUser={currentUser} />
            <Hero />
          </ClientOnly>
          {children}
        </Providers>
      </body>
    </html>
  );
}
