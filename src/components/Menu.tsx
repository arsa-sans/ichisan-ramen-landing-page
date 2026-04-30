import { useRef, useEffect, useState } from "react";
import { Flame, Star, UtensilsCrossed } from "lucide-react";

const menuItems = [
﻿  {
    id: 1,
    name: "Signature Ramen",
    category: "Ramen",
    price: "Rp 40.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/miso-ramen.jpg",
    badge: "",
    badgeColor: "bg-red-600",
    spicy: 0,
    tags: ["Ramen"],
  },
  {
    id: 2,
    name: "Karaage-men Ramen",
    category: "Ramen",
    price: "Rp 42.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/miso-ramen.jpg",
    badge: "",
    badgeColor: "bg-red-600",
    spicy: 0,
    tags: ["Ramen"],
  },
  {
    id: 3,
    name: "Ramen in Black",
    category: "Ramen",
    price: "Rp 42.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/miso-ramen.jpg",
    badge: "",
    badgeColor: "bg-red-600",
    spicy: 0,
    tags: ["Ramen"],
  },
  {
    id: 4,
    name: "Black Garlic Ramen",
    category: "Ramen",
    price: "Rp 41.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/miso-ramen.jpg",
    badge: "",
    badgeColor: "bg-red-600",
    spicy: 0,
    tags: ["Ramen"],
  },
  {
    id: 5,
    name: "Truffle Inako Ramen",
    category: "Ramen",
    price: "Rp 55.000",
    description: "Shio Paitan Ramen istimewa dengan Truffle Oil, telur, ayam chashu, jamur shiitake, jagung manis, Black Tobiko, dan daun bawang.",
    image: "/images/truffle-inako.jpg",
    badge: "Premium",
    badgeColor: "bg-red-600",
    spicy: 0,
    tags: ["Ramen"],
  },
  {
    id: 6,
    name: "Kimchi Ramen",
    category: "Ramen",
    price: "Rp 46.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/miso-ramen.jpg",
    badge: "",
    badgeColor: "bg-red-600",
    spicy: 1,
    tags: ["Ramen"],
  },
  {
    id: 7,
    name: "Miso Ramen",
    category: "Ramen",
    price: "Rp 42.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/miso-ramen.jpg",
    badge: "",
    badgeColor: "bg-red-600",
    spicy: 0,
    tags: ["Ramen"],
  },
  {
    id: 8,
    name: "Miso Butter Ramen",
    category: "Ramen",
    price: "Rp 46.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/miso-ramen.jpg",
    badge: "",
    badgeColor: "bg-red-600",
    spicy: 0,
    tags: ["Ramen"],
  },
  {
    id: 9,
    name: "Tan-tan Men Ramen",
    category: "Ramen",
    price: "Rp 46.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/miso-ramen.jpg",
    badge: "",
    badgeColor: "bg-red-600",
    spicy: 3,
    tags: ["Ramen"],
  },
  {
    id: 10,
    name: "Krabby Baby Ramen",
    category: "Ramen",
    price: "Rp 66.000",
    description: "Shio Paitan Ramen dengan pasta wijen, kepiting cangkang lunak, baby crab, telur, ayam chashu.",
    image: "/images/krabby-baby.jpg",
    badge: "Menu Favorit",
    badgeColor: "bg-red-600",
    spicy: 0,
    tags: ["Ramen"],
  },
  {
    id: 11,
    name: "Spicy Kara Ramen",
    category: "Ramen",
    price: "Rp 44.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/miso-ramen.jpg",
    badge: "",
    badgeColor: "bg-red-600",
    spicy: 3,
    tags: ["Ramen"],
  },
  {
    id: 12,
    name: "Spicy Miso Kara Ramen",
    category: "Ramen",
    price: "Rp 46.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/miso-ramen.jpg",
    badge: "",
    badgeColor: "bg-red-600",
    spicy: 3,
    tags: ["Ramen"],
  },
  {
    id: 13,
    name: "Devil Ramen",
    category: "Ramen",
    price: "Rp 52.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/devil-ramen.jpg",
    badge: "Super Spicy",
    badgeColor: "bg-red-600",
    spicy: 5,
    tags: ["Ramen"],
  },
  {
    id: 14,
    name: "Naked Ramen",
    category: "Dry Ramen",
    price: "Rp 38.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/miso-ramen.jpg",
    badge: "",
    badgeColor: "bg-orange-600",
    spicy: 0,
    tags: ["Dry Ramen"],
  },
  {
    id: 15,
    name: "Karaage Naked Ramen",
    category: "Dry Ramen",
    price: "Rp 43.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/miso-ramen.jpg",
    badge: "",
    badgeColor: "bg-orange-600",
    spicy: 0,
    tags: ["Dry Ramen"],
  },
  {
    id: 16,
    name: "Hot Naked Ramen",
    category: "Dry Ramen",
    price: "Rp 40.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/miso-ramen.jpg",
    badge: "",
    badgeColor: "bg-orange-600",
    spicy: 3,
    tags: ["Dry Ramen"],
  },
  {
    id: 17,
    name: "Krabby Naked Ramen",
    category: "Dry Ramen",
    price: "Rp 55.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/krabby-baby.jpg",
    badge: "",
    badgeColor: "bg-orange-600",
    spicy: 0,
    tags: ["Dry Ramen"],
  },
  {
    id: 18,
    name: "Black Garlic Naked Ramen",
    category: "Dry Ramen",
    price: "Rp 38.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/miso-ramen.jpg",
    badge: "",
    badgeColor: "bg-orange-600",
    spicy: 0,
    tags: ["Dry Ramen"],
  },
  {
    id: 19,
    name: "Beef Gyudon",
    category: "Donburi",
    price: "Rp 46.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/krabby-baby.jpg",
    badge: "",
    badgeColor: "bg-amber-600",
    spicy: 0,
    tags: ["Donburi"],
  },
  {
    id: 20,
    name: "Beef Mentai Mayo",
    category: "Donburi",
    price: "Rp 50.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/krabby-baby.jpg",
    badge: "",
    badgeColor: "bg-amber-600",
    spicy: 0,
    tags: ["Donburi"],
  },
  {
    id: 21,
    name: "Karaage Don",
    category: "Donburi",
    price: "Rp 35.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/krabby-baby.jpg",
    badge: "",
    badgeColor: "bg-amber-600",
    spicy: 0,
    tags: ["Donburi"],
  },
  {
    id: 22,
    name: "Karaage Mentai Mayo",
    category: "Donburi",
    price: "Rp 40.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/krabby-baby.jpg",
    badge: "",
    badgeColor: "bg-amber-600",
    spicy: 0,
    tags: ["Donburi"],
  },
  {
    id: 23,
    name: "Mini Chasu Don",
    category: "Donburi",
    price: "Rp 10.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/krabby-baby.jpg",
    badge: "",
    badgeColor: "bg-amber-600",
    spicy: 0,
    tags: ["Donburi"],
  },
  {
    id: 24,
    name: "Chicken Namban",
    category: "Donburi",
    price: "Rp 40.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/krabby-baby.jpg",
    badge: "",
    badgeColor: "bg-amber-600",
    spicy: 0,
    tags: ["Donburi"],
  },
  {
    id: 25,
    name: "Gyoza",
    category: "Side Dish",
    price: "Rp 38.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-blue-600",
    spicy: 0,
    tags: ["Side Dish"],
  },
  {
    id: 26,
    name: "Fried Gyoza",
    category: "Side Dish",
    price: "Rp 38.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-blue-600",
    spicy: 0,
    tags: ["Side Dish"],
  },
  {
    id: 27,
    name: "Edamame",
    category: "Side Dish",
    price: "Rp 12.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-blue-600",
    spicy: 0,
    tags: ["Side Dish"],
  },
  {
    id: 28,
    name: "Tori Karaage",
    category: "Side Dish",
    price: "Rp 30.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-blue-600",
    spicy: 0,
    tags: ["Side Dish"],
  },
  {
    id: 29,
    name: "Kimchi",
    category: "Side Dish",
    price: "Rp 16.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-blue-600",
    spicy: 1,
    tags: ["Side Dish"],
  },
  {
    id: 30,
    name: "Tamagoyaki",
    category: "Side Dish",
    price: "Rp 10.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-blue-600",
    spicy: 0,
    tags: ["Side Dish"],
  },
  {
    id: 31,
    name: "Tamago Mentaiyaki",
    category: "Side Dish",
    price: "Rp 12.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-blue-600",
    spicy: 0,
    tags: ["Side Dish"],
  },
  {
    id: 32,
    name: "Truffle Tamagoyaki",
    category: "Side Dish",
    price: "Rp 15.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-blue-600",
    spicy: 0,
    tags: ["Side Dish"],
  },
  {
    id: 33,
    name: "Dashimaki",
    category: "Side Dish",
    price: "Rp 28.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-blue-600",
    spicy: 0,
    tags: ["Side Dish"],
  },
  {
    id: 34,
    name: "Chicken Skin",
    category: "Side Dish",
    price: "Rp 28.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-blue-600",
    spicy: 0,
    tags: ["Side Dish"],
  },
  {
    id: 35,
    name: "Nori",
    category: "Side Dish",
    price: "Rp 30.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-blue-600",
    spicy: 0,
    tags: ["Side Dish"],
  },
  {
    id: 36,
    name: "Ebi Furai",
    category: "Side Dish",
    price: "Rp 30.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-blue-600",
    spicy: 0,
    tags: ["Side Dish"],
  },
  {
    id: 37,
    name: "Corn Ribs",
    category: "Side Dish",
    price: "Rp 25.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-blue-600",
    spicy: 0,
    tags: ["Side Dish"],
  },
  {
    id: 38,
    name: "French Fries",
    category: "Side Dish",
    price: "Rp 30.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-blue-600",
    spicy: 0,
    tags: ["Side Dish"],
  },
  {
    id: 39,
    name: "Truffle Fries",
    category: "Side Dish",
    price: "Rp 45.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-blue-600",
    spicy: 0,
    tags: ["Side Dish"],
  },
  {
    id: 40,
    name: "Ajitama Egg",
    category: "Extra",
    price: "Rp 6.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-zinc-600",
    spicy: 0,
    tags: ["Extra"],
  },
  {
    id: 41,
    name: "Chicken Chashu (3 slice)",
    category: "Extra",
    price: "Rp 12.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-zinc-600",
    spicy: 0,
    tags: ["Extra"],
  },
  {
    id: 42,
    name: "Mie Ramen",
    category: "Extra",
    price: "Rp 10.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-zinc-600",
    spicy: 0,
    tags: ["Extra"],
  },
  {
    id: 43,
    name: "Chicken Soup",
    category: "Extra",
    price: "Rp 12.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-zinc-600",
    spicy: 0,
    tags: ["Extra"],
  },
  {
    id: 44,
    name: "Kara Sauce",
    category: "Extra",
    price: "Rp 7.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/gyoza.jpg",
    badge: "",
    badgeColor: "bg-zinc-600",
    spicy: 1,
    tags: ["Extra"],
  },
  {
    id: 45,
    name: "Japanese Raindrop Cake",
    category: "Dessert",
    price: "Rp 10.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/raindrop-cake.jpg",
    badge: "",
    badgeColor: "bg-purple-600",
    spicy: 0,
    tags: ["Dessert"],
  },
  {
    id: 46,
    name: "Milk Pudding",
    category: "Dessert",
    price: "Rp 24.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/raindrop-cake.jpg",
    badge: "",
    badgeColor: "bg-purple-600",
    spicy: 0,
    tags: ["Dessert"],
  },
  {
    id: 47,
    name: "Ocha Refill (Hot/Iced)",
    category: "Drink",
    price: "Rp 10.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/raindrop-cake.jpg",
    badge: "",
    badgeColor: "bg-teal-600",
    spicy: 0,
    tags: ["Drink"],
  },
  {
    id: 48,
    name: "Red Queen",
    category: "Drink",
    price: "Rp 30.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/raindrop-cake.jpg",
    badge: "",
    badgeColor: "bg-teal-600",
    spicy: 0,
    tags: ["Drink"],
  },
  {
    id: 49,
    name: "Sakura Blossom",
    category: "Drink",
    price: "Rp 36.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/raindrop-cake.jpg",
    badge: "",
    badgeColor: "bg-teal-600",
    spicy: 0,
    tags: ["Drink"],
  },
  {
    id: 50,
    name: "Sunset Orange",
    category: "Drink",
    price: "Rp 36.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/raindrop-cake.jpg",
    badge: "",
    badgeColor: "bg-teal-600",
    spicy: 0,
    tags: ["Drink"],
  },
  {
    id: 51,
    name: "Lemongrass (Hot/Iced)",
    category: "Drink",
    price: "Rp 18.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/raindrop-cake.jpg",
    badge: "",
    badgeColor: "bg-teal-600",
    spicy: 0,
    tags: ["Drink"],
  },
  {
    id: 52,
    name: "Lime Juice (Hot/Iced)",
    category: "Drink",
    price: "Rp 18.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/raindrop-cake.jpg",
    badge: "",
    badgeColor: "bg-teal-600",
    spicy: 0,
    tags: ["Drink"],
  },
  {
    id: 53,
    name: "Tropicoconut",
    category: "Drink",
    price: "Rp 28.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/raindrop-cake.jpg",
    badge: "",
    badgeColor: "bg-teal-600",
    spicy: 0,
    tags: ["Drink"],
  },
  {
    id: 54,
    name: "Lychee Iced Tea",
    category: "Drink",
    price: "Rp 18.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/raindrop-cake.jpg",
    badge: "",
    badgeColor: "bg-teal-600",
    spicy: 0,
    tags: ["Drink"],
  },
  {
    id: 55,
    name: "Mineral Water",
    category: "Drink",
    price: "Rp 10.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/raindrop-cake.jpg",
    badge: "",
    badgeColor: "bg-teal-600",
    spicy: 0,
    tags: ["Drink"],
  },
  {
    id: 56,
    name: "Soft Drink (Coca Cola/Fanta)",
    category: "Drink",
    price: "Rp 18.000",
    description: "Sajian khas Ichisan Ramen yang dibuat dengan bahan berkualitas premium.",
    image: "/images/raindrop-cake.jpg",
    badge: "",
    badgeColor: "bg-teal-600",
    spicy: 0,
    tags: ["Drink"],
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

function SpicyMeter({ level }: { level: number }) {
  if (level === 0) return null;
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Flame key={i} className={`w-3.5 h-3.5 ${i <= level ? "text-red-500 fill-red-500" : "text-zinc-600"}`} />
      ))}
    </div>
  );
}

export default function Menu() {
  const { ref, inView } = useInView();
  const [activeFilter, setActiveFilter] = useState("All");
  const [displayCount, setDisplayCount] = useState(9);

  useEffect(() => {
    setDisplayCount(9);
  }, [activeFilter]);

  const categories = ["All", "Ramen", "Dry Ramen", "Donburi", "Side Dish", "Extra", "Dessert", "Drink"];
  const filtered = activeFilter === "All" ? menuItems : menuItems.filter(m => m.category === activeFilter);
  const currentItems = filtered.slice(0, displayCount);
  const hasMore = displayCount < filtered.length;

  return (
    <section id="menu" ref={ref} className="py-20 md:py-28 bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-900/20 border border-red-500/20 mb-6">
            <UtensilsCrossed className="w-4 h-4 text-red-500" />
            <span className="text-red-500 text-sm font-semibold tracking-wider uppercase">Menu Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Menu{" "}
            <span className="text-red-500">Lengkap</span>{" "}
            & Favorit
          </h2>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
            Dari Krabby Baby yang legendaris hingga Truffle Inako yang premium — temukan setiap mangkuk karya seni kuliner Jepang di sini.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-red-600 text-white shadow-lg shadow-red-900/20"
                  : "bg-zinc-800 text-zinc-300 hover:bg-red-900/30 hover:text-red-400 border border-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {currentItems.map((item, idx) => (
            <div
              key={item.id}
              className={`group bg-zinc-800 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-black/40 border border-zinc-700 transition-all duration-500 hover:-translate-y-2 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 bg-zinc-800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Badge */}
                {item.badge && (
                  <div className={`absolute top-4 left-4 ${item.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5`}>
                    {item.badge === "Premium" && <Star className="w-3.5 h-3.5 fill-current" />}
                    {item.badge === "Menu Favorit" && <Flame className="w-3.5 h-3.5 fill-current" />}
                    {item.badge === "Super Spicy" && <Flame className="w-3.5 h-3.5 fill-current" />}
                    {item.badge}
                  </div>
                )}

                {/* Category */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  {item.category}
                </div>

                {/* Price overlay */}
                <div className="absolute bottom-4 right-4 bg-zinc-900 text-white font-black text-sm px-3 py-1.5 rounded-xl shadow-lg border border-zinc-700">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-black text-white text-lg leading-tight group-hover:text-red-400 transition-colors">
                    {item.name}
                  </h3>
                  <SpicyMeter level={item.spicy} />
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-zinc-900 text-zinc-400 text-xs rounded-full font-medium border border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setDisplayCount(prev => prev + 9)}
              className="group px-8 py-3.5 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-full border border-zinc-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Muat Lebih Banyak
              <span className="group-hover:translate-y-1 transition-transform duration-300">↓</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
