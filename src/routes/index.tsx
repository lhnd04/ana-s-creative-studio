import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Portfolio from "@/components/site/Portfolio";
import VideoResult from "@/components/site/VideoResult";
import InstagramSection from "@/components/site/InstagramSection";
import SalonCTA from "@/components/site/SalonCTA";
import Footer from "@/components/site/Footer";
import WhatsappFloatingButton from "@/components/site/WhatsappFloatingButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ana Prado Make Up | Maquiagem profissional" },
      {
        name: "description",
        content:
          "Maquiagem profissional em Santo Ângelo com Ana Prado: técnica, produtos testados e atenção a cada detalhe.",
      },
      { property: "og:title", content: "Ana Prado Make Up | Maquiagem profissional" },
      {
        property: "og:description",
        content:
          "Maquiagem profissional em Santo Ângelo com Ana Prado: técnica, produtos testados e atenção a cada detalhe.",
      },
      { property: "og:image", content: "/images/hero.jpg" },
      { property: "og:locale", content: "pt_BR" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <VideoResult />
        <InstagramSection />
        <SalonCTA />
      </main>
      <Footer />
      <WhatsappFloatingButton />
    </>
  );
}
