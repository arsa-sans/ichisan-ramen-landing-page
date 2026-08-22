import { useRef, useEffect, useState } from "react";
import { ShieldCheck, TrendingUp, Coins, Flame, UtensilsCrossed, Star } from "lucide-react";

const highlights = [
  { icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />, title: "Halal Certified", desc: "No pork, no lard, no alcohol" },
  { icon: <TrendingUp className="w-8 h-8 text-blue-500" />, title: "Viral di Jakarta", desc: "Rekomendasi Chef Willgoz" },
  { icon: <Coins className="w-8 h-8 text-amber-500" />, title: "Harga Terjangkau", desc: "Mulai dari Rp 10.000" },
  { icon: <Flame className="w-8 h-8 text-red-500" />, title: "Authentic Japanese", desc: "Resep autentik Jepang" },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className="py-20 md:py-28 bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className={`relative transition-all duration-1000 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}>
            <div className="relative">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-black/15">
                <img
                  src="/images/restaurant-interior.jpg"
                  alt="Ichisan Ramen Interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute -top-5 -left-5 bg-red-600 text-white rounded-2xl px-5 py-3 shadow-xl shadow-red-200">
                <div className="text-2xl font-black">Since</div>
                <div className="text-3xl font-black leading-none">2021</div>
              </div>

              {/* Floating badge bottom-right */}
              <div className="absolute -bottom-5 -right-5 bg-zinc-800 rounded-2xl px-5 py-4 shadow-2xl border border-zinc-700">
                <div className="flex items-center gap-3">
                  <div className="bg-zinc-900 p-2 rounded-xl border border-zinc-700">
                    <UtensilsCrossed className="w-8 h-8 text-red-500" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-400 font-medium">Rating</div>
                    <div className="text-xl font-black text-white">4.8 / 5</div>
                    <div className="flex gap-0.5 text-yellow-400 mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 -top-8 -right-8 w-48 h-48 rounded-full bg-red-900/10" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 rounded-full bg-amber-900/10" />
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-zinc-300 text-sm font-semibold tracking-wider uppercase">Tentang Kami</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Ramen Halal{" "}
              <span className="text-red-600">Terbaik</span>{" "}
              di Jakarta Barat
            </h2>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-6">
              Dimulai Oktober 2021, <strong>Ichisan Ramen Taman Ratu</strong> hadir sebagai destinasi ramen halal premium di Jakarta Barat. Kami menghadirkan cita rasa autentik Jepang dengan bahan berkualitas tinggi — bebas babi, lemak babi, dan alkohol.
            </p>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-8">
              Dengan suasana yang cozy, nyaman, dan aesthetic, Ichisan cocok untuk segala momen — mulai dari makan siang santai, dinner romantis, hingga kumpul seru bersama keluarga dan teman. Tempat favorit mahasiswa, keluarga, wisatawan, hingga komunitas kuliner Jakarta!
            </p>

            {/* Highlight Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-800/50 hover:bg-zinc-800 border border-transparent hover:border-zinc-700 transition-all duration-300 group"
                >
                  <div className="bg-zinc-900 p-2 rounded-xl border border-zinc-800 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm group-hover:text-red-400 transition-colors">{item.title}</div>
                    <div className="text-zinc-400 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
