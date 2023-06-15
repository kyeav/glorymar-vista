import ClientOnly from "./components/ClientOnly";
import AboutUs from "./components/aboutUs/AboutUs";
import Hero from "./components/hero/Hero";
import OurRooms from "./components/ourRooms/OurRooms";

export default function Home() {
  return (
    <ClientOnly>
      <Hero />
      <AboutUs />
      <OurRooms />
    </ClientOnly>
  );
}
