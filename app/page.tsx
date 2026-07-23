import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Welcome } from "@/components/Welcome";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Welcome />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
