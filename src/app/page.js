import AboutSection from "@/components/AboutSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import AmenitiesSection from "@/components/WhatWeOffer";
import PlayerSection from "@/components/WhoAreOurPlayers";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <HeroSection/>
    <AboutSection/>
     {/* Who Are Our Players Section */}
     <PlayerSection />
      
      {/* Amenities Section */}
      <AmenitiesSection />

      {/* Pricing Section */}
      <PricingSection />

      <ContactFormSection/>

      {/* Footer Section */}
      <Footer />
  </div>
  );
}
