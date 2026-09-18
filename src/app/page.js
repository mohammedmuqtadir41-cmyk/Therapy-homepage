import AppointmentCTA from "@/components/AppointmentCTA";
import ContactSection from "@/components/ContactSection";
import Expertise from "@/components/Expertise";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HonoringStory from "@/components/HonoringStory";
import HowWeWork from "@/components/HowWeWork";
import IntroSection from "@/components/IntroSection";
import OurOffice from "@/components/OurOffice";
import Specialties from "@/components/Specialties";
import StorySection from "@/components/StorySection";
import WhoWeHelp from "@/components/WhoWeHelp";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <IntroSection />
      <WhoWeHelp />
      <StorySection />
      {/* <Expertise /> */}
      <HowWeWork />
      <HonoringStory />
      <OurOffice />
      <Specialties />
      <FAQSection />
      <AppointmentCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}