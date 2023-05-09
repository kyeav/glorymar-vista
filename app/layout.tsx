import { Inter } from "next/font/google";

import Navbar from "./components/navbar/Navbar";

import "./globals.css";
import { Providers } from "./providers";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
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
            <LoginModal />
            <RegisterModal />
            <Navbar currentUser={currentUser} />
          </ClientOnly>
          {children}
        </Providers>
      </body>
    </html>
  );
}
