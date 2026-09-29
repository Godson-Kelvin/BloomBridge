import About from "./components/About";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import TrustBar from "./components/TrustBar";
import WhatsAppFloat from "./components/WhatsAppFloat";
import WhyUs from "./components/WhyUs";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-slate-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Process />
        <WhyUs />
        <Testimonials />
        <Faqs />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
