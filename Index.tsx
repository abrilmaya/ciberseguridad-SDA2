import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialMediaTips from "@/components/SocialMediaTips";
import PasswordSection from "@/components/PasswordSection";
import HelpSection from "@/components/HelpSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SocialMediaTips />
      <PasswordSection />
      <HelpSection />
      <Footer />
    </main>
  );
};

export default Index;
