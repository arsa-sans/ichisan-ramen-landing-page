import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-900 overflow-x-hidden">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. About */}
        <About />

        {/* 3. Menu Highlight */}
        <Menu />

        {/* 4. Services + Facilities + Hours */}
        <Services />

        {/* 5. Testimonials */}
        <Testimonials />

        {/* 6. Contact + Location */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
