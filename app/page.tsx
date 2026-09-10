import Header from "../components/layout/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import VisionMission from "../components/VisionMission";
import LeadershipSection from "../components/LeadershipSection";
import MinistriesSection from "../components/MinistriesSection";
import EventsSection from "../components/EventsSection";
import GallerySection from "../components/GallerySection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <VisionMission />
        <AboutSection />
        
        <LeadershipSection />
        <MinistriesSection />
        <EventsSection />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}