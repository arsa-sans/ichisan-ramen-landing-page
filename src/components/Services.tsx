import { useRef, useEffect, useState } from "react";
import { Utensils, ShoppingBag, Bike, Package, TreePine, CakeSlice, Coffee, Zap, Moon, Wifi, Baby, Sparkles, Armchair, Wind, Camera, Sun, CloudSun, Star, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: <Utensils className="w-7 h-7 text-white" />,
    title: "Makan di Tempat",
    desc: "Nikmati ramen segar dalam suasana restoran yang cozy dan aesthetic. Indoor & outdoor tersedia.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: <ShoppingBag className="w-7 h-7 text-white" />,
    title: "Bawa Pulang",
    desc: "Pesan dan bawa pulang ramen favoritmu. Dikemas dengan rapi agar tetap lezat.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: <Bike className="w-7 h-7 text-white" />,
    title: "Pesan Antar",
    desc: "Pesan via GrabFood, GoFood, atau ShopeeFood. Diantar langsung ke pintu rumahmu.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: <Package className="w-7 h-7 text-white" />,
    title: "Contactless Delivery",
    desc: "Layanan antar tanpa kontak langsung. Aman, higienis, dan tetap lezat sampai tujuan.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: <TreePine className="w-7 h-7 text-white" />,
    title: "Outdoor Seating",
    desc: "Area makan outdoor semi-terbuka dengan nuansa alam. Sempurna untuk makan malam yang romantis.",
    color: "from-teal-500 to-teal-600",
  },
];

const advantages = [
  { icon: <CakeSlice className="w-8 h-8 text-red-500" />, title: "Dessert Istimewa", desc: "Japanese Raindrop Cake & Milk Pudding yang memanjakan lidah" },
  { icon: <Coffee className="w-8 h-8 text-amber-500" />, title: "Pilihan Teh Beragam", desc: "Berbagai varian teh Jepang autentik untuk melengkapi makan" },
  { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "Cepat Saji", desc: "Waktu tunggu singkat tanpa mengorbankan kualitas dan cita rasa" },
  { icon: <Moon className="w-8 h-8 text-indigo-500" />, title: "Buka Larut Malam", desc: "Tetap bisa makan ramen enak bahkan hingga malam hari" },
];

const facilities = [
  { icon: <Wifi className="w-8 h-8 text-blue-400" />, label: "Wi-Fi Gratis" },
  { icon: <Baby className="w-8 h-8 text-pink-400" />, label: "Kids Friendly" },
  { icon: <Sparkles className="w-8 h-8 text-purple-400" />, label: "Area Bersih" },
  { icon: <Armchair className="w-8 h-8 text-orange-400" />, label: "Tempat Duduk Nyaman" },
  { icon: <Wind className="w-8 h-8 text-teal-400" />, label: "AC & Area Outdoor" },
  { icon: <Camera className="w-8 h-8 text-rose-400" />, label: "Spot Foto Aesthetic" },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Services() {
  const { ref, inView } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

  return (
    <>
      {/* Services Section */}
      <section id="services" ref={ref} className="py-20 md:py-28 bg-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 mb-6">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span className="text-zinc-300 text-sm font-semibold tracking-wider uppercase">Layanan Kami</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              Layanan{" "}
              <span className="text-red-600">Lengkap</span>{" "}
              untuk Kamu
            </h2>
            <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
              Dari makan di tempat hingga delivery ke rumah — kami siap melayani kebutuhanmu.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {services.map((svc, idx) => (
              <div
                key={svc.title}
                className={`group p-6 rounded-3xl bg-zinc-800 border border-zinc-700 hover:border-zinc-500 hover:shadow-xl hover:shadow-black/50 transition-all duration-500 hover:-translate-y-2 ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {svc.icon}
                </div>
                <h3 className="font-bold text-white mb-2 text-base">{svc.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          {/* Advantages + Facilities */}
          <div className="mt-20 grid lg:grid-cols-2 gap-10">
            {/* Advantages */}
            <div>
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-red-600 rounded-full" />
                Keunggulan Kami
              </h3>
              <div className="space-y-4">
                {advantages.map((adv, idx) => (
                  <div
                    key={adv.title}
                    className={`flex items-start gap-4 p-5 bg-zinc-800/50 rounded-2xl hover:bg-zinc-800 border border-transparent hover:border-zinc-700 transition-all duration-300 ${
                      inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                    }`}
                    style={{ transitionDelay: `${300 + idx * 80}ms` }}
                  >
                    <div className="flex-shrink-0 bg-zinc-900 p-3 rounded-2xl border border-zinc-800">{adv.icon}</div>
                    <div>
                      <div className="font-bold text-white text-lg">{adv.title}</div>
                      <div className="text-zinc-400 text-sm mt-1">{adv.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div>
              <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-red-600 rounded-full" />
                Fasilitas
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {facilities.map((fac, idx) => (
                  <div
                    key={fac.label}
                    className={`flex flex-col items-center justify-center gap-3 p-6 bg-zinc-800/50 rounded-2xl text-center hover:bg-zinc-800 border border-transparent hover:border-zinc-700 transition-all duration-300 cursor-default ${
                      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${300 + idx * 60}ms` }}
                  >
                    <div className="bg-zinc-900 p-3 rounded-2xl border border-zinc-800">{fac.icon}</div>
                    <span className="text-zinc-300 font-semibold text-sm">{fac.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting Hours Section */}
      <section ref={ref2} className="py-16 bg-gradient-to-br from-zinc-900 to-zinc-950 overflow-hidden border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Jam & Waktu{" "}
              <span className="text-red-500">Kunjungan</span>
            </h2>
            <p className="text-zinc-400 text-base">Kami siap menyajikan yang terbaik untuk Anda setiap saat</p>
          </div>

          <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-700 delay-200 ${inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[
              { icon: <Sun className="w-8 h-8 text-amber-400" />, title: "Brunch", time: "Pagi - Siang", desc: "Nikmati ramen di pagi yang santai" },
              { icon: <CloudSun className="w-8 h-8 text-orange-400" />, title: "Makan Siang", time: "11:00 – 15:00", desc: "Menu lengkap tersedia setiap hari" },
              { icon: <Moon className="w-8 h-8 text-indigo-400" />, title: "Makan Malam", time: "17:00 – 22:00", desc: "Suasana malam yang cozy dan hangat" },
              { icon: <Star className="w-8 h-8 text-yellow-400" />, title: "Reservasi", time: "Disarankan", desc: "Booking meja agar tidak antri panjang" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700 hover:bg-zinc-800 hover:border-red-500/30 transition-all duration-300 text-center group"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="bg-zinc-900 p-3 rounded-2xl border border-zinc-800">
                    {item.icon}
                  </div>
                </div>
                <div className="text-white font-bold text-lg">{item.title}</div>
                <div className="text-red-400 font-semibold text-sm mt-1">{item.time}</div>
                <div className="text-zinc-400 text-sm mt-2 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Warning Note */}
          <div className={`mt-10 flex justify-center transition-all duration-700 delay-400 ${inView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl max-w-2xl text-left sm:text-center">
              <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
              <span className="text-amber-300 text-sm font-medium">Biasanya ramai terutama weekend & jam makan malam — Reservasi sangat disarankan!</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
