import About from "@/components/about-us";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Faq from "@/components/faq";
import Services from "@/components/service";
import PricingSection from "@/components/pricing";
import FooterSection from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center max-w-5xl mx-auto text-lg">
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Services />
      <Faq />
      <PricingSection />
      <FooterSection />
    </div>
  );
}
