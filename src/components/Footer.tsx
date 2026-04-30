import { MapPin, Phone, Star, Flame, UtensilsCrossed, CakeSlice, Soup } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img 
                src="/images/logo-ramen.jpg" 
                alt="Ichisan Ramen Logo" 
                className="w-12 h-12 rounded-full object-cover shadow-lg"
              />
              <div>
                <div className="text-white font-black text-lg tracking-tight">ICHISAN</div>
                <div className="text-red-500 text-xs font-semibold tracking-widest">RAMEN</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-5">
              Authentic Japanese Ramen Halal di jantung Jakarta Barat. Cita rasa premium, suasana cozy, harga terjangkau.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/ichisan.ramen/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://wa.me/6289529897816"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-green-600 flex items-center justify-center transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://www.google.com/maps/place/Ichisan+Ramen+Taman+Ratu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group"
                aria-label="Google Maps"
              >
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Navigasi</h4>
            <ul className="space-y-3">
              {[
                { label: "Beranda", href: "#hero" },
                { label: "Tentang Kami", href: "#about" },
                { label: "Menu", href: "#menu" },
                { label: "Layanan", href: "#services" },
                { label: "Testimoni", href: "#testimonials" },
                { label: "Lokasi & Kontak", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-500 hover:text-red-400 text-sm transition-colors duration-200 hover:translate-x-1 transform inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-red-500 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Menu Populer</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-default"><Soup className="w-4 h-4 text-orange-400" /> Krabby Baby Ramen</li>
              <li className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-default"><UtensilsCrossed className="w-4 h-4 text-amber-500" /> Truffle Inako Ramen</li>
              <li className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-default"><Flame className="w-4 h-4 text-red-500" /> Devil Ramen</li>
              <li className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-default"><Flame className="w-4 h-4 text-orange-500" /> Spicy Miso Kara</li>
              <li className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-default"><UtensilsCrossed className="w-4 h-4 text-yellow-500" /> Fried Gyoza</li>
              <li className="flex items-center gap-2 hover:text-gray-300 transition-colors cursor-default"><CakeSlice className="w-4 h-4 text-pink-400" /> Japanese Raindrop Cake</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm mb-5 tracking-wide">Informasi Kontak</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">Jl. Ratu Kemuning No.11-20 Blok D, RT.9/RW.13, Duri Kepa, Kebon Jeruk, Jakarta Barat 11510</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                <a href="tel:089529897816" className="hover:text-red-400 transition-colors">0895-2989-7816</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <a href="https://www.instagram.com/ichisan.ramen/" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">@ichisan.ramen</a>
              </div>
              <div className="mt-4 p-3 bg-gray-900 rounded-xl border border-gray-800">
                <div className="text-xs text-gray-600 mb-1">Rating</div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <span className="text-white font-bold text-sm">4.8</span>
                  <span className="text-gray-600 text-xs">/ 5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {year} Ichisan Ramen Taman Ratu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
