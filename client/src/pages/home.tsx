import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import TestimonialsSection from "@/components/testimonials-section";
import AppDownloadSection from "@/components/app-download-section";
import WaitlistSection from "@/components/waitlist-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <AppDownloadSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}
