import ClientOnly from "./components/ClientOnly";
import AboutUs from "./components/aboutUs/aboutUs";
import Hero from "./components/hero/Hero";

export default function Home() {
  return (
    <ClientOnly>
      <Hero />
      <AboutUs />
    </ClientOnly>
  );
}
