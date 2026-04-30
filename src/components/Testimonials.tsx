import { useRef, useEffect, useState } from "react";
import { MessageSquare, ThumbsUp } from "lucide-react";

const testimonials = [
  {
    name: "Ashjelica",
    date: "Maret 2024",
    rating: 5,
    avatar: "A",
    avatarColor: "from-pink-500 to-rose-600",
    text: "Beneran di borong semua sama Ichisan Ramen 😍 Affordable, menunya unik, beda dari tempat ramen pada umumnya, tempatnya cozy & aesthetic udah gitu porsinya bener-bener buanyak! Yang Truffle Inako Ramen itu best seller banget — rasanya susah dideskripsiin tapi nagih parah!",
    highlight: "Truffle Inako Ramen",
    source: "Google Maps",
  },
  {
    name: "Erny Cenn",
    date: "Februari 2024",
    rating: 5,
    avatar: "E",
    avatarColor: "from-violet-500 to-purple-600",
    text: "Ramen murah dan ENAK!! Rekomendasi Chef Willgoz yang gak pernah bohong 🍜 Menu favorite kalo ke Ichisan: Devil Ramen, Krabby Baby Ramen, dan Truffle Ramen. Enaknya ada levelnya 1-5, toppingnya juga banyak banget. Wajib banget kalian cobain!",
    highlight: "Krabby Baby Ramen",
    source: "Google Maps",
  },
  {
    name: "Vani Hardian",
    date: "Januari 2024",
    rating: 5,
    avatar: "V",
    avatarColor: "from-emerald-500 to-teal-600",
    text: "Tempatnya cozy, luas, banyak spot foto ala jejepangan dan yang pastinya ramennya enak dan murah. Pelayanannya pun ramah dan cekatan. Cocok banget buat \"Ramen Date\" 💕 Ada 2 lantai, outdoor seating yang aesthetic banget. Recommended parah!",
    highlight: "Suasana & Pelayanan",
    source: "Google Maps",
  },
  {
    name: "FujiTamb",
    date: "Desember 2023",
    rating: 5,
    avatar: "F",
    avatarColor: "from-orange-500 to-amber-600",
    text: "Kuahnya ngga terlalu thick tapi pas, dan rasa gurihnya ngga bikin eneg. Tersedia level kepedasan, jadi bisa disesuaikan selera. Selalu rame tiap datang ke sini tapi worth it banget nunggunya. Rating 5/5 untuk semua ramen yang pernah aku coba!",
    highlight: "Kuah Ramen",
    source: "Google Maps",
  },
  {
    name: "Elizabeth Grace",
    date: "November 2023",
    rating: 5,
    avatar: "E",
    avatarColor: "from-blue-500 to-cyan-600",
    text: "Vibes Jepangnya berasa banget!! Open kitchen juga jadi kita bisa lihat prosesnya langsung. Tempatnya super aesthetic dengan desain yang cozy dan unik. Menu-nya lengkap dan variatif — ada Krabby Baby, Truffle, Ebi Furai, Gyoza, sampai dessert Japanese Rain Drop dan Milk Pudding. Keren abis!",
    highlight: "Atmosphere & Menu",
    source: "Google Maps",
  },
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

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className={`w-4 h-4 ${i <= count ? "text-yellow-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref, inView } = useInView();
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((p) => (p + 1) % testimonials.length);
  };

  const getIdx = (offset: number) => (current + offset + testimonials.length) % testimonials.length;

  return (
    <section id="testimonials" ref={ref} className="py-20 md:py-28 bg-zinc-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 mb-6">
            <MessageSquare className="w-4 h-4 text-red-500" />
            <span className="text-zinc-300 text-sm font-semibold tracking-wider uppercase">Testimoni</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Apa Kata{" "}
            <span className="text-red-600">Pelanggan</span>{" "}
            Kami?
          </h2>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
            Ribuan pelanggan telah merasakan kelezatan Ichisan Ramen. Ini kisah mereka.
          </p>

          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-3xl font-black text-white">4.8</span>
            <span className="text-zinc-400">/ 5.0 · 1000+ Ulasan</span>
          </div>
        </div>

        {/* Carousel */}
        <div className={`relative transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Prev card (hidden on mobile) */}
            <div
              className="hidden md:block opacity-50 scale-95 transition-all duration-500 cursor-pointer"
              onClick={prev}
            >
              <TestimonialCard item={testimonials[getIdx(-1)]} />
            </div>

            {/* Active card */}
            <div className="scale-100 md:scale-105 z-10 transition-all duration-500">
              <TestimonialCard item={testimonials[current]} active />
            </div>

            {/* Next card (hidden on mobile) */}
            <div
              className="hidden md:block opacity-50 scale-95 transition-all duration-500 cursor-pointer"
              onClick={next}
            >
              <TestimonialCard item={testimonials[getIdx(1)]} />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border-2 border-zinc-700 hover:border-red-500 hover:bg-red-500 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2.5 bg-red-600"
                      : "w-2.5 h-2.5 bg-zinc-700 hover:bg-zinc-500"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full border-2 border-zinc-700 hover:border-red-500 hover:bg-red-500 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Google Maps CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href="https://www.google.com/maps/place/Ichisan+Ramen+Taman+Ratu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-red-500 transition-colors text-sm font-medium group"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Baca semua ulasan di Google Maps
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ item, active = false }: { item: typeof testimonials[0]; active?: boolean }) {
  return (
    <div className={`bg-zinc-800 rounded-3xl p-6 shadow-lg border transition-all duration-500 h-full flex flex-col ${active ? "border-red-900/50 shadow-2xl shadow-red-900/20" : "border-zinc-700"}`}>
      {/* Quote icon */}
      <div className="text-5xl text-red-100 font-serif leading-none mb-4">&quot;</div>

      {/* Review text */}
      <p className="text-zinc-300 text-sm leading-relaxed mb-5 flex-1">{item.text}</p>

      {/* Highlight tag */}
      <div className="inline-flex self-start mb-4">
        <span className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 text-red-500 text-xs font-semibold rounded-full border border-zinc-700">
          <ThumbsUp className="w-3.5 h-3.5" /> {item.highlight}
        </span>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.avatarColor} flex items-center justify-center text-white font-bold text-sm`}>
              {item.avatar}
            </div>
            <div>
              <div className="font-bold text-white text-sm">{item.name}</div>
              <div className="text-zinc-500 text-xs">{item.date}</div>
            </div>
          </div>
          <div className="text-right">
            <StarRating count={item.rating} />
            <div className="text-zinc-500 text-xs mt-1">{item.source}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
