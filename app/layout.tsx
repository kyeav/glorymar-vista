import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import ClientOnly from "./components/ClientOnly";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GloryMar Vista Resort",
  description:
    "Affordable beach resort located @ Pagkilatan Batangas City, where you can see the marvellous sunset",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ClientOnly>
            <Navbar />
          </ClientOnly>
          {children}
        </Providers>
      </body>
    </html>
  );
}
