import { useEffect, useState } from "react";
import { UtensilsCrossed, CalendarCheck } from "lucide-react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-ramen.jpg"
          alt="Ichisan Ramen"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-24 right-8 md:right-16 w-24 h-24 md:w-40 md:h-40 border border-white/10 rounded-full animate-pulse" />
      <div className="absolute top-32 right-12 md:right-24 w-12 h-12 md:w-20 md:h-20 border border-red-500/20 rounded-full" />
      <div className="absolute bottom-32 left-8 md:left-16 w-16 h-16 md:w-28 md:h-28 border border-white/10 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Japanese text decorative */}
      <div className="absolute right-6 top-1/3 hidden lg:flex flex-col gap-3 text-white/15 text-sm font-serif" style={{ writingMode: "vertical-rl" }}>
        一 品 三 昧 の 旨 み
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-600/20 border border-red-500/40 backdrop-blur-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
          <span className="text-red-300 text-sm font-medium tracking-wider">Halal · Jakarta Barat</span>
        </div> */}

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 mt-20 tracking-tight">
          Authentic Japanese{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
            Ramen Experience
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">in Jakarta</span>
        </h1>

        {/* Japanese Subtitle */}
        <p className="text-white/50 font-serif text-lg md:text-xl mb-4 tracking-widest">
          一 品 · 最 高 · 本 格
        </p>

        {/* Description */}
        <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Rasakan kelezatan ramen autentik Jepang dengan cita rasa premium.
          Halal, terjangkau, dan bikin nagih — di jantung Jakarta Barat.
        </p>

        {/* Stats */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 mb-10">
          {[
            { value: "4.8★", label: "Rating Google" },
            { value: "1000+", label: "Review Positif" },
            { value: "15+", label: "Menu Pilihan" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-white/50 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScroll("#menu")}
            className="group w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-bold text-base transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/40 hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <UtensilsCrossed className="w-5 h-5" />
            Lihat Menu
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            onClick={() => handleScroll("#contact")}
            className="group w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white rounded-2xl font-bold text-base transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <CalendarCheck className="w-5 h-5" />
            Reservasi Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}
