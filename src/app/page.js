import AppointmentCTA from "@/components/AppointmentCTA";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import StorySection from "@/components/StorySection";
import WhoWeHelp from "@/components/WhoWeHelp";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <WhoWeHelp />
      <StorySection />
      <Expertise />
      <Specialties />
      <AppointmentCTA />
      <Footer />
    </main>
  )
}
