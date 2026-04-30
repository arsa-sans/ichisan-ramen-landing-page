import { useState, useEffect } from "react";

const navLinks = [
  { label: "Beranda", href: "#hero" },
  { label: "Tentang", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Layanan", href: "#services" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Lokasi", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-zinc-900/95 border-b border-zinc-800 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-3 group"
          >
            <img 
              src="/images/logo-ramen.jpg" 
              alt="Ichisan Ramen Logo" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="leading-tight">
              <div className={`font-bold text-base md:text-lg tracking-tight transition-colors duration-300 ${scrolled ? "text-white" : "text-white"}`}>
                ICHISAN
              </div>
              <div className={`text-xs font-medium tracking-widest transition-colors duration-300 ${scrolled ? "text-red-600" : "text-red-300"}`}>
                RAMEN
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:text-red-500 ${
                  scrolled
                    ? "text-zinc-300 hover:bg-zinc-800"
                    : "text-white/90 hover:bg-white/10"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5"
            >
              Reservasi Sekarang
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-white" : "text-white"}`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-zinc-900/95 backdrop-blur-md border-t border-zinc-800 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left px-4 py-3 rounded-xl text-zinc-300 font-medium hover:bg-zinc-800 hover:text-red-500 transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick("#contact")}
              className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition-colors duration-300"
            >
              Reservasi Sekarang
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
